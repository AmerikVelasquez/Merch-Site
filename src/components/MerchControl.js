import React from 'react';
import NewMerchForm from './NewMerchForm';
import MerchList from './MerchList';
import MerchDetail from './MerchDetail';
import EditMerchForm from './EditMerchForm';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import* as a from './../actions';

class MerchControl extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      
      selectedMerch: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedMerch != null){
      this.setState({
       
        selectedMerch: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
    
  }

  handleAddingNewMerchToList = (newMerch) =>{
    const {dispatch} = this.props;
    const {id, name, description, quantity} = newMerch;
    const action = a.addMerch(newMerch);
    dispatch(action);
  const action2 = a.toggleForm();
  dispatch(action2);
  }

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.props.mainMerchList[id];
    this.setState({selectedMerch: selectedMerch});
  }

  handleDeletingMerch = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteMerch(id);
    dispatch(action);
    this.setState({selectedMerch: null});
  }

  handleEditClick = () =>{
    this.setState({editing: true});
  }

  handleEditingMerchInList = (merchToEdit) => {
    const { dispatch } = this.props;
    const { id, name, description, quantity } = merchToEdit;
    const action = a.addMerch(merchToEdit);

    dispatch(action);
    this.setState({
      editing: false,
      selectedMerch: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditMerchForm merch = {this.state.selectedMerch} 
      onEditMerch = {this.handleEditingMerchInList} />
      buttonText = "Return to Merch List";
    }
    else if (this.state.selectedMerch != null) {
      currentlyVisibleState = <MerchDetail 
      merch = {this.state.selectedMerch} 
      onClickingDelete = {this.handleDeletingMerch} 
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Merch List";
    }
    else if (this.props.formVisibleOnPage){
      currentlyVisibleState= <NewMerchForm  onNewMerchCreation={this.handleAddingNewMerchToList}/>
      buttonText = "Return to Merch List";
    } else {
      currentlyVisibleState = <MerchList merchList = {this.props.mainMerchList}  onMerchSelection={this.handleChangingSelectedMerch}/>
      buttonText = "Add Merch";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
MerchControl.propTypes = {
  mainMerchList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainMerchList: state.mainMerchList,
    formVisibleOnPage: state.formVisibleOnPage  
  }
}
MerchControl = connect(mapStateToProps)(MerchControl);

export default MerchControl;