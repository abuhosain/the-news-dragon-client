import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Home/Category/Category";
import Newslayout from "../layout/Newslayout";
import News from "../pages/News/News/News";
import LoginLayOut from "../layout/LoginLayOut";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

 const router = createBrowserRouter([
    {
        path: '/',
        element:<LoginLayOut></LoginLayOut>,
        children: [
            {
                path : '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
           
            {
                path: '/category',
                element: <Category></Category>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: ':id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            } 
        ]
    },
    {
        path: '/news',
        element: <Newslayout></Newslayout>,
        children: [
            {
                path: ':id',
               element:<PrivateRoute> <News></News></PrivateRoute>,
               loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
 ])

 export default router;