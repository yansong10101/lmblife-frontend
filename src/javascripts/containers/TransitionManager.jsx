import React, {Component} from 'react';
import ContainerWrapper from './ContainerWrapper.jsx';
import {connect} from 'react-redux';
import {init} from './../actions/WikiActions.js';

let _registeredInitActions = {};

class TransitionManager extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let shouldChildrenUpdate = true;
        let pathname;
        let key;
        if (this.props.routing) {
            pathname = this.props.routing.pathname;
            key = this.props.routing.key;
        }
        if (pathname && key && pathname !== this.oldPath || key !== this.oldKey) {
            if (_registeredInitActions[pathname]) {
                shouldChildrenUpdate = false;
                this.props.dispatch(_registeredInitActions[pathname]());
            } else {
                shouldChildrenUpdate = true;
            }
            this.oldPath = pathname;
            this.oldKey = key;
        }

        return (
            <UpdateWrapper shouldUpdate={shouldChildrenUpdate}>
                {this.props.children}
            </UpdateWrapper>
        );
    }
}

class UpdateWrapper extends Component {
    constructor(props, context) {
        super(props, context);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.shouldUpdate;
    }

    render() {
        return this.props.shouldUpdate ? this.props.children : null;
    }
}

export default connect(state=>state)(TransitionManager);


export function registerInitAction(action, path) {
    path = path.replace(/\/$/, "");
    if (_registeredInitActions[path] === undefined) {
        _registeredInitActions[path] = action;
    } else {
        console.error("path: " + '\"' + path + '\" already registered.')
    }
}

export function deregisterInitAction(path) {
    path = path.replace(/\/$/, "");
    _registeredInitActions[path] = undefined;
}