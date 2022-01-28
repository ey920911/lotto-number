import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import descriptData from './description.json';

function DescriptContent() {
  const [value, setValue] = useState('random');

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const data = descriptData.description;
  console.log('keys ', data.random);

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
        {Object.keys(data).map((theme) => (
          <TabPanel value={theme}> {data[theme]} </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
export default DescriptContent;
