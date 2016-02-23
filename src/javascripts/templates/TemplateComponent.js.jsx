import React, {Component, PropTypes} from 'react';
//connect is for link dispatch to component.
import {connect} from 'react-redux';
//only import needed actions from ActionCreators.
import {increase} from '../actioncreators/TemplateActionCreators';
//define regular react component.
class TemplateComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.props.dispatch(increase());
  }
  render() {
    let buttonText = this.props.pendding
      ? ('Pendding...')
      : ('Increase');
    return (
      <div>
        <h1>TemplateComponent</h1>
        <p>Number:{this.props.count}</p>
        <button disabled={this.props.pendding} onClick={this.clickHandler}>{buttonText}</button>
      </div>
    );
  }
}
//get store.dispatch as this.props.dispatch.
//Not listen to store changes.
export default connect()(TemplateComponent);
