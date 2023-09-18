import React from "react";
import { Box, Button, Typography } from "@mui/material";
const CustomButton = ({ text, icon }) => {
    return (
        <Button size="small" variant='contained' sx={{
            backgroundColor: 'var(--primary)', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'50px'
        }} className='btn' endIcon={icon ? <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>{icon}</div> : null}>{text}</Button>
    )
};

export default CustomButton; 