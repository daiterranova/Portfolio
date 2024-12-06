import React, { useEffect, useState } from "react";
import { Grid, Typography, Tabs, Tab, Card, CardActionArea, CardMedia, CardContent, Grow, Dialog, DialogTitle, DialogActions, DialogContent, Button } from '@mui/material';
import { projects } from "../utils/resumeData";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All');
  const [projectD, setProjectD] = useState(false);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const handleClose = () => {
    setProjectD(false)
  };

  const containerStyles = {
    boxShadow: 3,
    flexDirection: 'column',
    marginBottom: '2rem',
    gap: '2rem',
    padding: '2rem'
  }
  const cardStyles = {
    width: { xs: '100%', sm: 400 },
    height: { xs: 'auto', sm: 300 },
    display: 'flex',
    flexDirection: 'column',
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
              backgroundColor: 'var(--secondary)',
            },
            '& .MuiTab-root': {
              color: 'var(--primary)',
            },
          }}
        >
          <Tab label="All" value='All' className={tabValue ? 'custom-tabs active' : 'custom-tabs'} />
          {
            [... new Set(projects.map(project => project.tag))].map(tag => (
              <Tab label={tag} value={tag} className={tabValue ? 'custom-tabs active' : 'custom-tabs'} />
            ))
          }
        </Tabs>
      </Grid>
      <Grid container item spacing={3} alignItems='center' justifyContent='center' >
        {projects.map((project) => (
          tabValue == project.tag || tabValue == 'All' ?
            <Grid container item xs={12} sm={6} key={project.image}>
              <Grow in timeout={1000}>
                <Card sx={cardStyles} onClick={() => { setProjectD(project) }}>
                  <CardActionArea sx={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={project.image}
                      alt={project.title}
                      title={project.title}
                    />
                    <CardContent sx={{
                      flex: 1,
                      width: '100%',
                      boxSizing: 'border-box'
                    }}>
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
            : null
        ))}
      </Grid>
      <Dialog open={projectD} onClose={handleClose} >
        <DialogTitle onClose={handleClose}>{projectD.title}</DialogTitle>
        <img src={projectD.image} alt={projectD.title} />
        <DialogContent>{projectD.description}</DialogContent>
        <DialogActions>
          {projectD?.links?.map((link, index) => (
            <Button key={index} href={link.link} target="_blank" onClick={handleClose}>Go to project</Button>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>

  )
};

export default Portfolio;