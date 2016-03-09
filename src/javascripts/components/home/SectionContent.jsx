import React,{Component,PropTypes} from 'react';
class SectionContent extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (

            <div className="bs-docs-featurette">
                <div className="container">
                    <h2 className="bs-docs-featurette-title">{this.props.title}</h2>

                    <p className="lead">{this.props.content.des1}</p>
                    <hr className="half-rule"/>
                    <div className="row">
                        {this.props.children}
                    </div>
                    <hr className="half-rule"/>
                    <p className="lead">{this.props.content.des2}</p>
                    <a
                        href={this.props.button.href} className="btn btn-outline btn-lg">
                        {this.props.button.text}</a></div>
            </div>
        )
    }
}
SectionContent.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.shape({
        des1: PropTypes.string,
        des2: PropTypes.string
    }).isRequired,
    children: PropTypes.element,
    button: PropTypes.shape({
        text: PropTypes.string,
        href: PropTypes.string
    }).isRequired,
};
export default SectionContent;



