import { Component } from "react";
import MyContext from "../flux_1_context/FLUX_仓库";
const { Consumer } = MyContext;

const connect = (mapDispatchToProps) => (Target) => {
  return class NewComponent extends Component {
    render() {
      return (
        <Consumer>
          {(store) => {
            const { state, dispatch } = store;
            const newDispatch = (action) => {
              dispatch({ ...action, callback: () => this.forceUpdate() });
            };
            const mapProps = mapDispatchToProps(state);
            return <Target {...mapProps} dispatch={newDispatch} />;
          }}
        </Consumer>
      );
    }
  };
};

export default connect
