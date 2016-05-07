/**
 * Created by chenghui on 2/15/2016.
 */
import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, browserHistory,Redirect} from 'react-router';
import {connect} from 'react-redux';
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
import OrganizationListController from './containers/OrganizationListController.jsx';

import {checkLogin} from './actions/UserActions';
class App extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount(){
      this.props.dispatch(checkLogin());
    }
    render() {
        return (
            <div>
                <NavigationController />
                <Router history={browserHistory}>
                    <Route path="/" component={RoutesManager}>
                        <IndexRoute component={HomeController}/>
                        <Route path="freshman_guide/**" component={WikiController}/>F
                        <Route path="everyday_life/**" component={WikiController}/>
                        <Route path="graduation_guide/**" component={WikiController}/>
                        <Route path="about/**" component={WikiController}/>
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
            </div>
        );
    }
}
export default connect()(App);