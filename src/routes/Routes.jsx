import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import AddJob from "../Pages/AddJob/AddJob";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
import PrivateRoutes from "./PrivateRoutes";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequest from "../Pages/BidRequest/BidRequest";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage>,</ErrorPage>,
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
            element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
           },
           {
            path: '/update/:id',
            element: <PrivateRoutes><UpdateJob></UpdateJob></PrivateRoutes>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
           },
           {
            path: '/login',
            element: <Login></Login>
           },
           {
            path: '/add-job',
            element: <PrivateRoutes> <AddJob></AddJob></PrivateRoutes>
           },
           {
            path: '/my-posted-job',
            element: <PrivateRoutes><MyPostedJob></MyPostedJob></PrivateRoutes>
           },
           {
            path: '/my-bids',
            element: <PrivateRoutes> <MyBids></MyBids></PrivateRoutes>
           },
           {
            path: '/bid-request',
            element: <PrivateRoutes> <BidRequest></BidRequest></PrivateRoutes>
           }
        ]
        
    }
])


export default router;