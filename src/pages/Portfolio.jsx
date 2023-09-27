import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material";
import { projects } from "../utils/resumeData";


const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All');

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };


  const containerStyles ={
    boxShadow: 3,
    flexDirection:'column',
    marginBottom:'2rem', 
    gap:'2rem',
    padding:'2rem'
  }

  return (
    <Grid container className="container" sx={containerStyles}>
      <Grid item xs={12}> 
          <Typography gutterBottom variant="h5">Portfolio</Typography>
        </Grid>
      <Grid item sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'var(--surface)' }} >
      <Tabs
        value={tabValue}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: 'var(--secondary)', // Change indicator color here
          },
          '& .MuiTab-root': {
            color: 'var(--primary)', 
          },
        }}
      >
        <Tab label="All" value='All' className={tabValue ? 'custom-tabs active' : 'custom-tabs'} />
       {
        [... new Set(projects.map(project => project.tag))].map(tag => (
          <Tab label={tag} value={tag} className={tabValue ? 'custom-tabs active' : 'custom-tabs'}/>
        ))
       }
      </Tabs>
    </Grid>
    </Grid>
   
)
};

export default Portfolio;