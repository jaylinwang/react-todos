import { ReduceStore } from 'flux/utils';
import TodoDispatcher from '../dispatchers/TodoDispatcher';
import ActionTypes from '../constants/ActionTypes';

class FilterStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return 'all';
  }

  reduce(state, action) {
    if (action.type === ActionTypes.CHANGE_FILTER) {
      let { filter } = action.payload;
      return filter;
    }
    return state;
  }
}

export default new FilterStore();
