import * as types from './actionTypes';

/// ACTION CREATORS ///
export function addCategory(category) {
  return {
    type: types.ADD_CATEGORY,
    category
  };
}

export function removeCategory(id) {
  return {
    type: types.REMOVE_CATEGORY,
    id
  };
}
