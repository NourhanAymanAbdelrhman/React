import { productContext } from "../modules/productmodule";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Paper,
  Rating,
  Typography,
  Button,
} from "@mui/material";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Detailspage = () => {
  const [product, setproduct] = useState(null);
  
  const { products, productsFeatured, addtocart } = useContext(productContext);

  const { id } = useParams();
  const navigate = useNavigate();
  console.log();
  useEffect(() => {
   
     
    let currentproduct = products?.find((i) => +i.id === +id);
    if(!currentproduct) {
      currentproduct=productsFeatured?.find((i) => +i.id === +id);}

    if (products &&productsFeatured && !currentproduct) navigate("/notfound");
    setproduct(currentproduct);
   
  }, [id, products, navigate, productsFeatured]);

  return product&& (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={1}></Grid>
          <Grid item xs={12} sm={12} md={4}>
            <img src={`${product.image}`} alt="notfound" />
          </Grid>

          <Grid item xs={12} sm={12} md={5}>
            <Paper sx={{ padding: "10px" }}>
              <Typography variant="h2">{product.name}</Typography>
              <Typography variant="p">{product.category}</Typography>
              <Typography variant="h4">{product.price}L.E</Typography>
              <Typography variant="h6"> color:{product.color}</Typography>
              <Typography variant="h6"> Description:</Typography>
              <Typography variant="p">{product.description}</Typography>
              <br />
              <Rating size="small" value={product.rating} />
              <br />
              <Button
               onClick={()=> addtocart(product)}
                variant="contained" 
                color='error'
                disableElevation
                disableRipple
              >
                <FontAwesomeIcon icon={faCartShopping} /> Add
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
                 
    </div>
  ) 
  
};

export default Detailspage;
