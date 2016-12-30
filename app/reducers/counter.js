import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const count = createReducer(0, {
  [types.INCREMENT_COUNTER](state, action){
    return state + 1;
  },
  [types.DECREMENT_COUNTER](state, action){
    return state - 1;
  },
});