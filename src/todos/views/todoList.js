import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from './todoItem.js';
import { toggleTodo, removeTodo } from '../actions.js';
import { FilterTypes } from '../../constants.js';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
  return (
    <ul>
    {
      todos.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          onToggle={() => onToggleTodo(item.id)}
          onRemove={() => onRemoveTodo(item.id)}
        />
      ))
    }
    </ul>
  );
};

const filterTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed);
    default:
      throw new Error('unsupported filter');
  }
}

TodoList.propTypes = {
  todos:  PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: (id) => {
      dispatch(removeTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);