/**
 * Created by chenghui on 2/15/2016.
 */
import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, browserHistory,Redirect,IndexRedirect} from 'react-router';
import {connect} from 'react-redux';
import {registerInitAction, deregisterInitAction} from './containers/TransitionManager.jsx';
import {init} from './actions/WikiActions';
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
import OrganizationListController from './containers/OrganizationListController.jsx';
import TransitionManager from './containers/TransitionManager.jsx';

import {checkLogin} from './actions/UserActions';
import {getHomepageSettings} from './actions/HomeActions';

import hostname from './SDK/utils/hostName.js';
import config from './SDK/config.js';
import {tokenPromise} from './SDK/utils/userToken.js';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this._getHomeComponent = this._getHomeComponent.bind(this);
        registerInitAction(init.bind(this), "/wiki/**");
    }

    componentDidMount() {

        if (hostname === "www") {
            if (self===top){
                this.props.dispatch(checkLogin());
                OrganizationListController.fetchData(this.props.dispatch);
            }

        } else {
            tokenPromise.then((token)=> {
                console.log("login in subdomain");
                this.props.dispatch(checkLogin())
            });
            this.props.dispatch(getHomepageSettings());
        }
    }

    _getHomeComponent(location, cb) {
        if (hostname === "www") {
            cb(null, OrganizationListController)
        } else {
            cb(null, HomeController)
        }
    }

    render() {
        return (
            <div>
                <NavigationController />
                <Router history={browserHistory}>
                    <Route path="/" component={TransitionManager}>
                        <IndexRedirect to="/home"/>
                        <Route path="home" getComponent={this._getHomeComponent}/>
                        <Route path="wiki/**" component={WikiController}/>
                        <Route path="organizations" component={OrganizationListController}/>
                        <Route path="user" component={UserController}>
                            <IndexRoute component={SignUp}/>
                            <Route path="apply" component={Apply}/>
                            <Route path="email-confirm" component={EmailConfirm}/>
                        </Route>
                        <Route path="admin" component={AdminContainer}/>
                        <Route path="**" component={NoMatch}/>
                    </Route>
                </Router>
                <LayoutController />
                {hostname !== "www" && (
                    <iframe src={"http://"+config.host+"/nomatch/"} style={{display:"none"}}></iframe>)}
            </div>
        );
    }
}
export default connect()(App);