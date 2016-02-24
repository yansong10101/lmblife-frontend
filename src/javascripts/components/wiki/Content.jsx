import React,{Component} from 'react';
import {editPage,deletePage} from '../../actions/WikiActions';
import Breadcrumb from './Breadcrumb.jsx';
import {PageHeader} from 'react-bootstrap';
class Content extends Component{
  constructor(props,context){
    super(props,context);
    this._deleteClickHandler=this._deleteClickHandler.bind(this);
    this._editClickHandler=this._editClickHandler.bind(this)
  }
  _editClickHandler() {
    this.props.dispatch(editPage());
  }
  _deleteClickHandler() {
    this.props.dispatch(deletePage(this.props.folderPath,this.props.currentPage.title));
  }
  render() {
    return (
        <div>
          <div className="row">
            <div className="col-xs-12">
              <Breadcrumb folderPath={"wiki/"+this.props.folderPath} activeLastOne={true}/>
              <div key="contentButtons" className="pull-right">
                <button className="btn btn-default" onClick={this._editClickHandler}>
                  <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                  &nbsp;Edit
                </button>
                <button className="btn btn-default" onClick={this._deleteClickHandler}>
                  <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  &nbsp;Delete
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <PageHeader>{this.props.currentPage.title}
                <small>author info</small>
              </PageHeader>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div dangerouslySetInnerHTML={{
              __html: this.props.currentPage.content
            }}></div>
            </div>
          </div>
        </div>
    );
  }
}
export default Content;