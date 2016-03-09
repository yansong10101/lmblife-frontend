import React,{Component,PropTypes} from 'react';
class SectionContent extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (

            <div className="section">
                <div className="bs-docs-masthead">
                    <div className="container">
                        <span className="bs-docs-booticon bs-docs-booticon-lg bs-docs-booticon-outline">
                            {this.props.logo}
                        </span>

                        <p className="lead">
                            {this.props.content}
                        </p>

                        <p className="lead">
                            <a className="btn btn-outline-inverse btn-lg">
                                {this.props.button.text}
                            </a>
                        </p>

                        <div className="carbonad">
                            <div id="azcarbon">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
SectionContent.propTypes = {
    logo: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    button:PropTypes.shape({
        text: PropTypes.string,
        href: PropTypes.string
    }).isRequired,
};
export default SectionContent;



