/**
 * Created by wzwang on 2016/1/18.
 */
//var data = [
//  {author: "Pete Hunt", text: "This is a comment"},
//  {author: "Jordan Walke", text: "This is *another* comment"}
//];

var CommentBox = React.createClass({
    loadCommentsFromServer: function(){
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function(data){
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err){
          console.log(this.props.url, status, err.toString());
        }
      });
    },
    handleCommentSubmit: function(comment){
      var comments = this.state.data;
      var newComments = comments.concat([comment]);
      this.setState({data: newComments});
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'Post',
        data: comment,
        success: function(data){
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    getInitialState: function(){
      return {data: []};
    },
    //componentDidMount是一个组件渲染的时候被React自动调用的方法。动态更新关键点是调用this.setState()
    componentDidMount: function(){
      this.loadCommentsFromServer();
      setInterval(this.loadCommmentsFromServer, this.props.pollInterval);
    },
    render: function(){
      return (
        <div className = "commentBox">
          <h1>Comments</h1>
          <CommentList data = {this.state.data}/>
          <CommentForm onCommentSubmit = {this.handleCommentSubmit}/>
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
  handleSubmit: function(){
    e.preventDefault();
    var author = this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    if(!text || !author) {
      return;
    }
    this.props.conCommentSubmit({author: author, text: text});
    this.refs.author.value = '';
    this.refs.text.value = '';
    return;
  },
  render: function(){
    return (
      <form className = "commentForm" onSubmit = {this.handleSubmit}>
        <input type = "text" placeholder = "Your name" refs="author"/>
        <input type="text" placeholder = "Say something..." refs = "text"/>
        <input type="submit" value = "Post"/>
      </form>
    );
  }
});

ReactDOM.render(
  //<CommentBox data={data}/>,

  //可以通过从服务器动态获取数据的数据代替硬编码的数据，删掉data属性，使用一个URL来获取数据
  <CommentBox url = "/api/comments" pollInterval = {2000}/>,

  document.getElementById("content")
);

