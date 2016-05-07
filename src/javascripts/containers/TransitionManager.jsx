import React, {Component} from 'react';
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
            pathname = this.props.routing.location.pathname;
            key = this.props.routing.location.key;
        }
        if (pathname && key && pathname !== this.oldPath || key !== this.oldKey) {
            var patt;
            Object.keys(_registeredInitActions).every((e, i)=> {
                //console.log(e);
                patt = new RegExp(e, "g");
                if (patt.test(pathname)) {
                    shouldChildrenUpdate = false;
                    this.props.dispatch(_registeredInitActions[e](pathname.substr(6)));
                    return false;
                } else {
                    shouldChildrenUpdate = true;
                    return true;
                }

            });

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
    var pstr = path.replace(/\*\*/g, ".+");
    pstr = pstr.replace(/\/\*/g, "[^\/]+");
    pstr = pstr.replace(/\.\*/g, "[^\/]+");
    if (_registeredInitActions[pstr] === undefined) {
        _registeredInitActions[pstr] = action;
    } else {
        console.error("path: " + '\"' + path + '\" already registered.')
    }
}

export function deregisterInitAction(path) {
    var pstr = path.replace(/\*\*/g, ".+");
    pstr = pstr.replace(/\/\*/g, "[^\/]+");
    pstr = pstr.replace(/\.\*/g, "[^\/]+");
    _registeredInitActions[pstr] = undefined;
}