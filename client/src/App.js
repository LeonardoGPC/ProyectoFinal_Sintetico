import logo from './logo.svg';
import './App.css';
import ContactForm from './components/Home/ContactForm/ContactForm';
import Faq from './components/Home/FAQ/Faq';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<div><h1>Landing</h1></div>}/>
        <Route path='/clubs' element={<div><h1>Clubs</h1></div>}/>
        <Route path='/login' element={<div><h1>Login</h1></div>}/>
        <Route path='/sintetico' element={<div><h1>Home</h1></div>}/>
        <Route path='/profile' element={<div><h1>Profile</h1></div>}/>
        <Route path='/sintetico/detail/:id' element={<div><h1>Detail</h1></div>}/>
        <Route path='/create' element={<div><h1>Create</h1></div>}/>
        <Route path='*' element={<div><h1>Error 404</h1></div>}/>
        <Route path='/contact' element={<ContactForm />}/>
        <Route path='/faq' element={<Faq/>} />
      </Routes>
    </div>
  );
}

export default App;
