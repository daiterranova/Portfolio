import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
const profileData =  {
    name: 'Daiana Terranova',
    role: 'Frontend Web Developer',
    title: 'Personal Data',
    email: 'daiana.terranova@gmail.com',
    socials:{
        Github: {
            link: 'https://github.com/daiterranova',
            text: 'Github profile',
            icon: GitHubIcon
        },
        Linkedin: {
            link: 'https://www.linkedin.com/in/daiana-terranova/',
            text: 'Linkedin profile',
            icon: LinkedInIcon
        }  
    }    
}

export const { name, role, title, socials, email } = profileData