import { useEffect, useState } from "react";

// const products= [ 
//   { id:1, name: "product1", price: 1000, is_active: true},
//   { id:2, name: "product2", price: 2000, is_active: false},
//   {id:3,  name: "product3", price: 3000, is_active:true},
// ];

function App() {


  return (
    <>
   <Header/>
 <ProductList/>
    </>
 
  )
}
function Header(){
  return ( <h1>Header</h1> );
}
function ProductList(){
  const [products, setProducts]= useState([
    { id:1, name: "product1", price: 1000, isActive: true},
  { id:2, name: "product2", price: 2000, isActive: false},
  {id:3,  name: "product3", price: 3000, isActive:true},
  ]);

  useEffect(()=>{
    fetch("http://localhost:5187/api/products").then(response=>response.json()).then(data=> setProducts(data));
  }, [] );

  
  function addProduct(){
    //products.push({id:4, name:"product4",price:4000, is_active:true });
    setProducts([...products, {id:4,  name: "product4", price: 4000, isActive:true}])
  }
    return (
      <div>
        <h2>Product List</h2> 
     
       {
        products.map(p=> (
       <Product key={p.id} product={p}/>
        ))
       }
  
       <button onClick={addProduct}> Ürün Ekle</button>
      </div>
      );
}

function Product(props: any){
return (
  <>
  { props.product.isActive ? (
    <div>
    <h3>{props.product.name} <p>{props.product.price} </p></h3>
  </div>
  ): <p> Ürün satışta değil.</p> }
  
  </> 
  
 );
}

export default App
