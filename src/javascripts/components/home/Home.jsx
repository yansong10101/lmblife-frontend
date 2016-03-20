import React,{Component} from 'react';
//import Cover from './Cover.jsx';
import Cover2 from './Cover2.jsx';
import SectionContent from './SectionContent.jsx';
import EventList from './EventList.jsx';
import Footer from './Footer.jsx'
const coverData = {
    logo: {
        src:"http://www.washington.edu/wp-content/themes/uw-2014/assets/svg/uw-sprite.svg"
    },
    content: "The UW has 34 graduate programs among the nation's top 10 in U.S. News & World Report's Best Graduate School rankings. Among those, 12 health, nursing and medical programs - and another eight public affairs and science programs - are in the top five.",
    button: {
        text: "Join Us&Learn More",
        href: ""
    },
    img:{
        src:"http://www.washington.edu/about/files/2014/09/Seattle375x240.jpg",
        alt:""
    }
};
const eventData = [
    {
        img: {
            src: "http://getbootstrap.com/assets/img/sass-less.png",
            alt: "Sass and Less support"
        },
        title: "Preprocessors",
        content: 'Bootstrap ships with vanilla CSS, but its source code utilizes the two most popular CSS preprocessors, '+(<a href="../css/#less">Less</a>)+'and '+
        (<a href="../css/#sass">Sass</a>)+'. Quickly get started with precompiled CSS or build on the source.'
    },
    {
        img: {
            src: "http://getbootstrap.com/assets/img/devices.png",
            alt: "Responsive across devices"
        },
        title: "One framework, every device.",
        content: "Bootstrap easily and efficiently scales your websites and applications with a single code base, from phones to tablets to desktops with CSS media queries."
    }, {
        img: {
            src: "http://getbootstrap.com/assets/img/components.png",
            alt: "Components"
        },
        title: "Full of features",
        content: "With Bootstrap, you get extensive and beautiful documentation for common HTML elements, dozens of custom HTML and CSS components, and awesome jQuery plugins."
    }];
const sectionData = [
    {

        title: "Designed for everyone, everywhere.",
        content: {
            des1: "Bootstrap makes front-end web development faster and easier. " +
            "It's made for folks of all skill levels, devices of all shapes, and projects of all sizes.",
            des2: "Bootstrap is open source. It's hosted, developed, and maintained on GitHub."
        },
        children: <EventList data={eventData} />,
        button: {
            text: "View the GitHub project",
            href: "https://github.com/twbs/bootstrap"
        }

    },
    {

        title: "Designed for everyone, everywhere.",
        content: {
            des1: "Bootstrap makes front-end web development faster and easier. " +
            "It's made for folks of all skill levels, devices of all shapes, and projects of all sizes.",
            des2: "Bootstrap is open source. It's hosted, developed, and maintained on GitHub."
        },
        children: <div></div>,
        button: {
            text: "View the GitHub project",
            href: "https://github.com/twbs/bootstrap"
        }

    }];
class Home extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <Cover2
                  logo={coverData.logo}
                  content={coverData.content}
                  button={coverData.button}
                  img={coverData.img}
                  user={this.props.user}
                />
                {sectionData.map((section, index)=>
                  <SectionContent
                    key={section.title+index}
                    title={section.title}
                    content={section.content}
                    button={section.button}>
                      {section.children}
                  </SectionContent>
                )}
                <Footer/>
            </div>
        );
    }
}
export default Home;