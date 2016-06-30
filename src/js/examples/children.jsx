var React = require('react');

var HasChildren = React.createClass({
  render() {
    return (
      <div>
        <Panel panelType='warning' heading='Head'>
          <div>Child in panel body</div>
          <div>Another child</div>
        </Panel>
      </div>
    );
  }
});

var Panel = React.createClass({
  propTypes: {
    panelType: React.PropTypes.string,
    heading: React.PropTypes.node
  },
  getDefaultProps() {
    return {
      panelType: 'default'
    }
  },
  render() {
    return (
      <div className={'panel panel-' + this.props.panelType}>
        {this.props.heading
          ? <div className='panel-heading'>{this.props.heading}</div>
          : false}
        <div className='panel-body'>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = HasChildren;