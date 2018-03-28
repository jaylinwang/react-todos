import { ReduceStore } from 'flux/utils';
import TodoDispatcher from '../dispatchers/TodoDispatcher';
import ActionTypes from '../constants/ActionTypes';

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
    this.id = 0;
  }

  getInitialState() {
    return [];
  }

  getId() {
    this.id += 1;
    return this.id;
  }

  reduce(state, action) {
    if (action.type === ActionTypes.ADD_TODO) {
      let { title } = action;
      return [...state, {
        id: this.getId(),
        title,
        completed: false,
      }];
    }
    return state;
  }
}

export default new TodoStore();
