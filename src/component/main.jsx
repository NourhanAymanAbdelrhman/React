import { Fragment, useRef } from "react"
import slide1 from '../images/main-banner-1-1600x700.jpg'
import discount1 from '../images/cms-banner-1.jpg'
import discount2 from '../images/cms-banner-2.jpg'
import classes from './main.module.css'
import {faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import {faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import{useContext,useState}from "react"
import {productContext} from "../modules/productmodule";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {Rating} from "@mui/material";
import {faCartShopping } from "@fortawesome/free-solid-svg-icons";
import item11 from "../images/banner.PNG";
import Footer from './footer'

 const Home=()=>{
   const paraone= useRef()
   const texts=["Lorem1 ipsum dolor sit, amet consectetur adipisicing elit.Neque fuga voluptatibus porro qui a nihil perferendis! Vel repudiandaelit.adipisicing  adipisicing elit.Neque  elit.Neque fuga voluptatibus porro qui a nihil perferendis! Vel repudiandaelit.adipisicing elit.Neque fuga voluptatibus porro qui a nihil perferendis! Vel repudiandaelit.adipisicing elit.Neque fuga voluptatibus porro qui a nihil perferendis! Vel repudiandaelit."
  ,"Lorem2 ipsum dolor sit, amet consectetur adipisicing elit.Neque fuga voluptatibus porro qui a nihil perferendis! Vel repudiandaelit.adipisicing  adipisicing elit.Neque  elit.Neque fuga voluptatibus porro qui a nihil perferendis! Vel repudiandaelit.adipisicing elit.Neque fuga voluptatibus porro qui a nihil perferendis! Vel repudiandaelit.adipisicing elit.Neque fuga voluptatibus porro qui a nihil perferendis! Vel repudiandaelit."
,"Lorem3 ipsum dolor sit, amet consectetur adipisicing elit.Neque fuga voluptatibus porro qui a nihil perferendis! Vel repudiandaelit.adipisicing  adipisicing elit.Neque  elit.Neque fuga voluptatibus porro qui a nihil perferendis! Vel repudiandaelit.adipisicing elit.Neque fuga voluptatibus porro qui a nihil perferendis! Vel repudiandaelit.adipisicing elit.Neque fuga voluptatibus porro qui a nihil perferendis! Vel repudiandaelit."]
  const[text,settext]=useState(texts[0])
  const changtext= (index)=>{
    settext(texts[index])
  }
  
   const{products,productsFeatured,addtocart}=useContext(productContext)

    return(
    <Fragment>
       
        
             <div className={classes.container}>

             <section className={classes.slider}>
             <img src={slide1} alt="notfound" ></img>
             </section>
             
            <section className={classes.category}>
             <div className={classes.headr} >
             <h2 className={classes.title}>Special Category</h2>
             <span className={classes.line}></span>
             </div>


            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">    
        
             {products.map((product)=>{
            return(
            
                <SwiperSlide style={{height:"400px"}} >
                   
                   <div className={classes.categoryItem}>   
                  <img src={product.image} alt="notfound"></img>
                  <h4 className={classes.categoryItemSubTitle}> MOST POPULAR</h4>
                  <h3 className={classes.categoryItemTitle}>{product.name} Collection</h3>
                  <Link to={`/details/${product.id}`}>
                  <FontAwesomeIcon icon={faAnglesRight} className={classes.angleRight} />
                  </Link> 
                  </div>    
                 
               </SwiperSlide>
               
             )})} 

             
             </Swiper>
            
            </section>


       <section>
         
       <div className={classes.discount} >
       
       <div className={classes.discountDescription}>
          <div className={classes.discountQuote} >
            <FontAwesomeIcon icon={faQuoteLeft} className={classes.QuoteLeft} />       
            <h2 className={classes.discountTitle}>penelope Astrid</h2>
           <span className={classes.discountSubTitle}>markting</span>
         </div>
         <p ref={paraone}>{text}</p>  
         
         <div  className={`${classes.bolletes} `}>
          <span onClick={()=>changtext(0)}></span>
          <span onClick={()=>changtext(1)}></span>
          <span onClick={()=>changtext(2)}></span>   
         </div>           
       </div>
     


       
       <div className={classes.discountItem}>
           <div className={classes.discountItemInfo}>
            <img src={discount1} alt="notfound"></img>   
            <h3>30% Discount </h3>
            <h2>Desiging interior </h2>
           </div>
        </div>  
       
       
        <div className={classes.discountItem}>
           <img src={discount2} alt="notfound"></img> 
            <h3>30% Discount </h3>
            <h2>Desiging interior </h2>
        </div>  
      
 </div>

        <div className={classes.spritesItem}>
        
           <div className={classes.spriteItem}>
           <div className={`${classes.spriteItemIcon} ${classes.spriteItemIcon1}`}>   
           </div>

           <div className={classes.spriteItemInfo}>
           <h3>free Delivery</h3>
             <span>free shipping on All order</span>
           </div>

           </div>
           <div className={classes.spriteItem}>
           <div className={`${classes.spriteItemIcon} ${classes.spriteItemIcon2}`}>
                
           </div>

           <div className={classes.spriteItemInfo}>
           <h3>free Delivery</h3>
             <span>free shipping on All order</span>
           </div>

           </div>
           
           <div className={classes.spriteItem}>
           <div className={`${classes.spriteItemIcon} ${classes.spriteItemIcon3}`}>     
           </div>
           <div className={classes.spriteItemInfo}>
           <h3>free Delivery</h3>
             <span>free shipping on All order</span>
           </div>

           </div>
 
           <div className={classes.spriteItem}>
           <div className={`${classes.spriteItemIcon} ${classes.spriteItemIcon4}`}>
                
           </div>

           <div className={classes.spriteItemInfo}>
           <h3>free Delivery</h3>
             <span>free shipping on All order</span>
           </div>

           </div>
           <div className={classes.spriteItem}>
           <div className={`${classes.spriteItemIcon} ${classes.spriteItemIcon5}`}>
                
           </div>

           <div className={classes.spriteItemInfo}>
           <h3>free Delivery</h3>
             <span>free shipping on All order</span>
           </div>

           </div>

        </div>


</section>
<hr></hr>

      <section className={classes.productsFeautured}>

             <div className={classes.headr} >
             <h2 className={classes.title}>Featured Products</h2>
             <span className={classes.line}></span>
             </div>

          <div className={classes.products}>
            <ul className={`${classes.listUnstyle} ${classes.listproduct}`}>
                <li>Modern chair</li>
                <li>plastic chair</li>
                <li>study chair</li>
                <li>Modern chair</li>
            </ul>
          </div>
     
          
          <div className={classes.productItems} > 
           
         {productsFeatured.map((product)=>{
            return(

                 <>
                  <div className={classes.productItem}>
                  <div className={classes.productimg}>   
                  <img src={product.image} alt="notfound"></img>
                  <div className={classes.productimgoverlay}> 
                  <img src={product.imageoverlay} alt="notfound"/>
                  <ul className={classes.listUnstyle}>

                    <li> <FontAwesomeIcon icon={faCartShopping}  onClick={()=> addtocart(product)} /> </li>

                    <Link to={`/details/${product.id}`}>
                    <li> <FontAwesomeIcon icon={faAnglesRight}  /> </li>
                    </Link>
                  </ul>
                  </div>

                  </div>
                 
                  <Rating value={product.rating}></Rating>
                  <p >{product.name} Collection</p>
                  <h3>{product.price}L.e</h3>
                  </div>
                 </>
               
             )})} 
          

         
         </div>
          
      </section>
   

   <section>
     <div className={classes.quotes}>
     <div className={classes.quoteimg}>
      <img src={item11} alt="notfound"/>
       </div>
         <div className={classes.quoteDescription}>
          <div className={classes.quote} >  
          <h3 className={classes.quotetitle}>Necessitatibus Saepe Eveniet</h3> 
            <h2 className={classes.quotedate}>28</h2>
           <span className={classes.quoteSubTitle}>February,2018 </span>
         </div>
         <p ref={paraone}>{text}</p>  
         
         <div  className={`${classes.bolletes} `}>
          <span onClick={()=>changtext(0)}></span>
          <span onClick={()=>changtext(1)}></span>
          <span onClick={()=>changtext(2)}></span>   
         </div>           
       </div>

       </div>
       
   </section>
   </div>
   <Footer/>
            
        </Fragment>
    )


    
}
export default Home
