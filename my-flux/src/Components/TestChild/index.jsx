import React from "react";
import connect from "../../../../../ReduxHandsWrite/src/utils/connect";
class TestComponent extends React.Component {

  render() {
    return <div>Test</div>;
  }
}
export default connect((state)=>({a:state.a}))(TestComponent)