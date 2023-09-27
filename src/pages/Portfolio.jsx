import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import { Grid, Typography, Tabs, Tab, Card, CardActionArea, CardMedia, CardContent, Grow } from '@mui/material';
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
      <Grid container item spacing={3} alignItems='center' justifyContent='center' >
        {projects.map((project) => (
          <Grid container item xs={6} key={project.image}>
            <Grow in timeout={1000}>
              <Card sx={{ width:'100%' }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={project.image}
                        alt={project.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {project.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Grid>
   
)
};

export default Portfolio;