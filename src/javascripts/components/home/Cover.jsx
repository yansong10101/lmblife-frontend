import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {apply} from '../../actions/HomeActions';
import {applyPermission} from '../../actions/UserActions';
class Cover extends Component {
  constructor(props, context) {
    super(props, context);
    this.applyClickHandler = this.applyClickHandler.bind(this);
  }

  applyClickHandler() {
    if(this.props.user.emailVerified){
      this.props.dispatch(push('/user/apply'));
    }
    this.props.dispatch(applyPermission(this.props.user.token));
  }

  render() {
    return (
      <div className="row" id="cover" style={{height:'100vh',
        backgroundColor:"black",
        backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzMFjujgib4Md4MHoGD4VoIDwqjaG3DDrylUns_rY8dgSuybA')",
        backgroundSize:"cover",
        backgroundPosition:"50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"}}>
        <div>
          <div style={{textAlign:"center"}}>
            <img style={{width:"200px"}}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzMFjujgib4Md4MHoGD4VoIDwqjaG3DDrylUns_rY8dgSuybA"/>

            <h1>Title</h1>

            <h1>Descriptions: xxxx xxxxxx</h1>

            <button onClick={this.applyClickHandler} className="btn btn-success">Apply</button>
          </div>
        </div>
      </div>
    );
  }
}
Cover.propTypes = {
  user:PropTypes.object
};
export default connect()(Cover);