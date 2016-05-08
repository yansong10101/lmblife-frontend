/**
 * Created by ypling on 5/7/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {changePassword,updateAvatar} from '../../actions/UserActions';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Person from 'material-ui/svg-icons/social/person';
import Security from 'material-ui/svg-icons/hardware/security';
import Paper from '../Common/Paper.jsx';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import CameraAlt from 'material-ui/svg-icons/image/camera-alt';
import RefreshIndicator from 'material-ui/RefreshIndicator';

class UserSettings extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            confirmErrorMessage:""
        };
        this.savePasswordClickHandler = this.savePasswordClickHandler.bind(this);
        this.confirmInputChangeHandler = this.confirmInputChangeHandler.bind(this);
        this.uploadImageClickHandler = this.uploadImageClickHandler.bind(this);
        this.fileInputChangeHandler = this.fileInputChangeHandler.bind(this);
    }

    savePasswordClickHandler(){
        let oldPassword = this.refs.oldPasswordInput.getValue();
        let password = this.refs.passwordInput.getValue();
        let confirmPassword = this.refs.confirmPasswordInput.getValue();
        if(password !== confirmPassword){
            this.setState({confirmErrorMessage:"Password must match."});
        }else{
            this.props.dispatch(changePassword(oldPassword, password, confirmPassword));
        }
    }

    uploadImageClickHandler(){
        this._fileInput.click();
    }

    fileInputChangeHandler(event){
        if(event.target.files.length){
            this.props.dispatch(updateAvatar(event.target.files[0]))
        }
    }

    confirmInputChangeHandler(){
        this.setState({confirmErrorMessage:""});
    }

    render() {
        return (
            <div className="row">
                <div className="row">
                    <div className="col-sx-12 col-sm-4 col-md-3">
                        <Paper>
                            <List>
                                <ListItem primaryText="Profile" leftIcon={<Person />}/>
                                <ListItem primaryText="Security" leftIcon={<Security />}/>
                            </List>
                        </Paper>
                    </div>
                    <div className="col-sx-12 col-sm-8 col-md-9">
                        <Paper>
                            <h4>Profile settings</h4>
                            <Paper zDepth={0}>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <Subheader>Avatar</Subheader>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <Avatar key={this.props.avatar} src={this.props.avatar} size={166} style={{backgroundSize:'166px'}}/>
                                        </div>
                                        <div className="row">
                                            <RaisedButton
                                                label="Upload image"
                                                primary={true}
                                                onClick={this.uploadImageClickHandler}
                                                icon={<CameraAlt/>}
                                            />
                                            <input ref={node =>this._fileInput = node} type="file" className="hide" onChange={this.fileInputChangeHandler}/>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                            <Divider/>
                            <h4>Security settings</h4>
                            <Paper zDepth={0}>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <Subheader>Password</Subheader>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <TextField
                                                ref="oldPasswordInput"
                                                hintText="Type password here"
                                                floatingLabelText="Old password"
                                                type="password"
                                            />
                                        </div>
                                        <div className="row">
                                            <TextField
                                                ref="passwordInput"
                                                hintText="Type password here"
                                                floatingLabelText="New password"
                                                type="password"
                                            />
                                        </div>
                                        <div className="row">
                                            <TextField
                                                ref="confirmPasswordInput"
                                                hintText="Type password here"
                                                floatingLabelText="Confirm password"
                                                type="password"
                                                errorText={this.state.confirmErrorMessage}
                                                onChange={this.confirmInputChangeHandler}
                                            />
                                        </div>
                                        <RaisedButton
                                            label="Save change"
                                            primary={true}
                                            onClick={this.savePasswordClickHandler}
                                        />
                                    </div>
                                </div>
                            </Paper>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}
UserSettings.propTypes = {
    avatar: PropTypes.string
};
export default connect(state=>state.user)(UserSettings);
