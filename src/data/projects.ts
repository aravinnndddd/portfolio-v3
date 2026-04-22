export interface Project {
  title: string;
  url: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "makeQR",
    url: "https://www.makeqr.site/",
    description: "Create custom QR codes with colors, logos, and unique styles. Built for simple, reliable QR creation.",
    image: "./makeqr.png",
  },
  {
    title: "Kochi DevFest",
    url: "https://www.devfestkochi.in/",
    description: "The official website for Google DevFest Kochi 2025.",
    image: "./devfest.png",
  },
    {
    title: "Course Hub",
    url: "https://course-hub-amber.vercel.app/",
    description: "A template-style UI for a course selling platform, designed to showcase course catalogs and pricing.",
    image: "./coursehub.png",
  }
  ,
    {
    title: "Make Resume",
    url: "https://make-resume-kohl.vercel.app/",
    description: "Create beautiful, professional resumes with our easy-to-use resume builder. Choose from multiple templates and download as PDF.",
    image: "./makeresume.png",
  },
  {
    title: "Discord Echo",
    url: "https://discord-echo.vercel.app/",
    description: "Show your live Discord status, coding activity, and Spotify presence on the web with a self-hosted API.",
    image: "./discordEcho.png",
  }
  ,

  {
    title: "CEP Hall",
    url: "https://cep-lab.vercel.app/",
    description: "The simplest way to reserve campus resources. Schedule classrooms, labs, seminar halls, and facilities for classes, workshops, and events in seconds.",
    image: "./cephall.png",
  }
  ,

  
  
];
