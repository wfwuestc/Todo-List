import React, {Component} from 'react'
import '../css/TodoInput.css'

function submit (props, e) {
    if (e.key === 'Enter') {
      if (e.target.value.trim() !== '') {
              props.onSubmit(e)
            }
  }
}
function changeTitle (props, e) {
  props.onChange(e)
}

export default function (props) {
  return <input type="text" value={props.content}
                className="TodoInput"
                onChange={changeTitle.bind(null, props)}
                onKeyPress={submit.bind(null, props)}
                placeholder={"请输入待办事项 然后回车"}
  />
}
