import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { faReact,faGit, faGithub, faDocker, faPython, faFigma, faJs } from '@fortawesome/free-brands-svg-icons'; 
import { faPalette, faEye, faGears, faHandHoldingHand , faLinesLeaning, faMagnifyingGlass, faEarListen} from '@fortawesome/free-solid-svg-icons';

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
        {title:'Analytical Thinking', description:'Curriculum designed and created by the companies Mercado Libre and Globant in collaboration with Digital House',icon:  faMagnifyingGlass},
        {title:'Attention to detail ', description:'Contents: Python, Javascript, CSS and HTML, Docker, SQL.',icon: faEye},
        {title:'Active listening', description:'Courses taken: Curso Practico de Frontend, Curso teórico de Frontend, Curso Básico de Programación.',icon:  faEarListen},
        {title:'Resilience', description:'', icon:  faLinesLeaning},
        {title:'Adaptability', description:'', icon:  faGears},
        {title:'Team Player', description:'', icon: faHandHoldingHand},
    ],
    projects:[
        {
        tag:'HTML/CSS',
        image:'./assets/trello.png',
        title:'Trello Landing Page',
        description:'team project',
        links:[
            {link:'https://github.com/daiterranova/landing-page-trello', icon: faGithub }
        ]
        },
        {
            tag:'HTML/CSS',
            image:'./assets/yard-sale.png',
            title:'Yard Sale',
            description:'individual components of e-commerce website',
            links:[
                {link:'https://github.com/daiterranova/Yard-Sale', icon: GitHubIcon}
            ]
        },
        {
            tag:'HTML/CSS',
            image:'./assets/personas-it.png',
            title:'Personas IT Landing Page',
            description:'Landing Page for Personas IT Company',
            links:[
                {link:'https://github.com/daiterranova/PersonasIT-First-Challenge', icon: faGithub}
            ]
        },
        {
            tag:'JS',
            image:'./assets/tictactoe.png',
            title:'TICTACTOE',
            description:'tictactoe game',
            links:[
                {link:'https://github.com/daiterranova/tictactoe', icon: faGithub}
            ]
        },
        {
            tag:'React',
            image:'./assets/meals.png',
            title:'Meals finder',
            description:'finder of recipes consuming meals API',
            links:[
                {link:'https://github.com/daiterranova/Meals-Application', icon: faGithub}
            ]
        },
        {
        tag:'HTML/CSS',
        image:'./assets/sports.png',
        title:'Sports Landing Page',
        description:'Team project for Digital House subject',
        links:[
            {link:'https://github.com/daiterranova/sportit', icon: faGithub}
        ]
        },
        {
        tag:'React',
        image:'./assets/team-member.png',
        title:'Team Member Allocation',
        description:'team allocator app',
        links:[
            {link:'https://github.com/daiterranova/Team-Member-Allocation', icon: faGithub}
        ]
        },
        {
        tag:'React',
        image:'./assets/stocks.png',
        title:'Stocks App',
        description:'stacking app',
        links:[
            {link:'https://github.com/daiterranova/Stocks', icon: faGithub}
        ]
        },
    ]
}

export const { name, role, title, socials, email, about, education, experiences, softSkills, technologies, projects } = profileData