import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Page from './Page';
import { gridTabIndexColumnHeaderSelector } from '@mui/x-data-grid';
import { Subject } from '@mui/icons-material';

export default function CenteredTabs({ datas }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const page1 = datas?.filter(x => {
    return x.subject == '남친룩';
  });
  const page2 = datas?.filter(x => {
    return x.subject == '여친룩';
  });

  const page3 = datas?.filter(x => {
    return x.subject == '가을룩';
  });

  console.log(page1, '탭페이지');
  return (
    <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="남친룩" />
          <Tab label="여친룩" />
          <Tab label="가을룩" />
        </Tabs>
      </Box>
      {value == 0 ? <Page datas={page1} /> : null}
      {value == 1 ? <Page datas={page2} /> : null}
      {value == 2 ? <Page datas={page3} /> : null}
    </>
  );
}
