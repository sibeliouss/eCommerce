import Header from "./Header";


import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";

// const products= [ 
//   { id:1, name: "product1", price: 1000, is_active: true},
//   { id:2, name: "product2", price: 2000, is_active: false},
//   {id:3,  name: "product3", price: 3000, is_active:true},
// ];

function App() {


  
 
//cssBaseline: bu component içeriği sıfırlar. outlet:sayfalar gelecek
  return (
    <>
    <CssBaseline/> 
    <Header/>
    <Container>
     <Outlet/> 
    </Container>
    </>
 
  )
}




export default App
