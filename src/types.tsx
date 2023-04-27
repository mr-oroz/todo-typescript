export interface ITodos {
  id: string,
  title: string,
  completed: boolean,
}

export interface MyStateInterface {
  todos: ITodos[]
}