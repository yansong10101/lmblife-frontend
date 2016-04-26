import React,{Component,PropTypes} from 'react';
import {routeActions} from 'react-router-redux';

class Footer extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        const footerData = [{text: '关于我们', href: '/about/lmb-life/'}, {
            text: '联系我们',
            href: '/about/contact/'
        }, {text: '条款声明', href: ''}];
        return (
            <div className="bs-docs-footer ">
                <div className="container">
                    <div className="row" >
                        <img style={{float:"left"}}
                             src="http://s3-us-west-2.amazonaws.com/test-2016/test-upload/demo-upload/image_20160322184632661568.png"
                             alt="lmb-logo"
                             height="40"/>
                        <ul className="bs-docs-footer-links" style={{lineHeight:"35px"}}>
                            <li>
                                <span> Copyright  &copy; 2016 留美帮</span>
                            </li>
                            {footerData.map(item=><li key={item.text}><a href="javascript:void(0);" onClick={()=> {
                                        this.props.dispatch(routeActions.push(item.href))
                                        }}>{item.text}</a></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
//SectionContent.propTypes = {
//    title: PropTypes.string.isRequired,
//    content: PropTypes.string.isRequired,
//    children: PropTypes.element.isRequired,
//};
export default Footer;
