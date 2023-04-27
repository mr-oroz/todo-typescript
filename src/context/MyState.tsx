import { MyContext } from "./MyContext"
import { FC, useReducer, useEffect } from "react"
import { MyStateInterface, ITodos } from '../types';
import { MyReducer } from './MyReducer';

interface props {
  children: JSX.Element | JSX.Element[],
}
interface IStore {
  getItem(key: string): string | null,
  setItem(key: string, value: ITodos[]): void 
} 
const defaultState: MyStateInterface = {
  todos: [] 
}

export const MyState: FC<props> = ({ children }) => {
  const [todoState, dispatch] = useReducer(MyReducer, defaultState);

  // useEffect(() => {
  //   localStorage.setItem('todo-type', JSON.stringify(todoState.todos))
  // }, [todoState.todos])

  // useEffect(() => {
  //   let getTodo = localStorage.getItem('todo-type')
  //   let a = JSON.parse(getTodo)
  //   dispatch({type: 'GET_TODO', payload: a})
  // }, [])

  const addTodo = (body: string) => {
    dispatch({ type: 'ADD_TODO', payload: body })
  }
  const changeCompleted = (id: string) => dispatch({ type: 'CHANGE_COMLETED', payload: { id } })
  const removeItem = (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: { id } })

  return (
    <MyContext.Provider value={{
      todoState,
      addTodo,
      changeCompleted,
      removeItem
    }}>
      {children}
    </MyContext.Provider>
  )
}

