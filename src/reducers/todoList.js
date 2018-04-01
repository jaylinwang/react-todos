import ActionTypes from '../constants/ActionTypes';

// id generator
let id = 0;
function getId() {
  id += 1;
  return id;
}

export default (state = [], action) => {


  if (action.type === ActionTypes.ADD_TODO) {
    let { title } = action.payload;
    return [...state, {
      id: getId(),
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
