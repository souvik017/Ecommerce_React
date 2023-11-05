
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Commponents/Navbar';
import Footer from './Commponents/Footer';
import ScrollToTopOnNavigate from './Commponents/ScrollToTop';


function App() {
  return (
   <>
   <Navbar/>
   <ScrollToTopOnNavigate/>
   <Outlet/>
   <Footer/>
   </>
  );
}

export default App;
