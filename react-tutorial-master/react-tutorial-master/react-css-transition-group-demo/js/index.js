/**
 * Created by wzwang on 2016/4/12.
 */
'use strict';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({
  displayName: 'TodoList',

  getInitialState: function getInitialState() {
    return {items: ['hello', 'world', 'click', 'me']};
  },

  handleAdd: function handleAdd() {
    var newItems = this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },

  handleRemove: function handleRemove(i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },

  //一组动画必须挂载了才能生效 （新项必须挂载在ReactCSSTtransitionGroup里才能生效，而不是ReactCSSTtransitionGroup被挂载到新项）
  render: function render() {
    var items = this.state.items.map(function(item, i) {
      return React.createElement(
        'h2',
        {'class': 'todo-item', key: item, onClick: this.handleRemove.bind(this, i)},
        item
      );
    }.bind(this));

    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        {onClick: this.handleAdd},
        'Add Item'
      ),
      React.createElement(
        ReactCSSTransitionGroup,
        {transitionName: 'example', transitionAppear: true},
        //可以给ReactCSSTransitionGroup添加transitionEnter={false}或者transitionLeave={false} props来禁用这些动画
        //{transitionName: 'example', transitionAppear: true, transitionEnter: false, transitionLeave: false},
        items
      )
    );
  },


//  以下就是将ReactCSSTransitionsGroup挂载到新项中，过渡效果不能生效

  //render: function() {
  //  var items = this.state.items.map(function(item, i) {
  //    return (
  //      <div key = {key} onClick = {this.handleRemove.bind(this, i)}>
  //        <ReactCSSTransitionGroup>
  //          {item}
  //        </ReactCSSTransitionGroup>
  //      </div>
  //    );
  //  }, this);
  //
  //  return (
  //    <div>
  //      <button onClick = {this.handleAdd}> Add Item</button>
  //      {items}
  //    </div>
  //  );
  //},

});

React.render(React.createElement(TodoList, null), document.getElementById('root'));

//注意：当使用ReactCSSTransitionGroup的时候，没有办法通知你在过渡效果结束或者执行动画的时候做
// 一些复杂的运算。如果你想要更过细粒度的控制，你可以使用底层的ReactCSSTransitionGroup API,该
//API提供了你自定义过渡效果所需要的函数。


//底层的API :ReactTransitionGroup

//componentWillEnter (callback): 在组建被添加到已有的TransitionGroup中的时候，该函数和componentDidMount()被同时调用。
//  这将会阻塞其他动画出发，直到callback调用。该函数不会在TransitionGroup初始化渲染时调用。

//componentDidEnter(): 该函数在传给componentWillEnter的callback函数被调用之后调用

//componentWillLeave（callback）:该函数在子级从ReactTransitionGroup中移除的时候调用。虽然子级被移除了，
//ReactTransitionGroup将会使他继续在DOM中，直到callback被调用。

//componentDidLeave():该函数在willLeave callback被调用的时候调用(与componentWillUnmount是同一时间)



