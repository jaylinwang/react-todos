import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';


import './TodoFilterItem.scss';

export default class TodoFilter extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    selected: false,
    onClick: () => {},
  }

  onClick = () => {
    this.props.onClick(this.props.value);
  }

  render() {
    const { label, selected } = this.props;
    return (
      <li
        className={cx({
          'todo-filter-item': true,
          selected,
        })}
      >
        <a onClick={this.onClick}>{ label }</a>
      </li>
    );
  }
}
