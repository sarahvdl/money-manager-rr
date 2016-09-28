import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class AddCategoryModal extends React.Component {
    componentDidMount() {
      let self = this;
      let dom = $(ReactDOM.findDOMNode(self));
      console.log(dom);
        {$(ReactDOM.findDOMNode(self)).modal('show');}
        $(this.getDOMNode()).on('hidden.bs.modal', this.props.handleHideModal);
    }

    render(){
      return (
          <div className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title">Modal title</h4>
                </div>
                <div className="modal-body">
                  <p>One fine body&hellip;</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

AddCategoryModal.propTypes = {
    handleHideModal: React.PropTypes.func.isRequired
};

export default AddCategoryModal;
