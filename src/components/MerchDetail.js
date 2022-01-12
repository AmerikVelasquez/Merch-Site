import React from 'react';
import PropTypes from 'prop-types'


function MerchDetail(props) {
  const { merch, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Merch Detail</h1>
      <h3>{merch.name}</h3>
      <p>{merch.description}</p>
      <p>Quantity: {merch.quantity}</p>
      <button onClick = {props.onClickingEdit}>Update Merch</button>
      <button onClick = {()=> onClickingDelete(merch.id)}> Close Merch</button>

    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default MerchDetail;
