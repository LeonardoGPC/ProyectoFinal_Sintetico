
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Create from '../src/components/Create/Create.jsx'
import Landing from "./components/Landing/landing.jsx"

function App() {
  return (
    <div className="App">
      <div className='App_bg'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/clubs' element={<div><h1>Clubs</h1></div>}/>
        <Route path='/login' element={<div><h1>Login</h1></div>}/>
        <Route path='/sintetico' element={<div><h1>Home</h1></div>}/>
        <Route path='/profile' element={<div><h1>Profile</h1></div>}/>
        <Route path='/sintetico/detail/:id' element={<div><h1>Detail</h1></div>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='*' element={<div><h1>Error 404</h1></div>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
