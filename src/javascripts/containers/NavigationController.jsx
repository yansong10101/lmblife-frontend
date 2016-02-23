import React, {Component} from 'react';
import Navigation from './../components/Common/Navigation.jsx';
import {connect} from 'react-redux';


class NavigationController extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const navFixed=false;
        return (
            <Navigation needMargin={navFixed} wikiRoute={this.props.route} dispatch={this.props.dispatch}/>
        );
    }
}
const mapStateToProps = state=>({route:state.wiki.route});
//const mapDispatchToProps = (dispatch)=>( {dispatch});

export default connect(mapStateToProps)(NavigationController);