import { Component } from "react";
import MyContext from "./../flux_1_context/FLUX_仓库";

const { Consumer } = MyContext;

const store = {
  state: {
    a: 1,
  },
  //改变对应状态的方法
  reducers: {
    updateA: ({ A }) => {
      store.state.a = A;
    },
  },
  //执行对应的reducer
  dispatch: (action) => {
    const { type, payload, callback } = action || {};
    store.reducers[type](payload);
    callback && callback();
  },
};
