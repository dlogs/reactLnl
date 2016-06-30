var React = require('react');
var ReactDOM = require('react-dom');

function renderExample(component, name, props) {
    let element = document.getElementById(name + 'Ex')
    if (element)
        ReactDOM.render(React.createElement(component, props), element);
}

renderExample(require('./state'), 'state');
renderExample(require('./update'), 'update');
renderExample(require('./array'), 'array');
renderExample(require('./ref'), 'ref');
renderExample(require('./ifElse'), 'ifElse');
renderExample(require('./children'), 'children');
renderExample(require('./updatePerf'), 'updatePerf');


