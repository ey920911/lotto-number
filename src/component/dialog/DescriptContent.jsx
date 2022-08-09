import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import descriptData from './description.json';

function DescriptContent(props) {
  const [value, setValue] = useState('random');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { description, genMode } = descriptData;
  const descArr = Object.keys(description);

  return (
    <Box sx={{ width: '30rem', height: '10rem', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="descript-tabList">
            {descArr.map((theme) => (
              <Tab label={genMode[theme]} value={theme} />
            ))}
          </TabList>
        </Box>
        {descArr.map((theme) => (
          <TabPanel value={theme}> {description[theme]} </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
export default DescriptContent;
