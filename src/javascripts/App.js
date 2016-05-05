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
import TransitionManager from './containers/TransitionManager.jsx';
import SchoolListController from './containers/SchoolListController.jsx';

import {checkLogin} from './actions/UserActions';
import {getHomepageSettings} from './actions/HomeActions';

class App extends Component {
    constructor(props, context) {
        super(props, context); 
        this._getHomeComponent=this._getHomeComponent.bind(this);
        registerInitAction(init.bind(this),"/bca/**");
        registerInitAction(init.bind(this),"/abc/**");
        registerInitAction(init.bind(this),"/wiki/**");

    }
    componentDidMount(){
      this.props.dispatch(checkLogin());
        if (/^www\./i.test(window.location.hostname)) {
            SchoolListController.fetchData(this.props.dispatch);
        } else {
          this.props.dispatch(getHomepageSettings());
        }
    }
    _getHomeComponent(location, cb) {
        if (/^www\./i.test(window.location.hostname)) {
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
                    <Route path="/" component={TransitionManager}>
                        <IndexRedirect to="/home"/>
                        <Route path="home" getComponent={this._getHomeComponent}/>
                        <Route path="wiki/**" component={WikiController}/>
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
            </div>
        );
    }
}
const mapStateToProps = state=> {
    return {
        school: state.school
    }
};
export default connect(mapStateToProps)(App);
