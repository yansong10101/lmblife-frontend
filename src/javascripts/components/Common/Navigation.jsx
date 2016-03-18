import React ,{Component}from 'react';
import {routeActions} from 'react-router-redux';
import {openLogin} from '../../actions/UserActions';
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
    }

    loginClickHandler() {
        this.props.dispatch(openLogin());
    }

    render() {
        const navigationData = [
            {
                name: "新生指南",
                path: "/freshman_guide/",
                dropDown: [
                    {
                        name: '学校简介',
                        path: "school_introduction/"
                    }, {
                        name: '专业介绍',
                        path: "academics/"

                    }, {
                        name: '学费&生活费',
                        path: "cost/"

                    }, {
                        name: '周边环境',
                        path: "surroundings/"

                    }, {
                        name: '就业状况',
                        path: "employment_status/"

                    }, {
                        name: '接机帮',
                        path: "airport_pickup/"

                    }
                ]
            }, {
                name: '日常生活',
                path: "/everyday_life/",

                dropDown: [
                    {
                        name: '学生会通知',
                        path: "student_union_notices/",

                    }, {
                        name: '近期活动',
                        path: "recent_activities/",

                    }
                ]
            }, {
                name: '毕业指南',
                path: "/graduation_guide/",

                dropDown: [
                    {
                        name: 'SSN',
                        path: "ssn/",

                    }, {
                        name: 'CPT',
                        path: "cpt/",

                    }, {
                        name: 'OPT',
                        path: "opt/",

                    }, {
                        name: 'H1B',
                        path: "h1b/",

                    }, {
                        name: 'Green Card',
                        path: "green_card/",

                    }, {
                        name: 'Job Fair',
                        path: "job_fair/",

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
                path: '/' + this.props.wikiRoute
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
        return (
            <div>
                <Navbar fixedTop={this.props.needMargin}>
                    <Navbar.Header>
                        <Navbar.Brand >
                            <a href="#" onClick={()=> {
                                        this.props.dispatch(routeActions.push("/"))
                                        }}>LOGO</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        {navigationData.map((item, index) =>
                                <NavDropdown key={index} eventKey={index} title={item.name} id={"nav-dropdown"+index}>
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
                        <Button onClick={this.loginClickHandler} bsStyle="success">Log in</Button>
                    </Navbar.Form>
                </Navbar>
                {marginDiv}
            </div>
        );
    }
}
export default Navigation;
//{titles.map((title, index)=>
//        <NavItem key={title.title} eventKey={index} onClick={()=> {
//                                            this.props.dispatch(routeActions.push(title.path))
//                                        }}>
//            {title.title}
//        </NavItem>
//)}