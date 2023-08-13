
import './App.css';
import Footer from './compnents/Footer/Footer';
import Header from './compnents/Header/Header';
import Booking from './pages/Booking/Booking';
import Dishes from './pages/Dishes/Dishes';
import { BrowserRouter as  Router , Route , Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
function App() {
  return (
    < >

<Router>
<Header />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/dishes' element={ <Dishes />}/>
    <Route path='/services' element={  <Booking/> }/>
    <Route path='/about us' element={  <About/> }/>
    <Route path='/*' element={  <NotFound /> }/>
  
  </Routes>
  <Footer />
</Router>

     
    
    
    </>
  );
}

export default App;
