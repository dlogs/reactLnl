var React = require('react');

var SquareLine = React.createClass({
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value;
  },
  render() {
    const valueAsNumber = parseFloat(this.props.value);
    return (
      <tr>
        <td>
          <input type='number'
            value={this.props.value}
            onChange={(e) => this.props.updateValue(e.target.value)} />
        </td>
        <td>
            {valueAsNumber * valueAsNumber}
        </td>
      </tr>
    );
  }
});

var SquareCalculator = React.createClass({
  getInitialState() {
    return { numbers: [], nextId: 1 };
  },
  addNumber() {
    this.setState({
      numbers: this.state.numbers.concat([{
        id: this.state.nextId,
        value: '0'
      }]),
      nextId: this.state.nextId + 1
    });
  },
  updateValue(id, value) {
    this.setState({
      numbers: this.state.numbers
        .map(n => n.id === id
             ? { id: id, value: value }
             : n)
    });
  },
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Square</th>
            </tr>
          </thead>
          <tbody>
            {this.state.numbers.map(n => 
              <SquareLine key={n.id}
                value={n.value}
                updateValue={value => this.updateValue(n.id, value)} />
            )}
          </tbody>
        </table>
        <button type='button'
          className='button-primary'
          onClick={() => this.addNumber()}>
          Add
        </button>
      </div>
    );
  }
});

module.exports = SquareCalculator;