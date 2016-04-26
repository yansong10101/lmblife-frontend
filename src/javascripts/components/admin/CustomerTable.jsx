import React,{Component, PropTypes} from 'react';
import {Table, Button} from 'react-bootstrap';
import * as customerStates from '../../constants/customerStates';

class CustomerTable extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Table striped bordered condensed>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>State</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.customers.map(customer => {
                        let customerState;
                        if(customer.state === customerStates.APPLY){
                            customerState = (<Button>approve</Button>);
                        }else{
                            customerState = customer.level;
                        }
                        return (
                            <tr>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customerState}</td>
                                <td>
                                    <Button>edit</Button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}
CustomerTable.propTypes = {
    customers: PropTypes.array
};
export default CustomerTable;