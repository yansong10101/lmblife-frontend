import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {openLogin,logout} from '../../actions/UserActions';
import {push} from 'react-router-redux';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Settings from 'material-ui/svg-icons/action/settings';
import Exit from 'material-ui/svg-icons/action/exit-to-app';


class NavigationUserItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.loginClickHandler = this.loginClickHandler.bind(this);
        this.userClickHandler = this.userClickHandler.bind(this);
        this.popoverRequestCloseHandler = this.popoverRequestCloseHandler.bind(this);
        this.logoutClickHandler = this.logoutClickHandler.bind(this);
        this.settingsClickHandler = this.settingsClickHandler.bind(this);
        this.state = {
            open: false
        }
    }

    loginClickHandler() {
        this.setState({open: false});
        this.props.dispatch(openLogin());
    }

    userClickHandler(event) {
        event.preventDefault();
        this.setState({open: true, anchorEl: event.currentTarget});
    }

    popoverRequestCloseHandler() {
        this.setState({open: false})
    }

    logoutClickHandler() {
        this.setState({open: false});
        this.props.dispatch(logout());
        this.props.dispatch(push('/'));
    }

    settingsClickHandler() {
        this.setState({open: false});
        this.props.dispatch(push('/user/settings'));
    }

    render() {
        if (this.props.user.isLogin) {
            return (
                <span>
                    <FlatButton
                        label={this.props.user.firstName+" "+ this.props.user.lastName}
                        labelStyle={{textTransform:'capitalize'}}
                        onClick={this.userClickHandler}
                        icon={ <Avatar key={this.props.user.avatar} src={this.props.user.avatar} size={28}/>}
                    />
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        onRequestClose={this.popoverRequestCloseHandler}
                        animation={PopoverAnimationVertical}
                    >
                        <Menu>
                            <MenuItem primaryText="Settings" leftIcon={<Settings />}
                                      onClick={this.settingsClickHandler}/>
                            <MenuItem primaryText="Log out" onClick={this.logoutClickHandler} leftIcon={<Exit />}/>
                        </Menu>
                    </Popover>
                </span>
            )
        } else {
            return (
                <FlatButton
                    label="Log in"
                    onClick={this.loginClickHandler}
                    primary={true}
                />
            )
        }

    }
}
NavigationUserItem.propTypes = {
    user: PropTypes.object
};
export default connect()(NavigationUserItem);
