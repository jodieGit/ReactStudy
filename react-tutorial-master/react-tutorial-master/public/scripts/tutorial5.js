/**
 * Created by wzwang on 2016/1/15.
 */

var data = [
  {author: "Pete Hunt", text: "This is a comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
  render: function(){
    return (
      <div className = "commentBox">
        <h1>Comments</h1>
        <CommentList data = {this.props.data}/>
        <CommentForm/>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author = {comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className = "commentList">
        {commentNodes}
      </div>
    );
  }
});

var Comment = React.createClass({
  rawMarkup: function(){
    var rawMarkup = marked(this.props.children.toString(),{sanitize: true});
    return {__html: rawMarkup};
  },
  render: function(){
    return (
      <div className = "comment">
        <h2 className = "commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML = {this.rawMarkup()}/>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function(){
    return (
      <div className = "commentForm">
        Hello,I am a CommentForm
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox data={data}/>,

  //可以通过从服务器动态获取数据的数据代替硬编码的数据，删掉data属性，使用一个URL来获取数据
  //<CommentBox url = "/api/comments"/>,

  document.getElementById("content")
);
