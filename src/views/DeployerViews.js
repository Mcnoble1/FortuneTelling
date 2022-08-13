import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2>Fortune Seeker (Alice)</h2>
        {content}
      </div>
    );
  }
}

exports.SetFortunePrice = class extends React.Component {
  render() {
    const {parent, defaultFortunePrice, standardUnit} = this.props;
    const fortunePrice = (this.state || {}).fortunePrice || defaultFortunePrice;
    return (
      <div>
        <input
          type='number'
          placeholder={defaultFortunePrice}
          onChange={(e) => this.setState({fortunePrice: e.currentTarget.value})}
        /> {standardUnit}
        <br />
        <button
          onClick={() => parent.setFortunePrice(fortunePrice)}
        >Set Fortune Price</button>
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, fortunePrice, standardUnit} = this.props;
    return (
      <div>
        Fortune Price (pay to deploy): <strong>{fortunePrice}</strong> {standardUnit}
        <br />
        <button
          onClick={() => parent.deploy()}
        >Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for the Fortune Reader to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

export default exports;
