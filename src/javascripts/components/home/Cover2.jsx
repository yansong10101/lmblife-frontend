import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {apply} from '../../actions/HomeActions';
import {applyPermission,openLogin} from '../../actions/UserActions';
class SectionContent extends Component {
  constructor(props, context) {
    super(props, context);
    this.applyClickHandler = this.applyClickHandler.bind(this);
  }

  applyClickHandler() {
    if(!this.props.user.token){
      this.props.dispatch(openLogin());
    }
    if (this.props.user.emailVerified) {
      this.props.dispatch(push('/user/apply'));
    }
    this.props.dispatch(applyPermission(this.props.user.token));
  }

  render() {
    var style = {};
    if (this.props.img) {
      style = {
        backgroundImage: "url(" + this.props.img.src + ")",
        backgroundSize: "cover"
      }
    }
    return (

      <div className="section">
        <div className="bs-docs-masthead" style={style}>
          <div className="container">
                        <span className="bs-docs-booticon bs-docs-booticon-lg bs-docs-booticon-outline"
                              style={{
                            backgroundImage: "url("+this.props.logo.src+")",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "10px 20px"
                            }}>
                        </span>
            <p className="lead">
              {this.props.content}
            </p>

            <p className="lead">
              <a onClick={this.applyClickHandler} className="btn btn-outline-inverse btn-lg">
                {this.props.button.text}
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
SectionContent.propTypes = {
  logo: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string
  }).isRequired
};
export default connect()(SectionContent);


