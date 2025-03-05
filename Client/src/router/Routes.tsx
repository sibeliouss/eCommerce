import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import AboutPage from "../features/AboutPage";

import ContactPage from "../features/ContactPage";
import CatalogPage from "../features/catalog/CatalogPage";
import ProductDetailsPage from "../features/catalog/ProductDetails";
import ErrorPage from "../features/ErrorPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import ShoppingCartPage from "../features/cart/ShoppingCartPage";
import RegisterPage from "../features/account/RegisterPage";

import CheckoutPage from "../features/checkout/CheckoutPage";
import AuthGuard from "./AuthGuard";
import Home from "../features/Home";
import LoginPage from "../features/account/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { element: <AuthGuard />, children: [
                    { path: "checkout", element: <CheckoutPage /> },
                ] 
            },
            { path: "", element: <Home /> },
            { path: "about", element: <AboutPage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "catalog", element: <CatalogPage /> },
            { path: "cart", element: <ShoppingCartPage /> },
            { path: "catalog/:id", element: <ProductDetailsPage /> },
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
            { path: "error", element: <ErrorPage /> },
            { path: "server-error", element: <ServerError /> },
            { path: "not-found", element: <NotFound /> },
            { path : "*", element: <Navigate to="/not-found" />}
        ]
    }
])