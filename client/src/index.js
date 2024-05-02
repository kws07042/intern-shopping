import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './assets/scss/index.scss';

// Report Web Vitals
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Pages Components
import App from './App';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import MyAccount from "./pages/User/MyAccount";
import ShoppingCart from "./pages/User/ShoppingCart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {index: true, element: <Home/>},
            {path: '/auth/register', element: <Register/>},
            {path: '/auth/login', element: <Login/>},
            {path: '/user/my-account', element: <MyAccount/>},
            {path: '/user/shopping-cart', element: <ShoppingCart/>},
        ]
    }
])

const root = document.getElementById('root-wrap')
const rootRender = ReactDOM.createRoot(root);
rootRender.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();