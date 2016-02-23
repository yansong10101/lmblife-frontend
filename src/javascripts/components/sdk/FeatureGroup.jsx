import React, {Component, PropTypes} from 'react';

class FeatureGroup extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <h1>Feature Groups</h1>
                {this.props.featureGroups.map((item, index)=>
                        <p key={index}>{item.feature_name}</p>
                )}
            </div>
        );
    }
}

export default FeatureGroup;


