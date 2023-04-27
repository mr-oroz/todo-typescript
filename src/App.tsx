import React, { FC } from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import List from "./components/List";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <List />
    </div>
  );
};

export default App;
