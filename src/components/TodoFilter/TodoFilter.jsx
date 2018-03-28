import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoFilterItem from '../TodoFilterItem';
import './TodoFilter.scss';

export default class TodoFilter extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func,
  }

  static defaultProps = {
    value: '',
    defaultValue: '',
    onChange: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue,
    };
  }

  onItemClick = (value) => {
    this.setState({
      value,
    });
    this.props.onChange(value);
  }

  render() {
    const data = [{
      value: 'completed',
      label: '已完成',
    }, {
      value: 'active',
      label: '进行中',
    }, {
      value: 'all',
      label: '全部',
    }];
    let { value } = this.state;
    return (
      <ul className="todo-filter">
        {
          data.map(item => (
            <TodoFilterItem
              {...item}
              key={item.value}
              selected={value === item.value}
              onClick={this.onItemClick}
            />
          ))
        }
      </ul>
    );
  }
}
