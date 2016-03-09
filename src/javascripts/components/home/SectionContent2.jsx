import React,{Component,PropTypes} from 'react';
class SectionContent extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (

            <div className="section">
                <div className="bs-docs-header">
                    <div className="container"><h1>Getting started</h1>

                        <p>An overview of Bootstrap, how to download and use, basic templates and examples, and
                            more.</p>

                        <div>
                            <div className="carbonad">
                            </div>
                        </div>
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
export default SectionContent;



