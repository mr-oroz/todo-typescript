import React, {FC, useContext} from 'react';
import { MyContext } from '../context/MyContext';

const Header: FC = () => {
  const {todoState} = useContext(MyContext)
  const {todos} = todoState;
  return (
    <div className='header'>
      <h1>Todos {todos.length}</h1>
    </div>
  );
};

export default Header;