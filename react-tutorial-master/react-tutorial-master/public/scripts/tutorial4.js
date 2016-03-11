/**
 * Created by wzwang on 2016/1/15.
 */

var Comment = React.createClass({
  render: function(){

    //2.以上方式1存在问题：我们渲染评论内容在浏览器里面看起来像这样："<p>This is <em>
    // another</em>comment</p>",我们希望这些标签能够真正的渲染成HTML
    rawMarkup = React.createClass({
      var rawMarkup = marked(this.props.children.toString(),{sanitize: true});
      return {__html: rawMarkup};
    });

    return (
      <div className = "comment">
        <h2 className = "commentAuthor">
          {this.props.author}
        </h2>
        //1.Markdown是一种简单的格式化内联文本的方式。首先，需要引入第三方的marked库到你的应用。这是一个
        //1.将Markdown文本转换为原生的Html的js库。需要在头部引入browser.js
        //{marked(this.props.children.toString())}

        //2
        //<span dangerouslySetInnerHTML = {this.rawMarkup()}>

        {this.props.children}
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className = "commentList">
        <Comment author = "Pete Hunt">This is one comment</Comment>
        <Comment author = "Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});
