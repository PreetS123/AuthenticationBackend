import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path='/' element  />
        {/* <Route path='/' element  /> */}
        {/* <Route path='/' element  /> */}
        {/* <Route path='/' element  /> */}
       </Routes>
    </div>
  );
}

export default App;
