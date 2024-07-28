import { createStore } from 'redux';
import { combineReducers } from 'redux';
import cardReducer from './Createreducer';

const rootReducer = combineReducers({
  cart: cardReducer,
});

const store = createStore(rootReducer);

export default store;