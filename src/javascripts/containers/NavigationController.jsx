import React, {Component} from 'react';
import Navigation from './../components/Common/Navigation.jsx';
import {connect} from 'react-redux';

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
                path: "ssn/"
            }, {
                name: 'CPT',
                path: "cpt/"
            }, {
                name: 'OPT',
                path: "opt/"
            }, {
                name: 'H1B',
                path: "h1b/"
            }, {
                name: 'Green Card',
                path: "green_card/"

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

class NavigationController extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const navFixed = true;
        return (
            <Navigation needMargin={navFixed}
                        organization={this.props.organization}
                        user={this.props.user}/>
        );
    }
}
const mapStateToProps = state=>({
    organization: {
        logo: state.organization.homepage.logo,
        featureGroups: navigationData
    },
    user: state.user
});
export default connect(mapStateToProps)(NavigationController);