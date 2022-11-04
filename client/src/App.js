import './App.css';
import ContactForm from './components/Landing/ContactForm/ContactForm';
import Faq from './components/Landing/Info/FAQ/Faq';
import { Routes, Route, useLocation } from 'react-router-dom';
import Create from './components/Create/create.jsx'
import Landing from "./components/Landing/landing.jsx"
import Home from './components/Home/home.jsx'
import Detail from './components/Detail/detail';
import Clubs from './components/Clubs/clubs';
import Load from './components/Load/load';
import { useEffect, useState } from 'react';
import About from './components/About/about';
import Login from './components/Login/login';
import MiniFooter from './components/MiniFooter/MiniFooter';
import Profile from './components/Profile/profile';
import Pagos from './components/Pagos/pagos';
import BookingAdmin from './components/BookingAdmin/BookingAdmin.jsx'
import BookingUser from './components/BookingUser/BookingUser.jsx'

function App() {

  const [load, setLoad] = useState(false)

  let location = useLocation();

  const animation = () => {
    setLoad(false)
  }

  useEffect(() => {
    setLoad(true)
    setTimeout(animation, 1750);
  }, [location])

  return (
    <div className="App">
      <div className='App_bg'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/clubs' element={<Clubs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sintetico' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/sintetico/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='*' element={<div><h1>Error 404</h1></div>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactForm />}/>
        <Route path='/faq' element={<Faq/>} />
        <Route path= '/minifooter' element={<MiniFooter/>} />
        <Route path='/pay' element={<Pagos/>}/>
        <Route path='/bookingAdmin' element={<BookingAdmin/>} />
        <Route path='/bookingUser' element={<BookingUser/>}/>
        
      </Routes>
      {load && <Load/>}
      </div>
    </div>
  );
}

export default App;