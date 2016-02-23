import React, {Component, PropTypes} from 'react';
import FeatureGoup from './../components/sdk/FeatureGroup.jsx';
import {getFeatureGroups} from './../actions/SDKActions';
import {connect} from 'react-redux';

class SDKController extends Component {
    constructor(props, context) {
        super(props, context);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getFeatureGroups());
    }

    render() {
        return (
            <div>
                <FeatureGoup featureGroups={this.props.featureGroups} dispatch={this.props.dispatch}/>
            </div>
        );
    }
}
const mapStateToProps = state=>({
    featureGroups: state.SDK.featureGroups,
});
//const mapDispatchToProps = (dispatch)=>( {dispatch});

export default connect(mapStateToProps)(SDKController);