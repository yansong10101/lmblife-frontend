import React, {Component} from 'react';
import Home from './../components/home/Home.jsx';
import {connect} from 'react-redux';


class HomeController extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Home user={this.props.user}/>
    );
  }
}
const mapStateToProps = state=> {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps)(HomeController);
