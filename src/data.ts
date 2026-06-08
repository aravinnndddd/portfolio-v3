import { Project, SkillCategory, Service, JourneyItem } from './types';

export const projectsData: Project[] = [
  {
    id: 'makeqr',
    number: '01',
  
    title: 'makeQR',
    image: '/makeqr.png',
    tags: ['Next.js', 'TailwindCSS', 'TypeScript'],
    description: 'A high-end, minimalist QR code generator dashboard interface. Built for creators and premium businesses looking for bespoke aesthetics.',
  
    year: '2025',
 
    liveUrl: 'https://makeqr.live',
  
  },
  {
    id: 'make-resume',
    number: '02',
  
    title: 'Make Resume',
    image: '/makeresume.png',
    tags: [ 'TypeScript', 'PDF Export', 'Resume Builder'],
    description: 'A polished resume builder with multiple templates, streamlined editing, and PDF downloads for fast job applications.',

    year: '2026',

    liveUrl: 'https://make-resume-kohl.vercel.app/'
  },
   {
    id: 'kochi-devfest',
    number: '03',

    title: 'Kochi DevFest',
    image: '/devfest.png',
    tags: ['React', 'Framer Motion', 'Vite', 'TailwindCSS', 'Web Audio API'],
    description: 'An elegant landing page and branding system for Kerala\'s largest developer conference, capturing developer energy with strict architectural restraint.',
   
    year: '2025',
 
    liveUrl: 'https://devfest.gdgkochi.org',

  },
  
  {
    id: 'xcepthon',
    number: '05',
  
    title: 'Xcepthon',
    image: '/xcepthon.png',
    tags: ['TypeScript', 'React Flow', 'FastAPI', 'TailwindCSS', 'PostgreSQL'],
    description: 'Designed and developed the official website for XCeptHon, a hackathon event focused on innovation, collaboration, and problem-solving. Built a responsive and modern user interface to showcase event details, registration information, schedules, and participant resources, ensuring a seamless experience across all devices.',
  
    year: '2025',
  

    liveUrl: 'https://xcepthon.in',
  
  },
  {
    id: 'discord-echo',
    number: '08',
  
    title: 'Discord Echo',
    image: '/discordEcho.png',
    tags: ['Vercel', 'API', 'Discord', 'Live Status'],
    description: 'A self-hosted presence dashboard that surfaces Discord status, coding activity, and Spotify listening data on the web.',

    year: '2026',
 
    liveUrl: 'https://discord-echo.vercel.app/'
  },
  {
    id: 'cep-hall',
    number: '04',
  
    title: 'CEP Hall',
    image: '/cephall.png',
    tags: ['Scheduling', 'Campus Tools', 'Reservations', 'Web App'],
    description: 'A simple reservation platform for booking classrooms, labs, seminar halls, and campus facilities in seconds.',
  
    year: '2026',
   
    liveUrl: 'https://cep-lab.vercel.app/'
  },
 
  {
    id: 'course-hub',
    number: '06',
  
    title: 'Course Hub',
    image: '/coursehub.png',
    tags: ['TypeScript', 'React Flow', 'FastAPI', 'TailwindCSS', 'PostgreSQL'],
    description: 'A sleek, hyper-minimalist educational dashboard that visualizes knowledge trees, progression models, and seamless video streaming UI.',
   
    year: '2024',
  

    liveUrl: 'https://coursehub.edutech.io',
   
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'globe',
    items: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' }
    ]
  },
  {
    title: 'Languages',
    icon: 'code',
    items: [
      { name: 'TypeScript' },
      { name: 'JavaScript'},
      { name: 'HTML5'},
      { name: 'CSS3 / Tailwind'},
      { name: 'Python' }
    ]
  },
  {
    title: 'Tools',
    icon: 'terminal',
    items: [
      { name: 'VS Code'},
      { name: 'GitHub'},
      { name: 'Figma' },
      { name: 'Vercel/Netlify' }
    ]
  },
  {
    title: 'Databases',
    icon: 'database',
    items: [
      { name: 'NoSQL (MongoDB,firebase)' },
      { name: 'SQL (MySQL)' },
      
    ]
  }
];

export const servicesData: Service[] = [
  {
    icon: 'web',
    title: 'Portfolio Websites',
    description: 'High-performance personal and brand websites with custom motion that sets you apart from the crowd.',
    features: ['Unique layouts', 'Subtle micro-animations', 'Pristine layout grid alignment', 'SEO friendly structure']
  },
  {
    icon: 'rocket_launch',
    title: 'Landing Pages',
    description: 'Conversion-focused product pages engineered to load instantly, optimized for speed, layout integrity, and search ranks.',
    features: ['A/B optimized paths', 'Lighthouse 100/100 performance', 'Rich form validations', 'Analytics hookups']
  },
  {
    icon: 'shopping_bag',
    title: 'Ecommerce',
    description: 'Fast, clean online stores that match modern luxury design with friction-free checkout workflows.',
    features: ['Rapid cart caching', 'Frictionless checkout paths', 'Responsive product grids', 'Adaptive catalog load']
  },
  {
    icon: 'devices',
    title: 'Responsive UI',
    description: 'Mobile-first interfaces designed and executed to stay sharp, readable, and highly interactive on any viewport.',
    features: ['Touch target layouts', 'Flexible flex grids', 'Aesthetic font scaling', 'Orientation reactive viewports']
  }
];

export const journeyData: JourneyItem[] = [
  {
    id: 'freelancer',
    period: '2025 — Present',
    title: 'Freelancer',
    organization: 'Web Developer',
    description: 'Building bespoke digital solutions for clients globally, focusing on high-performance frameworks and pristine structural aesthetics.',
   
  },
  {
    id: 'gdg-organizer',
    period: '2025 — 2026',
    title: 'GDG On Campus Organizer',
    organization: 'College of Engineering Perumon',
    description: 'Organizing tech talks, hands-on workshops, development hackathons, and building a supportive developer community.',
   
  },
  {
    id: 'btech-cs',
    period: '2024 — Present',
    title: 'B.Tech in Computer Science',
    organization: 'College of Engineering Perumon',
    description: 'Specializing in cloud computing, modern interface architecture, data structures, and computer science logic.',
    
  }
];
