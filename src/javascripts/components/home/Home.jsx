import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CryptoJS from 'crypto-js';
import {
    Button
} from 'react-bootstrap';
import Cover2 from './Cover2.jsx';
import SectionContent from './SectionContent.jsx';
import FeatureGroup from './FeatureGroup.jsx';
import Footer from './Footer.jsx';

import {uploadImage} from '../../actions/WikiActions';
import {editPage,savePage,cancelEdit} from './../../actions/HomeActions.js';
import {UPLOAD_IMAGE} from '../../constants/ActionTypes.js';


const imageSample = {
    white: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    gray: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    black: "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
};

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this._fileInputChangeHandler = this._fileInputChangeHandler.bind(this);
        this._editClickHandler = this._editClickHandler.bind(this);
        this._saveClickHandler = this._saveClickHandler.bind(this);
        this._cancelClickHandler = this._cancelClickHandler.bind(this);
        this._imageUploadClickHandler = this._imageUploadClickHandler.bind(this);
    }

    _fileInputChangeHandler(e) {
        var file = e.target.files[0];
        if (file) {
            this.props.dispatch(uploadImage(file));
        }
    }

    _imageUploadClickHandler() {
        ReactDOM.findDOMNode(this.refs.fileInput).click();
    }

    _editClickHandler() {
        this.props.dispatch(editPage());
    }

    _saveClickHandler() {
        this.props.dispatch(savePage(CryptoJS.RC4.encrypt(JSON.stringify(this.props.homepage),"myKey").toString()));
    }

    _cancelClickHandler() {
        this.props.dispatch(cancelEdit());
    }

    render() {
        const notice = this.props.homepage.notice;
        const featureGroup = this.props.homepage.featureGroup;
        const logo = this.props.homepage.logo;
        const cover = this.props.homepage.cover;
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
            <div className="school-homepage">
                <div className={classSet({"edit-controller":true,"hidden":!this.props.admin})}>
                    <Button onClick={this._editClickHandler}>Edit</Button>
                    <Button onClick={this._saveClickHandler}>Save</Button>
                    <Button onClick={this._cancelClickHandler}>Cancel</Button> <br/>

                    <div className={classSet({"image-uploader":true,"hidden":!this.props.editable})}
                         onClick={this._imageUploadClickHandler}>
                        Click to Upload Image:
                        <div style={{backgroundImage: "url(" + this.props.uploadedImageURL + ")"}}></div>
                    </div>
                    <input className="hidden" ref='fileInput' type="file" id="myFile"
                           onChange={this._fileInputChangeHandler}/>
                </div>

                <Cover2 logo={logo}
                        cover={cover}
                        editable={this.props.editable}
                        dispatch={this.props.dispatch}
                        uploadedImageURL={this.props.uploadedImageURL}
                    />

                <SectionContent data={notice} type="notice"
                                editable={this.props.editable}
                                dispatch={this.props.dispatch}>
                    <div className="notice" contentEditable={this.props.editable}
                         onKeyUp={(e)=>{
                            this.props.dispatch({
                                type: "Notice",
                                data: Object.assign({}, notice, {data:e.target.innerText})
                            })
                         }}>
                        {notice.data.trim()}
                    </div>
                </SectionContent>

                <SectionContent data={featureGroup} type="featureGroup"
                                editable={this.props.editable}
                                dispatch={this.props.dispatch}>
                    <FeatureGroup featureGroup={featureGroup}
                                  uploadedImageURL={this.props.uploadedImageURL}
                                  editable={this.props.editable}
                                  dispatch={this.props.dispatch}/>
                </SectionContent>
                <Footer
                    dispatch={this.props.dispatch}/>
            </div>
        );
    }
}
export default Home;
