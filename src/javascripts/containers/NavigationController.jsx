import React, {Component} from 'react';
import Navigation from './../components/Common/Navigation.jsx';
import {connect} from 'react-redux';


class NavigationController extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const navFixed = true;
        return (
            <Navigation needMargin={navFixed}
                        wikiRoute={this.props.wikiRoute}
                        school={this.props.school}
                        dispatch={this.props.dispatch}/>
        );
    }
}
const mapStateToProps = state=>({
    wikiRoute: state.wiki.currentPage ? state.wiki.folderPath + state.wiki.currentPage.title : state.wiki.folderPath,
    school:state.school});
//const mapDispatchToProps = (dispatch)=>( {dispatch});

export default connect(mapStateToProps)(NavigationController);