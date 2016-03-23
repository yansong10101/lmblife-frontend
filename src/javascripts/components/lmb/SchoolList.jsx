import React, {Component, PropTypes} from 'react';
import {
    Button,
    Input,
    Glyphicon
} from 'react-bootstrap';
import {routeActions} from 'react-router-redux';
import {connect} from 'react-redux';

const schoolList = [{
    name: "ACPA Foundation",
    img: "https://d1nrm4vx8nf098.cloudfront.net/ryrilzl1uzzngc7_150.jpg",
    href:"/acpa-foundation"
}, {
    name: "American College Personnel Association",
    img: "https://d1nrm4vx8nf098.cloudfront.net/enfliaj080td3j_150.jpg",
    href:"/american-college-personnel-association"
},{
    name: "University of Dayton",
    img: "https://d1nrm4vx8nf098.cloudfront.net/10w6fdv7gw7mrmi_150.jpg",
    href:"/"
}];


class SchoolList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {schoolList};
        this._onChange = this._onChange.bind(this)

    }
    _onChange(e) {
        var regex = new RegExp(e.target.value, 'i');
        this.setState({schoolList:schoolList.filter(t=>regex.test(t.name))});
    }
    render() {


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
                        {this.state.schoolList.map((school, index)=>
                            <div key={index} className="result-content" onClick={()=>{this.props.dispatch(routeActions.push(school.href))}}>
                                <div className="school-logo"
                                     style={{backgroundImage: "url('"+school.img+"')"}}>
                                </div>
                                <div className="school-info">
                                    <div className="school-name">
                                        {school.name}
                                    </div>
                                </div>
                            </div>)}


                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(SchoolList);
//
//<div className="osw-selector-result osw-selector-result-type-community"
//     data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$1">
//    <div className="osw-selector-result-content"
//         data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$1.0">
//        <div className="osw-selector-result-image"
//             style="background-image: url(&quot;https://d1nrm4vx8nf098.cloudfront.net/enfliaj080td3j_150.jpg&quot;);"
//             data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$1.0.0"></div>
//        <div className="osw-selector-result-info"
//             data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$1.0.1">
//            <div className="osw-selector-result-name"
//                 data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$1.0.1.0">
//                American College Personnel Association
//            </div>
//            <div className="osw-selector-result-type"
//                 data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$1.0.1.1">
//                School
//            </div>
//        </div>
//    </div>
//</div>
//<div className="osw-selector-result osw-selector-result-type-community"
//data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$2">
//    <div className="osw-selector-result-content"
//         data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$2.0">
//        <div className="osw-selector-result-image"
//             data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$2.0.0">
//            <div className="osw-selector-result-icon"
//                 data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$2.0.0.0">
//                <i name="community" className="icon oswi oswi-community"
//                   data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$2.0.0.0.0"></i>
//            </div>
//        </div>
//        <div className="osw-selector-result-info"
//             data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$2.0.1">
//            <div className="osw-selector-result-name"
//                 data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$2.0.1.0">
//                Angelina College
//            </div>
//            <div className="osw-selector-result-type"
//                 data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$2.0.1.1">
//                School
//            </div>
//        </div>
//    </div>
//    </div>
//    <div className="osw-selector-result osw-selector-result-type-community"
//         data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$3">
//        <div className="osw-selector-result-content"
//             data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$3.0">
//            <div className="osw-selector-result-image"
//                 style="background-image: url(&quot;https://d1nrm4vx8nf098.cloudfront.net/117xpiu9c0ucp7r_150.jpg&quot;);"
//                 data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$3.0.0"></div>
//            <div className="osw-selector-result-info"
//                 data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$3.0.1">
//                <div className="osw-selector-result-name"
//                     data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$3.0.1.0">
//                    Bay Area Student Activities Consortium
//                </div>
//                <div className="osw-selector-result-type"
//                     data-reactid=".0.1.0.0.0.1.$arbitrary_Everything=2school=2none=2name,short_name=2ac.0.0.0.$3.0.1.1">
//                    School
//                </div>
//            </div>
//        </div>
//    </div>