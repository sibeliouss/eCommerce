import { Navigate, createBrowserRouter } from "react-router";
import App from "../components/App";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CatalogPage from "../pages/catalog/CatalogPage";
import ProductDetailsPage from "../pages/catalog/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import ShoppingCartPage from "../pages/cart/ShoppingCaartPage";

export const router= createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {path:"", element: <Home/>},
            {path:"about", element: <AboutPage/>},
            {path:"contact", element: <ContactPage/>},
            {path:"catalog", element: <CatalogPage/>},
            {path:"cart", element: <ShoppingCartPage/>},
            {path:"error", element: <ErrorPage/>},
            {path:"server-error", element: <ServerError/>},
            {path:"not-found", element: <NotFound/>},
            {path:"catalog/:id", element: <ProductDetailsPage/>},
            {path:"*", element: <Navigate to="/not-found" />},
        ]
    },
    // {
    //     path: "/admin",
    //     element: <App/>,
    //     children:[
    //         {path:"", element: <Home/>},
    //         {path:"about", element: <AboutPage/>},
    //         {path:"contact", element: <ContactPage/>},
    //     ]
    // }
])