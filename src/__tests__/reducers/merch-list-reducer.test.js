import merchListReducer from '../../reducers/merch-list-reducer';



  
describe('merchListReducer', ()  => {
  const currentState = {
    1: { name: 'calculator',
    description: 'mathematical tool',
    quantity: '5',
    id: 1},
    2: {  name: 'pencil',
    description: 'writing tool',
    quantity: 10,
    id: 2}
  }
  let action;
  const merchData = {
    name: 'calculator',
    description: 'mathematical tool',
    quantity: 5,
    id: 1
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(merchListReducer({}, { type: null})).toEqual({});
  });
  
  test('Should successfully add new merch data to mainMerchList', () => {
    const { name, description, quantity, id } = merchData;
    action = {
      type: 'ADD_MERCH',
      name: name,
      description: description,
      quantity: quantity,
      id: id
    };

    expect(merchListReducer({}, action)).toEqual({
      [id] : {
        name: name,
      description: description,
      quantity: quantity,
      id: id
      }
    });
  });

  test('Should successfully delete a merch', ()=> {
    action = {
      type: 'DELETE_MERCH',
      id: 1
    };

    expect(merchListReducer(currentState, action)).toEqual({
      2: {name: 'pencil',
    description : 'writing tool',
    quantity: 10,
    id: 2}
    });
  });
});