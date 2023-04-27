import React, { FC } from 'react';
import { ITodos } from '../types';
import ListItem from './ListItem';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const List: FC = () => {
  const {todoState, changeCompleted, removeItem} = useContext(MyContext);
  
  const {todos} = todoState;
  return (
    <div className='list'>
      {todos.map((elem) => {
        return (<ListItem
          removeItem={() => removeItem(elem.id)}
          onClick={() => changeCompleted(elem.id)}
          key={elem.id}
          {...elem} />)
      })}
    </div>
  );
};

export default List;