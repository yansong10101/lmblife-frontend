import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
    Button
} from 'react-bootstrap';
import Demo1 from './Demo1.jsx';

class Motions extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className="container" style={{paddingTop:"30px"}}>
                <Demo1 />
                <iframe src="http://ud.lvh.me:8080/" frameborder="0"></iframe>
            </div>
        );
    }
}
export default Motions;