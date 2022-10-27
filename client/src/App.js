
import './App.css';
import ContactForm from './components/Home/ContactForm/ContactForm';
import { Routes, Route } from 'react-router-dom';
import Create from './components/Create/create.jsx'
import Landing from "./components/Landing/landing.jsx"
import Home from './components/Home/Home.jsx'
import Detail from './components/Detail/detail';

function App() {
  return (
    <div className="App">
      <div className='App_bg'>
        
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/clubs' element={<div><h1>Clubs</h1></div>}/>
        <Route path='/login' element={<div><h1>Login</h1></div>}/>
        <Route path='/sintetico' element={<Home/>}/>
        <Route path='/profile' element={<div><h1>Profile</h1></div>}/>
        <Route path='/sintetico/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='*' element={<div><h1>Error 404</h1></div>}/>
        <Route path='/contact' element={<ContactForm />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
