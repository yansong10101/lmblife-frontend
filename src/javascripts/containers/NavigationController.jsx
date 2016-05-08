import React, {Component} from 'react';
import Navigation from './../components/navigation/Navigation.jsx';
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
                        dispatch={this.props.dispatch}
                        user={this.props.user}
            />
        );
    }
}
const mapStateToProps = state=>({
    wikiRoute: state.wiki.currentPage ? state.wiki.folderPath + state.wiki.currentPage.title : state.wiki.folderPath,
    school: state.school,
    user: state.user
});
//const mapDispatchToProps = (dispatch)=>( {dispatch});

export default connect(mapStateToProps)(NavigationController);