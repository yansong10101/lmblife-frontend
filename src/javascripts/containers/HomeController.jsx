import React, {Component} from 'react';
import Home from './../components/home/Home.jsx';
import {getHomepageSettings} from './../actions/HomeActions';
import {connect} from 'react-redux';


class HomeController extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        if (!this.props.school.cached) {
            this.props.dispatch(getHomepageSettings());
        }
        return (
            <Home user={this.props.user}
                  editable={this.props.school.editable}
                  homepage={this.props.school.editable?this.props.school.editableHomepage:this.props.school.homepage}
                  dispatch={this.props.dispatch}
                  uploadedImageURL={this.props.uploadedImageURL}
                  admin={true}
                />
        );
    }
}
const mapStateToProps = state=> {
    return {
        user: state.user,
        uploadedImageURL: state.wiki.uploadedImageURL,
        school: state.school
    }
};

export default connect(mapStateToProps)(HomeController);
