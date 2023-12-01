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
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CustomButton from "./CustomButton";
const containerStyles = {
  boxShadow: 3,
  display: 'flex',
  alignItems:'center',
  flexDirection:'column',
  paddingBottom:'2rem'
}

export const CustomTimelineItemData = ({ title, text, link, experience, education, date, profile }) => (
  <TimelineItem sx={{ minHeight: '3rem', width: '100%' }}>
    <CustomTimelineSeparator profile={profile}/>
    <TimelineContent sx={{ flexWrap: 'nowrap' }}>
      {link ?
         <Typography fontSize={15} fullWidth ><span>{title}: <a className='link description-color' href={link} target="_blank">{text}</a></span></Typography>
        : 
        experience || education ? 
        <Box>
             <Typography fontSize={16} className="title-color" >{title} </Typography>
             <Typography fontSize={13} className="description-color">{date} </Typography>
             <Typography fontSize={15} className="description-color">{text} </Typography>
        </Box> 
          : 
        <Typography fontSize={15} className="description-color" ><span className="title-color">{title}:</span> {text}</Typography>}
    </TimelineContent>
  </TimelineItem>
)

const Profile = () => {
  return (<Box sx={containerStyles} className="profile container">
    <Typography variant="h6" className="title title-color ">{name}</Typography>
    <Typography className="description description-color" >{role}</Typography>
    <Box className="profile-image">
      <img src="./assets/profile_photo.jpg" alt="profile image" />
    </Box>
    <Box className="profile-information">
      <CustomTimeline icon={<Face3Icon fontSize="large" />} >
        <CustomTimelineItemData profile={true} title='Email' text={email} />
        {Object.keys(socials).map((key) => (
          <CustomTimelineItemData key={key} title={key} text={socials[key].text} link={socials[key].link} profile={true} />

        ))}
      </CustomTimeline>
    </Box>
    <CustomButton text="download CV" icon={<DownloadForOfflineIcon />} />
  </Box>)
};

export default Profile;
