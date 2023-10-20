import './App.css';
import Form from './components/Form/Form.jsx';

import Cards from './components/Cards/Cards.jsx';
// import characters from './data.js';
import { useState, useEffect } from 'react';
import Navbar from './components/Nav/Navbar';
import axios from 'axios';
import { Route, Routes, useLocation } from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import PATHROUTES from './helpers/PathRoutes';
import { useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites.jsx';

// import dotenv from 'dotenv';
// dotenv.config();

function App() {

   const {pathname} = useLocation()

   const navigate = useNavigate()

const [characters, setCharacters]= useState ([])  //se crea un estado local

const[access, setAccess]= useState (false)

// const EMAIL= 'francotomassich@gmail.com'
// const PASSWORD= '123456'

// function login(userData) {
//    if (userData.password === PASSWORD && userData.email ===EMAIL){
//       setAccess(true);
//       navigate ('/home');
//    }
// }
function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
   });
}

useEffect(()=>{
!access && navigate('/');
},[access]);

const onSearch = (id) => {
   
   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {     //peticion con axios para traer los personajes
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]); //cambia el estado y agrega los personajes nuevos
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

// const onSearch = (id) => {
//    // Convierte el ID en un número
//    const characterId = parseInt(id, 10);
 
//    if (!isNaN(characterId)) {
//      axios(`http://localhost:3001/rickandmorty/character/${characterId}`)
//        .then(({ data }) => {
//          if (data.name) {
//            // Verifica que el personaje no esté ya en la lista
//            if (!characters.find((char) => char.id === characterId)) {
//              setCharacters((oldChars) => [...oldChars, data]);
//            } else {
//              console.log('El personaje ya está en la lista.');
//            }
//          } else {
//            console.log('¡No hay personajes con este ID!');
//          }
//        })
//        .catch((error) => {
//          console.error('Error en la solicitud:', error);
//        });
//    } else {
//      console.log('ID no válido. Debe ser un número.');
//    }
//  };

const onClose =(id)=> {
   setCharacters((prevState)=> prevState.filter((ch)=>ch.id !== id))

   // setCharacters (
   //    characters.filter((char)=> {
   //       return char.id !== Number(id)
   //    }))

}
   return (
      <div className='App'>
         {pathname !== '/' && <Navbar onSearch= {onSearch}/>}
        <Routes>
         <Route path={PATHROUTES.LOGIN} element={<Form login={login}/>}/>
         <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path={PATHROUTES.ABOUT} element={<About/>}/>
         <Route path={PATHROUTES.DETAIL} element={<Detail/>}/>
        <Route path={PATHROUTES.FAVORITES} element={<Favorites/>}/>
        </Routes>

         
        
      </div>
   );
}

export default App;
