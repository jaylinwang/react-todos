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
    let { value } = this.state;
    if (event.keyCode === 13 && !!value) {
      this.props.onEnter(value);
      this.setState({
        value: '',
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
