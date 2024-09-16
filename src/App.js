import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import Authentication from './components/authentication/Authentication';
import { useDebugValue, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from './store/Action';

function App() {
     
  const jwt = localStorage.getItem("jwt")
  console.log("app.js jwt "+ jwt);
 
  const {auth} = useSelector(store=>store)
  console.log("auth app.js ",auth)
  const dispatch = useDispatch();

  useEffect(()=>{   
    if(jwt){
      dispatch(getUserProfile(jwt))
    }
  },[auth.jwt])
  
  return (
   <Routes>
    <Route path='/*' element={auth.user?<HomePage/>:<Authentication/>}></Route>
    <Route path='/signup' element={<Authentication />} />
      <Route path='/signin' element={<Authentication />} />
   </Routes>
  );
}

export default App;
