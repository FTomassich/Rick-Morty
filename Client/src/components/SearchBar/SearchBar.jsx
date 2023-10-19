import { useState } from "react";



const SearchBar = (props) => {
 

  const [id, setId]= useState ('')

  const handleChange = (e) => {
   setId(e.target.value)

  }
   
  const { onSearch } = props;
         return (
           
            <div>
               <input type='search' placeholder= "Write ID...🔍" onChange={handleChange} value={id}/>
               <button onClick={() => onSearch (id)}>Agregar</button>
            </div>
            
   
         );
      }

      export default SearchBar;
      
