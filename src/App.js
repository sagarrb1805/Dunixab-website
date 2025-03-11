import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Career from './Pages/Career/Career';
import Talents from './Pages/Talents/Talents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <Header/>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/career' element={<Career></Career>}></Route>
          <Route path='/talents' element={<Talents></Talents>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>   
    </div>
  );
}

export default App;
