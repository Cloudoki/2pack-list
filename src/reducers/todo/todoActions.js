import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../../constants/actionTypes'

export function addTodo (text, id) {
  return {
    type: ADD_TODO,
    text: text,
    id: id
  }
}

export function deleteTodo (id) {
  return {
    type: DELETE_TODO,
    id: id
  }
}

export function completeTodo (id) {
  return {
    type: COMPLETE_TODO,
    id: id
  }
}
