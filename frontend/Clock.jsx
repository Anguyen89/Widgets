var React = require('react');

module.exports = React.createClass({

  getInitialState: function(){
    return { time: new Date() };
  },

  tick: function(){
    this.setState({time: new Date()});
  },

  componentDidMount: function(){
    this.intervalId = setInterval(this.tick, 1000);
  },

  render: function(){
    return(
      <div className = "clock">
        <p>Time: {this.state.time.toTimeString()}</p>
        <p>Date: {this.state.time.toDateString()}</p>
      </div>
    );
  }

});
