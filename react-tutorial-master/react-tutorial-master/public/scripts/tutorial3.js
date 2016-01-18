/**
 * Created by wzwang on 2016/1/15.
 */

var CommentList = React.createClass({
  render: function(){
    return (
      <div className = "CommentList">
      Hello,world! I am a CommentList.
    </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className = "CommentForm">
      Hello,world! I am a CommentFrom.
    </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function(){
    return (
      <div className = "CommentBox">
        <h1>Comments</h1>
        <CommentList/>
        <CommentForm/>
      </div>
    );
  }
});

React.render(
<CommentBox/>,
  document.getElementById("content")
);
