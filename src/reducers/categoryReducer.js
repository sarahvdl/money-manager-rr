import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function categoryReducer(state = initialState.categories, action) {
  switch(action.type) {
    case types.ADD_CATEGORY:
    {
      return [...state, {
          id: (state.length === 0) ? 0 : state[state.length - 1].id + 1,
          backgroundColor: action.category.backgroundColor,
          textColor: action.category.textColor,
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
