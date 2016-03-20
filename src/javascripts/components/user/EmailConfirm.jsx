import React, {Component} from 'react';
import {Input, Button, ButtonGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {emailConfirmed} from '../../actions/UserActions';
export default class EmailConfirm extends Component{
  constructor(props,context){
    super(props,context);
    this.continueClickHandler = this.continueClickHandler.bind(this);
  }

  continueClickHandler(){
    this.props.dispatch(emailConfirmed())
  }
  //react life cycles
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <h1 className="text-center">Email Confirmation required</h1>
            <p>In order to apply for permission. Please check and confirm your email.</p>
            <ButtonGroup justified>
            <Button href="#" bsStyle="primary">Resend</Button>
            <Button href="#" onClick={this.continueClickHandler} bsStyle="success">Continue</Button>
          </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(EmailConfirm)
