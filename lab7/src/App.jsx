import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import {Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route path={'/task1'} element={<Task1/>}/>
        <Route path={'/task2'} element={<Task2/>}/>
      </Route>
    </Routes>
  );
};

export default App;
