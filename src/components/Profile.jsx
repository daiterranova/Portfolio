import React from "react";
import { Box, Button, Typography } from "@mui/material";
import './profile.css'
const containerStyles = {
  boxShadow: 3,
}
const Profile = () => {
  return (<Box sx={containerStyles} className="profile container">
    <Typography className="title">Daiana Terranova</Typography>
    <Typography className="description" >Frontend Web Developer</Typography>
    <Box className="profile-image">
      <img src="src/assets/profile_photo.jpg" alt="profile image" />
    </Box>
    <Box className="profile-information">
      aca va el timeline
      {/* <Timeline /> */}
    </Box>
    <Button variant="contained">download resume</Button>
  </Box>)
};

export default Profile;
