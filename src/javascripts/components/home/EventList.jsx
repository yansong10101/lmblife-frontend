import React,{Component,PropTypes} from 'react';
import {
    Button,
    Glyphicon,
    Grid,
    Row,
    Col
} from 'react-bootstrap';
class EventList extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <Row>
                {this.props.data.map((item,index)=>
                    <Col key={index} sm={4}>
                        <h3>{item.title}</h3>
                        <img src={item.img.src} alt={item.img.alt}
                             className="img-responsive"/>
                        <p style={{marginTop:"10px"}}>{item.content}</p>
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
export default EventList;



