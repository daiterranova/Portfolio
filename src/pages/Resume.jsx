import { Grid, Typography } from "@mui/material";
import React from "react";
import { about } from "../utils/resumeData";
import CustomTimeline from "../components/Timeline";
import { experiences, education } from "../utils/resumeData";
import '../components/profile.css'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import {CustomTimelineItemData} from '../components/Profile'

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
          <Typography gutterBottom variant="h5">About me</Typography>
        </Grid>
        <Grid item xs={12}  className="description-color" fontSize={16} >{about}</Grid>
      </Grid>
    {/* education and experiences */}
    <Grid container item spacing={4}>
        <Grid item xs={12}> 
          <Typography gutterBottom  variant="h5">Resume</Typography>
        </Grid>
        <Grid container item>
          <Grid item xs={12} md={6}> 
            <CustomTimeline  title='Work Experience' icon={<WorkIcon/>}>
                {experiences.map((experience) => (
                  <CustomTimelineItemData  title={experience.title} text={experience.description} date={experience.date} experience={true} profile={false} />
                  ))}
            </CustomTimeline>
          </Grid>
          <Grid item xs={12} md={6}> 
          <CustomTimeline  title='Education' icon={<SchoolIcon/>}>
                {education.map((education) => (
                  <CustomTimelineItemData title={education.title} text={education.description} date={education.date} education={true} profile={false} />
                  ))}
            </CustomTimeline>
          </Grid>
        </Grid>
        
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
