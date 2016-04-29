var React = require('react');
var Clock = require('./Clock');
var Weather = require('./Weather');

module.exports = React.createClass({
  render: function(){
    return(
    <div>
      <Clock />
      <Weather />
    </div>
    );
  }
});
