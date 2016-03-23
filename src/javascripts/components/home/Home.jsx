import React,{Component} from 'react';
import {
    Button,
    Input,
    Jumbotron,
    Carousel,
    CarouselItem
} from 'react-bootstrap';
import {routeActions} from 'react-router-redux';
import Cover2 from './Cover2.jsx';
import SectionContent from './SectionContent.jsx';
import EventList from './EventList.jsx';
import Footer from './Footer.jsx'
const coverData = {
    logo: {
        src: "http://www.washington.edu/wp-content/themes/uw-2014/assets/svg/uw-sprite.svg"
    },
    content: "The UW has 34 graduate programs among the nation's top 10 in U.S. News & World Report's Best Graduate School rankings. Among those, 12 health, nursing and medical programs - and another eight public affairs and science programs - are in the top five.",
    button: {
        text: "Join Us&Learn More",
        href: ""
    },
    //img:{
    //    src:"http://www.washington.edu/about/files/2014/09/Seattle375x240.jpg",
    //    alt:""
    //}
};
const imageSample = {
    white: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    gray: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
    black: "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
};
const proData = [{
    title: "第1个通知",
    img: "",
    content: "内容",
    link: ""
}, {
    title: "第2个通知",
    img: "",
    content: "内容",
    link: ""
}, {
    title: "第3个通知",
    img: "",
    content: "内容",
    link: ""
}];
const eventData = [
    {
        img: {
            src: "http://getbootstrap.com/assets/img/sass-less.png",
            alt: "新生指南"
        },
        title: "新生指南",
        content: '万事开头难，但我遇见了你'
    },
    {
        img: {
            src: "http://getbootstrap.com/assets/img/devices.png",
            alt: "Responsive across devices"
        },
        title: "日常生活",
        content: "我的生活，我做主。\n" +
        "让无趣的生活沸腾吧"
    }, {
        img: {
            src: "http://getbootstrap.com/assets/img/components.png",
            alt: "Components"
        },
        title: "毕业指南",
        content: "毕业≠失业，但亲们，尽早准备，\n" +
        "学长们只能帮你到这了"
    }];
const sectionData = [
    {

        title: "Feature Group",
        content: {
            des1: "",
            des2: ""
        },
        children: (<EventList data={eventData}/>),
        //button: {
        //    text: "View Details",
        //    href: "https://github.com/twbs/bootstrap"
        //}
    },
    {

        title: "UD CSSA 简介",
        content: {
            des1: " UD 中国学生学者联合会(CSSA)，愿意为您提供帮助",
            des2: ""
        },
        children: (<div></div>),
        button: {
            text: "联系我们",
            href: "/about/university/"
        }

    }];
class Home extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
                <Carousel >
                    {proData.map((notice,index)=>
                        <CarouselItem key={index}>
                            <img alt="first slide" src={notice.img.length?notice.img:imageSample.gray}/>

                            <div className='container'>
                                <div className="carousel-caption">
                                    <h1>{notice.title}</h1>

                                    <p>{notice.content}</p>

                                    <p><Button bsStyle="primary" bsSize="large">Learn more</Button></p>
                                </div>
                            </div>
                        </CarouselItem>)
                    }
                </Carousel>
                {sectionData.map((section, index)=>
                        <SectionContent key={section.title+index} title={section.title}
                                        content={section.content}
                                        button={section.button}
                                        dispatch={this.props.dispatch}>
                            {section.children}
                        </SectionContent>
                )}
                <Footer dispatch={this.props.dispatch}/>
            </div>
        );
    }
}
export default Home;
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
