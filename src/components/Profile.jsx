import React from "react";
import { Box, Button, Typography } from "@mui/material";
import './profile.css'
import TimelineItem from '@mui/lab/TimelineItem';
import Timeline from '@mui/lab/Timeline';
import CustomTimeline from "./Timeline";
import TimelineContent from '@mui/lab/TimelineContent';
import { name, role, socials, email } from "../utils/resumeData";
import Face3Icon from '@mui/icons-material/Face3';
import { CustomTimelineSeparator } from "./Timeline";

const containerStyles = {
  boxShadow: 3,
}

export const CustomTimelineItemData = ({ title, text, link }) => (
  <TimelineItem sx={{ minHeight: '3rem', width: '100%' }}>
    <CustomTimelineSeparator />
    <TimelineContent sx={{ flexWrap: 'nowrap' }}>
      {link ? <Typography fontSize={15} fullWidth ><span>{title}: <a className='link description-color' href={link} target="_blank">{text}</a></span></Typography>
        : <Typography fontSize={15} className="description-color" ><span className="title-color">{title}:</span> {text}</Typography>}
    </TimelineContent>
  </TimelineItem>
)

const Profile = () => {
  return (<Box sx={containerStyles} className="profile container">
    <Typography variant="h5" className="title title-color">{name}</Typography>
    <Typography className="description description-color" >{role}</Typography>
    <Box className="profile-image">
      <img src="src/assets/profile_photo.jpg" alt="profile image" />
    </Box>
    <Box className="profile-information">
      <CustomTimeline icon={<Face3Icon fontSize="large" />} >
        <CustomTimelineItemData title='Email' text={email} />
        {Object.keys(socials).map((key) => (
          <CustomTimelineItemData key={key} title={key} text={socials[key].text} link={socials[key].link} />

        ))}
      </CustomTimeline>
    </Box>
    <Button variant="contained">download resume</Button>
  </Box>)
};

export default Profile;
