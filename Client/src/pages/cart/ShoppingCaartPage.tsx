import { useEffect, useState } from "react"
import requests from "../../api/requests";
import { CircularProgress, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Cart } from "../../models/ICart";
import { Delete } from "@mui/icons-material";

export default function ShoppingCartPage()
{
    const [cart, setCart]= useState<Cart | null >(null);
    const [loading, setLoading]= useState(true);
    useEffect(()=> {
        requests.Cart.get().then(cart=> setCart(cart))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false));
    },[]);

    if(loading) return <CircularProgress/>
    if(!cart) return <h1>Sepetinizde ürün yok.</h1>

    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right">Fiyat</TableCell>
            <TableCell align="right">Adet</TableCell>
            <TableCell align="right">Toplam</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.cartItems.map((item) => (
            <TableRow
              key={item.productId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
            <TableCell component="th" scope="row">
                <img src= {`http://localhost:5187/images/${item.imgUrl}`} style={{width:"60px"}}></img>
              </TableCell>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.price} ₺</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">{item.price * item.quantity} ₺</TableCell>
              <TableCell align="right">
                <IconButton color="error" >
                    <Delete/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}