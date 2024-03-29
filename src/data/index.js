import GraphenImg from '../assets/images/experience/graphen.png';
import GroundhogImg from '../assets/images/experience/groundhog.png';
import CathayImg from '../assets/images/experience/cathay.png';
import DeltaImg from '../assets/images/experience/delta.png';
import NCCUImg from '../assets/images/experience/nccu.png';
import TTUImg from '../assets/images/experience/ttu.png';
import P1Img1 from '../assets/images/projects/01_CovMo/covmo.png';
import P2Img1 from '../assets/images/projects/02_ETL_Scheduling/graph.png';
import P2Img2 from '../assets/images/projects/02_ETL_Scheduling/dashboard.png';
import P3Img1 from '../assets/images/projects/03_Intention_Mining/cluster1.png';
import P3Img2 from '../assets/images/projects/03_Intention_Mining/cluster2.png';
import P3Img3 from '../assets/images/projects/03_Intention_Mining/network.png';
import P4Img1 from '../assets/images/projects/04_Medical_Rules/network.png';
import P4Img2 from '../assets/images/projects/04_Medical_Rules/chord.png';
import P5Img1 from '../assets/images/projects/05_Healthcare_Map/map1.png';
import P5Img2 from '../assets/images/projects/05_Healthcare_Map/map2.png';
import P6Img1 from '../assets/images/projects/06_Epidemic_Map/map1.png';
import P6Img2 from '../assets/images/projects/06_Epidemic_Map/map2.png';
import P6Img3 from '../assets/images/projects/06_Epidemic_Map/map3.png';
import P7Img1 from '../assets/images/projects/07_Fashion_Style/home.png';
import P7Img2 from '../assets/images/projects/07_Fashion_Style/option.png';
import P7Img3 from '../assets/images/projects/07_Fashion_Style/dressup.png';
import P8Img1 from '../assets/images/projects/08_Space_Shooter/entry.png';
import P8Img2 from '../assets/images/projects/08_Space_Shooter/scene.png';
import P8Img3 from '../assets/images/projects/08_Space_Shooter/win.png';
// import ResumePDF from './Michelle_Chen_Resume.pdf';

export const navbarData = [
    {
        id: 'home',
        name: 'HOME',
        href: '/portfolio/#home',
    },
    {
        id: 'about',
        name: 'ABOUT',
        href: '/portfolio/#about',
    },
    {
        id: 'experience',
        name: 'EXPERIENCE',
        href: '/portfolio/#experience',
    },
    {
        id: 'projects',
        name: 'PROJECTS',
        href: '/portfolio/#projects',
    },
    {
        id: 'contact',
        name: 'CONTACT',
        href: '/portfolio/#contact',
    },
];

export const aboutData = `
    Experienced Frontend Software Engineer with over 5 years of expertise in web application development,
    dedicated to building user-friendly interfaces using modern web technologies.
    I possess strong programming abilities and am deeply passionate about front-end engineering as well as constantly strive to acquire new skills.
`;

export const experienceData = [
    {
        date: 'Apr 2022 - Present',
        title: 'Frontend Software Engineer',
        company: 'Graphen | Taipei, Taiwan',
        desc: 'Developed the frontend of AML System, Brand Website, and AI Products.',
        icon: GraphenImg,
    },
    {
        date: 'Dec 2018 - Sep 2021',
        title: 'Frontend Engineer',
        company: 'Groundhog Technologies | Taipei, Taiwan',
        desc: 'Developed the frontend of the new generation flagship product and co-worked with cross-functional teams.',
        icon: GroundhogImg,
    },
    {
        date: 'Apr 2018 - Sep 2018',
        title: 'Data Engineer',
        company: 'Cathay Financial Holdings | Taipei, Taiwan',
        desc: 'Collaborated with data scientists, data engineers to invent various information visualization tools for internal users.',
        icon: CathayImg,
    },
    {
        date: 'Jul 2016 - Jun 2017',
        title: 'Web Developer Intern',
        company: 'Delta Electronics | Taipei, Taiwan',
        desc: 'Contributed an information retrieval system for searching millions of health insurance data and designed the customized user interface.',
        icon: DeltaImg,
    },
    {
        date: '2014 - 2018',
        title: 'MS in Computer Science',
        company: 'National Chengchi University | Taipei, Taiwan',
        desc: 'Data Mining & Multimedia Lab',
        icon: NCCUImg,
    },
    {
        date: '2009 - 2013',
        title: 'BS in Computer Science & Engineering',
        company: 'Tatung University | Taipei, Taiwan',
        desc: 'Interactive System Lab',
        icon: TTUImg,
    },
];

export const projectData = [
    {
        id: '01',
        name: 'CovMo™',
        desc: 'A large-scale telecom data analytics platform to provide geo-location, network optimization solutions, and mobility insights.',
        type: 'WEB APP',
        role: 'Front-end Engineer @ Groundhog Technologies',
        tech: ['TypeScript', 'React Hooks', 'Redux', 'Styled-Components', 'MapBox', 'Highcharts'],
        link: 'https://www.ghtinc.com/covmo/',
        imgs: [null, P1Img1, null],
    },
    {
        id: '02',
        name: 'ETL Scheduling',
        desc: 'A prototype dashboard to overview the data flow of ETL jobs with timeline charts and dynamic graphs.',
        type: 'WEB APP',
        role: 'Data Engineer @ Cathay Financial Holdings',
        tech: ['JavaScript', 'D3', 'Bootstrap'],
        link: '',
        imgs: [P2Img1, P2Img2, null],
    },
    {
        id: '03',
        name: 'Intention Mining',
        desc: 'A visual tool for viewing the online intentions that mining from website URL tags using clustering methods.',
        type: 'WEB APP',
        role: 'Data Engineer @ Cathay Financial Holdings',
        tech: ['JavaScript', 'D3', 'Bootstrap'],
        link: '',
        imgs: [P3Img1, P3Img2, P3Img3],
    },
    {
        id: '04',
        name: 'Medical Rules',
        desc: 'An innovative data visualization platform to control the mining association rules from the massive medical dataset.',
        type: 'WEB APP',
        role: 'Web Developer Intern @ Delta Electronics',
        tech: ['JavaScript', 'D3'],
        link: '',
        imgs: [P4Img1, P4Img2, null],
    },
    {
        id: '05',
        name: 'Healthcare Map',
        desc: 'An information retrieval system based on the map for searching millions of Taiwan healthcare data.',
        type: 'WEB APP',
        role: 'Web Developer Intern @ Delta Electronics',
        tech: ['JavaScript', 'D3', 'jQuery', 'PHP', 'SQL', 'LeafLet'],
        link: '',
        imgs: [P5Img1, P5Img2, null],
    },
    {
        id: '06',
        name: 'Epidemic Map',
        desc: 'A map visualization system to analyze disease trends and forecast epidemics from crawled PTT public opinion articles.',
        type: 'WEB APP',
        role: 'Postgraduate @ NCCU CS',
        tech: ['JavaScript', 'Python', 'Django', 'D3'],
        link: '',
        imgs: [P6Img1, P6Img2, P6Img3],
    },
    {
        id: '07',
        name: 'Fashion Style',
        desc: 'A clothing recommendation system that recommends products using styles and popularity learned from online fashion data.',
        type: 'WEB APP',
        role: 'Postgraduate @ NCCU CS',
        tech: ['JavaScript', 'Python', 'Django', 'PostgresDB', 'Deep Learning'],
        link: '',
        imgs: [P7Img1, P7Img2, P7Img3],
    },
    {
        id: '08',
        name: 'Space Shooter',
        desc: 'A first-person shooter game with space animation materials.',
        type: '3D Game',
        role: 'Postgraduate @ NCCU CS',
        tech: ['C#', 'Unity'],
        link: 'http://www.cs.nccu.edu.tw/~g10320/',
        imgs: [P8Img1, P8Img2, P8Img3],
    },
];

export const contactData = {
    github: 'https://github.com/michellechens',
    linkedin: 'https://www.linkedin.com/in/chenyenjung/',
    email: 'yenjungchens@gmail.com',
    // resume: ResumePDF,
};
