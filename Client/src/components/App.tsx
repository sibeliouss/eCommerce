import { useEffect, useState } from "react";
import { IProduct } from "../models/IProduct";
import Header from "./Header";
import ProductList from "./ProductList";

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

  
  function addProduct(){
    //products.push({id:4, name:"product4",price:4000, is_active:true });
    setProducts([...products, {id:Date.now(),  name: "product4", price: 4000, isActive:true}])
  }

  return (
    <>
   <Header products={products} />
 <ProductList products={products} addProduct={addProduct} />
    </>
 
  )
}




export default App
