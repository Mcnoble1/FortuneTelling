import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        <h2>Fortune Reader (Bob)</h2>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div>
        Please paste the contract info to attach to:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Attach</button>
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        Attaching, please wait...
      </div>
    );
  }
}

exports.AcceptTerms = class extends React.Component {
  render() {
    const {fortunePrice, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        The terms of the game are:
        <br /> Fortune Price: {fortunePrice} {standardUnit}
        <br />
        <button
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.termsAccepted();
          }}
        >Accept terms and pay fortunePrice</button>
      </div>
    );
  }
}

exports.WaitingForTurn = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for the Fortune Seeker...
        <br />Think about the Fortune number to pick.
      </div>
    );
  }
}

export default exports;
