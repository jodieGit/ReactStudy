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
        items
      )
    );
  }
});

React.render(React.createElement(TodoList, null), document.getElementById('root'));
