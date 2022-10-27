
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing/landing.jsx"
import Navbar from './components/NavBar/Navbar';
import Detail from './components/Detail/detail';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='App_bg'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/clubs' element={<div><h1>Clubs</h1></div>}/>
        <Route path='/login' element={<div><h1>Login</h1></div>}/>
        <Route path='/sintetico' element={<div><h1>Home</h1></div>}/>
        <Route path='/profile' element={<div><h1>Profile</h1></div>}/>
        <Route path='/sintetico/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<div><h1>Create</h1></div>}/>
        <Route path='*' element={<div><h1>Error 404</h1></div>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
