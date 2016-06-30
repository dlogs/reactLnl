var React = require('react');

var ToggleHello = React.createClass({
    getInitialState() {
        return { name: 'World' };
    },
    toggleClicked() {
        this.setState({
            name: this.state.name === 'World' ? 'Everyone' : 'World'
        });
    },
    render() {
        return (
            <div>
                <button type='button'
                    onClick={this.toggleClicked}>
                    Toggle
                </button>
                <Hello name={this.state.name} />
            </div>
        );
    }
})
var Hello = React.createClass({
    render() {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
});

module.exports = ToggleHello;