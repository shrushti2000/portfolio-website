import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
   <>
   <BrowserRouter>
   {/* <Header/> */}
   <Routes>

    <Route path="/" element={<Homepage/>}/>
   </Routes>
   </BrowserRouter>
  
   </>
  );
}

export default App;
