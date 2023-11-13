import myBooksy from './images/mybooksy.png';
import polyU from './images/polyu.png';
import solitaire from './images/solitaire.png';
import spielBlog from './images/spielblog.png';
import fam from './images/fam.jpg';
import refraim from './images/refraim.jpg';

const projects = [
    {
        name: 'Refraim',
        image: refraim,
        tech: ['React', 'Django', 'Python', 'PostgreSQL', 'OpenAI'],
        description: 'Refraim is an AI-powered mental health app that helps you to reframe your negative thoughts.',
        github: 'https://github.com/npereznyc/refraim_frontend',
        live: 'https://refraim.netlify.app/'
    },
    {
        name: 'Fam',
        image: fam,
        tech: ['React Native', 'Django', 'Python', 'PostgreSQL'],
        description: 'Fam is a mobile application to cater to people who are lonely during the holidays and would love to share a dinner experience with hosting families.',
        github: 'https://github.com/jac-lene/dinner-front',
        live: '#',
    },
    {
        name: "PolyU",
        image: polyU,
        tech: ['React', 'Django', 'Python', 'Socket.io', 'PostgreSQL', 'CSS'],
        description: 'PolyU is a social media platform I created for language learners. It utilizes a backend API run by Django and a React Frontend.',
        github: "https://github.com/Jordan-Burgess/PolyU",
        live: "https://poly-u.netlify.app/",
    },
    {
        name: "MyBooksy",
        image: myBooksy,
        tech: ['React', 'MongoDB', 'Express', 'Node', 'CSS'],
        description: 'myBooksy is a full-stack MERN application I designed with a team of 4. Users can look up books and check the reviews. My main task for this app was to implement user authentication.',
        github: "https://github.com/Jordan-Burgess/mybooksy-frontend",
        live: "https://6336fb495211cf00744988d7--cheery-twilight-75bceb.netlify.app/",
    },
    {
        name: "Spiel Blog",
        image: spielBlog,
        tech: ['MongoDB', 'Express', 'Node', 'EJS', 'HTML', 'CSS', 'JavaScript'],
        description: 'Spiel Blog is a blog app that I designed with a team of 3. Users are able to write blogs and add it to the main blog page and like other blogs. Blogs are sorted by categories.',
        github: "https://github.com/Jordan-Burgess/Spiel-Blog-App",
        live: "https://spiel-blog.herokuapp.com/",
    },
    {
        name: "Solitaire",
        image: solitaire,
        tech: ['HTML', 'CSS', 'JavaScript'],
        description: 'Solitaire is a popular card game of card sorting. Users can play by clicking cards and selecting their placement.',
        github: "https://github.com/Jordan-Burgess/Solitaire",
        live: "https://jordan-burgess.github.io/Solitaire/",
    },
];

export default projects