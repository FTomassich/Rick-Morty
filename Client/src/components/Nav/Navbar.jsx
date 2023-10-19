import SearchBar from "../SearchBar/SearchBar"
import style from '../Nav/nav.module.css';
import PATHROUTES from "../../helpers/PathRoutes";


import { Link } from "react-router-dom";

    const Navbar= (props)=> {
      const {onSearch}= props;
      
      return (

    <div className= {style.nav}>
      <ul>
        <li><Link to={PATHROUTES.HOME} className={style.link}>Home</Link></li>
        <li><Link to={PATHROUTES.ABOUT} className={style.link}>About</Link></li>
        <li><Link to={PATHROUTES.FAVORITES} className={style.link}>Favorites</Link></li>
        <li><SearchBar onSearch= {onSearch} /></li>
    
         </ul>
    
  
    </div>

)

};
export default Navbar;
