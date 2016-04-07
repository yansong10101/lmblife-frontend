/**
 * Created by chenghui on 2/15/2016.
 */
import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, browserHistory,Redirect} from 'react-router';

import WikiController from './containers/WikiController.jsx';
import SDKController from './containers/SDKController.jsx';
import HomeController from './containers/HomeController.jsx';
import UserController from './containers/UserController.jsx';
import NavigationController from './containers/NavigationController.jsx';
import LayoutController from './containers/LayoutController.jsx';
import NoMatch from './components/NoMatch.jsx';
import RoutesManager from './containers/RoutesManager.jsx';
import SchoolListController from './containers/SchoolListController.jsx';

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div>
                <NavigationController />
                <Router history={browserHistory}>
                    <Route path="/" component={RoutesManager}>
                        <IndexRoute component={HomeController}/>
                        <Route path="freshman_guide/**" component={WikiController}/>
                        <Route path="everyday_life/**" component={WikiController}/>
                        <Route path="graduation_guide/**" component={WikiController}/>
                        <Route path="about/**" component={WikiController}/>
                        <Route path="wiki/**" component={WikiController}/>
                        <Route path="sdk" component={SDKController}/>
                        <Route path="user" component={UserController}/>
                        <Route path="schools" component={SchoolListController}/>
                        <Route path="**" component={NoMatch}/>
                    </Route>
                </Router>
                <LayoutController />
            </div>
        );
    }
}
export default App;
//<Route path="/*" component={NoMatch}/>
