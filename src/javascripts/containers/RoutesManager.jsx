import React, {Component} from 'react';
import ContainerWrapper from './ContainerWrapper.jsx';
import {connect} from 'react-redux';
import {init} from './../actions/WikiActions.js';


class RoutesManager extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let shouldUpdate=true;
        if (/^\/wiki\//.test(this.props.location.pathname)  && this.oldkey !== this.props.location.key) {
            this.props.dispatch(init(this.props.location.pathname.slice(6)/*,this.props.location,this.oldlocation*/));
            shouldUpdate= false;

        }
        this.oldkey=this.props.location.key;
        //this.oldlocation=this.props.location;
        return (
            <ContainerWrapper shouldUpdate={shouldUpdate}>
                {this.props.children}
            </ContainerWrapper>
        )

    }
}
const mapStateToProps = state=>({state});
export default connect(mapStateToProps)(RoutesManager);
