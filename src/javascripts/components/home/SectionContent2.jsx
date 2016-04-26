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

//{jumbotronInstance}
//<Cover2 logo={coverData.logo}
//        content={coverData.content}
//        button={coverData.button}
//        img={coverData.img}/>

//const jumbotronInstance = (
//    <Jumbotron>
//        <div className='container'>
//            <h1>Hello, world!</h1>
//
//            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
//                content or information.</p>
//            <p><Button bsStyle="primary">Learn more</Button></p>
//        </div>
//    </Jumbotron>
//);

//<Carousel >
//    {proData.map((notice, index)=> {
//        let index1 = index;
//        return (  <CarouselItem key={index}>
//            <img alt="first slide" src={notice.img?notice.img:imageSample.gray}
//                 className="back"/>
//
//            <div className='container'>
//                <div className="carousel-caption">
//                    <h1>{notice.title}</h1>
//
//                    <p>{notice.content}</p>
//
//                    <p><Button bsStyle="primary" bsSize="large">Learn more</Button></p>
//
//
//                </div>
//            </div>
//            <div className={this.props.admin?"":"hidden"}
//                 style={{position:"absolute",
//                                 left:"30%",
//                                 top:"5%"}}>
//                <Button onClick={()=>{
//                                                this.setState({uploadedImgIndex:index});
//                                                var fileInput = ReactDOM.findDOMNode(this.refs.fileInput);
//                                                fileInput.click();
//                                                }}
//                        bsStyle="primary"
//                        style={{background:"black"}}
//                    >{notice.img ? "change backImg" : "add backImg"}
//                </Button>
//                <Button bsStyle="primary" style={{background:"black"}}
//                        className={notice.img?"":"hidden"}
//                        onClick={()=>{notice.img=null;this.setState({uploadedImgIndex:-1});}}
//                    >remove</Button>
//                <input className="hidden" ref='fileInput' type="file" id="myFile"
//                       onChange={this._fileInputChangeHandler}/>
//            </div>
//
//        </CarouselItem>)
//    })}
//</Carousel>

