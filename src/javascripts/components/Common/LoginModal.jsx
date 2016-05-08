import React,{Component} from 'react';
import {Modal, Button, Input} from 'react-bootstrap';
import {push} from 'react-router-redux';
import {closeLogin,login} from '../../actions/UserActions';

class LoginModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.onHideHandler = this.onHideHandler.bind(this);
        this.loginClickHandler = this.loginClickHandler.bind(this);
        this.signUpClickHandler = this.signUpClickHandler.bind(this);
        this.forgotPasswordClickHandler = this.forgotPasswordClickHandler.bind(this);
    }

    onHideHandler() {
        this.props.dispatch(closeLogin());
    }

    loginClickHandler() {
        var username = this.refs._email.getValue();
        var password = this.refs._password.getValue();
        this.props.dispatch(login(username, password));
    }

    signUpClickHandler() {
        this.props.dispatch(push('/user'));
        this.props.dispatch(closeLogin());
    }

    forgotPasswordClickHandler() {
        this.props.dispatch(push('/user/forgot'));
    }

    //react life cycles
    render() {
        return (
            <Modal className="text-center" bsSize="small" show={this.props.show} onHide={this.onHideHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in to LMB</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="loginForm">
                        <p className="logo">LOGO</p>
                        <Input ref="_email" type="email" placeholder="Email"/>
                        <Input ref="_password" type="password" placeholder="Password"/>
                        <p className="text-left">
                            <a href="javascript:void(0)" onClick={this.forgotPasswordClickHandler}>Forgot password?</a>
                        </p>
                        <Button bsStyle="primary" block onClick={this.loginClickHandler}>Log in</Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <p className="text-center">Don't have an account?
                        <a href="javascript:void(0)" onClick={this.signUpClickHandler}>Sign up »</a></p>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default LoginModal;