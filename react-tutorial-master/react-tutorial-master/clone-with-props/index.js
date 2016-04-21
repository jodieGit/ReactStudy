/**
 * Created by wzwang on 2016/4/19.
 */

//在极少数场景中，一个组件可能想改变另一个它不拥有的组件的props（就像改变一个组件的className，这个组件又作为
// this.props.children传入）。其他的时候，可能想生成传进来的一个组件的多个拷贝。cloneWithProps()使其成为可能。

//ReactComponen Reacr.addons.cloneWithProps(ReactComponent component, object?extreProps)

//做一个component的浅复制，合并extraProps提供的每一个props。className和style props将会被智能合并

//注意：cloneWithProps 并不传递key到克隆的组件中，如果你希望保留Key,将其添加到extraProps对象：
//js var clonedComponent = cloneWithProps(originalComponent, {key: originalComponent.key});
//ref也一样不会保留
