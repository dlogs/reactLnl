var React = require('react');

var MessageDisplay = React.createClass({
  render() {
    return (
      <div>
        <TernaryMessageDisplay {...this.props} />
        <VariableMessageDisplay {...this.props} />
        <IifeMessageDisplay {...this.props} />
        <MethodMessageDisplay {...this.props} />
      </div>
    );
  }
});

var TernaryMessageDisplay = React.createClass({
  render() {
    return (
      <div>
        <label>Ternary:</label>
        {this.props.hasError
          ? 'Error!'
          : this.props.hasWarning
            ? 'Warning!'
            : 'All Clear!'}
      </div>
    );
  }
});

var VariableMessageDisplay = React.createClass({
  render() {
    let message;
    if (this.props.hasError) {
      message = 'Error!';
    } else if (this.props.hasWarning) {
      message = 'Warning!';
    } else {
      message = 'All Clear!';
    }
    
    return (
      <div>
        <label>Variable:</label>
        {message}
      </div>
    );
  }
});

var IifeMessageDisplay = React.createClass({
  render() {
    return (
        <div>
          <label>IIFE:</label>
          {(() => {
            if (this.props.hasError) {
              return 'Error!';
            } else if (this.props.hasWarning) {
              return 'Warning!';
            } else {
              return 'All Clear!';
            }
          })()}
        </div>
    );
  }
});

var MethodMessageDisplay = React.createClass({
  render() {
    return (
      <div>
        <label>Separate Method:</label>
        {this.renderMessage()}
      </div>
    );
  },
  renderMessage() {
    if (this.props.hasError) {
      return 'Error!';
    } else if (this.props.hasWarning) {
      return 'Warning!';
    } else {
      return 'All Clear!';
    }
  }
});

var IfElse = React.createClass({
  getInitialState() {
    return { hasWarning: false, hasError: false};
  },
  onWarningChange(e) {
    this.setState({ hasWarning: e.target.checked });
  },
  onErrorChange(e) {
    this.setState({ hasError: e.target.checked })
  },
  render() {
    return (
      <div>
        <div>
          <div className='checkbox'>
            <label>
              <input type='checkbox'
                checked={this.state.hasWarning}
                onChange={this.onWarningChange} />
              Warning
            </label>
          </div>
          <div className='checkbox'>
            <label>
              <input type='checkbox'
                checked={this.state.hasError}
                onChange={this.onErrorChange} />
              Error
            </label>
          </div>
        </div>
        <MessageDisplay hasWarning={this.state.hasWarning}
          hasError={this.state.hasError} />
      </div>
    );
  }
});

module.exports = IfElse;