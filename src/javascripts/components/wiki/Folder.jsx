import React, {Component, PropTypes} from 'react';
import {routeActions} from 'react-router-redux';
import Editor from './Editor.jsx';
import Breadcrumb from './Breadcrumb.jsx';
import {editPage,selectItem,createFolder,createPage} from '../../actions/WikiActions';
import * as WikiItemTypes from '../../constants/WikiItemTypes.js';
import {
    Button,
    Glyphicon,
    Grid,
    Row,
    Col
} from 'react-bootstrap';
class Folder extends Component {
    constructor(props, context) {
        super(props, context);
        //this._editClickHandler = this._editClickHandler.bind(this);
        this._itemClickHandler = this._itemClickHandler.bind(this);
        this._createFolderClickHandler = this._createFolderClickHandler.bind(this);
        this._createPageClickHandler = this._createPageClickHandler.bind(this);
    }

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
            var icon = item.type === WikiItemTypes.FOLDER ? 'folder-close' : 'file';
            return (
                <div key={item.path}>
                    <a onClick={()=>this._itemClickHandler(item)}>
                        <Glyphicon glyph={icon}/>{item.name}</a>
                </div>
            );
        });
        var adminbar = this.props.admin ? (
            <Col xs={12}>
                <Breadcrumb folderPath={this.props.folderPath} activeLastOne={true}/>

                <div key="contentButtons" className="pull-right">
                    <Button onClick={this._createFolderClickHandler}>
                        <Glyphicon glyph="book"/>&nbsp;Create Folder
                    </Button>
                    <Button onClick={this._createPageClickHandler}>
                        <Glyphicon glyph="file"/>&nbsp;Add Page
                    </Button>
                </div>
            </Col>
        ) : ""

        return (
            <Grid>
                <Row>{adminbar}
                </Row>
                <Row>
                    <Col xs={12}>
                        {items}
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default Folder;
