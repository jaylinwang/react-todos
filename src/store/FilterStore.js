import { ReduceStore } from 'flux/utils';
import TodoDispatcher from '../dispatchers/TodoDispatcher';
import ActionTypes from '../constants/ActionTypes';

class FilterStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
    this.id = 0;
  }

  getInitialState() {
    return 'all';
  }

  reduce(state, action) {
    if (action.type === ActionTypes.CHANGE_FILTER) {
      let { status } = action;
      return status;
    }
    return state;
  }
}

export default new FilterStore();
