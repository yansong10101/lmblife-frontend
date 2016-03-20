import React,{Component} from 'react';
import Cover from './Cover.jsx';
import Navigation from '../Common/Navigation.jsx';
import LoginModal from '../Common/LoginModal.jsx';
class Home extends Component{
  constructor(props,context){
    super(props, context);

  }
  render() {
    return (
        <div className="container-fluid">
          <Cover user={this.props.user}/>
        </div>
    );
  }
}
export default Home;