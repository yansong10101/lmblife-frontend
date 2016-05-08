/**
 * Created by ypling on 5/7/16.
 */
import React, {Component, PropTypes} from 'react';
import MuiPaper from 'material-ui/Paper';
class Paper extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <MuiPaper {...this.props} style={{padding:'1rem'}}/>
        );
    }
}
Paper.propTypes = {

};
export default Paper;
