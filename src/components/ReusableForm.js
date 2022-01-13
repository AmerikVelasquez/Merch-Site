import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
        type = 'text'
        name = 'name'
        placeholder='name'/>
      <input
        type = 'text'
        name = 'description'
        placeholder = 'description'/>
      <input 
        type = 'number'
        min= {0}
        name = 'quantity'
        placeholder = 'number'/>
        <button type = 'submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}


ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}
export default ReusableForm
