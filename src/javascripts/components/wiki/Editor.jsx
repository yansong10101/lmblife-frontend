import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import TinyMCE from 'react-tinymce';
import {EDITOR_MIN_HEIGHT} from '../../constants/EditorMinHeight.js';
import {savePage,cancelEdit,uploadImage} from '../../actions/WikiActions';
import Breadcrumb from './Breadcrumb.jsx';
import {Input} from 'react-bootstrap';
class Editor extends Component {
    constructor(props, context) {
        super(props, context);

        this._editorContent = undefined;
        this._title = undefined;
        this._oldTitle = undefined;
        this._fileUploadCallback = undefined;

        this._editorChangeHandler = this._editorChangeHandler.bind(this);
        this._titleChangeHandler = this._titleChangeHandler.bind(this);
        this._saveClickHandler = this._saveClickHandler.bind(this);
        this._cancelClickHandler = this._cancelClickHandler.bind(this);
        this._pickFileClickHandler = this._pickFileClickHandler.bind(this);
        this._fileInputChangeHandler = this._fileInputChangeHandler.bind(this);

    }

    componentWillMount() {
        if (this.props.currentPage) {
            this._editorContent = this.props.currentPage.content;
            this._title = this.props.currentPage.title;
            this._oldTitle = this.props.currentPage.title;
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this._fileUploadCallback !== undefined && nextProps.uploadedImageURL !== undefined) {
            this._fileUploadCallback(nextProps.uploadedImageURL);
        }
    }

    //private
    _editorChangeHandler(event) {
        this._editorContent = event.target.getContent();
    }

    _titleChangeHandler(event) {
        this._title = event.target.value;
    }

    _saveClickHandler() {
        if (this._oldTitle!==this._title && this.props.items.indexOf(this._title)!==-1) {
            alert("test");
        } else {
            this.props.dispatch(savePage(this.props.folderPath, this._oldTitle, {
                title: this._title,
                content: this._editorContent
            }));
        }
    }

    _cancelClickHandler() {
        this.props.dispatch(cancelEdit());
    }

    _pickFileClickHandler(callback, value, mate) {
        var fileInput = ReactDOM.findDOMNode(this.refs.fileInput);
        this._fileUploadCallback = callback;
        fileInput.value = '';
        fileInput.click();
    }

    _fileInputChangeHandler(event) {
        var file = event.target.files[0];
        if (file) {
            this.props.dispatch(uploadImage(file));
        }
    }

    //react life cycles
    render() {
        var adminbar=this.props.admin?(  <div className="col-xs-12">
                <Breadcrumb folderPath={this.props.folderPath} activeLastOne={true}/>

                <div key="editorButtons" className="pull-right">
                    <button className="btn btn-default" onClick={this._saveClickHandler}>
                        <span className="glyphicon glyphicon-save" aria-hidden="true"></span>
                        &nbsp;Save
                    </button>
                    <button className="btn btn-default" onClick={this._cancelClickHandler}>
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                        &nbsp;Cancel
                    </button>
                </div>
            </div>
        ):""

        return (
            <div>
                <div className="row">
                    {adminbar}
                </div>
                <form>
                    <Input type="text" label="Title" placeholder="Please input a page tile." defaultValue={this._title}
                           onChange={this._titleChangeHandler}/>
                    <Input label="Content" wrapperClassName="wrapper">
                        <TinyMCE content={this._editorContent} config={{
              plugins: 'autolink link image lists print preview',
              toolbar: 'undo redo | bold italic | image | alignleft aligncenter alignright',
              file_picker_callback:this._pickFileClickHandler,
              min_height: EDITOR_MIN_HEIGHT,
              image_prepend_url: "http://www.tinymce.com/images/"
            }} onChange={this._editorChangeHandler}/>
                    </Input>
                    <input style={{display:'none'}} ref='fileInput' type="file" id="myFile"
                           onChange={this._fileInputChangeHandler}/>
                </form>
            </div>
        );
    }


}
export default Editor;