import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import PropTypes from "prop-types";

const TabCategories = ({ jobs }) => {
  return (
    <Tabs>
      <div className="container py-10 px-6 mx-auto">
        <h2 className="text-2xl lg:text-3xl text-center text-gray-800 capitalize font-semibold">
          Browse jobs by Categori
        </h2>
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Three Categories available for the time being. They are web
          development, Graphics design and Digital Matketing. Browse them by
          clicking on the tab bellow
        </p>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marktng</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 xl:mt-16">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <JobCard></JobCard>
        </TabPanel>
        <TabPanel>
          <JobCard></JobCard>
        </TabPanel>
      </div>
    </Tabs>
  );
};

TabCategories.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabCategories;
