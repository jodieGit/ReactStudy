
/**
 * Created by wzwang on 2016/4/19.
 */

//classSet()是一个简洁的工具，用于简单操作DOM中的 class字符串。


var TodoList = React.createClass({

  //demo no classSet
  render: function() {
    var classString = 'message';
    if(this.props.isImportant) {
      classString += ' message-important';
    }
    if(this.props.isRead) {
      classString += ' message-read';
    }

    return <div className = {classString}> Great, I'll be there</div>;
  },

  //demo for classSet
  render1: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'message': true,
      'message-important': this.props.isImportant,
      'message-read': this.props.isRead
    });

    return <div className = {classes}>Great,I'll be there.</div>;
  },


  //demo of object
  render2: function() {
    var cx = React.addons.classSet;
    var importantModifier = 'message-important';
    var readModifier = 'message-red';
    var classes = cx('message', importantModifier, readModifier);
    return <div className = {classes}>Great, I'll be there</div>
  }
});
