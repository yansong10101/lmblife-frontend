import React, {Component, PropTypes} from 'react';
class ContainerWrapper extends Component {
  constructor(props, context) {
    super(props, context);
  }
  shouldComponentUpdate(nextProps, nextState){
    //console.log(nextProps);
    return nextProps.shouldUpdate;
  }
  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}
//get store.dispatch as this.props.dispatch.
//Not listen to store changes.
export default ContainerWrapper;
