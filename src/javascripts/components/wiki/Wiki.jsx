import React, {Component, PropTypes} from 'react';
import Navigation from '../Common/Navigation.jsx';
import LoginModal from '../Common/LoginModal.jsx';
import Editor from './Editor.jsx';
import Content from './Content.jsx';
import Folder from './Folder.jsx';
import * as WikiViews from '../../constants/WikiViews.js';

class Wiki extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        var view;
        switch (this.props.view) {
            case WikiViews.CONTENT:
                view = <Content folderPath={this.props.folderPath}
                                currentPage={this.props.currentPage}
                                dispatch={this.props.dispatch}/>;
                break;
            case WikiViews.EDITOR:
                view = <Editor folderPath={this.props.folderPath}
                               currentPage={this.props.currentPage}
                               items={this.props.folderItems.map(item=>item.name)}
                               uploadedImageURL={this.props.uploadedImageURL}
                               dispatch={this.props.dispatch}/>;
                break;
            case WikiViews.FOLDER:
                view = <Folder folderPath={this.props.folderPath}
                               items={this.props.folderItems}
                               dispatch={this.props.dispatch}/>;
                break;
            default:
                view = null;
                break;
        }
        return (
            <div className="container-fluid">
                {view}
            </div>
        );
    }
}
//<Navigation title="Wiki" titleHref="/wiki" needMargin={true} dispatch={this.props.dispatch}/>
//<LoginModal show={this.props.showLogin} dispatch={this.props.dispatch}/>
export default Wiki;