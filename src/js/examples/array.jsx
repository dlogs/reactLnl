var React = require('react');

function CharacterCount(character) {
    this.character = character;
    this.count = 1;
}

function CharactersTable(props) {
  if (!props.stringValue) {
    return false
  }
  var characterCounts = getCharacterCountsInString(props.stringValue);
  return (
    <table>
      <thead>
        <tr>
          <th>Character</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
          {characterCounts.map(cc =>
            <tr key={cc.character}>
              <td>{cc.character}</td>
              <td>{cc.count}</td>
            </tr>
          )}
      </tbody>
    </table>
  );
}

function ValueInput(props) {
  return (
    <div>
      <input type='text'
             value={props.value}
             onChange={(e) => props.valueChanged(e.target.value)} />
      <button type='button' onClick={() => props.valueChanged('')}>Clear</button>
    </div>
    );
}

var CharacterCounter = React.createClass({
  getInitialState() {
    return { value: '' };
  },
  valueChanged(value) {
    this.setState({
      value: value
    });
  },
  render: function() {
    return (
      <div>
        <ValueInput type='text'
          value={this.state.value}
          valueChanged={this.valueChanged} />
        <CharactersTable stringValue={this.state.value} />
      </div>
    );
  }
});

function getCharacterCountsInString(value) {
  let characterCounts = [];
  for (let i = 0; i < value.length; i++) {
    let char = value.charAt(i);
    let charCount = characterCounts.find(cc => cc.character === char);
    if (charCount) {
      charCount.count++;
    } else {
      characterCounts.push(new CharacterCount(char));
    }
  }
  characterCounts.sort((left, right) => left.character < right.character ? -1 : left.character > right.character ? 1 : 0);
  return characterCounts;
}

module.exports = CharacterCounter;