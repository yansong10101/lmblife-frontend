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
//propTypes: {
//  // You can declare that a prop is a specific JS primitive. By default, these
//  // are all optional.
//  optionalArray: React.PropTypes.array,
//      optionalBool: React.PropTypes.bool,
//      optionalFunc: React.PropTypes.func,
//      optionalNumber: React.PropTypes.number,
//      optionalObject: React.PropTypes.object,
//      optionalString: React.PropTypes.string,
//
//    // Anything that can be rendered: numbers, strings, elements or an array
//    // (or fragment) containing these types.
//      optionalNode: React.PropTypes.node,
//
//    // A React element.
//      optionalElement: React.PropTypes.element,
//
//    // You can also declare that a prop is an instance of a class. This uses
//    // JS's instanceof operator.
//      optionalMessage: React.PropTypes.instanceOf(Message),
//
//    // You can ensure that your prop is limited to specific values by treating
//    // it as an enum.
//      optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),
//
//    // An object that could be one of many types
//      optionalUnion: React.PropTypes.oneOfType([
//    React.PropTypes.string,
//    React.PropTypes.number,
//    React.PropTypes.instanceOf(Message)
//  ]),
//
//    // An array of a certain type
//      optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
//
//    // An object with property values of a certain type
//      optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
//
//    // An object taking on a particular shape
//      optionalObjectWithShape: React.PropTypes.shape({
//    color: React.PropTypes.string,
//    fontSize: React.PropTypes.number
//  }),
//
//    // You can chain any of the above with `isRequired` to make sure a warning
//    // is shown if the prop isn't provided.
//      requiredFunc: React.PropTypes.func.isRequired,
//
//    // A value of any data type
//      requiredAny: React.PropTypes.any.isRequired,
//
//    // You can also specify a custom validator. It should return an Error
//    // object if the validation fails. Don't `console.warn` or throw, as this
//    // won't work inside `oneOfType`.
//      customProp: function(props, propName, componentName) {
//    if (!/matchme/.test(props[propName])) {
//      return new Error('Validation failed!');
//    }
//  }
//},

//get store.dispatch as this.props.dispatch.
//Not listen to store changes.
export default connect()(TemplateComponent);
