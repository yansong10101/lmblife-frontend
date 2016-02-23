import React, {Component} from 'react';
import LoginModal from './../components/Common/LoginModal.jsx';
import {connect} from 'react-redux';


class LayoutController extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <LoginModal show={this.props.showLogin} dispatch={this.props.dispatch}/>
        );
    }
}
const mapStateToProps = state=>({
    showLogin:state.user.showLogin
});//const mapDispatchToProps = (dispatch)=>( {dispatch});

export default connect(mapStateToProps)(LayoutController);
