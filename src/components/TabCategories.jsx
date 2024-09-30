import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabCategories = () => {
  return (
    <div className="container mx-auto">
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Graphics  Design</Tab>
          <Tab>Digital Marktng</Tab>
        </TabList>

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
