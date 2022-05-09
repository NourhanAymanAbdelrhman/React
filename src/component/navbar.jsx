import { Fragment } from "react"
import classes from './navbar.module.css'
import logo from '../images/logo.png'
import {faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import {faSearch } from "@fortawesome/free-solid-svg-icons";
import {faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Navbar=()=>{

    return(

  <Fragment>
 <div className={classes.container}>

    <header>
  <div className={classes.headerContent}>
 <img src={logo} alt="notfound"></img>

 <nav className={classes.navBar}>
     <ul className={classes.listUnstyle}>
      <li className={classes.dropdown}>
       <Link to="/"  className={classes.navitem}>furniture</Link>
       <div  className={classes.dropdownMenue}>
         <ul className={classes.listUnstyle}>
           <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
             <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
             <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
             <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
             <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
         </ul>

         <ul className={classes.listUnstyle}>
           <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
             <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
             <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
             <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
             <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
         </ul>

         <ul className={classes.listUnstyle}>
           <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
             <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
             <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
             <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
             <li>
           <Link to="/" >
             tabels
             </Link>
             </li>
         </ul>
       </div>
        </li>
      <li>
      <Link to="/about"  className={classes.navitem}>about</Link>
      </li>
      <li>
      <Link to="/contact" className={classes.navitem} > contact</Link>
      </li> 
      <li>
      <Link to="/locations"  className={classes.navitem}>Locations</Link>
      </li> 
      </ul>
 </nav>

    <div className={classes.login}>
      <ul className={classes.listUnstyle}>
      <li>
      <FontAwesomeIcon icon={ faSearch} />
      </li>
      <li>
      <FontAwesomeIcon icon={faUser} />    
      </li>
      <li>
      <Link to="/cart" className={classes.navitem} > 
      <FontAwesomeIcon icon={ faShoppingBag} className={classes.bag} />
      Your Bag
      </Link>
      </li>
      
     </ul>
    </div>
  </div>
</header>


 </div>
  </Fragment>

    )


}
export default Navbar