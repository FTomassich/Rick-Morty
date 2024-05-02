
import { Link } from 'react-router-dom';
import style from '../Card/Card.module.css';
import {addFav, removeFav} from '../../redux/actions'
import {connect} from 'react-redux'
import { useState, useEffect } from 'react';

const Card = (props)=> { 

 const  {id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}=props;
 
const [isFav, setIsFav]= useState(false);

const handleFavorite=()=>{
isFav ? removeFav(id): addFav(props);
setIsFav(!isFav);
};

useEffect(()=> {
  myFavorites.forEach((fav)=>{
    if (fav.id === props.id){
      setIsFav(true);
    }
  });
}, [myFavorites]);

   return (

      
      <div className={style.card}>

        {isFav ? (
          <button onClick={handleFavorite}>💖</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )
      }
         
         <button onClick={() =>onClose (id)} className={style.boton}>❌</button>
         <Link to={`/detail/ ${id}`}  className={style.nombre}>
         <h3> Nombre: {name}</h3>
         </Link>
         <img className={style.imagen} src={image} alt=""/> 
         <h3 className={style.origin}>Origen: {origin}</h3>
        
        
        </div>
        );
      }
      
      const mapDispatchToProps= (dispatch)=> {
        return {
          addFav: (character)=> {
            dispatch(addFav(character))
          },
          removeFav: (id)=> {
            dispatch (removeFav(id));
          },
        };

      };
 
      const mapStateToProps= (state) =>{
        return {
          myFavorites: state.myFavorites,
        };

      };


export default connect (mapStateToProps, mapDispatchToProps)(Card);

