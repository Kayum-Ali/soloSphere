import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

const TabCategories = () => {
  const [jobs, setJobs] = useState([])
  const [loadings, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    const getData = async()=>{
      const data = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
      setJobs(data.data)
    }
    getData()
    setLoading(false)
  },[])

  if(loadings) return <h2>Loading...</h2>
  return (
    <Tabs>
      <div className="container py-10 px-2 lg:px-6 mx-auto">
        <h2 className="text-2xl lg:text-3xl text-center text-gray-800 capitalize font-semibold">
          Browse jobs by Categori
        </h2>
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Three Categories available for the time being. They are web
          development, Graphics design and Digital Matketing. Browse them by
          clicking on the tab bellow
        </p>
        <div className="lg:flex md:flex md:items-center md:justify-center lg:items-center lg:justify-center text-sm md:text-neutral">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Markting</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 xl:mt-16">
            {jobs?.filter(j=> j.category === "Web Development").map((job,idx) => (
              <JobCard key={idx} job={job}></JobCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 xl:mt-16">
            {jobs?.filter(j=> j.category === "Graphics Design").map((job,idx) => (
              <JobCard key={idx} job={job}></JobCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 xl:mt-16">
            {jobs?.filter(j=> j.category === "Digital Marketing").map((job,idx) => (
              <JobCard key={idx} job={job}></JobCard>
            ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

TabCategories.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object),
};

export default TabCategories;
