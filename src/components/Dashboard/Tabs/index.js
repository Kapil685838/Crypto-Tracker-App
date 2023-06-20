import * as React from 'react';
import  TabContext  from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList'
import  Tab from '@mui/material/Tab';
import  TabPanel  from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import Grid from '../Grid';
import './styles.css'
import List from '../List';

const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

export default function TabsComponent({coins}) {
  const [value, setValue] = React.useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme} >
    <TabContext value={value}>
   
    <TabList  variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Grid" value='grid' sx={style} />
    <Tab label="List" value='list' sx={style} />
  </TabList>
      <TabPanel value='grid'>
        <div className='grid-flex'>
            {coins.map((coin,i)=>{
                return < Grid coin={coin} key={i}/>
            })}
        </div>
      </TabPanel>
      <TabPanel value='list'>
       <table className='list-table'>
        {coins.map((item, i)=>{
          return <List coin={item} key={i} />
        })}
       </table>
      </TabPanel>
      
      </TabContext>
      </ThemeProvider>
  );
}


