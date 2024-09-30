import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabCategories = () => {
  return (
    <div className="container mx-auto">
      <Tabs>
        <h2>Browse jobs by Categori</h2>
      <div className="flex items-center justify-center">
      <TabList>
          <Tab>Web Development</Tab>
          <Tab>Graphics  Design</Tab>
          <Tab>Digital Marktng</Tab>
        </TabList>
      </div>

        <TabPanel>
          <h2>Web Development</h2>
        </TabPanel>
        <TabPanel>
          <h2>Graphics  Design</h2>
        </TabPanel>
        <TabPanel>
          <h2>Digital Marktng</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategories;
