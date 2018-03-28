import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoFilter from '../TodoFilter';

import './TodoFooter.scss';

export default class TodoFooter extends Component {
  static propTypes = {
    onFilterChange: PropTypes.func,
    onClearCompleted: PropTypes.func,
  }
  static defaultProps = {
    onFilterChange: () => {},
    onClearCompleted: () => {},
  }

  onFilterChange = (value) => {
    this.props.onFilterChange(value);
  }

  onClearCompleted = (value) => {
    this.props.onClearCompleted(value);
  }

  render() {
    let { completedCount, filterStatus } = this.props;
    return (
      <footer className="footer">
        <div className="todo-count">
          <strong>{completedCount}</strong> 项已完成
        </div>
        <TodoFilter
          value={filterStatus}
          onChange={this.onFilterChange}
        />
        <div className="clear-completed">
          <a onClick={this.onClearCompleted}>清空已完成</a>
        </div>
      </footer>
    );
  }
}
