import {
    Container,
    Grid,
    Typography,
  } from "@mui/material";
  import googleplay from "../images/cms-footer-2.png";
  import appstore from "../images/cms-footer-1.png";
  import logo from "../images/footer-logo.png";
  import classes from './footer.module.css'
  import { faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons";
  import { faHouseChimneyUser} from "@fortawesome/free-solid-svg-icons";
  import { faHouseMedicalCircleCheck} from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer=()=>{
   
    return(
        <>
         <Container   sx={{ bgcolor: 'text.primary' ,p: 5 ,mb:5,color:"GrayText" }}>
        <Grid container >
        
          <Grid item  sm={5} md={5}>
              
           <div className={classes.logo}>
               <img src={logo} alt="notfound"/>
           </div>
           <div className={classes.description}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy.
           </div>
           <div>
               <img src={appstore} alt="notfound"></img>
               <img src={googleplay} alt="notfound"></img>
           </div>
           
          </Grid>

          <Grid item  sm={2} md={2}>
            <div className={classes.info}>
          <Typography variant="h5" className={classes.header}>Information</Typography>
         
          <Typography variant="p" component="div">Delivery Information</Typography>
          <Typography variant="p" component="div">Privacy Policy</Typography>
          <Typography variant="p" component="div">Terms & Conditions</Typography>
          <Typography variant="p" component="div">Site Map</Typography>
          </div>
          </Grid>
           

          <Grid item  sm={2} md={2}>

          <div className={classes.info}>
          <Typography variant="h5" className={classes.header}>My Account</Typography>
          
          <Typography variant="p" component="div"> My Account</Typography>
          <Typography variant="p" component="div">Wish List</Typography>
          <Typography variant="p" component="div">Newsletter</Typography>
          <Typography variant="p" component="div">Returns</Typography>
         </div> 
         </Grid>
         






          <Grid item  sm={3} md={3}>
          <div  className={classes.info}>
          <Typography variant="h5"className={classes.header}>Subscribe Now</Typography>
          <input type="email" placeholder="Enter Your Email Address"></input><hr></hr>
          <FontAwesomeIcon icon={faFaceLaughBeam } />&nbsp;
          <FontAwesomeIcon icon={ faHouseChimneyUser}/>&nbsp;
          <FontAwesomeIcon icon={ faHouseMedicalCircleCheck} />
          </div>
          </Grid>
          
        </Grid>
        </Container>
        
        </>
    )


}
export default Footer