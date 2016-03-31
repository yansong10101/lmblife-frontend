import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {
    Button,
    Glyphicon,
} from 'react-bootstrap';
import {push} from 'react-router-redux';
import {apply} from '../../actions/HomeActions';
import {applyPermission,openLogin} from '../../actions/UserActions';

import {uploadImage} from '../../actions/WikiActions';
import {UPLOAD_IMAGE} from '../../constants/ActionTypes.js';

class Cover extends Component {
    constructor(props, context) {
        super(props, context);
        this.applyClickHandler = this.applyClickHandler.bind(this);
        this._editHandler = this._editHandler.bind(this);
    }

    applyClickHandler() {
        if (!this.props.editable) {
            if (!this.props.user.token) {
                this.props.dispatch(openLogin());
            }
            if (this.props.user.emailVerified) {
                this.props.dispatch(push('/user/apply'));
            }
            this.props.dispatch(applyPermission(this.props.user.token));
        }
    }

    _editHandler(type, object) {
        this.props.dispatch({
            type: type,
            data: Object.assign({}, this.props.cover, object)
        })
    }

    render() {
        var logo = this.props.logo.src ? <img src={this.props.logo.src} alt=""/> :
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                 alt="logo"/>;
        var classSet = function (classes) {
            var classString = " ";
            Object.keys(classes).forEach(function (c) {
                if (classes[c]) {
                    classString += c + " ";
                }
            });
            return classString;
        };
        return (
            <div className="cover" style={{backgroundImage: "url(" + this.props.cover.img.src + ")"}}>
                <div className={classSet({"image-editor":true,"hidden":!this.props.editable})}>
                    <Button onClick={(e)=>{
                                this._editHandler("Cover",{img:{src:this.props.uploadedImageURL,alt:""}})
                               }} bsStyle="primary">"Set backImg"</Button>
                    <Button onClick={(e)=>{
                                this._editHandler("Cover",{img:{src:null,alt:""}})
                               }} bsStyle="primary">"remove backImg"</Button>
                </div>
                <div className="container">
                    <div className="logo" style={{position:"relative"}}>
                        {logo}
                        <div className={classSet({"image-editor":true,"hidden":!this.props.editable})}>
                            <Glyphicon onClick={(e)=>{
                                                this._editHandler("Logo",{src:this.props.uploadedImageURL})
                                             }}
                                       glyph="edit"/>
                            <Glyphicon onClick={(e)=>{
                                                this._editHandler("Logo",{src:null})
                                             }}
                                       glyph="remove"/>
                        </div>

                    </div>

                    <p className="lead" contentEditable={this.props.editable}
                       onKeyUp={(e)=>{
                           this._editHandler("Cover",{text:e.target.innerText})
                           }}>
                        {this.props.cover.text}
                    </p>

                    <p className="lead">
                        <a onClick={this.applyClickHandler}
                           contentEditable={this.props.editable}
                           onKeyUp={(e)=>{
                                this._editHandler("Cover",{linkText: e.target.innerText})
                               }}
                           className="btn btn-outline-inverse btn-lg">
                            {this.props.cover.linkText}
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}
//SectionContent.propTypes = {
//    logo: PropTypes,
//    cover:PropTypes
//};
export default Cover;

