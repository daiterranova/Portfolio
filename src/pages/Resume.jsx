import { Grid, Typography } from "@mui/material";
import React from "react";
import { about } from "../utils/resumeData";

const Resume = () => {

  const containerStyles ={
    boxShadow: 3,
    alignItems:'center',
    flexDirection:'column',
    marginBottom:'2rem', 
    gap:'3rem',
    minHeight:'100vh',
    padding:'2rem'
  }

  const titleStyles ={
    fontWeight:500,
  }
  return (
  <>
  {/* about me */}
    <Grid container sx={containerStyles} className="container">
      <Grid container item>
        <Grid item xs={12}> 
          <Typography gutterBottom  variant="h5">About me</Typography>
        </Grid>
        <Grid item xs={12}  className="description-color" >{about}</Grid>
      </Grid>
    {/* education and experiences */}
    <Grid container item>
        <Grid item> work</Grid>
        <Grid item> education</Grid>
      </Grid>
    {/* services */}
    <Grid container item>
        <Grid item> <Typography></Typography></Grid>
        <Grid item> cards</Grid>
      </Grid>
    {/* skills */}
      <Grid container item>
        <Grid item> <Typography></Typography></Grid>
        <Grid item>skills</Grid>
      </Grid>
    </Grid>

  </>
)
};

export default Resume;
