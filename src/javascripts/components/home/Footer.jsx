import React,{Component,PropTypes} from 'react';
class Footer extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (

            <div className="bs-docs-footer ">
                <div className="container">
                    <ul className="bs-docs-footer-links">
                        <li><a href="">GitHub</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Examples</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                    <p>
                        Copyright    &copy; 2016 XXXX All rights reserved.
                    </p>
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
