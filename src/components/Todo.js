import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onDoubleClick, onBlur, onRemove, completed, text, onReadOnly }) => {

  const onChange = e => {
    text = e.target.value
  }

  return(
  <li
    class={completed ? "completed" : ""}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <div class="view">
      <input class="toggle" type="checkbox"
        onClick={onClick}
      />
      <input class="lab" type= "text"
          defaultValue={text}
          onDoubleClick={onDoubleClick}
          onBlur={onBlur}
          readOnly={ onReadOnly ? "readOnly" : "" }
          onChange={onChange}
          />
      <button class="destroy"
        onClick={onRemove}
      ></button>
    </div>
  </li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onReadOnly: PropTypes.bool.isRequired
}

export default Todo