import ActionTypes from '../constants/ActionTypes';

export default (state = 'all', action) => {
  if (action.type === ActionTypes.CHANGE_FILTER) {
    let { filter } = action.payload;
    return filter;
  }
  return state;
}
