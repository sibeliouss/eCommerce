import { createBrowserRouter } from "react-router";
import App from "../components/App";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CatalogPage from "../pages/catalog/CatalogPage";
import ProductDetailsPage from "../pages/catalog/ProductDetails";
import ErrorPage from "../pages/ErrorPage";

export const router= createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {path:"", element: <Home/>},
            {path:"about", element: <AboutPage/>},
            {path:"contact", element: <ContactPage/>},
            {path:"catalog", element: <CatalogPage/>},
            {path:"error", element: <ErrorPage/>},
            {path:"catalog/:id", element: <ProductDetailsPage/>},
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