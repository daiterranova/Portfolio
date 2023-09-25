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
    },
    about: 'Junior Software Developer with a solid foundation in system design, installation, and maintenance. Demonstrated ability to work both independently and collaboratively in cross-functional teams.\n Strong background in risk analysis, exceptional attention to detail, and dedication to customer service.'    
}

export const { name, role, title, socials, email, about } = profileData