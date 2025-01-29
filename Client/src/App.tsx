const products= [ 
  { id:1, name: "product1", price: 1000, is_active: true},
  { id:2, name: "product2", price: 2000, is_active: false},
  {id:3,  name: "product3", price: 3000, is_active:true},
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
     
       {
        products.map(p=> (
       <Product key={p.id} product={p}/>
        ))
       }
  
       
      </div>
      );
 
  
 
}

function Product(props: any){
return (
  <>
  { props.product.is_active ? (
    <div>
    <h3>{props.product.name} <p>{props.product.price} </p></h3>
  </div>
  ): <p> Ürün satışta değil.</p> }
  
  </> 
  
 );
}

export default App
