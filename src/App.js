
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Commponents/Navbar';
import Footer from './Commponents/Footer';


function App() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  );
}

export default App;
