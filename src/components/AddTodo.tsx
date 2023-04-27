import React, { FC, useState, useContext } from "react";
import { MyContext } from "../context/MyContext";


const AddTodo: FC = () => {
  const [value, setValue] = useState<string>("");
  const {addTodo} = useContext(MyContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue('');
    addTodo(value);
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input value={value} onChange={handleChange} type="text" />
      <button type="submit">add</button>
    </form>
  );
}

export default AddTodo;
