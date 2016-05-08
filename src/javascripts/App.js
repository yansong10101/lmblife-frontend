/**
 * Created by chenghui on 2/15/2016.
 */
import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, browserHistory,Redirect} from 'react-router';
import {connect} from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WikiController from './containers/WikiController.jsx';
import SDKController from './containers/SDKController.jsx';
import HomeController from './containers/HomeController.jsx';
import UserController from './containers/UserController.jsx';
import AdminContainer from './containers/AdminContainer.jsx';
import NavigationController from './containers/NavigationController.jsx';
import LayoutController from './containers/LayoutController.jsx';
import SignUp from './components/user/SignUp.jsx';
import Apply from './components/user/Apply.jsx';
import EmailConfirm from './components/user/EmailConfirm.jsx';
import NoMatch from './components/NoMatch.jsx';
import RoutesManager from './containers/RoutesManager.jsx';
import SchoolListController from './containers/SchoolListController.jsx';
import UserSettings from './components/user/UserSettings.jsx';
import {checkLogin} from './actions/UserActions';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#2196F3",
        primary2Color: "#2196F3",
        primary3Color: "#2196F3",
        primary4Color: "#2196F3",
        accent1Color: "#E74C3C",
        accent2Color: "#E74C3C",
        accent3Color: "#E74C3C",
        accent4Color: "#E74C3C"
    }
});

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.dispatch(checkLogin());
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="container-fluid">
                    <NavigationController />
                    <Router history={browserHistory}>
                        <Route path="/" component={RoutesManager}>
                            <IndexRoute component={HomeController}/>
                            <Route path="freshman_guide/**" component={WikiController}/>
                            <Route path="everyday_life/**" component={WikiController}/>
                            <Route path="graduation_guide/**" component={WikiController}/>
                            <Route path="about/**" component={WikiController}/>
                            <Route path="wiki/**" component={WikiController}/>
                            <Route path="schools" component={SchoolListController}/>
                            <Route path="user" component={UserController}>
                                <IndexRoute component={SignUp}/>
                                <Route path="settings" component={UserSettings}/>
                                <Route path="apply" component={Apply}/>
                                <Route path="email-confirm" component={EmailConfirm}/>
                            </Route>
                            <Route path="admin" component={AdminContainer}/>
                            <Route path="**" component={NoMatch}/>
                        </Route>
                    </Router>
                    <LayoutController />
                </div>
            </MuiThemeProvider>
        );
    }
}
export default connect()(App);