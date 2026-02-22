// import { ArrowUpRight, Github } from "lucide-react";
// import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
// const projects = [
//   {
//     title: "MySpace - Hostel Management System",
//     description:
//       "A full-stack hostel management platform with role-based access for users, providers, and admin. Features include room listings, booking management, JWT-based authentication, Stripe payment integration, Redis caching, real-time notifications and chat using Socket.io, and centralized state management with Redux. Built for scalability, performance, and maintainability.",
//     image: "/projects/project1.png",
//     tags: [
//       "React",
//       "TypeScript",
//       "Redux",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "JWT",
//       "Stripe",
//       "Redis",
//       "Socket.io",
//     ],
//     link: "https://my-space.shop/",
//     github: "https://github.com/MohammedAnsal/MySpace",
//   },
//   {
//     title: "Urban - E-Commerce Platform",
//     description:
//       "A full-stack e-commerce application built using the MVC architecture. Includes product listings, user authentication, cart and order management, and secure Razorpay payment integration. Backend is developed with Node.js, Express, MongoDB, and Mongoose, while the frontend uses EJS for dynamic rendering, focusing on clean structure and scalability.",
//     image: "/projects/project2.png",
//     tags: [
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "Mongoose",
//       "EJS",
//       "MVC",
//       "Razorpay",
//     ],
//     link: "https://urban-6f2j.onrender.com",
//     github: "https://github.com/MohammedAnsal/Urban",
//   },
//   {
//     title: "ReadStack – Article Platform",
//     description:
//       "A full-stack article publishing platform where users can read, write, and manage articles. Built with React and TypeScript using Zustand for state management, and a Node.js + Express backend with MongoDB. Supports image uploads via Cloudinary, structured content management, and a clean, user-focused interface.",
//     image: "/projects/project3.png",
//     tags: [
//       "React",
//       "TypeScript",
//       "Zustand",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "Cloudinary",
//     ],
//     link: "https://read-stack-two.vercel.app/",
//     github: "https://github.com/MohammedAnsal/ReadStack",
//   },
//   {
//     title: "SmartMarks – Realtime Bookmark Manager",
//     description:
//       "A production-ready bookmark management platform with secure Google OAuth authentication and strict per-user data isolation using Supabase Row Level Security (RLS). Features include real-time cross-tab synchronization, bookmark CRUD operations, favourites support, and a fully responsive SaaS-style dashboard. Built with Next.js (App Router), Supabase (Auth, Database, Realtime), Tailwind CSS, and Framer Motion, and deployed on Vercel.",
//     image: "/projects/project4.png",
//     tags: [
//       "Next.js",
//       "TypeScript",
//       "Supabase",
//       "PostgreSQL",
//       "Google OAuth",
//       "Realtime",
//       "Tailwind CSS",
//       "Framer Motion",
//       "Vercel",
//     ],
//     link: "https://smart-bookmarkk.vercel.app/",
//     github: "https://github.com/MohammedAnsal/smart-bookmark-app",
//   },
// ];

// export const Projects = () => {
//   return (
//     <section id="projects" className="py-32 relative overflow-hidden">
//       {/* Bg glows */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mx-auto max-w-3xl mb-16">
//           <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
//             Featured Work
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
//             Projects that
//             <span className="font-serif italic font-normal text-white">
//               {" "}
//               make an impact.
//             </span>
//           </h2>
//           <p className="text-muted-foreground animate-fade-in animation-delay-200">
//             A selection of my recent work, from complex web applications to
//             innovative tools that solve real-world problems.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
//               style={{ animationDelay: `${(idx + 1) * 100}ms` }}
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden aspect-video">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div
//                   className="absolute inset-0
//                 bg-linear-to-t from-card via-card/50
//                  to-transparent opacity-60"
//                 />
//                 {/* Overlay Links */}
//                 <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <a
//                     href={project.link}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <ArrowUpRight className="w-5 h-5" />
//                   </a>
//                   <a
//                     href={project.github}
//                     className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
//                   >
//                     <Github className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 space-y-4">
//                 <div className="flex items-start justify-between">
//                   <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
//                     {project.title}
//                   </h3>
//                   <ArrowUpRight
//                     className="w-5 h-5
//                   text-muted-foreground group-hover:text-primary
//                    group-hover:translate-x-1
//                    group-hover:-translate-y-1 transition-all"
//                   />
//                 </div>
//                 <p className="text-muted-foreground text-sm">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, tagIdx) => (
//                     <span
//                       key={tagIdx}
//                       className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All CTA */}
//         <div className="text-center mt-12 animate-fade-in animation-delay-500">
//           <AnimatedBorderButton
//             onClick={() => {
//               window.open("https://github.com/MohammedAnsal", "_blank");
//             }}
//           >
//             View All Projects
//             <ArrowUpRight className="w-5 h-5" />
//           </AnimatedBorderButton>
//         </div>
//       </div>
//     </section>
//   );
// };

import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "MySpace - Hostel Management System",
    description:
      "A full-stack hostel management platform with role-based access for users, providers, and admin. Features include room listings, booking management, JWT-based authentication, Stripe payment integration, Redis caching, real-time notifications and chat using Socket.io, and centralized state management with Redux.",
    image: "/projects/project1.png",
    tags: [
      "React",
      "TypeScript",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Stripe",
      "Redis",
      "Socket.io",
    ],
    link: "https://my-space.shop/",
    github: "https://github.com/MohammedAnsal/MySpace",
  },
  {
    title: "Urban - E-Commerce Platform",
    description:
      "A full-stack e-commerce application built using the MVC architecture. Includes product listings, user authentication, cart and order management, and secure Razorpay payment integration. Backend is developed with Node.js, Express, MongoDB, and Mongoose.",
    image: "/projects/project2.png",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "MVC",
      "Razorpay",
    ],
    link: "https://urban-6f2j.onrender.com",
    github: "https://github.com/MohammedAnsal/Urban",
  },
  {
    title: "ReadStack – Article Platform",
    description:
      "A full-stack article publishing platform where users can read, write, and manage articles. Built with React and TypeScript using Zustand for state management, and a Node.js + Express backend with MongoDB. Supports image uploads via Cloudinary.",
    image: "/projects/project3.png",
    tags: [
      "React",
      "TypeScript",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    link: "https://read-stack-two.vercel.app/",
    github: "https://github.com/MohammedAnsal/ReadStack",
  },
  {
    title: "SmartMarks – Realtime Bookmark Manager",
    description:
      "A production-ready bookmark management platform with secure Google OAuth authentication and per-user data isolation using Supabase RLS. Features real-time cross-tab synchronization, bookmark CRUD, favourites support, and a fully responsive SaaS-style dashboard.",
    image: "/projects/project4.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Google OAuth",
      "Tailwind CSS",
      "Framer Motion",
    ],
    link: "https://smart-bookmarkk.vercel.app/",
    github: "https://github.com/MohammedAnsal/smart-bookmark-app",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image Container — fixed height, shows full image */}
              <div className="relative overflow-hidden h-56 bg-card flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle bottom fade so image blends into card */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/80 to-transparent" />

                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 bg-card/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 gap-4">
                {/* Title row */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 mt-0.5"
                  >
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            onClick={() => {
              window.open("https://github.com/MohammedAnsal", "_blank");
            }}
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};