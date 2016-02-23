import React, {Component, PropTypes} from 'react';
import Wiki from './../components/wiki/Wiki.jsx';
import {routing} from '../actions/WikiActions.js';
import {connect} from 'react-redux';
import {FOLDER} from '../constants/WikiViews.js';

class WikiController extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        if (this.props.folderItems.length === 0)
            this.props.dispatch(routing(this.props.params.splat));
    }

    render() {
        return (
            <Wiki currentPage={this.props.currentPage} view={this.props.currentView}
                  folderItems={this.props.folderItems} route={this.props.route}
                  uploadedImageURL={this.props.uploadedImageURL}
                  dispatch={this.props.dispatch}
                />
        );
    }
}
const mapStateToProps = state=>({
    currentPage: state.wiki.currentPage,
    currentView: state.wiki.currentView,
    folderItems: state.wiki.folderItems,
    route: state.wiki.route,
    uploadedImageURL: state.wiki.uploadedImageURL,
});
//const mapDispatchToProps = (dispatch)=>( {dispatch});

export default connect(mapStateToProps)(WikiController);


