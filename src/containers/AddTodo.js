import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  const keyControl = ec => {
    if (ec.keyCode === 13 && ec.shiftKey === false) {
      return
    }
  }

  return (
    <header class="header">
      <h1>todos</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input onKeyDown={keyControl}
          class="new-todo"
          placeholder="What needs to be done?"
          ref={node => {
            input = node
          }}
        />
      </form>
    </header>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo