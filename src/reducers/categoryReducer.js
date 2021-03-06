import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {colors} from '../constants';

export default function categoryReducer(state = initialState.categories, action) {
  switch(action.type) {
    case types.ADD_CATEGORY:
    {
      const id = (state.length === 0) ? 0 : state[state.length - 1].id + 1;
      const backgroundColor = colors[id%6];
      return [...state, {
          id: id,
          backgroundColor: backgroundColor,
          name: action.category.name
        }
      ];
    }
    case types.REMOVE_CATEGORY:
    {
      return state.filter(category =>
        category.id !== action.id);
    }
    default:
      return state;
  }
}
