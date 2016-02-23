import React, {Component} from 'react';
import Navigation from '../Common/Navigation.jsx';
import SignUp from './SignUp.jsx';
import LoginModal from '../Common/LoginModal.jsx';
export default class Pathway extends Component{
  //react life cycles
  render() {
    return (
      <div className="container-fluid">
        <SignUp dispatch={this.props.dispatch}/>
      </div>
    );
  }
}
