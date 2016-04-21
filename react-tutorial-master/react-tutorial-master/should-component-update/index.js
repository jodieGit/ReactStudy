/**
 * Created by wzwang on 2016/4/19.
 */

//React可以使用任何你想要的数据管理风格，包括数据可变风格。然而，如果你能够在你的应用中讲究性能的部分使用不可变数据，
//就可以很方便的实现一个快速的shouldComponentUpdate()方法来显著提升应用的速度。


//可用的命令

//{$push: array} 利用push()把目标上所有的元素放进数组

//{$unshift: array} 利用unshift() 把目标上所有的元素放进数组

//{$splice: array in arrays}：依次使用arrays中的元素(array)作为参数，在目标对象target上调用splice()
//方法

//{$set: any} ：整体替换目标

//{$merge: object}:合并目标和object的键

//{$apply: function}： 传入当前的值到函数，然后用新返回的值更新它


//demo 1  简单的入栈
var initialArray = [1, 2, 3];
var newArray = update(initialArray, {$push: [4]}); //[1,2,3,4]
//initialArray 仍然是[1,2,3]

//demo 2 嵌入的集合
var collection = [1,2,{a: [12, 17, 15]}];
var newCollection = update(collection, {2: {$splice: [[1, 1, 13, 14]]}});
//[1, 2, {a: [12, 13, 14, 15]}]
//获取collection中索引是2的对象，然后取得对象键为a的值，删除索引从1开始的一个元素（及移除17），插入13和14.

//根据现有的值更新
var obj = {a: 5,b: 3};
var newObj = update(obj, {b: {$apply: function(x) {return x*2}}});
//{a: 5, b: 6}

//（浅）合并
var obj = {a: 5, b: 3};
var newObj = update(obj, {$merge: {b: 6, c: 7}});
//{a: 5, b: 6, c: 7}

//当使用react-with-addons.js在开发模式下构建的时候，这里描述的Perf对象时以React.addons.Pref的形式暴露出来嘚。

//Perf.start()和Pref.stop()
//开始/停止检测。React的中间操作被记录下来，用于分析，花费一段微不足道的时间的操作会被忽略。

//Pref.printInclusive(measurements)
//打印花费的总时间。如果不传递任何参数，默认打印最后的所有检测记录。它会在控制台中打印一个漂亮的格式化的表格

//Perf.printExclusive(measurements)
//"独占"时间不包含挂在组件的时间：处理props,getInitialState，调用componentWillMount和componentDidMount
//等等

//Perf.printWasted(measurements)
//分析器最有用的部分："浪费"的时间被花在根本没有渲染任何东西的组件上，例如界面渲染后保持不变，没有操作DOM
//元素


//Perf.printDOM(measurements):
//打印底层DOM操作















