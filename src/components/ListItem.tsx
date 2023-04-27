import React, { FC } from "react";

interface ListItemProps {
  title: string;
  completed: boolean;
  onClick: () => void;
  removeItem:() => void;
}

const ListItem: FC<ListItemProps> = ({ title, completed, onClick, removeItem }) => {
  return (
    <div className="list-item">
      <input
        onClick={onClick}
        type="checkbox"
        defaultChecked={completed} />
      <span>{title}</span>
      <button 
        style={{display: completed ? 'block' : 'none'}} 
        onClick={removeItem}>delete</button>
    </div>
  );
};

export default ListItem;
