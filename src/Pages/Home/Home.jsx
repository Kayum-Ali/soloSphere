import { useLoaderData } from "react-router-dom";
import Carousel from "../../components/Carousel";
import TabCategories from "../../components/TabCategories";


const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    return (
        <div>
           <Carousel></Carousel>
           <TabCategories jobs={jobs}></TabCategories>
            
        </div>
    );
};

export default Home;