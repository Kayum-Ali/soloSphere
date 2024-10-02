import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";

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
            path: '/job/:id',
            element:<JobDetails></JobDetails>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
           },
           {
            path: '/login',
            element: <Login></Login>
           }
        ]
        
    }
])


export default router;