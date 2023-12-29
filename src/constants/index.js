import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  robot,
  selenium,
  nodejs,
  rca,
  python,
  mongodb,
  nextjs,
  git,
  rust,
  docker,
  pageform,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Web Scraper and Automation",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Rust Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "RCA Entreprise",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Mars 2022 - Juin 2022",
    points: [
      "Design and efficiently develop an e-commerce platform. Utilize cutting-edge technology, ReactJS, for front-end development. Implement HTML and CSS to create a seamless and visually appealing user interface.",
      "Employ NodeJS with Express for back-end development.",
      "Ensure optimal platform performance through the integration of Express and MongoDB.",
      "Conduct thorough testing to identify and rectify any bugs or issues.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "Self Project",
    icon: nextjs,
    iconBg: "#E6DEDD",
    date: "september 2023 - december 2022",
    points: [
      "Developing and maintaining web applications using Next.js and other relevant technologies.",
      "Acquiring expertise in customizing components to meet performance requirements with the assistance of RADIX.",
      "Implementing responsive design principles and ensuring cross-browser compatibility.",
      "Actively participating in code reviews and offering constructive feedback to fellow developers."

    ],
  },
  {
    title: "Web Scraping Developer",
    company_name: "Nach Deutshland",
    icon: robot,
    iconBg: "#383E56",
    date: "Mars 2023 - Present",
    points: [
      "Developing and maintaining web scraper scripts and automation utilizing Selenium and other relevant technologies.",
      "Deploying automation for downloading files using AWS Lambda serverless architecture.",
      "Implementing scalability and maintainability tests for the scripts to mitigate bugs and issues.",
      "Establishing databases and integrating data through APIs on the WIX platform."

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "RCA Entreprise",
    description:
      "Web-based platform Empowering job seekers and employers across Africa, Users can effortlessly search for employment opportunities and connect with potential hires in their desired locations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
    ],
    image: rca,
    source_code_link: "https://github.com/",
  },
  {
    name: "Form Creator",
    description:
      "Web application that enables users to create a formulaire, customize the formulaire as they desire and they can share the link of their formulaire, also they are able to see the registred in their own dashboard.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
    ],
    image: pageform,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web Scrapping",
    description:
      "A robust Web Scrapping script using selenium , downlonad automation and deploy in AWS Lambda, Creating database using wix and implement a RESTful API to interact with the database.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
      {
        name: "AWS Lambda",
        color: "pink-text-gradient",
      },
      {
        name: "WIX",
        color: "blue-text-gradient",
      },
    ],
    image: selenium,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
