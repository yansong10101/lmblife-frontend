import React from 'react';
import configureStore from './store/configureStore';
import TemplateContainer from './containers/TemplateContainer.js.jsx';
import { Provider } from 'react-redux'
class PathwayWarper extends React.Component {
render() {
  const store = configureStore({template:{count:10}});
  return (
    <Provider store={store}>
      <TemplateContainer />
    </Provider>
  );
}
}
module.exports = PathwayWarper;
