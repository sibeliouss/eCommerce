import { IProduct } from "../models/IProduct";

interface Props{
    product: IProduct,
   
}

export default function Product({product}: Props){
    return (
      <>
      { product.isActive ? (
        <div>
        <h3>{product.name} <p>{product.price} </p></h3>
      </div>
      ): <p> Ürün satışta değil.</p> }
      
      </> 
      
     );
    }