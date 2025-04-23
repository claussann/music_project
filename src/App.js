import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Typography from './components/Typography';
import Input from './components/Input';
import Home from './Pages/Home';
import Rock from './Pages/Rock';
import Pop from './Pages/Pop';
import Reggae from './Pages/Reggae'
import Jazz from './Pages/Jazz';
import Electronic from './Pages/Electronic';
import Rap from './Pages/Rap';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 w-25 mt-5'>
            <Typography title>Login</Typography>
          </div>
        </div>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 md-col-6 lg-col-9 w-50 mb-2'>
            <Input />
          </div>
        </div>
      </div> 
      } />
      <Route path="/home" element={<Home />}/>
      <Route path="/rock" element={<Rock />}/>
      <Route path="/pop" element={<Pop />}/>
      <Route path="/reggae" element={<Reggae />}/>
      <Route path="/jazz" element={<Jazz />}/>
      <Route path="/electronic" element={<Electronic />}/>
      <Route path="/rap" element={<Rap />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
