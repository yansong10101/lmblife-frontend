import React, {Component, PropTypes} from 'react';
import Wiki from './../components/wiki/Wiki.jsx';
import {init} from '../actions/WikiActions.js';
import {connect} from 'react-redux';
import {FOLDER} from '../constants/WikiViews.js';

class WikiController extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount(){
        console.log('wiki did mount');
    }
    componentWillReceiveProps(nextProps){
        console.log("wiki receive props:");
    }
    render() {
        return (
            <Wiki currentPage={this.props.currentPage} view={this.props.currentView}
                  folderItems={this.props.folderItems} folderPath={this.props.folderPath}
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
    folderPath: state.wiki.folderPath,
    uploadedImageURL: state.wiki.uploadedImageURL,
});
//const mapDispatchToProps = (dispatch)=>( {dispatch});

export default connect(mapStateToProps)(WikiController);


