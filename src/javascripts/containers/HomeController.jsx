import React, {Component} from 'react';
import Home from './../components/home/Home.jsx';
import {connect} from 'react-redux';


class HomeController extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Home editable={this.props.organization.editable}
                  homepage={this.props.organization.editable?this.props.organization.editableHomepage:this.props.organization.homepage}
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
        organization: state.organization,
    }
};

export default connect(mapStateToProps)(HomeController);
