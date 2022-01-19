import * as actions from './../../actions';

describe('merch site actions', () => {
  it('deleteMerch should create DELETE_MERCH action', () => {
    expect(actions.deleteMerch(1)).toEqual({
      type: 'DELETE_MERCH', 
      id:1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  
  it('addMerch should create ADD_MERCH action', () => {
    expect(actions.addMerch({name: 'calculator', description: 'mathematical tool', quantity: '5', id: 1})).toEqual({
      type: 'ADD_MERCH',
      name: 'calculator',
      description: 'mathematical tool',
      quantity: '5',
      id: 1
    });
  });
});