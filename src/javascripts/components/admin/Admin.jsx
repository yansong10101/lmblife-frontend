import React,{Component, PropTypes} from 'react';
import CustomerTable from './CustomerTable.jsx';
import * as actions from '../../actions/AdminActions';

class Admin extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <h1>Admin tool</h1>
                <CustomerTable customers={this.props.data.customers}/>
            </div>
        );
    }
}
Admin.propTypes = {
    data:PropTypes.object
};
export default Admin;