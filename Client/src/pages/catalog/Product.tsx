import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { IProduct } from "../../models/IProduct";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useState } from "react";
import requests from "../../api/requests";
import { LoadingButton } from "@mui/lab";



interface Props{
    product: IProduct,
   
}

export default function Product({product}: Props){
  const [loading, setLoading]= useState(false); 

  function handleAddItem(productId: number)
  {
    setLoading(true);
    requests.Cart.addItem(productId).then(cart=>console.log(cart))
    .catch(error=> console.log(error))
    .finally(()=> setLoading(false));
    
  }
    return (
     <Card>
      <CardMedia sx={{height:160, m:3, backgroundSize: "contain"}} image={`http://localhost:5187/images/${product.imgUrl}`} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2" color="text-secondary">
          {product.name}
        </Typography>
        <Typography variant="body2" color="secondary">
          {(product.price/100).toFixed(2)} ₺
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button variant="outlined" size="small" startIcon={<AddShoppingCart/>} color="success" 
        onClick={()=>handleAddItem(product.id)} >Add to Cart</Button>
 */}
        <LoadingButton size="small" variant="outlined" loadingPosition="start" startIcon={<AddShoppingCart/>} loading={loading} onClick={()=>handleAddItem(product.id)} >Sepete Ekle</LoadingButton> 
        <Button component={Link}  to={`/catalog/${product.id}`} variant="outlined"  size="small" startIcon={<SearchIcon />} color="primary">View</Button>
      </CardActions>

     </Card>
      
     );
    }