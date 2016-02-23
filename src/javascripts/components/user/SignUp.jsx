import React, {Component} from 'react';
import {Input, Button} from 'react-bootstrap';
import {closeLogin} from '../../actions/UserActions.js';

export default class ViewTemplate extends Component{
  constructor(props, context) {
    super(props, context);
    this.signUpClickHandler = this.signUpClickHandler.bind(this);
  }
  signUpClickHandler() {
    //this.props.dispatch(closeLogin());
  }
  //react life cycles
  render() {
    return (
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <h1 className="text-center">Sign up to LMB</h1>
            <Input type="email" label="Email Address" placeholder="Enter email" />
            <Input type="password" label="Password" placeholder="Password"/>
            <Input type="password" placeholder="Comfirm Password" />
            <Button bsStyle="primary" block onClick={this.signUpClickHandler}>Sign up</Button>
          </div>
        </div>
    );
  }
}
