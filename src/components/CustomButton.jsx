import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ text, icon }) => {
    const downloadFile = () => {
        const fileUrl = '../assets/CV-English.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Daiana-Terranova-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <Button size="small" variant='contained' sx={{
            backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50px', '&:hover': {
                backgroundColor: 'var(--secondary)', color: 'var(--textHeadingColor)'
            },
        }} endIcon={icon ? <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>{icon}</div> : null} onClick={downloadFile}
        >{text}</Button>
    )
};

export default CustomButton; 