import React, {Component, PropTypes} from 'react';
//connect is for link store state to container props.
import {connect} from 'react-redux';
import TemplateComponent from '../components/TemplateComponent.js.jsx';
class TemplateContainer extends Component {
  render() {
    return (
        <TemplateComponent count={this.props.count} pendding={this.props.pendding}/>
    );
  }
}
//tell Redux what props is acceptable.
TemplateContainer.propTypes = {
  count: PropTypes.number.isRequired,
  pendding: PropTypes.bool
}
//define a function tell connect how store state convert to props.
function mapStoreStateToProps(state){
  return state.template;
}

export default connect(mapStoreStateToProps)(TemplateContainer);
