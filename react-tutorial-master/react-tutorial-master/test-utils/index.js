/**
 * Created by wzwang on 2016/4/19.
 */

    //  React.addons.TestUtils使得在你选择测试框架中 测试React组件变得简单（使用Jest）

    //React.addons.TestUtils使得你选择的测试框架中测试React组件变得简单

    //模拟：
    //Simulate.{eventName}(DOMElement element, object eventData);

    //使用示例：
    var node = this.refs.input.getDOMDode();
    React.addons.TestUtils.Simulate.click(node);
    React.addons.TestUtils.Sigma.change(node, {target: {value: 'Hello world!'}});
    React.addons.TestUtils.Simulate.keyDown(node, {key: "Enter"});

    //renderIntoDocument:把一个组件渲染成一个在文档中分离的DOM节点。这个函数需要DOM
    ReactComponent renderIntoDocument(ReactComponent instance);

    //mockComponent: 传递一个虚拟的组件模块给这个方法，给这个组件扩充一些有用的方法，让组件能够被
    //当成一个React组件的仿制品来使用。这个组件将会成为一个简单的<div>(或者是其他标签，如果
    // mockTagName提供了的话)，包含任何提供的子节点，而不是像往常一样渲染出来。

    object mockComponent(function componentClass, string ? mockTagName);

    //isElementOfType: 如果element是一个类型为React componentClass的React类，则返回true

    boolean isElementOfType(ReactElement element, function componentClass);

    //isDOMComponent: 如果instance是一个DOM组件（例如<div>或者<span>）,则返回true

    boolean isDOMComponent(ReactComponent instance)

    //isCompositeComponentWithType:如果instance 是一个合成的组件（通过React.createClass()创建），
    //此组件的类型是React componentClass,则返回true

    boolean isCompositeComponentWithType(ReactComponent instance, function componentClass)


    //findAllInRenderedTree: 遍历tree中所有组件，搜集test(component)返回true的所有组件。
    //就这个本身来说不是很有用，但是它可以为其他测试提供原始数据
    array findAllInRenderedTree(ReactComponent tree, function test)

    //scryRenderedDOMComponentsWithClass: 查找组件的所有实例，这些实例都在渲染后的树中，并且是带有
    // className类名的DOM组件。

    array scryRenderedDOMComponentsWithClass(ReactComponent tree, string className)

    //findRenderedDOMComponentWithClass：,但是它只返回一个结果，如果有其他满足条件的，则会抛出异常

    ReactComponent findRenderedDOMComponentsWithClass(ReactComponent tree, string calssName);

    //scryRenderedDOMComponentsWithTag:在渲染后的树中找出所有组件实例，并且是标签名字符合tagName的
    //DOM组件

    array scryRenderedCOMComponentsWithTag(ReactComponent tree, string tagName)

    //findRenderedDOMComponentWithTag:类似于scryRenderedDOMComponentsWithTag(),但是它只返回一个结果，
    //如果有其他满足条件的，则会抛出异常

    ReactComponent findRenderedDOMComponentWithTag(ReactComponent tree, string tagName)

    //scryRenderedComponentsWithType:找出所有组件实例，这些组件的类型为componentClass.
    array scryRenderedComponentsWithType(ReactComponent tree, function componentClass)

    //findRenderedComponentWithType:类似于scryRenderedComponentsWithType(),但是它只返回一个结果，
    //如果有其他满足条件的，则会抛出异常



