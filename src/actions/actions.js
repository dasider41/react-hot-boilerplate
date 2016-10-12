import * as types from '../constants/ActionTypes';

export function action(id) {
  return {
    type: types.ACTION,
    id
  };
}
