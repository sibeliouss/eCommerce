import { CircularProgress, Divider, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../models/IProduct";
import requests from "../../api/requests";
import NotFound from "../../errors/NotFound";


export default function ProductDetailsPage(){

    const {id} = useParams<{id: string}>();
    const [product, setProduct] = useState< IProduct|null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
       id && requests.Catalog.details(parseInt(id))
        .then(data=> setProduct(data))
        .catch(error => console.log(error)).finally(()=> setLoading(false));
        
    },[id] );
    //id üzerinde güncelleme varsa

    if(loading) return <CircularProgress/>
    if(!product) return <NotFound/>
    return(
        <Grid2 container spacing={6}>
            <Grid2 size={{xl:3,lg:4, md:5, sm:6, xs:12}}>
                <img src={`http://localhost:5187/images/${product.imgUrl}`} style={{width:"100%"}}></img>
            </Grid2>
            <Grid2 size= {{xl:9,lg:8 ,md:7, sm:6, xs:12}} >
                <Typography variant="h3"> {product.name}</Typography>
                <Divider sx= {{mb:2}} />
                <Typography variant="h4" color="secondary"> {(product.price/100).toFixed(2)} ₺ </Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>{product.name} </TableCell>
                          </TableRow>  
                          <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell>{product.description} </TableCell>
                          </TableRow> 
                          <TableRow>
                            <TableCell>Stock</TableCell>
                            <TableCell>{product.stock} </TableCell>
                          </TableRow> 
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid2>

        </Grid2>
    );

}