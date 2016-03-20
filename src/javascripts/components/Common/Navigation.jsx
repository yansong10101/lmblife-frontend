import React ,{Component, PropTypes}from 'react';
import {routeActions} from 'react-router-redux';
import {openLogin,logout} from '../../actions/UserActions';
import {
  Button,
  Navbar,
  NavItem,
  Nav,
  MenuItem,
  NavDropdown
} from 'react-bootstrap';
class Navigation extends Component {
  constructor(props, context) {
    super(props, context);
    this.loginClickHandler = this.loginClickHandler.bind(this);
    this.logoutClickHandler = this.logoutClickHandler.bind(this);
  }

  loginClickHandler() {
    this.props.dispatch(openLogin());
  }

  logoutClickHandler() {
    this.props.dispatch(logout(this.props.user.token));
  }

  render() {
    const navigationData = [
      {
        name: "新生指南",
        dropDown: [
          {
            name: '学校简介'
          }, {
            name: '专业介绍'
          }, {
            name: '学费&生活费'
          }, {
            name: '周边环境'
          }, {
            name: '就业状况'
          }, {
            name: '接机帮'
          }
        ]
      }, {
        name: '日常生活',
        dropDown: [
          {
            name: '学生会通知'
          }, {
            name: '近期活动'
          }
        ]
      }, {
        name: '毕业指南',
        dropDown: [
          {
            name: 'SSN'
          }, {
            name: 'CPT'
          }, {
            name: 'OPT'
          }, {
            name: 'H1B'
          }, {
            name: 'Green Card'
          }, {
            name: 'Job Fair'
          }
        ]
      }
    ];
    const marginDiv = this.props.needMargin
      ? <div style={{
          height: "60px"
        }}></div>
      : null;
    const titles = [
      {
        title: "Home",
        path: '/'
      },
      {
        title: "Wiki",
        path: '/wiki/' + this.props.wikiRoute
      },
      {
        title: "User",
        path: '/user'
      },
      {
        title: 'SDK',
        path: '/sdk'
      }
    ];
    let userButton = <Button onClick={this.loginClickHandler} bsStyle="success">Log in</Button>;
    if (this.props.user.token) {
      userButton = <Button onClick={this.logoutClickHandler} bsStyle="warning">Log out</Button>;
    }
    return (
      <div>
        <Navbar fixedTop={this.props.needMargin}>
          <Navbar.Header>
            <Navbar.Brand>
              <a onClick={()=> {this.props.dispatch(routeActions.push("/"))}}>LOGO</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            {titles.map((title, index)=>
              <NavItem key={title.title} eventKey={index} onClick={()=> {this.props.dispatch(routeActions.push(title.path))}}>
                {title.title}
              </NavItem>
            )}
            {navigationData.map((item, index) =>
              <NavDropdown key={index} eventKey={index} title={item.name} id={"nav-dropdown"+index}>
                {item.dropDown.map((dropDownItem, dropDownIndex)=>

                  <MenuItem key={dropDownIndex} eventKey={index+'.'+dropDownIndex}>
                    {dropDownItem.name}
                  </MenuItem>
                )}
              </NavDropdown>
            )}
          </Nav>
          <Navbar.Form pullRight>
            {this.props.user.username}
            {userButton}
          </Navbar.Form>
        </Navbar>
        {marginDiv}
      </div>
    );
  }
}
Navigation.propTypes = {
  user: PropTypes.object
};
export default Navigation;
