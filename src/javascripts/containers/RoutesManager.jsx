import React, {Component} from 'react';
import ContainerWrapper from './ContainerWrapper.jsx';
import {connect} from 'react-redux';
import {init} from './../actions/WikiActions.js';
import {getHomepageSettings} from './../actions/HomeActions';

class RoutesManager extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let shouldUpdate = true;
        if (!this.props.state.school.cached) {
            this.props.dispatch(getHomepageSettings());
        }
        if (this.props.children.props.route.component && this.props.children.props.route.component.fetchData && this.oldkey !== this.props.location.key) {
            var path = this.props.location.pathname.slice(1);
            path = path.replace("wiki/", "");
            this.props.children.props.route.component.fetchData(this.props.dispatch, path);
            shouldUpdate = false;
        }
        this.oldkey = this.props.location.key;
        return (
            <ContainerWrapper shouldUpdate={shouldUpdate}>
                {this.props.children}
            </ContainerWrapper>
        )

    }
}
const mapStateToProps = state=>({state});
export default connect(mapStateToProps)(RoutesManager);
