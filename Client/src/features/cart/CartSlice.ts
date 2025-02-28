import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../models/ICart";
import requests from "../../api/requests";


interface CartState{
    cart: Cart | null;
    status: string; /* loading işlemi */
}

const initialState: CartState={
    cart:null,
    status: "idle" /* başlangıçta boşta, şu anda bekliyor */
}

export const addItemToCart = createAsyncThunk<Cart, {productId:number, quantity?:number}>
(
  "cart/addItemToCart",
  async ({productId, quantity=1})=>{

    try{
        return await requests.Cart.addItem(productId,quantity);
    }
    catch(error){
     console.log(error);
    }  
  }
); //metot, https://redux-toolkit.js.org/usage/usage-guide#async-requests-with-createasyncthunk

export const deleteItemFromCart = createAsyncThunk<Cart, {productId:number, quantity?:number, key?:string}>
(
  "cart/deleteItemFromCart",
  async ({productId, quantity=1})=>{
    try{
        return await requests.Cart.deleteItem(productId,quantity);
    }
    catch(error){
    console.log(error);
    }
   
  
  }
);

export const getCart =createAsyncThunk<Cart>(
    "cart/getcart",
    async(_, thunkAPI) => {

        try{
            return await requests.Cart.get();
        }
        catch(error:any){
            return thunkAPI.rejectWithValue({error: error.data});
        }
    }
)

export const cartSlice= createSlice(
    {
        name: "cart",
        initialState,
        reducers:{
            setCart: (state, action)=>{
                state.cart=action.payload;
            },
            clearCart:(state) => {
                state.cart= null;
            }
        },
        extraReducers: (builder)=>{
            builder.addCase(addItemToCart.pending, (state, action)=>{
                console.log(action);
                state.status="pendingAddItem" + action.meta.arg.productId; // bu aşamada sorgu gönderiliyor
            });
            builder.addCase(addItemToCart.fulfilled, (state, action)=>{
                state.cart= action.payload;
                state.status="idle"; //cevap geldiği aşamayı kontrol ediyoruz
            });
            builder.addCase(addItemToCart.rejected, (state)=>{
                
                state.status="idle"; //bir hata geliyorsa da yeniden başlangıç aşamasına döndürmüş olalım.
            });
            builder.addCase(deleteItemFromCart.pending, (state, action)=>{
                console.log(action);
                state.status="pendingDeleteItem" + action.meta.arg.productId + action.meta.arg.key; // bu aşamada sorgu gönderiliyor
            });
            builder.addCase(deleteItemFromCart.fulfilled, (state, action)=>{
                state.cart= action.payload;
                state.status="idle"; //cevap geldiği aşamayı kontrol ediyoruz
            });
            builder.addCase(deleteItemFromCart.rejected, (state)=>{
                
                state.status="idle"; //bir hata geliyorsa da yeniden başlangıç aşamasına döndürmüş olalım.
            });
            builder.addCase(getCart.fulfilled, (state, action)=>{
                state.cart= action.payload;
              
            });
            builder.addCase(getCart.rejected, (_,action)=>{
                
               console.log(action.payload);
            });
            
        }
    }
)
export const {setCart, clearCart}= cartSlice.actions; //dışarıya açıyoruz.