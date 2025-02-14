import { Navigate, createBrowserRouter } from "react-router";
import App from "../layout/App";
import Home from "../features/Home";
import AboutPage from "../features/AboutPage";
import ContactPage from "../features/ContactPage";
import CatalogPage from "../features/catalog/CatalogPage";
import ProductDetailsPage from "../features/catalog/ProductDetails";
import ErrorPage from "../features/ErrorPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import ShoppingCartPage from "../features/cart/ShoppingCartPage";

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