var React = require('react');

function Hello(props) {
  if (props.name) {
    return <div>Hello {props.name}</div>
  }
  return false;
}

function NameInput(props) {
  return (
    <div>
      <label>Name</label>
      <input type='text'
             value={props.name}
             onChange={(e) => props.nameChanged(e.target.value)} />
    </div>
    );
}

var HelloPerson = React.createClass({
  getInitialState() {
    return { name: '' };
  },
  nameChanged(name) {
    this.setState({
      name: name
    });
  },
  render: function() {
    return (
      <div>
        <NameInput type='text'
          name={this.state.name}
          nameChanged={this.nameChanged} />
        <Hello name={this.state.name} />
      </div>
    );
  }
});

module.exports = HelloPerson;