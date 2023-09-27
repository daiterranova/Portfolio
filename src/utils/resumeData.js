import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { faReact,faGit, faGithub, faDocker, faPython, faFigma, faJs } from '@fortawesome/free-brands-svg-icons'; 
import PsychologyIcon from '@mui/icons-material/Psychology';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HearingIcon from '@mui/icons-material/Hearing';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Groups2Icon from '@mui/icons-material/Groups2';
import { faPalette } from '@fortawesome/free-solid-svg-icons'; // Import a valid solid icon for "MUI Library"

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
    about: 'Junior Software Developer with a solid foundation in system design, installation, and maintenance. Demonstrated ability to work both independently and collaboratively in cross-functional teams.\n Strong background in risk analysis, exceptional attention to detail, and dedication to customer service.',
    experiences:[
        { title:'Frontend Developer, Presidencia de la Nación',
        date:'Feb 2023 — present',
        description:'Component development Implementation of functionalities Bug Fixing and troubleshooting Build website layouts Working with databases Version control and collaboration.'},
        {title:'Executive Assistant, Presidencia de la Nación', date:'Sep 2020 — Nov 2021', description:' Communication between internal departments, Document management, agenda planning, and departmental tasks, Task assignment and supervision of execution.'},
        {title:'Claims Analyst, Assist Card ', date:'Aug 2019 - Apr 2021', description:'Communication with policyholders and providers. Evaluation and processing of claims. Cost analysis and reserves. Confict handling.'},
        {title:'Claims Analyst, AGS Comercializadora SRL', date:'Feb 2015 — Aug 2019', description:'Communication with policyholders and providersEvaluation and processing of claimsCost analysis and reserves Conflict handling '},
    ],
    education:[
        {title:'Certified Tech Developer, Digital House', date:'Jul 2023 — present', description:'Curriculum designed and created by the companies Mercado Libre and Globant in collaboration with Digital House'},
        {title:'Full Stack Developer Path, Open Bootcamp ', date:'Jul 2022 - Dec 2022', description:'Contents: Python, Javascript, CSS and HTML, Docker, SQL.'},
        {title:'Frontend Developer Path, Platzi', date:'Apr 2022 - Oct 2022', description:'Courses taken: Curso Practico de Frontend, Curso teórico de Frontend, Curso Básico de Programación.'},
        {title:'Learn Javascript Course, Code Academy', date:'Nov 2021 - Dec 2021', description:''},
    ],
    technologies:[
  
        { title: 'React.js', icon: faReact },
        { title: 'MUI Library', icon: faPalette },
        { title: 'Git', icon: faGit },
        { title: 'Github', icon: faGithub },
        { title: 'Docker', icon: faDocker },
        { title: 'Python', icon: faPython },
        { title: 'Figma', icon: faFigma },
        { title: 'Javascript', icon: faJs },

        
    ],
    softSkills:[
        {title:'Analytical Thinking', description:'Curriculum designed and created by the companies Mercado Libre and Globant in collaboration with Digital House',icon:  PsychologyIcon},
        {title:'Attention to detail ', description:'Contents: Python, Javascript, CSS and HTML, Docker, SQL.',icon: VisibilityIcon},
        {title:'Active listening', description:'Courses taken: Curso Practico de Frontend, Curso teórico de Frontend, Curso Básico de Programación.',icon:  HearingIcon},
        {title:'Resilience', description:'', icon:  VisibilityIcon},
        {title:'Adaptability', description:'', icon:  EngineeringIcon},
        {title:'Team Player', description:'', icon: Groups2Icon},
    ]
}

export const { name, role, title, socials, email, about, education, experiences, softSkills, technologies } = profileData