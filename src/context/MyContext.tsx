import { createContext } from "react";
import { MyStateInterface } from "../types";

export type TodoContextProps = {
  todoState: MyStateInterface,
  addTodo: (body: string) => void,
  changeCompleted: (id: string) => void
  removeItem: (id: string) => void
}

export const MyContext = createContext<TodoContextProps>({} as TodoContextProps)