import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import {Home, Learn, WhyUs, About, Careers, Market} from './components/views';
import './styles/global/style.css';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/market' element={<Market/>}/>
        <Route path='/learn' element={<Learn/>}/>
        <Route path='Whyus' element={<WhyUs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/careers' element={<Careers/>}/>
      </Routes>
    </div>
  );
}

export default App;
