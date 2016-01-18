/**
 * Created by wzwang on 2016/1/15.
 */
var CommentBox = React.createClass({
  render: function(){
    return (
      <div className = "commentBox">
      Hello,world! I am a CommenBox.
    </div>
    )
  }
});
React.render(
<CommentBox/>,
  document.getElementById("content")
);
