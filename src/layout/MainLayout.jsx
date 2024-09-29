import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* Navabr */}
            <Navbar></Navbar>

            {/* Outlet */}
            <Outlet></Outlet>
            


            {/* Footer */}
            
        </div>
    );
};

export default MainLayout;