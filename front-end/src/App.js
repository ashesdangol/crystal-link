import {Routes, Route} from 'react-router-dom';
import NavbarMenu from "./components/NavbarMenu";
import FooterMenu from "./components/FooterMenu";
import Signup from "./pages/Signup";
import LoginForm from "./pages/LoginForm";
import Dashboard from './pages/Dashboard';

const App = () =>{
  return (
    <>
    <div className='navbar__main navbar__main--top-sticky'>
      <NavbarMenu />
    </div>
    <div className="body__contents body__contents--height">
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/crystal-link' element={<LoginForm />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
    <div className='footer__main footer__main--bottom-sticky'>
      <FooterMenu />
    </div>
   
  </>
  )
}


export default App;
