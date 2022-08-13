import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';

const reach = loadStdlib('ALGO');

reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', WalletConnect
  }));

const fortuneToInt = { 'You will be rich and famous': 0, 'You will be a Billionaire': 1, 'You will be a Millionaire': 2 };	
const decisionToInt = {'Alice rejected the Fortune': 0, 'Alice accepted the Fortune': 1};
const decisionIntToOutcome = ['Alice rejected the Fortune', 'Alice accepted the Fortune'];
const fortuneIntToOutcome = ['You will be rich and famous', 'You will be a Billionaire', 'You will be a Millionaire']
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultFortunePrice: '10', standardUnit}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {view: 'ConnectAccount', ...defaults};
    }
    async componentDidMount() {
        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({acc, bal});
        if (await reach.canFundFromFaucet()) {
            this.setState({view: 'FundAccount'});
        } else {
            this.setState({view: 'DeployerOrAttacher'});
        }
    }
    async fundAccount(fundAmount) {
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({view: 'DeployerOrAttacher'});
    }
    async skipFundAccount() { this.setState({view: 'DeployerOrAttacher' }) }
    selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
    selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
    render() {return renderView(this, AppViews);}
}

class Player extends React.Component {
    random() { return reach.hasRandom.random(); }
    async getDecision() {
        const choice = await new Promise(resolveDecisionP => {
            this.setState({view: 'GetDecision', playable: true, resolveDecisionP })
        });
        this.setState({view: 'WaitingForResults', choice });
        return decisionToInt[choice];
    }
    async readFortune() {
        const fortune = await new Promise(resolveFortuneP => {
            this.setState({view: 'GetFortune', playable: true, resolveFortuneP })
        });
        this.setState({view: 'WaitingForResults', fortune });
        return fortuneToInt[fortune];
    }
    showDecision(i) { this.setState({view: 'ShowDecision', decision: decisionIntToOutcome[i]}); }
    showFortune(i) {this.setState({view: 'ShowFortune', fortune: fortuneIntToOutcome[i]}); }
    informTimeout() { this.setState({view:  'Timeout'}); }
    seeOutcome() { this.setState({view: 'Done' }); }
    pickFortune(fortune) { this.state.resolveFortuneP(fortune); }
    makeChoice(choice) { this.state.resolveDecisionP(choice); }
}


class Deployer extends Player {
    constructor(props) {
        super(props);
        this.state = {view: 'SetFortunePrice'};
    }
    setFortunePrice(fortunePrice) { this.setState({view: 'Deploy', fortunePrice}); }
    async deploy() {
        const ctc = this.props.acc.contract(backend);
        this.setState({view: 'Deploying', ctc});
        this.fortunePrice = reach.parseCurrency(this.state.fortunePrice);
        this.deadline = {ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];
        backend.Alice(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        this.setState({view: 'WaitingForAttacher', ctcInfoStr });
    }
    render() {return renderView(this, DeployerViews);}
}

class Attacher extends Player {
    constructor(props) {
        super(props);
        this.state = {view: 'Attach'};
    }
    attach(ctcInfoStr) {
        const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
        this.setState({view: 'Attaching'});
        backend.Bob(ctc, this);
    }
    async acceptFortunePrice(fortunePriceAtomic) {
        const fortunePrice = reach.formatCurrency(fortunePriceAtomic, 4);
        return await new Promise(resolveAcceptedP => {
            this.setState({view: 'AcceptTerms', fortunePrice, resolveAcceptedP});
        });
    }
    termsAccepted() {
        this.state.resolveAcceptedP();
        this.setState({view: 'WaitingForTurn'});
    }
    render() {return renderView(this, AttacherViews); }
}

renderDOM(<App />);    