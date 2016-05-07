import React ,{Component, PropTypes}from 'react';
import {connect} from 'react-redux';
import {routeActions} from 'react-router-redux';
import {openLogin,logout} from '../../actions/UserActions';
import {
    Button,
    Navbar,
    NavItem,
    Nav,
    MenuItem,
    NavDropdown,
    Input
} from 'react-bootstrap';
class Navigation extends Component {
    constructor(props, context) {
        super(props, context);
        this.loginClickHandler = this.loginClickHandler.bind(this);
        this.logoutClickHandler = this.logoutClickHandler.bind(this);
        this.adminClickHandler = this.adminClickHandler.bind(this);
    }

    loginClickHandler() {
        this.props.dispatch(openLogin());
    }

    logoutClickHandler() {
        this.props.dispatch(logout(this.props.user.token))
    }

    adminClickHandler() {
        this.props.dispatch(routeActions.push('/admin'));
    }

    render() {
        const showFeature = !/^www/i.test(window.location.hostname);
        const marginDiv = this.props.needMargin
            ? <div style={{
          height: "50px"
        }}></div>
            : null;
        let userButton = <Button onClick={this.loginClickHandler} bsStyle="success">Log in</Button>;
        if (this.props.user.token) {
            userButton = <Button onClick={this.logoutClickHandler} bsStyle="warning">Log out</Button>;
        }
        return (
            <div>
                <Navbar fixedTop={this.props.needMargin}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="javascript:void(0);"
                               onClick={()=> {
                                     window.location.assign("http://www.lvh.me:8080/");
                                        }}
                               style={{padding:"5px"}}>
                                <img
                                    src="http://s3-us-west-2.amazonaws.com/test-2016/test-upload/demo-upload/image_20160322184632661568.png"
                                    alt="lmb-logo"
                                    style={{height:"40px"}}/>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Brand className={showFeature?"":"hidden"}>
                            <a href="javascript:void(0);" onClick={()=> {
                                        this.props.dispatch(routeActions.push("/"))
                                        }}
                               style={{padding:"5px"}}
                                >
                                <img src={this.props.organization.logo.src}
                                     alt={this.props.organization.logo.alt}
                                     style={{height:"40px"}}/>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            {this.props.organization.featureGroups.map((item, index) =>
                                    <NavDropdown className={showFeature?"":"hidden"}
                                                 key={index} eventKey={index} title={item.name}
                                                 id={"nav-dropdown"+index}>
                                        {item.dropDown.map((dropDownItem, dropDownIndex)=>

                                                <MenuItem key={dropDownIndex} eventKey={index+'.'+dropDownIndex}
                                                          onClick={()=>{this.props.dispatch(routeActions.push(item.path+dropDownItem.path))}}
                                                    >
                                                    {dropDownItem.name}
                                                </MenuItem>
                                        )}
                                    </NavDropdown>
                            )}
                        </Nav>
                        <Navbar.Form pullRight>
                            {this.props.user.username}
                            {userButton}
                            <Button onClick={this.adminClickHandler}>Admin</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>

                </Navbar>
                {this.props.needMargin && (<div style={{
          height: "50px"
        }}></div>)}
            </div>
        );
    }
}
Navigation.propTypes = {
    user: PropTypes.object.isRequired,
    organization: PropTypes.shape({
        logo: PropTypes.object.isRequired,
        featureGroups: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            path: PropTypes.string,
            dropDown: PropTypes.array.isRequired
        })).isRequired
    }).isRequired,
    needMargin: PropTypes.bool
};
export default connect()(Navigation);
