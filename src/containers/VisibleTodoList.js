import { connect } from 'react-redux'
import { completeTodo, readOnlyTodo, blurTodo, removeTodo, completeAll, removeCompleted } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(completeTodo(id))
    },
    onReadOnlyTodo: id => {
      dispatch(readOnlyTodo(id))
    },
    onTodoBlur: (id, text) => {
      dispatch(blurTodo(id, text))
    },
    onRemoveClick: id => {
      dispatch(removeTodo(id, ''))
    },
    onCompleteAll: id => {
      dispatch(completeAll(id))
    },
    onRemoveCompleted: id => {
      dispatch(removeCompleted(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList