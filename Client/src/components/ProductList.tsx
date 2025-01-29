import { IProduct } from "../models/IProduct";
import Product from "./Product";

interface Props{
    products: IProduct[],
    addProduct: ()=>void;
}

export default function ProductList(props:Props){
 
    return (
      <div>
        <h2>Product List</h2> 
     
       {
        props.products.map((p:any)=> (
       <Product key={p.id} product={p}/>
        ))
       }
  
       <button onClick={props.addProduct}> Ürün Ekle</button>
      </div>
      );
}