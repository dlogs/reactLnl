var React = require('react');

var NameInput = React.createClass({
  addClicked() {
    if (this.refs.input.value !== '') {
      this.props.addName(this.refs.input.value);
      this.refs.input.value = ''; 
    }
  },
  render() {
    return (
      <div>
        <input type='text'
          ref='input' />
        <button type='button'
          onClick={this.addClicked}
          className='button-primary'>
          Add
        </button>
      </div>
    );
  }
});

var NameTable = React.createClass({
  focusNameValue(name) {
    let valueInput = this._valueInputs[name];
    valueInput.focus();
    valueInput.select();
  },
  render() {
    this._valueInputs = {};
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {this.props.people.map(p =>
            <tr key={p.name}>
              <td>{p.name}</td>
              <td>
                <input type='text'
                  ref={c => this._valueInputs[p.name] = c} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
});

var NameList = React.createClass({
  getInitialState() {
    return { people: [] };
  },
  addName(name) {
    if (this.state.people.some(p => p.name === name)) {
      this.focusNameValue(name);
      return;
    }
    this.setState({
      people: this.state.people.concat([{ name: name }])
    });
  },
  focusNameValue(name) {
    this._nameTable.focusNameValue(name);
  },
  render: function() {
    return (
      <div>
        <NameInput type='text'
          addName={this.addName} />
        <NameTable people={this.state.people}
          ref={c => this._nameTable = c} />
      </div>
    );
  }
});

module.exports = NameList;