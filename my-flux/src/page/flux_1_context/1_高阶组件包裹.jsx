import { Component } from "react";
import MyContext from "./FLUX_仓库";

const { Consumer } = MyContext;

//二阶高阶组件
//高阶组件分为 组合高阶组件 和 继承高阶组件
//高阶组件可以到高阶组件仓库中查看代码
/********
 * 一阶
 * props
 * mapDispatchToProps()
 * 该函数用于筛选全局仓库中的属性
 * 将子组件想要的对应state映射到子组件当中
 * return
 * 返回一个被Consumer包裹的高阶 或者称为 定制版(订阅版) 子组件
 * Consumer组件中可以订阅到Provider中的数据
 *
 * 二阶
 * props
 * 传入想要 订阅 Provider 分发数据 的子组件
 * 用一阶传入的映射函数将 筛选后的state映射到子组件上
 * return
 * 返回定制好的组件
 * 现在这个子组件已经获得了 筛选后的 数据
 * 可以当做VDOM使用
 */

const connect = (mapDispatchToProps) => (Target) => {
  return class NewComponent extends Component {
    render() {
      return (
        <Consumer>
          {(store) => {
            const { state, setStore } = store;
            //传入子组件中的更新订阅状态的方法 自动传入 强制reRender的方法 箭头函数 让this 绑定在子组件的实例上
            const updateState = (assignState) =>
              setStore(assignState, () => this.forceUpdate());
            //筛选要映射的状态
            const mapState = mapDispatchToProps(state);
            return <Target {...mapState} updateState={updateState} />;
          }}
        </Consumer>
      );
    }
  };
};

export default connect