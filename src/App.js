import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import DefaultNavbar from './components/DefaultNavbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <DefaultNavbar></DefaultNavbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;