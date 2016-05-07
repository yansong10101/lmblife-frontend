import React, {Component} from 'react';
import OrganizationList from './../components/lmb/OrganizationList.jsx';
import {getOrganizationList} from './../actions/LMBActions';
import {connect} from 'react-redux';


class OrganizationListController extends Component {
    constructor(props, context) {
        super(props, context);
    }

    static fetchData(dispatch) {
        dispatch(getOrganizationList());
    }

    render() {
        return (
            <OrganizationList user={this.props.user}
                              organizationList={this.props.organizationList}
                />
        );
    }
}
const mapStateToProps = state=> {
    return {
        user: state.user,
        organizationList: state.organization.list
    }
};

export default connect(mapStateToProps)(OrganizationListController);
