import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { faReact, faGit, faGithub, faDocker, faPython, faFigma, faJs } from '@fortawesome/free-brands-svg-icons';
import { faPalette, faEye, faGears, faHandHoldingHand, faLinesLeaning, faMagnifyingGlass, faEarListen } from '@fortawesome/free-solid-svg-icons';

const profileData = {
    name: 'Daiana Terranova',
    role: 'Fullstack Web Developer',
    title: 'Personal Data',
    email: 'daiana.terranova@gmail.com',
    socials: {
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
    about: 'Fullstack Web Developer with nearly two years of professional experience, proficiency in React, CSS, HTML, JavaScript, JS Libraries, and MUI library. Experienced in backend development with Django, PostgreSQL, ElasticSearch, and Python. I am skilled at crafting user-focused, high-impact solutions independently and as part of cross-functional teams. Currently learning about system design patterns and testing with unittest/pytest suites and GitHub actions. Additionally, my professional experience includes a solid expertise in risk analysis, dedication to customer service and experience managing,  coordinating and mentoring people. Outside of work, I am passionate about learning from others in the community and collaborating toward the common good.',
    experiences: [
        {
            title: 'FullStack Developer, Presidencia de la Nación',
            date: 'Feb 2023 — present',
            description: "Developed components with React and MUI, optimizing and refactoring code to adapt to evolving tool needs. Created user documentation for the tool using LibreOffice. Worked with PostgreSQL (relational) and Elasticsearch (non-relational) databases. Assisted backend tasks with Django and Python, easing the backend team's workload and accelerating frontend tasks. Used Git for version control collaboration. Built the tool within Docker-based virtual environments. Customized MUI for a 2K and 4K resolution interface."
        },
        {
            title: 'Frontend Web Developer, Personas IT Consultant',
            date: 'Oct 2020 — Nov 2021',
            description: 'Developed visual interfaces using HTML, CSS, and JavaScript, enhancing UX and organic SEO on articles. Adapted Brightspot CMS developments to the production environment. Integrated JS libraries to expedite feature development and reduce implementation time.Gathered client requirements, defined project scope, and aligned expectations for smoother delivery.Used Notion for task planning and Excel to share timelines with clients, improving team efficiency and communication. Designed requirements in Figma, validating with clients to avoid major post-development changes.'
        },
    ],
    education: [
        { title: 'System Design Course, Women Code Community', date: 'Oct 2024 — present', description: 'System design patterns' },
        { title: 'Certified Tech Developer, Digital House', date: 'Jul 2023 — Mar 2024', description: 'Concepts: Agile Methodologies, OOxP with Java, Imperative Programming with JS, Web Design (HTML, CSS, JS), Databases with MySQL, Unit Test, Design Thinking Principles' },
        { title: 'Frontend Practical Course, Platzi', date: 'May 2023 - Jul 2023', description: 'Concepts: HTML / CSS' },
        { title: 'Full Stack Web Developer Route, Open Bootcamp', date: 'Jul 2022 - Dic 2022', description: 'Concepts: Introduction to Programming, Python, Docker, HTML/CSS, Bootstrap.' },
        { title: 'Frontend Developer Course', date: 'Oct 2022', description: 'Concepts: HTML / CSS / Javascript' },
    ],
    technologies: [
        { title: 'React', icon: faReact },
        { title: 'MUI Library', icon: faPalette },
        { title: 'Git', icon: faGit },
        { title: 'Github', icon: faGithub },
        { title: 'Docker', icon: faDocker },
        { title: 'Django', icon: faPython },
        { title: 'Python', icon: faPython },
        { title: 'Figma', icon: faFigma },
        { title: 'ElasticSearch', icon: faFigma },
        { title: 'PostreSQL', icon: faFigma },
        { title: 'Javascript', icon: faJs },
        { title: 'Notion', icon: faJs },
    ],
    softSkills: [
        { title: 'Analytical Thinking', icon: faMagnifyingGlass },
        { title: 'Attention to detail ', icon: faEye },
        { title: 'Active listening', icon: faEarListen },
        { title: 'Resilience', icon: faLinesLeaning },
        { title: 'Adaptability', icon: faGears },
        { title: 'Team Player', icon: faHandHoldingHand },
    ],
    projects: [
        {
            tag: 'JS',
            image: './assets/polls-evolution.jpeg',
            title: 'Monitor Electoral con evolución en encuestas',
            description: 'Interactive web design implementing the Chart.js library for graphing poll evolution by party, providing the ability to choose data graphs from different poll consultants and displaying candidate tables with filters for various polls.',
            links: [
                { link: 'https://www.elpais.com.uy/narrativas-visuales/monitor-electoral-que-muestran-las-encuestas-hacia-las-elecciones-nacionales-y-como-evolucionan-los-partidos', icon: faGithub }
            ]
        },
        {
            tag: 'JS',
            image: './assets/monitor-electoral-preview.jpeg',
            title: 'Monitor Electoral',
            description: 'Design and development of a UI to display the results of political polls showing preferred candidates by party prior to the electoral elections.',
            links: [
                { link: 'https://www.elpais.com.uy/narrativas-visuales/monitor-electoral-que-pronostica-cada-una-de-las-encuestas-de-cara-a-las-elecciones-2024-en-uruguay', icon: faGithub }
            ]
        },
        {
            tag: 'HTML/CSS',
            image: './assets/precandidates.jpeg',
            title: 'Precandidatos a la presidencia',
            description: 'Static web design to show uruguayan precandidates to electoral elections',
            links: [
                { link: 'https://www.elpais.com.uy/narrativas-visuales/uno-a-uno-quienes-son-los-precandidatos-a-la-presidencia-que-se-presentan-en-las-elecciones-internas-2024', icon: GitHubIcon }
            ]
        },
        {
            tag: 'React',
            image: './assets/meals.png',
            title: 'Meals finder',
            description: 'Finder of recipes consuming meals API',
            links: [
                { link: 'https://github.com/daiterranova/Meals-Application', icon: faGithub }
            ]
        },
        {
            tag: 'JS',
            image: './assets/formulas.jpeg',
            title: 'Fórmulas de candidatos definidas',
            description: 'Interactive web design implementing a slider using the Glide.js library to display candidate formulas, along with cards featuring anchored scroll functionality to provide more information about each candidate.',
            links: [
                { link: 'https://www.elpais.com.uy/narrativas-visuales/las-formulas-definidas-quienes-son-los-candidatos-a-vice-que-acompanaran-a-los-que-buscan-ser-presidente', icon: faGithub }
            ]
        },
        {
            tag: 'React',
            image: './assets/team-member.png',
            title: 'Team Member Allocation',
            description: 'team allocator app',
            links: [
                { link: 'https://github.com/daiterranova/Team-Member-Allocation', icon: faGithub }
            ]
        },
        {
            tag: 'React',
            image: './assets/stocks.png',
            title: 'Stocks App',
            description: 'stacking app',
            links: [
                { link: 'https://github.com/daiterranova/Stocks', icon: faGithub }
            ]
        },
    ]
}

export const { name, role, title, socials, email, about, education, experiences, softSkills, technologies, projects } = profileData