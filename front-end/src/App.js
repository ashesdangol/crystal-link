import {Routes, Route} from 'react-router-dom';
import NavbarMenu from "./components/NavbarMenu";
import FooterMenu from "./components/FooterMenu";
import Signup from "./pages/Signup";
import LoginForm from "./pages/LoginForm";
import Dashboard from './pages/Dashboard';

const App = () =>{
  return (
    <div>
    <NavbarMenu />
    <Routes>
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    <FooterMenu />
  </div>
  )
}


export default App;
