import formVisibleReducer from './form-visible-reducer';
import merchListReducer from './merch-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainMerchList: merchListReducer
});

export default rootReducer;