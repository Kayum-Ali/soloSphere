import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
           {
            index: true,
            element: <Home></Home>
       
           },
           {
            path: '/register',
            element: <Register></Register>
           },
           {
            path: '/login',
            element: <Login></Login>
           }
        ]
        
    }
])


export default router;