import React, {Component, PropTypes} from 'react';
import {routeActions} from 'react-router-redux';
import Editor from './Editor.jsx';
import Breadcrumb from './Breadcrumb.jsx';
import {editPage,selectItem,createFolder,createPage} from '../../actions/WikiActions';
import * as WikiItemTypes from '../../constants/WikiItemTypes.js';

class Folder extends Component {
    constructor(props, context) {
        super(props, context);
        //this._editClickHandler = this._editClickHandler.bind(this);
        this._itemClickHandler = this._itemClickHandler.bind(this);
        this._createFolderClickHandler = this._createFolderClickHandler.bind(this);
        this._createPageClickHandler = this._createPageClickHandler.bind(this);
    }

    //_editClickHandler() {
    //    this.props.dispatch(editPage());
    //}

    _itemClickHandler(item) {
        this.props.dispatch(selectItem(item));
    }

    _createFolderClickHandler() {
        var folderName = prompt('create folder', 'please enter a folder name');
        if (folderName) {
            this.props.dispatch(createFolder(this.props.folderPath + folderName));
        }
    }

    _createPageClickHandler() {
        this.props.dispatch(createPage());
    }

    render() {
        var items = this.props.items.map((item)=> {
            var icon = (item.type === WikiItemTypes.FOLDER)
                ? 'glyphicon glyphicon-folder-close'
                : 'glyphicon glyphicon-file';
            return (
                <div key={item.path}>
                    <a onClick={()=>this._itemClickHandler(item)}>
                        <span className={icon}></span>{item.name}</a>
                </div>
            );
        });
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <Breadcrumb folderPath={"wiki/"+this.props.folderPath} activeLastOne={true}/>

                        <div key="contentButtons" className="pull-right">
                            <button className="btn btn-default" onClick={this._createFolderClickHandler}>
                                <span className="glyphicon glyphicon-book" aria-hidden="true"></span>
                                &nbsp;Create Folder
                            </button>
                            <button className="btn btn-default" onClick={this._createPageClickHandler}>
                                <span className="glyphicon glyphicon-file" aria-hidden="true"></span>
                                &nbsp;Add Page
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        {items}
                    </div>
                </div>
            </div>
        );
    }
}
export default Folder;
