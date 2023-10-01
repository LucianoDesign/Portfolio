import {
    javascript,
    typescript,
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
    god,
    threejs,
    next,
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
      name:"next",
      icon: next
    },
    {
      name:"postgreSQL",
      icon: postgreSQL
    }
  ];
  
  const experiences = [
    {
      title: "React.js Integration Proyect",
      company_name: "Henry",
      icon: henry,
      iconBg: "#FFFF00",
      date: "April 2023 - June 2023",
      points: [
        "Developing my first application in React.",
        "Implementing class and functional components.",
        "Using Redux for managing global state.",
        "Creating a server in Express and a SQL database in PostgreSQL.",
      ],
    },
    {
      title: "Full Stack Individual Proyect",
      company_name: "Henry",
      icon: henry,
      iconBg: "#FFFF00",
      date: "June 2023 - August 2023",
      points: [
        "Development of a single page app using React, Redux, Node, Express, and Sequelize.",
        "Consistent design across different routes and a good user experience (UX).",
        "Combined filters and sorting functionality.",
        "Controlled form with validations.",
        "Handling of Redux states.",
        "Pagination combined with filters and a search bar.",
        "Effective error handling.",
        "Normalized database with model validations and constraints.",
        "Unit testing of routes."
      ],
    },
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
        "Effective error handling."
      ],
    },
    {
      title: "Teacher Assistant",
      company_name: "Henry",
      icon: henry,
      iconBg: "#FFFF00",
      date: "August 2023 - Present",
      points: [
        "Coordinate a group of students to achieve integration into the study group.",
        "Guide students in the initial steps of the course.",
        "Assist in solving exercises and promote group collaboration (Pair Programming).",
        "Propose ideas for improving Bootcamp processes.",
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
      name: "Rick and Morty App",
      description:
      "A Single Page Application that allows the user to find any character by ID or at random from the Rick and Morty show. You can select and save them as favorites.",
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
      image: rickandmorty,
      source_code_link: "https://github.com/LucianoDesign/RickAndMorty.TI",
    },
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
      "A collectible card e-commerce platform where users can add items to their cart, make modifications if necessary, and complete their purchase using Mercado Pago. Afterward, they can access and check the order status. Additionally, users with Admin status can access the dashboard.",      tags: [
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
  ];
  
  export {  technologies, experiences, testimonials, projects };