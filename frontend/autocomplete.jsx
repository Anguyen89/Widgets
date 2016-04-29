var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {inputVal: ""};
  },

  handleInput: function(event){
    this.setState({inputVal: event.currentTarget.value});
  },

  matches: function(){
    var that = this;
    var matches = [];
    if (this.state.inputVal === 0){
      return this.props.names;
    }

    this.props.names.forEach(function(name){
      var sub = name.slice(0, that.state.inputVal.length);
      if (sub.toLowerCase() === that.state.inputVal.toLowerCase()){
        matches.push(name);
      }
    });

    if (matches.length === 0){
      matches.push("NO ENTRY MATCH");
    }

    return matches;
  },

  render: function(){
    var that = this;
    var output = this.matches().map(function(name, i){
      return (
        <li key={i}>{name}</li>
      );
    });
    return(
      <div>
        <input type="text" value={this.state.inputVal}
          onChange={this.handleInput} />
        <ul>
          {output}
        </ul>
      </div>
    );
  }


});
