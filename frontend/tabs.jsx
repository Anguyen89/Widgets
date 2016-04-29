var React = require('react');


var Headers = React.createClass({

render: function(){
  var selectedPane = this.props.selectedPane;
  var that = this;
  var headers = this.props.panes.map(function(pane, idx){
    var title = pane.title;
    var klass = "";
    if (idx === selectedPane){
      klass = 'active';
    }
    return (
        <button key={idx} className={klass} onClick={that.props.onTabChosen.bind(null, idx)}>{pane.title}</button>
    );
  });

  return (
    <div>
      {headers}
    </div>
  );
}


});

module.exports = React.createClass({
  getInitialState: function(){
    return {selectedTab: 0};
  },

  selectTab: function(num){
    this.setState({selectedTab: num});
  },

  render: function(){
    var pane = this.props.panes[this.state.selectedTab];
    return (
    <div>
      <Headers panes={this.props.panes} selectedPane={this.state.selectedTab} onTabChosen={this.selectTab}/>
    <p>
      {pane.content}
    </p>
  </div>
    );
  }
});
