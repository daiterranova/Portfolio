import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { name } from "../utils/resumeData";

const Footer = () => {
return(
    <>
        <Box className='container' sx={{display: 'flex', minHeight:'60px', alignItems:'center', justifyContent:'space-between',padding:'0.5rem 1.5rem', boxShadow:3}}>
            <Box>
                <Typography variant="body1">
                   Designed and Developed by <Link href="#" underline="none" rel="noopener" sx={{color:'var(--secondary)'}}>{name}</Link>
                </Typography>
            </Box>
            <Box>
                <Typography>2023 All rights reserved. </Typography>
            </Box>
        </Box>
        

    </>
)
};

export default Footer;
