var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs.jsx');
var WeatherClock = require('./WeatherClock');
var AutoComplete = require('./autocomplete.jsx');

var names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

var panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

var MyComponent = React.createClass({
  render: function(){
    return (
    <div>
      <Tabs panes={panes}/>
      <WeatherClock />
      <AutoComplete names={names} />
    </div>
    );
  }
});


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
