import React, {Component} from 'react';
import ContainerWrapper from './ContainerWrapper.jsx';
import {connect} from 'react-redux';
import {init} from './../actions/WikiActions.js';

class RoutesManager extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let shouldUpdate = true;
        let view = this.props.location.pathname.split('/')[1];
        if (view === 'wiki' && this.oldkey !== this.props.location.key) {
            this.props.children.props.route.component.fetchData(this.props.dispatch, this.props.location.pathname.slice(6));
            shouldUpdate = false;

        }
        if (view === 'sdk' && this.oldkey !== this.props.location.key) {
            this.props.children.props.route.component.fetchData(this.props.dispatch);
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
