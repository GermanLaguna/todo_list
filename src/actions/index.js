let nextTodoId = 0

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const completeTodo = id => {
  return {
    type: 'COMPLETE_TODO',
    id
  }
}

export const readOnlyTodo = id => {
  return {
    type: 'READONLY_TODO',
    id
  }
}

export const blurTodo = (id, text) => {
  return {
    type: 'BLUR_TODO',
    id,
    text
  }
}

export const removeTodo = (id, text) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export const completeAll = id => {
  return {
    type: 'COMPLETE_ALL'
  }
}

export const removeCompleted = id => {
  return {
    type: 'REMOVE_COMPLETED'
  }
}