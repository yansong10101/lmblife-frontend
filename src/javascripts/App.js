/**
 * Created by chenghui on 2/15/2016.
 */
import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import WikiController from './containers/WikiController.jsx';
import SDKController from './containers/SDKController.jsx';
import HomeController from './containers/HomeController.jsx';
import UserController from './containers/UserController.jsx';
import NavigationController from './containers/NavigationController.jsx';
import LayoutController from './containers/LayoutController.jsx';
import NoMatch from './components/NoMatch.jsx';
class App extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <NavigationController />
                <Router  history={browserHistory}>
                    <Route path="/wiki(/**)" component={WikiController}/>
                    <Route path="/sdk" component={SDKController}/>
                    <Route path="/" component={HomeController}/>
                    <Route path="/user" component={UserController} />
                    <Route path="/*" component={NoMatch} />
                </Router>
                <LayoutController />
            </div>
        );
    }
}
export default App;