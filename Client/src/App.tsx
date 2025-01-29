const products= [ 
  {name: "product1", price: 1000},
  {name: "product2", price: 2000},
  {name: "product3", price: 3000},
];

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
  
    return (
      <div>
        <h2>Product List</h2> 
        <Product product= {products[0]} />
        <Product product= {products[1]}  />
        <Product product= {products[2]}  />
      </div>
      );
  <Product/> 
  
 
}

function Product(props: any){
return ( 
  <div>
    <h3>{props.product.name} <p>{props.product.price} </p>  </h3>
  </div>
 );
}

export default App
