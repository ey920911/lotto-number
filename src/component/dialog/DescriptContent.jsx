import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import descriptData from './description.json';

function DescriptContent(props) {
  const [value, setValue] = useState('random');
  console.log('test22: ', props);
  // const handleChange = (event: any, newValue: any) => {
  //   setValue(newValue);
  // };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = descriptData.description;

  return (
    <Box sx={{ width: '30rem', height: '10rem', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="descript-tabList">
            {Object.keys(data).map((theme) => (
              <Tab label={theme} value={theme} />
            ))}
          </TabList>
        </Box>
        {/* {Object.keys(data).map((theme2) => {
          console.log('theme2', typeof theme2);
          return <TabPanel value={theme2}> {data[theme2]} </TabPanel>;
        })} */}
        <TabPanel value="birth"> {data['birth']} </TabPanel>
        <TabPanel value="random"> {data['random']} </TabPanel>
        <TabPanel value="dream"> {data['dream']} </TabPanel>
      </TabContext>
    </Box>
  );
}
export default DescriptContent;
