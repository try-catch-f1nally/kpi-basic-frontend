import React from 'react';
import {NavLink} from 'react-router-dom';

const TaskSwitcher = () => {
  const navLinkStyle = ({isActive}) => ({
    fontSize: '1.5rem',
    marginRight: '1rem',
    color: isActive ? "#001248" : "#000000",
    fontWeight: isActive ? "bold" : "normal"
  });

  return (
    <>
      <NavLink to={"/task1"} style={navLinkStyle}>Task1</NavLink>
      <NavLink to={"/task2"} style={navLinkStyle}>Task2</NavLink>
    </>
  );
};

export default TaskSwitcher;
