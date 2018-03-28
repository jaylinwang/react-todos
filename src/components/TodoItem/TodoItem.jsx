import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './TodoItem.scss';

class TodoItem extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
  }

  static defaultProps = {
    onChange: () => {},
    onDelete: () => {},
  }

  onChange = () => {
    let { id, title, completed } = this.props;
    this.props.onChange(id, {
      title,
      completed: !completed,
    });
  }

  onDelete = () => {
    let { id } = this.props;
    this.props.onDelete(id);
  }

  render() {
    const { title, completed } = this.props;

    return (
      <li
        className={cx({
          'todo-item': true,
          completed,
        })}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={this.onChange}
          />
          <label>{ title }</label>
          <button
            className="destory"
            onClick={this.onDelete}
          />
        </div>
      </li>
    );
  }
}

export default TodoItem;
