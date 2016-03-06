import React, {Component} from 'react';
import {connect} from 'react-redux';
import {init} from './../actions/WikiActions.js';


class RoutesManager extends Component {
    constructor(props, context) {
        super(props, context);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('check location');
        if (/^\/wiki\//.test(nextProps.location.pathname) && nextProps.location.key !== this.props.location.key) {

            this.props.dispatch(init(nextProps.location.pathname.slice(6)));
            return false;

        }
        return true;
    }
    componentWillReceiveProps(nextProps){
        console.log("Router props update");
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
const mapStateToProps = state=>({wiki:state.wiki});
//const mapDispatchToProps = (dispatch)=>( {dispatch});

export default connect(mapStateToProps)(RoutesManager);
