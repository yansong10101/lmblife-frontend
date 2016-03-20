import React, {Component} from 'react';
import Navigation from './../components/Common/Navigation.jsx';
import {connect} from 'react-redux';


class NavigationController extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const navFixed = false;
    return (
      <Navigation needMargin={navFixed} dispatch={this.props.dispatch} user={this.props.user}/>
    );
  }
}
const mapStateToProps = state=>{
  return ({
    user:state.user
  })
};
//const mapDispatchToProps = (dispatch)=>( {dispatch});

export default connect(mapStateToProps)(NavigationController);