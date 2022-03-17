import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserLogin from './component/Login';
import Dashboard from './component/Dashboard';


function App() {
  return (
    <>
    <Routes>
      <Route  path='/' element={<UserLogin />}/>
      <Route   path='/dashboard' element={<Dashboard />}/>
    </Routes>
    </>
  );
}

export default App;
