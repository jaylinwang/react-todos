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
      let { title } = action.payload;
      return [...state, {
        id: this.getId(),
        title,
        completed: false,
      }];
    }
    if (action.type === ActionTypes.DELETE_TODO) {
      let { id } = action.payload;
      return state.filter(item => item.id !== id);
    }
    if (action.type === ActionTypes.UPDATE_TODO) {
      let { id, todo } = action.payload;
      return [...state].map((item) => {
        if (item.id === id) {
          item = Object.assign(item, todo);
        }
        return item;
      });
    }
    if (action.type === ActionTypes.CLEAT_COMPLETED) {
      return state.filter(item => !item.completed);
    }
    if (action.type === ActionTypes.TOGLLE_ALL) {
      let { toCompleted } = action.payload;
      let list = [...state];
      if (toCompleted) {
        list.map((item) => {
          item.completed = true;
          return item;
        });
      } else {
        list.map((item) => {
          item.completed = false;
          return item;
        });
      }
      return list;
    }
    return state;
  }
}

export default new TodoStore();
