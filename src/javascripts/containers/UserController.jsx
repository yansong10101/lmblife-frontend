import React, {Component, PropTypes} from 'react';
import User from '../components/user/User.jsx';
import {connect} from 'react-redux';

class UserController extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render () {
    return (
        <div id="user">
          <User showLogin={this.props.showLogin} dispatch={this.props.dispatch}/>
          {this.props.children}
        </div>
    );
  }
}

const mapStateToProps = state=>({
  showLogin: state.user.showLogin
});
//const mapDispatchToProps = (dispatch)=>( {dispatch});

export default connect(mapStateToProps)(UserController);


