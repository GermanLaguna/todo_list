const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          onReadOnly: true
        }
      ]
    case 'COMPLETE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case 'READONLY_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, onReadOnly: !todo.onReadOnly }
          : todo
      )
    case 'BLUR_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, onReadOnly: !todo.onReadOnly, text: todo.text }
          : todo
      )
    case 'REMOVE_TODO':
      return state.filter(todo =>
        todo.id !== action.id
      )
    case 'COMPLETE_ALL':
      const alreadyCompleted = state.every(({ completed }) => completed);
      return state.map(todo => ({
        ...todo,
        completed: !alreadyCompleted
      }))
    case 'REMOVE_COMPLETED':
      return state.filter(todo => todo.completed === false)
    default:
      return state
  }
}

export default todos