import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { IProduct } from "../../models/IProduct";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { LoadingButton } from "@mui/lab";
import { currencyTRY } from "../../utils/formatCurrency";
import { useAppDispatch } from "../../hooks/hooks";
import { addItemToCart} from "../cart/CartSlice";
import { useAppSelector } from "../counter/counterSlice";



interface Props{
    product: IProduct,
   
}

export default function Product({product}: Props){
   
  const{status}= useAppSelector(state=>state.cart);
  const dispatch = useAppDispatch();

    return (
     <Card>
      <CardMedia sx={{height:160, m:3, backgroundSize: "contain"}} image={`http://localhost:5187/images/${product.imgUrl}`} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2" color="text-secondary">
          {product.name}
        </Typography>
        <Typography variant="body2" color="secondary">
          { currencyTRY.format (product.price)} 
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button variant="outlined" size="small" startIcon={<AddShoppingCart/>} color="success" 
        onClick={()=>handleAddItem(product.id)} >Add to Cart</Button>
 */}
        <LoadingButton size="small" variant="outlined" loadingPosition="start" startIcon={<AddShoppingCart/>} loading={status === "pendingAddItem" + product.id} onClick={()=> dispatch(addItemToCart({productId: product.id}))} >Sepete Ekle</LoadingButton> 
        <Button component={Link}  to={`/catalog/${product.id}`} variant="outlined"  size="small" startIcon={<SearchIcon />} color="primary">View</Button>
      </CardActions>

     </Card>
      
     );
    }