import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class UserController extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div id="user" className="container">
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = state=>({
    showLogin: state.user.showLogin,
    isLogin: state.user.isLogin
});
//const mapDispatchToProps = (dispatch)=>( {dispatch});

export default connect(mapStateToProps)(UserController);


