import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoInput.scss';

export default class TodoInput extends Component {
  static propTypes = {
    onEnter: PropTypes.func,
  }
  static defaultProps = {
    onEnter: () => {},
  }

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  onKeyUp = (event) => {
    if (event.keyCode === 13) {
<<<<<<< HEAD
      this.props.onEnter(this.state.value);
      this.setState({
        value: '',
=======
      this.setState({
        value: '',
      });
      this.props.onEnter({
        title: this.state.value,
        completed: false,
>>>>>>> master
      });
    }
  }

  render() {
    let { value } = this.state;
    return (
      <div className="todo-input">
        <input
          className="new-todo"
          type="text"
          placeholder="下一步准备做什么?"
          value={value}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
        />
      </div>
    );
  }
}
