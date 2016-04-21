
/**
 * Created by wzwang on 2016/4/18.
 */

//ReactLink仅仅是一个onChange/setState()模式的简单包装和约定。它不会从根本上改变数据在你的React应用中
//如何流动

//不带ReactLink的LinkedStateMixin

var WithoutMixin = React.createClass({
  getInitialState: function() {
    return {message: 'Hello!'};
  },
  handleChange: function(newValue) {
    this.setState({message: newValue});
  },
  render: function() {
    var valueLink = {
      value: this.state.message,
      requestChange: this.handleChange
    };
    return <input type = "text" valueLink = {valueLink} />;
  }
});


//不带valueLink的ReactLink

var WithoutLink = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {message: 'Hello!'};
  },
  render: function() {
    var valueLink = this.linkState('message');
    var handleChange = function(e) {
      valueLink.requestChange(e.target.value);
    };
    return <input type= "text" value = {valueLink.value} onChange = {handleChange}/>;
  }
});
