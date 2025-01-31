import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { IProduct } from "../models/IProduct";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import SearchIcon from '@mui/icons-material/Search';


interface Props{
    product: IProduct,
   
}

export default function Product({product}: Props){
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
        <Button variant="outlined" size="small" startIcon={<AddShoppingCart/>} color="success" >Add to Cart</Button>
        <Button variant="outlined" size="small"  startIcon={<SearchIcon/>} color="primary" >View</Button>
      </CardActions>

     </Card>
      
     );
    }