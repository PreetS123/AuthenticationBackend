import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Dashboard } from './Pages/Dashboard';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
import { Users } from './Pages/Users';


function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path='/' element={<SignUp/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/dashboard' element={<Dashboard/>}  />
        <Route path='/users' element={<Users/>}  />
       </Routes>
    </div>
  );
}

export default App;
