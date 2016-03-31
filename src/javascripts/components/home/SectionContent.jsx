import React,{Component,PropTypes} from 'react';
import {push} from 'react-router-redux';
class SectionContent extends Component {
    constructor(props, context) {
        super(props, context);
        this._linkClickHandler = this._linkClickHandler.bind(this)
    }

    _linkClickHandler() {
        if (!this.props.editable)
            this.props.dispatch(push(this.props.data.link.href))
    }

    render() {
        const link = this.props.data.link ? <a href="javascript:void(0);"
                                               onClick={this._linkClickHandler}
                                               className="btn btn-outline btn-lg"
                                               contentEditable={this.props.editable}
                                               onKeyUp={(e)=>{
                                                    this.props.dispatch({
                                                        type: this.props.type,
                                                        data: Object.assign({},
                                                                this.props.data,
                                                                {link:Object.assign({},
                                                                    this.props.data.link,
                                                                    {text:e.target.innerText}
                                                                )}
                                                        )}
                                                    )}
                                               }>
            {this.props.data.link.text}</a> : "";
        return (
            <div className="section-content">
                <div className="container">
                    <h2 className="section-content-title"
                        contentEditable={this.props.editable}
                        onKeyUp={(e)=>{
                            this.props.dispatch({
                                type: this.props.type,
                                data: Object.assign({}, this.props.data, {title:e.target.innerText})
                            })
                          }}
                        >
                        {this.props.data.title}</h2>

                    {this.props.data.text ? <p className="lead"
                                               contentEditable={this.props.editable}
                                               onKeyUp={(e)=>{
                                            this.props.dispatch({
                                                type: this.props.type,
                                                data: Object.assign({}, this.props.data, {text:e.target.innerText})
                                            })
                                          }}>{this.props.data.text}</p> : ""}
                    <hr className="half-rule"/>
                    {this.props.children}
                    <hr className="half-rule"/>
                    {link}
                </div>
            </div>
        )
    }
}
//SectionContent.propTypes = {
//    title: PropTypes.string.isRequired,
//    content: PropTypes.shape({
//        des1: PropTypes.string,
//        des2: PropTypes.string
//    }).isRequired,
//    children: PropTypes.element,
//    button: PropTypes.shape({
//        text: PropTypes.string,
//        href: PropTypes.string
//    }),
//};
export default SectionContent;



