import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import merchListReducer from '../../reducers/merch-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainMerchList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {type: null}));
  });

  test('Check that initial state of merchListReducer matches root reducer', () => {
    expect(store.getState().mainMerchList).toEqual(merchListReducer(undefined, {type: null}));
  });

  test('Check that ADD_MERCH action works for merchListReducer and root reducer', () =>{
    const action = {
      type: 'ADD_MERCH',
      name: 'calculator',
      description: 'mathematical tool',
      quantity: 10,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().mainMerchList).toEqual(merchListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});