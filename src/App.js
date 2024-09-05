import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import Authentication from './components/authentication/Authentication';

function App() {
  return (
   <Routes>
    <Route path='/*' element={true?<HomePage/>:<Authentication/>}></Route>
   </Routes>
  );
}

export default App;
