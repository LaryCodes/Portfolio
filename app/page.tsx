"use client";

import { Github, Mail, Linkedin, FileCode2, Database, Layout, Cpu, Code2, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "tech", label: "Tech Stack" },
    { id: "contact", label: "Contact" },
  ];

  const projects = [
    {
      title: "AI-Powered Chat Application",
      description: "A real-time chat application with AI-powered features using Next.js and Python.",
      tech: ["Next.js", "Python", "WebSocket", "OpenAI"],
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with advanced filtering and real-time inventory.",
      tech: ["Next.JS", "Node.js", "MongoDB Atlas", "TailwindCSS", "Shadcn UI", "Clerk", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
      link: "https://bandage-xi.vercel.app/",
    },
    {
      title: "Portfolio -- built with Flask",
      description: "A real-time chat application with AI-powered features using Next.js and Python.",
      tech: ["Next.js", "Python", "WebSocket", "OpenAI"],
      image: "/flask-portfolio.jpeg",
      link: "https://github.com/larycodes/flask-based-portfolio",
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates and analytics.",
      tech: ["TypeScript", "React", "Firebase", "Charts"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",

    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates and analytics.",
      tech: ["TypeScript", "React", "Firebase", "Charts"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",

    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates and analytics.",
      tech: ["TypeScript", "React", "Firebase", "Charts"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",

    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background" ref={targetRef}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Code2 className="w-6 h-6 text-foreground" />
              <span className="text-3xl md:text-4xl dancing-script font-bold text-foreground">Muhammad Laraib</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex space-x-8"
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="nav-link"
                >
                  {section.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="hero-image-container">
                <Image 
                src="/main2.jpg"
                width={380}
                height={380} 
                alt="Muhammad Laraib" 
                className="rounded-full shadow-yellow-300 shadow-2xl
                " />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                I'm{" "}
                <span className="text-foreground">
                  Muhammad Laraib
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Next.js Developer | Python Enthusiast | Frontend Specialist
              </p>
              <div className="flex gap-6">
                <a href="https://github.com/larycodes" target="_blank" rel="noopener noreferrer" 
                  className="gradient-border rounded-full">
                  <div className="p-3 bg-background rounded-full hover:bg-secondary transition-colors">
                    <Github className="w-6 h-6 text-foreground" />
                  </div>
                </a>
                <a href="mailto:larycodes@gmail.com"
                  className="gradient-border rounded-full">
                  <div className="p-3 bg-background rounded-full hover:bg-secondary transition-colors">
                    <Mail className="w-6 h-6 text-foreground" />
                  </div>
                </a>
                <a href="https://linkedin.com/in/larycodes" target="_blank" rel="noopener noreferrer"
                  className="gradient-border rounded-full">
                  <div className="p-3 bg-background rounded-full hover:bg-secondary transition-colors">
                    <Linkedin className="w-6 h-6 text-foreground" />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Passionate about building modern web apps, optimizing performance, and integrating AI into real-world solutions. 
              Always open to collaboration and learning new tech!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileCode2 className="w-10 h-10 mb-4 text-foreground" />,
                  title: "Frontend",
                  desc: "Next.js, React, HTML, CSS, JavaScript, TypeScript"
                },
                {
                  icon: <Database className="w-10 h-10 mb-4 text-foreground" />,
                  title: "Backend & AI",
                  desc: "Python, Flask, Agentic AI"
                },
                {
                  icon: <Layout className="w-10 h-10 mb-4 text-foreground" />,
                  title: "Other Skills",
                  desc: "API Development, UI/UX, Git, Deployment"
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="gradient-border rounded-xl"
                >
                  <div className="p-6 bg-background rounded-xl h-full">
                    <div className="flex justify-center">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-center text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-center">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-muted-foreground">Some of my recent work</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="project-card"
              >
                <div className="relative h-48 mb-4">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <ExternalLink 
                    onClick={() => window.open(project.link, '_blank')}
                    className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12 text-foreground">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "JavaScript", "Python", "TypeScript", "Next.js",
                "React", "Flask", "TailwindCSS", "Git"
              ].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="gradient-border rounded-lg"
                >
                  <div className="p-6 bg-background rounded-lg hover:bg-secondary/50 transition-colors">
                    <Cpu className="w-8 h-8 mb-3 mx-auto text-foreground" />
                    <p className="font-medium text-foreground">{tech}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-foreground">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a
              href="mailto:larycodes@gmail.com"
              className="inline-block gradient-border rounded-full"
            >
              <div className="px-8 py-3 bg-background rounded-full hover:bg-secondary transition-colors">
                <span className="text-foreground font-medium">Say Hello 👋</span>
              </div>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}