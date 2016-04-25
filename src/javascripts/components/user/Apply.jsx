import React, {Component} from 'react';
import {Input, Button, ButtonGroup} from 'react-bootstrap';
export default class extends Component{
  constructor(props,context){
    super(props,context);
  }
  //react life cycles
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <h1 className="text-center">Apply for University of XXX permisson</h1>
            <Input type="text" label="Full name" placeholder="Please Enter your name." />
            <Input type="textarea" label="Identify Infomation" placeholder="Please enter your student ID or edu email."/>
            <Button bsStyle="primary" block onClick={this.signUpClickHandler}>Submit</Button>
          </div>
        </div>
      </div>
    );
  }
}
