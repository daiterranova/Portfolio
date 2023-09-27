import { Grid, Typography } from "@mui/material";
import React from "react";
import { about } from "../utils/resumeData";
import CustomTimeline from "../components/Timeline";
import { experiences, education, softSkills, technologies } from "../utils/resumeData";
import '../components/profile.css'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import {CustomTimelineItemData} from '../components/Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
        <Grid container item  rowSpacing={{ xs: 5, sm: 6, md: 7 }}>
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
    {/* Technologies */}
    <Grid container rowSpacing={2} >
        <Grid item > 
          <Typography gutterBottom  variant="h5">Technologies</Typography>
        </Grid>
        <Grid item container  sx={{gap:'1rem', justifyContent:'center'}} > 
            {technologies.map((tech, index) => (
              <Grid item key={index} className="card" boxShadow={3}>
                  <FontAwesomeIcon icon={tech.icon} size='2xl' />
                  <Typography fontSize={16} className="title-color" >{tech.title} </Typography>
              </Grid>
            ))}
        </Grid>
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
