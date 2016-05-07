import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Admin from '../components/admin/Admin.jsx';

class AdminContainer extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div id="user">
                <Admin data={this.props.admin}/>
            </div>
        );
    }
}

const mapStateToProps = state=>({
    admin: state.admin
});
export default connect(mapStateToProps)(AdminContainer);


