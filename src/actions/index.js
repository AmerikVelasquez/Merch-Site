export const deleteMerch = id => ({
  type: 'DELETE_MERCH',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addMerch = (merch) => {
    const { name, description, quantity, id } = merch;
    return {
      type: 'ADD_MERCH',
      name: name,
      description: description,
      quantity: quantity,
      id: id
    }
  }