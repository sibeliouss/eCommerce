import { useEffect, useState } from "react";
import { IProduct } from "../models/IProduct";
import Header from "./Header";
import ProductList from "./ProductList";

import { Container, CssBaseline } from "@mui/material";

// const products= [ 
//   { id:1, name: "product1", price: 1000, is_active: true},
//   { id:2, name: "product2", price: 2000, is_active: false},
//   {id:3,  name: "product3", price: 3000, is_active:true},
// ];

function App() {
  const [products, setProducts]= useState<IProduct[]>([]);

  useEffect(()=>{
    fetch("http://localhost:5187/api/products").then(response=>response.json()).then(data=> setProducts(data));
  }, [] );

  
 
//cssBaseline: bu component içeriği sıfırlar.
  return (
    <>
    <CssBaseline/> 
    <Header/>
    <Container>
     <ProductList products={products} /> 
    </Container>
    </>
 
  )
}




export default App
