import React, {Component, PropTypes} from 'react';
import {
    Button,
    Input,
    Glyphicon
} from 'react-bootstrap';
import {routeActions} from 'react-router-redux';

const schoolList = [{
    name: "ACPA Foundation",
    img: "https://d1nrm4vx8nf098.cloudfront.net/ryrilzl1uzzngc7_150.jpg",
    link: "acpa"
}, {
    name: "American College Personnel Association",
    img: "https://d1nrm4vx8nf098.cloudfront.net/enfliaj080td3j_150.jpg",
    link: "acpa2"
}, {
    name: "University of Dayton",
    img: "https://d1nrm4vx8nf098.cloudfront.net/10w6fdv7gw7mrmi_150.jpg",
    link: "ud"
}];


class SchoolList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {query: ""};
        this._onChange = this._onChange.bind(this)

    }

    _onChange(e) {
        this.setState({query: e.target.value});
    }

    render() {
        var regex = new RegExp(this.state.query, 'i');

        const filteredSchoolList = this.props.schoolList.filter(t=>regex.test(t.display_name));

        return (
            <div>
                <div className="school-list-header">
                    <img
                        src="http://s3-us-west-2.amazonaws.com/test-2016/test-upload/demo-upload/image_20160322184632661568.png"
                        alt="lmb-logo"/>
                </div>
                <div className="school-selector-wrapper">
                    <div className="input-group input-group-lg index-query">
                        <span className="input-group-addon"><Glyphicon glyph="search"/></span>
                        <input type="text" className="form-control" placeholder="搜索学校" onChange={this._onChange}/>
                    </div>
                    <div className="index-results" type="uniform">
                        {filteredSchoolList.map((school, index)=>
                            <div key={index} className="result-content" onClick={()=>{
                            window.location.assign("http://"+school.slug_name+".lvh.me:8080")}}>
                                <div className="school-logo"
                                     style={{backgroundImage: "url(https://d1nrm4vx8nf098.cloudfront.net/10w6fdv7gw7mrmi_150.jpg)"}}>
                                </div>
                                <div className="school-info">
                                    <div className="school-name">
                                        {school.display_name}
                                    </div>
                                </div>
                            </div>)}

                    </div>
                </div>
            </div>
        );
    }
}
export default SchoolList;
