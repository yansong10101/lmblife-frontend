import React ,{Component}from 'react';
import {routeActions} from 'react-router-redux';
import {openLogin} from '../../actions/UserActions';
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
    }

    loginClickHandler() {
        this.props.dispatch(openLogin());
    }

    render() {
        var showFeature=true;
        if(window.location.hostname.split(".").shift()==="www"){
            showFeature=false;
        }
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
            }, {
                name: '关于我们',
                path: "/about/",

                dropDown: [
                    {
                        name: 'University of Dayton',
                        path: "university/",

                    }, {
                        name: '赞助商',
                        path: "sponsor/",

                    }, {
                        name: '留美帮',
                        path: "lmb-life/",

                    }, {
                        name: '联系我们',
                        path: "contact/",
                    }
                ]
            }
        ];
        const marginDiv = this.props.needMargin
            ? <div style={{
          height: "50px"
        }}></div>
            : null;
        var logosrc = this.props.school.editable ? this.props.school.editableHomepage.logo.src : this.props.school.homepage.logo.src;
        return (
            <div>
                <Navbar fixedTop={this.props.needMargin}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="javascript:void(0);"
                               onClick={()=> {
                                     window.location.assign("http://www.lvh.me:8080/schools");
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
                                <img
                                    src={logosrc}
                                    alt="cssa UD LOGO"
                                    style={{height:"40px"}}/>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            {navigationData.map((item, index) =>
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
                            <Button onClick={this.loginClickHandler} bsStyle="success">Log in</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>

                </Navbar>
                {marginDiv}
            </div>
        );
    }
}
export default Navigation;
/*<Input type="text" placeholder="Email"/>
 {' '}
 <Input type="text" placeholder="Password"/>
 {' '}*/