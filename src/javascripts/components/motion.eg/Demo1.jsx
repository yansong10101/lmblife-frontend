import React, {Component, PropTypes} from 'react';
import {Motion,spring} from 'react-motion';
//import {connect} from 'react-redux';
//import {increase} from '../actioncreators/TemplateActionCreators';
class Demo1 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {open: false};
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div>
                <tr>
                    <td>Demo1:</td>
                    <td style={{paddingLeft:"20px"}}>
                        <button onMouseDown={this.clickHandler}>
                            Toggle
                        </button>

                        <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
                            {({x}) =>
                                <div className="demo1">
                                    <div className="demo1-block" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }}/>
                                </div>
                            }
                        </Motion>
                    </td>
                </tr>

            </div>
        );
    }
}
export default Demo1;