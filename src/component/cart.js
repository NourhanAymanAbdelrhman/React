import {Fragment, useContext, useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,

} from "@mui/material";
import {productContext} from "../modules/productmodule";
import classes from './cart.module.css'
import { textAlign } from "@mui/system";
const Cart=()=>{
 const{cart,deletefromcart,increment} =useContext(productContext);
 const[cartlist,setcartlist]=useState(null)
 useEffect(()=>{
   console.log(cart)
   setcartlist(cart)
 },[cart])
 return  cartlist?(

 <Fragment>
         
        <Container>
         {cartlist.map((product)=>{
         return(
              
          <Grid container>
            <Grid item xs={12} sm={12} md={2}></Grid>
            <Grid item xs={12} sm={12} md={3}>
            <img src={product.image} alt="notfound"  width="200"/>
            </Grid>

            <Grid item xs={12} sm={12} md={4} sx={{padding:5}} >
            
            <p>  Name:{product.name}</p>
                  <p>  Category{product.category}</p>
                 <p> Price:{product.price}L.E</p>
                  <p> Color:{product.color}</p>
                 <p> quantity:{product.qty} </p>
                    <button onClick={()=>deletefromcart(product)} 
                    className={classes.btn} > Delete</button>
                    <button onClick={()=>increment(product.id)} 
                    className={classes.btn} > +</button>
                    <hr/> 
              </Grid>
             
            </Grid> 
          )
          }  )
        } 
            </Container>
   
 </Fragment>
 ): <Typography variant="h2" sx={{m:10,color:"red",textAlign:"center",}}>empty card</Typography>
}
export default Cart