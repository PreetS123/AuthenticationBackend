import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';


function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path='/' element={<SignUp/>}  />
        <Route path='/login' element={<Login/>}  />
        {/* <Route path='/' element  /> */}
        {/* <Route path='/' element  /> */}
       </Routes>
    </div>
  );
}

export default App;
