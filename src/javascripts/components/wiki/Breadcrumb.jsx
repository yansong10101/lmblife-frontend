import React, {Component, PropTypes} from 'react';
import {routeActions} from 'react-router-redux';
import {getFolderItems} from '../../actions/WikiActions.js';
import {connect} from 'react-redux';


class Breadcrumb extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        var _link = "/";
        var listItems = this.props.folderPath.split('/').map((item, index, arr) => {
            _link += item + '/';
            if (!this.props.activeLastOne || arr.length !== index + 1) {
                var path = _link;
                return (<li key={index}>
                    <a onClick={()=>{this.props.dispatch(routeActions.push(path))}}>{item}</a>
                </li>);
            } else {
                //currentOne make it not click able
                return (<li key={index} className="active">{item}</li>);
            }
        }, this);
        return (
            <div className="pull-left">
                {listItems.length ? <ol className="breadcrumb">
                    {listItems}
                </ol> : null}
            </div>
        );
    }
}
export default connect()(Breadcrumb);
