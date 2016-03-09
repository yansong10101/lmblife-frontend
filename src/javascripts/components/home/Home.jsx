import React,{Component} from 'react';
//import Cover from './Cover.jsx';
import Cover2 from './Cover2.jsx';
import SectionContent from './SectionContent.jsx';
import Footer from './Footer.jsx'
const coverData = {
    logo: "LOGO",
    content: "Bootstrap is the most popular HTML, CSS, and JS framework for developing    responsive, mobile first projects on the web."

    + "Bootstrap makes front-end web development faster and easier. " +
    "It's made for folks of all skill levels, devices of all shapes, and projects of all sizes." +
    "Bootstrap is open source. It's hosted, developed, and maintained on GitHub.",

    button: {
        text: "Download Bootstrap",
        href: ""
    }
};
const sectionData = [
    {

        title: "Designed for everyone, everywhere.",
        content: {
            des1: "Bootstrap makes front-end web development faster and easier. " +
            "It's made for folks of all skill levels, devices of all shapes, and projects of all sizes.",
            des2: "Bootstrap is open source. It's hosted, developed, and maintained on GitHub."
        },
        children: Component,
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
                <Cover2 logo={coverData.logo}
                        content={coverData.content}
                        button={coverData.button}/>
                {sectionData.map((section, index)=>
                        <SectionContent key={section.title+index} title={section.title}
                                        content={section.content}
                                        button={section.button}>
                            {section.children}
                        </SectionContent>
                )}

                <Footer />

            </div>
        );
    }
}
export default Home;