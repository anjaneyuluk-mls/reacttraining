import { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducer';

const initialState = {};

const store = createStore(combineReducers({ counter: counterReducer }), initialState);

export default store;
