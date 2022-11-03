import React from 'react';
import {Outlet} from 'react-router-dom';
import TaskSwitcher from '../components/TaskSwitcher/TaskSwitcher';

const Layout = () => {
  return (
    <>
     <TaskSwitcher/>
     <Outlet/>
    </>
  );
};

export default Layout;
