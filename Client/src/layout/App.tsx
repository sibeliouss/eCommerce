import { useEffect, useState } from "react";
import Header from "./Header";


import { CircularProgress, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import requests from "../api/requests";

import { useAppDispatch } from "../hooks/hooks";
import { setCart } from "../features/cart/CartSlice";


function App() {

 const dispatch = useAppDispatch();
  const [loading, setLoading]= useState(true);

  useEffect(()=>{
    requests.Cart.get().then(cart=>  dispatch(setCart(cart)))
   .catch(error=> console.log(error)).finally(()=> setLoading(false));
  }, []);

  if(loading) return <CircularProgress/>

//cssBaseline: bu component içeriği sıfırlar. outlet:sayfalar gelecek
  return (
    <>
    <ToastContainer position="bottom-right"  hideProgressBar theme="colored" />
    <CssBaseline/> 
    <Header/>
    <Container>
     <Outlet/> 
    </Container>
    </>
 
  )
}




export default App
