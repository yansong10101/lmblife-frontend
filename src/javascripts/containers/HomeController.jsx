import React, {Component} from 'react';
import Home from './../components/home/Home.jsx';
import {connect} from 'react-redux';


class HomeController extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Home dispatch={this.props.dispatch}/>
        );
    }
}
//const mapStateToProps = state=>({state});
//const mapDispatchToProps = (dispatch)=>( {dispatch});

export default connect()(HomeController);
