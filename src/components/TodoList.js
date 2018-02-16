import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onReadOnlyTodo, onTodoBlur, onRemoveClick, onCompleteAll, onRemoveCompleted }) => {

  const leftTodos = todos.filter(t => !t.completed).length;
  const completedTodos = todos.filter(t => t.completed).length;

  return (
    <section class="main">
      <input class="toggle-all" type="checkbox" onClick={() => onCompleteAll()} />
      <ul class="todo-list">
        {todos.map(todo => (
          <Todo key={todo.id} {...todo}
                onClick={() => onTodoClick(todo.id)}
                onRemove={() => onRemoveClick(todo.id)}
                onDoubleClick={() => onReadOnlyTodo(todo.id)}
                onBlur={() => onTodoBlur(todo.id, todo.text)}
          />
        ))}
      </ul>
      <span class="footer-alt item-left">{leftTodos} item left</span>
      <span class="footer-alt clear-completed" onClick={() => onRemoveCompleted()} >Clear Complete ({completedTodos})</span>
    </section>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      onReadOnly: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onReadOnlyTodo: PropTypes.func.isRequired,
  onTodoBlur: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onCompleteAll: PropTypes.func.isRequired,
  onRemoveCompleted: PropTypes.func.isRequired
}

export default TodoList