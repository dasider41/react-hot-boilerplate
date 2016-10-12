import * as types from '../constants/ActionTypes';

const initialState = {

};

export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.ACTION:
      return {
        // DO SOMETHING
      }

    default:
      return state;
  }
}
