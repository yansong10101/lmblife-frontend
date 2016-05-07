import React, {Component, PropTypes} from 'react';
import {
    Button,
    Input,
    Glyphicon
} from 'react-bootstrap';
import {push} from 'react-router-redux';

function sendMessageToIframe(msg,subdomain) {
    onmessage=function(e){
        if(e.data.data==="stored")   {
            console.log(e.data);
            location.assign("http://"+subdomain+".lvh.me:8080/");
        }
    };
    var iframe = document.getElementsByTagName("iframe")[0];
    iframe.src="http://"+subdomain+".lvh.me:8080/about/sponsor/";
    iframe.onload=function (){
        iframe.contentWindow.postMessage({action:"store",data:msg,key:"school"},"*");
    }
}

class OrganizationList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {query: ""};
        this._onChange = this._onChange.bind(this);
        this._onSelectOrganization = this._onSelectOrganization.bind(this);

    }

    _onSelectOrganization(org) {
        sendMessageToIframe(org,org.slug_name);
    }

    _onChange(e) {
        this.setState({query: e.target.value});
    }
    render() {
        var regex = new RegExp(this.state.query, 'i');

        const filteredList = this.props.organizationList.filter(t=>regex.test(t.display_name));

        return (
            <div>
                <div className="organization-list-header">
                    <img
                        src="http://s3-us-west-2.amazonaws.com/test-2016/test-upload/demo-upload/image_20160322184632661568.png"
                        alt="lmb-logo"/>
                </div>
                <div className="organization-selector-wrapper">
                    <div className="input-group input-group-lg index-query">
                        <span className="input-group-addon"><Glyphicon glyph="search"/></span>
                        <input type="text" className="form-control" placeholder="搜索学校" onChange={this._onChange}/>
                    </div>
                    <div className="index-results" type="uniform">
                        {filteredList.map((organization, index)=>
                            <div key={index} className="result-content"
                                 onClick={()=>{this._onSelectOrganization(organization)}}>
                                <div className="organization-logo"
                                     style={{backgroundImage: "url(https://d1nrm4vx8nf098.cloudfront.net/10w6fdv7gw7mrmi_150.jpg)"}}>
                                </div>
                                <div className="organization-info">
                                    <div className="organization-name">
                                        {organization.display_name}
                                    </div>
                                </div>
                            </div>)}

                    </div>
                </div>
                <iframe style={{width:"1px",height:"1px",display:"none"}} />
            </div>
        );
    }
}
export default OrganizationList;
