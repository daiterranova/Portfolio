import { Grid, Typography } from "@mui/material";
import React from "react";

const Resume = () => {

  const containerStyles ={
    boxShadow: 3,
    alignItems:'center',
    flexDirection:'column',
    marginBottom:'2rem', 
    minHeight:'100vh',
    padding:'2rem'
  }
  return (
  <>
    <Grid container sx={containerStyles} className="container">
      <Grid container item>
        <Grid item> <Typography variant="h5">About me</Typography></Grid>
        <Grid item>text</Grid>
      </Grid>
      <Grid container item>
        <Grid item> <Typography></Typography></Grid>
        <Grid item> cards</Grid>
      </Grid>
      <Grid container item>
        <Grid item> <Typography></Typography></Grid>
        <Grid item>skills</Grid>
      </Grid>
    </Grid>

  </>
)
};

export default Resume;
