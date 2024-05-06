import {
  javascript,
  typescript,
  omniprice,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  postgreSQL,
  rickandmorty,
  pokemon,
  henry,
  fisiom,
  god,
  threejs,
  next,
  mbtek,
  mbtek_landing,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "postgreSQL",
    icon: postgreSQL,
  },
];

const experiences = [
  {
    title: "Full Stack Group Proyect",
    company_name: "Henry",
    icon: henry,
    iconBg: "#FFFF00",
    date: "August 2023 - September 2023",
    points: [
      "Development of a collectible card e-commerce platform.",
      "Utilization of Next.js, Mongoose, and MongoDB.",
      "Implementation of Tailwind CSS and NextUI for styling.",
      "Controlled form with validations.",
      "State management using Redux Toolkit and LocalStorage.",
      "Login authentication using Clerk.",
      "Payment gateway integration with Mercado Pago.",
      "Pagination combined with filters and a search bar.",
      "Admin Dashboard.",
      "Effective error handling.",
    ],
  },
  {
    title: "Teacher Assistant",
    company_name: "Henry",
    icon: henry,
    iconBg: "#FFFF00",
    date: "August 2023 - November 2023",
    points: [
      "Coordinate a group of students to achieve integration into the study group.",
      "Guide students in the initial steps of the course.",
      "Assist in solving exercises and promote group collaboration (Pair Programming).",
      "Propose ideas for improving Bootcamp processes.",
    ],
  },
  {
    title: "Front-end Leader",
    company_name: "Fisiom Fulness",
    icon: fisiom,
    iconBg: "#ffffff",
    date: "November 2023 - March 2024",
    points: [
      "Lead the front-end team using Scrum methodology, ensuring efficient collaboration.",
      "Implemented a modern design overhaul for improved aesthetics and user experience.",
      "Successfully migrated a React.js app to Next.js, enhancing performance and scalability.",
      "Propose ideas to enhance features and processes, fostering continuous improvement.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "MB-Tek",
    icon: mbtek,
    iconBg: "#ffffff",
    date: "January 2024 - Present",
    points: [
      "Customization of the storefront using Shopify CLI for themes.",
      "Maintenance and addition of functionalities to the Shopify site for customer tracking through forms, chat, etc.",
      "I perform marketing automations using webhooks and tools like Zapier, Make, and HubSpot CRM.",
      "I create or update landing pages to generate new leads.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Luciano proved me wrong.",
    name: "Anne Robson",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Luciano does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Luciano optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pokewave",
    link: "https://pi-pokemon-black.vercel.app/",
    description:
      "A Single Page Application that allows users to find any Pokemon by ID or name from the official Pokemon API. You can compare them by stats, filter by types, and even create a new Pokemon.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link: "https://github.com/LucianoDesign/PI-Pokemon",
  },
  {
    name: "Guardian of Decks",
    link: "https://final-project-client-lime.vercel.app/",
    description:
      "A collectible card e-commerce platform where users can add items to their cart, make modifications if necessary, and complete their purchase using Mercado Pago. Afterward, they can access and check the order status. Additionally, users with Admin status can access the dashboard.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: god,
    source_code_link: "https://github.com/quirox93/final-project-client",
  },
  {
    name: "Omniprice",
    link: "https://omniprice.vercel.app/",
    description:
      "Omniprice is a revolutionary price tracking platform focused on simplicity and savings. Users can effortlessly track product prices on Mercado Libre by entering the product link. Our intuitive interface allows users to receive instant email notifications whenever the price drops or discounts are available.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "violet-text-gradient",
      },
    ],
    image: omniprice,
    source_code_link: "https://github.com/LucianoDesign/Omniprice",
  },
  {
    name: "Mb-tek landing page",
    link: "https://www.mbtek.com/pages/15-minute-call",
    description:
      "A simple landing page for capturing leads, connected with HubSpot CRM, featuring a form submission section that triggers an automation of a marketing process.",
    tags: [
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mbtek_landing,
    source_code_link: "https://github.com/LucianoDesign/mbtek-landing",
  },
];

export { technologies, experiences, testimonials, projects };
