import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input, Button} from 'react-bootstrap';
import {closeLogin} from '../../actions/UserActions';
import {signUp} from '../../actions/UserActions';

export default class SignUp extends Component{
  constructor(props, context) {
    super(props, context);
    this.signUpClickHandler = this.signUpClickHandler.bind(this);
  }
  signUpClickHandler() {
    let email = this.refs._email.getValue();
    let password = this.refs._password.getValue();
    let passwordConfirm = this.refs._passwordConfirm.getValue();
    this.props.dispatch(signUp(email,password,passwordConfirm));
  }
  //react life cycles
  render() {
    return (
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <h1 className="text-center">Sign up to LMB</h1>
            <Input ref="_email" type="email" label="Email Address" placeholder="Enter email" />
            <Input ref="_password" type="password" label="Password" placeholder="Password"/>
            <Input ref="_passwordConfirm" type="password" placeholder="Comfirm Password" />
            <Button bsStyle="primary" block onClick={this.signUpClickHandler}>Sign up</Button>
          </div>
        </div>
    );
  }
}

export default connect()(SignUp)
