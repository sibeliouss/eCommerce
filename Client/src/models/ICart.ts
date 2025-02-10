export interface CartItem{
    
    name:string,
    description?: string, 
    price:number,
    imgUrl?: string,
    productId:number,
    quantity:number

}
export interface Cart
{
  cartId: number;
  customerId:string;
  cartItems: CartItem[];

}