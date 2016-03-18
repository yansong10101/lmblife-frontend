import React,{Component,PropTypes} from 'react';
class SectionContent extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        var style = {};
        if (this.props.img) {
            style = {
                backgroundImage: "url(" + this.props.img.src + ")",
                backgroundSize: "cover"
            }
        }
        return (

            <div className="section">
                <div className="bs-docs-masthead" style={style}>
                    <div className="container">
                        <span className="bs-docs-booticon bs-docs-booticon-lg bs-docs-booticon-outline"
                              style={{
                            backgroundImage: "url("+this.props.logo.src+")",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "10px 20px"
                            }}>
                        </span>

                        <p className="lead">
                            {this.props.content}
                        </p>

                        <p className="lead">
                            <a className="btn btn-outline-inverse btn-lg">
                                {this.props.button.text}
                            </a>
                        </p>

                    </div>

                </div>
            </div>
        )
    }
}
SectionContent.propTypes = {
    logo: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    button: PropTypes.shape({
        text: PropTypes.string,
        href: PropTypes.string
    }).isRequired,
};
export default SectionContent;

//<div className="carbonad">
//    <div id="azcarbon">
//
//    </div>
//</div>


