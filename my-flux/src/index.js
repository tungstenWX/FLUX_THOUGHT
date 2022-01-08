import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MyContext from "./page/flux_1_context/FLUX_仓库";
import TestComponent from "./Components/TestChild";

// 每个仓库都会返回一个 Provider  用于接受单独想要打入的数据
//如果没有被Provider包裹的组件 只会获取到仓库里的数据
//Provider打入的数据只要被修改  所有消费状态的消费组件都会重新渲染
const { Provider } = MyContext;

const store = {
  //state存储所有想要被全局维护的状态
  state: {
    a: 1,
    b: 2,
  },
  //setStore存储的是一个方法
  //这个方法由组件调用改变全局状态中的某一个状态
  //缺点:每改变一个状态会改变整个状态 也就是整个VDOM Tree 都要重新渲染 代价太大
  setStore: (assignState, callback) => {
    Object.assign(store.state, assignState);
    callback && callback(store.state);
  },
};

ReactDOM.render(
  <Provider store={store}>
    <TestComponent />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
