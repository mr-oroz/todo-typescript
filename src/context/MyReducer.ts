import { MyStateInterface, ITodos } from "../types"

type TodoActions = 
  | {type: 'ADD_TODO', payload: string}
  | {type: 'CHANGE_COMLETED', payload: {id: string}}
  | {type: 'REMOVE_ITEM', payload: {id: string}}
  | {type: 'GET_TODO', payload: ITodos[]}

export const MyReducer = (state: MyStateInterface, action: TodoActions) => {
  switch(action.type) {
    case 'ADD_TODO' : {
      const newItem  = {
        id: Date.now().toString(),
        title: action.payload,
        completed: false
      }
      const newArr = [...state.todos, newItem]
      return {
        ...state,
        todos: newArr
      }
    }
    case "GET_TODO" : {
      const {payload} = action;
      const {todos} = state;
      return {
        ...state,
        todos: payload || todos
      }
    }
    case 'CHANGE_COMLETED': {
      const {id} = action.payload
      const {todos} = state
      const index = todos.findIndex(elem => elem.id === id)
      const old = todos[index]
      const newItem = {...old, completed: !old.completed}
      const newArr = [...todos.slice(0, index), newItem, ...todos.slice(index + 1)]
      return {
        ...state,
        todos: newArr
      }
    }
    case 'REMOVE_ITEM': {
      const {id} = action.payload
      const {todos} = state
      const newArr = todos.filter(elem => elem.id !==id)
      return {
        ...state,
        todos: newArr
      }
    }
    default :
      return state
  }
}