import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoInput from '../../components/TodoInput';
import TodoActions from '../../actions/TodoActions';

class TodoInputContainer extends Component {

  onEnter = (title) => {
    let { dispatch } = this.props;
    dispatch(TodoActions.addTodo(title));
  }

  render() {
    return <TodoInput onEnter={this.onEnter} />;
  }
}

export default connect()(TodoInputContainer);
