import React,{Component,PropTypes} from 'react';
class EventList extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div className="row">
                {this.props.data.map((item,index)=>
                    <div key={index} className="col-sm-4">
                        <img src={item.img.src} alt={item.img.alt}
                             className="img-responsive"/>

                        <h3>{item.title}</h3>

                        <p>{item.content}</p>
                    </div>
                )}
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
//    }).isRequired,
//};
export default EventList;



