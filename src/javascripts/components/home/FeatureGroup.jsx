import React,{Component,PropTypes} from 'react';
import {push} from 'react-router-redux';
import {
    Button,
    Glyphicon,
    Grid,
    Row,
    Col
} from 'react-bootstrap';
const links = ["/freshman_guide/", "/everyday_life/", "/graduation_guide/ssn/"];
class FeatureGroup extends Component {
    constructor(props, context) {
        super(props, context);
        this._linkClickHandler = this._linkClickHandler.bind(this);
        this._editHandler = this._editHandler.bind(this)
    }

    _linkClickHandler(index) {
        if (!this.props.editable) {
            this.props.dispatch(push(links[index]))
        }
    }

    _editHandler(index, object) {
        var newdata = this.props.data.slice();
        newdata.splice(index, 1, object);
        this.props.dispatch({
            type: "FeatureGroup",
            data: Object.assign({}, this.props.object, {data: newdata})
        })

    }

    render() {
        var classSet = function (classes) {
            var classString = " ";
            Object.keys(classes).forEach(function (c) {
                if (classes[c]) {
                    classString += c + " ";
                }
            });
            return classString;
        };
        return (
            <Row className="feature-group">
                {this.props.data.map((item, index)=>
                        <Col key={index} sm={4}>
                            <div className="feature-image"
                                 style={{backgroundImage:"url("+item.img.src +")"}}>
                                <div className={classSet({"image-editor":true,"hidden":!this.props.editable})}>
                                    <Glyphicon onClick={(e)=>{
                                                this._editHandler(index,Object.assign({},item,{img:{src:this.props.uploadedImageURL,alt:""}}))
                                             }}
                                               glyph="edit"/>
                                    <Glyphicon onClick={(e)=>{
                                                this._editHandler(index,Object.assign({},item,{img:{src:null,alt:""}}))
                                             }}
                                               glyph="remove"/>
                                </div>
                            </div>
                            <h3 style={{cursor: "pointer"}}
                                onClick={()=>{this._linkClickHandler(index)}}
                                contentEditable={this.props.editable}
                                onKeyUp={(e)=>{
                                    this._editHandler(index,Object.assign({},item,{title:e.target.innerText}))
                                                   }}
                                >
                                {item.title}</h3>

                            <p style={{marginTop:"10px"}}
                               contentEditable={this.props.editable}
                               onKeyUp={(e)=>{
                                    this._editHandler(index,Object.assign({},item,{text:e.target.innerText}))
                                                   }}

                                >{item.text}</p>
                        </Col>
                )}
            </Row>
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
//    }).isRequired,
//};
export default FeatureGroup;



