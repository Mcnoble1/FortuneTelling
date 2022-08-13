import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetFortune = class extends React.Component {
  render() {
    const {parent, playable, fortune} = this.props;
    return (
      <div>
        <p>Pick a Fortune to read to Alice</p>
        {fortune ? 'Alice rejected the Fortune! Read another Fortune.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.pickFortune('You will be rich and famous')}
        >You will be rich and famous</button>
        <button
          disabled={!playable}
          onClick={() => parent.pickFortune('You will be a Billionaire')}
        >You will be a Billionaire</button>
        <button
          disabled={!playable}
          onClick={() => parent.pickFortune('You will be a Millionaire')}
        >You will be a Millionaire</button>
      </div>
    );
  }
}

exports.GetDecision = class extends React.Component {
  render() {
    const {parent, playable} = this.props;
    return (
      <div>
        <p>Do you accept the Fortune</p>
        {/* {choice ? 'Alice rejected the Fortune! Pick another number.' : ''} */}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.makeChoice('Alice rejected the Fortune')}
        >Reject</button>
        <button
          disabled={!playable}
          onClick={() => parent.makeChoice('Alice accepted the Fortune')}
        >Accept</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.ShowDecision = class extends React.Component {
  render() {
    const {decision} = this.props;
    return (
      <div>
        Alice's Decision is:
        <br />{decision || 'Unknown'}
      </div>
    );
  }
}

exports.ShowFortune = class extends React.Component {
  render() {
    const {fortune} = this.props;
    return (
      <div>
        Bob read the fortune as:
        <br />{fortune || 'Unknown'}
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    // const {outcome} = this.props;
    return (
      <div>
        The Fortune Payment has been made into Bob's account.
        Goodbye! Alice and Bob.
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;
