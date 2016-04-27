/**
 * Created by chenghui on 2/15/2016.
 */
import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute,IndexRedirect, browserHistory,Redirect} from 'react-router';
import {connect} from 'react-redux';

import WikiController from './containers/WikiController.jsx';
import SDKController from './containers/SDKController.jsx';
import HomeController from './containers/HomeController.jsx';
import UserController from './containers/UserController.jsx';
import NavigationController from './containers/NavigationController.jsx';
import LayoutController from './containers/LayoutController.jsx';
import NoMatch from './components/NoMatch.jsx';
import RoutesManager from './containers/RoutesManager.jsx';
import SchoolListController from './containers/SchoolListController.jsx';
import Motions from './components/motion.eg/Motions.jsx';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this._getHomeComponent=this._getHomeComponent.bind(this)
    }

    _getHomeComponent(location, cb) {
        if (/^www\./i.test(window.location.hostname)) {
            SchoolListController.fetchData(this.props.dispatch);
            cb(null, SchoolListController)
        } else {
            cb(null, HomeController)
        }
    }

    render() {

        return (
            <div>
                <NavigationController />
                <Router history={browserHistory}>
                    <Route path="/" component={RoutesManager}>
                        <IndexRedirect to="/home"/>
                        <Route path="home" getComponent={this._getHomeComponent}/>
                        <Route path="freshman_guide/**" component={WikiController}/>
                        <Route path="everyday_life/**" component={WikiController}/>
                        <Route path="graduation_guide/**" component={WikiController}/>
                        <Route path="about/**" component={WikiController}/>
                        <Route path="wiki/**" component={WikiController}/>
                        <Route path="sdk" component={SDKController}/>
                        <Route path="user" component={UserController}/>
                        <Route path="motions" component={Motions}/>
                        <Redirect from="**" to="/"/>
                    </Route>
                </Router>
                <LayoutController />
            </div>
        );
    }
}
export default connect()(App);
//<Route path="/*" component={NoMatch}/>
