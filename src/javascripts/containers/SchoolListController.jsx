import React, {Component} from 'react';
import SchoolList from './../components/lmb/SchoolList.jsx';
import {getSchoolList} from './../actions/LMBActions';
import {connect} from 'react-redux';


class SchoolListController extends Component {
    constructor(props, context) {
        super(props, context);
    }
    static fetchData(dispatch) {
        dispatch(getSchoolList());
    }

    render() {
        return (
            <SchoolList user={this.props.user}
                        schoolList={this.props.schoolList}
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
        schoolList: state.school.list
    }
};

export default connect(mapStateToProps)(SchoolListController);
