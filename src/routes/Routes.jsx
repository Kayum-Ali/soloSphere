import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
           {
            path: '/',
            element: <h1>Home</h1>
           }
        ]
        
    }
])


export default router;