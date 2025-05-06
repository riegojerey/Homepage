'use client';

import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiFacebook, FiTwitter, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, AreaChart, Area
} from 'recharts';
import { JetBrains_Mono } from 'next/font/google';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap',
});

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  readme?: string;
  default_branch: string;
}

const SakuraAnimation = () => {
  useEffect(() => {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '0';
    document.body.appendChild(container);

    const createSakura = () => {
      const sakura = document.createElement('div');
      sakura.className = `sakura petal${Math.floor(Math.random() * 3) + 1}`;
      sakura.style.left = `${Math.random() * 100}vw`;
      sakura.style.animationDuration = `${Math.random() * 7 + 8}s, ${Math.random() * 4 + 3}s`;
      sakura.style.opacity = `${Math.random() * 0.3 + 0.2}`;
      sakura.style.transform = `scale(${Math.random() * 0.3 + 0.3})`;
      container.appendChild(sakura);

      const cleanup = () => {
        if (sakura && sakura.parentNode === container) {
          container.removeChild(sakura);
        }
      };

      setTimeout(cleanup, 15000);
    };

    // Create initial petals
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createSakura(), i * 300);
    }

    // Then create new petals less frequently
    const interval = setInterval(createSakura, 2000);

    return () => {
      clearInterval(interval);
      if (container && container.parentNode === document.body) {
        document.body.removeChild(container);
      }
    };
  }, []);

  return null;
};

export default function Home() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Enhanced scroll progress tracking
  const { scrollYProgress, scrollY } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Parallax effect for sections
  const y = useTransform(scrollY, [0, 1000], [0, -100]);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        // Set predefined project data
        const projectsData = [
          {
            id: 1,
            name: "exoidduinoblocks",
            description: "ExoiDuino is a block-based programming environment for Arduino, developed by Exoid Robotics. It provides an intuitive interface for programming Arduino boards using a visual block-based approach.",
            html_url: "https://github.com/riegojerey/exoidduinoblocks",
            stargazers_count: 0,
            forks_count: 0,
            readme: "Features include block-based programming interface, support for various Arduino boards (Uno, Nano, Mega), built-in blocks for Digital/Analog I/O, Serial Communication, Motor Control, Sensors, and PID Control.",
            default_branch: "main"
          },
          {
            id: 2,
            name: "PID-Beam-Ball-balance",
            description: "The ball and beam is a basic reference point system with high nonlinearity and unstable system in its dynamics. This project implements PID control to balance a ball on a beam.",
            html_url: "https://github.com/riegojerey/PID-Beam-Ball-balance",
            stargazers_count: 0,
            forks_count: 0,
            readme: "A sophisticated control system project featuring PID control implementation, 3D printable files, and customizable PID parameters for optimal ball balancing performance.",
            default_branch: "main"
          },
          {
            id: 3,
            name: "ExoidPlateManager",
            description: "A Flask-based web application for managing license plates, designed to integrate with Home Assistant's image processing features.",
            html_url: "https://github.com/riegojerey/ExoidPlateManager",
            stargazers_count: 0,
            forks_count: 0,
            readme: "Features ALPR (Automatic License Plate Recognition) integration with Home Assistant, web interface for plate management, and real-time image processing configuration. Built with Python, Flask, and Docker.",
            default_branch: "main"
          }
        ];

        setRepos(projectsData);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error setting repos:', error);
        setIsLoaded(true);
      }
    };

    fetchRepoDetails();
  }, []);

  const skills = {
    hardSkills: [
      { name: "Python", value: 75 },
      { name: "MATLAB", value: 70 },
      { name: "C/C++", value: 80 },
      { name: "Arduino", value: 90 },
      { name: "GNU/Linux", value: 85 },
      { name: "Raspberry Pi", value: 75 },
      { name: "CAD Software", value: 85 },
      { name: "3D Printing", value: 90 },
      { name: "KiCad / Circuit Design", value: 80 },
      { name: "PLC Programming", value: 80 },
    ]
  };

  // Group skills into categories for better visualization
  const skillCategories = [
    { subject: 'Programming', A: (skills.hardSkills[0].value + skills.hardSkills[2].value) / 2 },
    { subject: 'Electronics', A: (skills.hardSkills[3].value + skills.hardSkills[8].value) / 2 },
    { subject: 'Systems', A: (skills.hardSkills[4].value + skills.hardSkills[5].value) / 2 },
    { subject: '3D Design', A: (skills.hardSkills[6].value + skills.hardSkills[7].value) / 2 },
    { subject: 'Automation', A: (skills.hardSkills[9].value + skills.hardSkills[1].value) / 2 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Enhanced section animation variants
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Enhanced animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };

  const skillCardVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const achievementVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center mobile-padding relative overflow-hidden">
      <SakuraAnimation />
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Sakura petals */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="sakura" />
        ))}
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-kanagawa-accent/30 via-kanagawa-highlight/40 to-kanagawa-accent/30 z-50"
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
      />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-6xl mt-20 min-h-screen relative px-4 sm:px-6 lg:px-8"
      >
        {/* Profile Image with Japanese-style frame */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#DCA561] to-[#7E9CD8] rounded-full blur opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-kanagawa-sumiInk4/30 backdrop-blur-sm bg-gradient-to-br from-kanagawa-sumiInk0/30 to-kanagawa-sumiInk4/20">
            <Image
              src="/Homepage/avatar.jpg"
              alt="Riego Jeremy Terte"
              fill
              className="object-cover object-[center_40%] image-hover"
              priority
            />
          </div>
        </div>

        {/* Text Content with Japanese styling */}
        <div className="text-center md:text-left max-w-xl">
          <div className="relative">
            <motion.div 
              className="w-64 md:w-96 h-24 relative -mb-8 ml-4 md:ml-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image
                src="/Homepage/sig.png"
                alt="Signature"
                fill
                className="object-contain filter brightness-125 z-10"
                priority
              />
            </motion.div>
            <motion.h1 
              className={`text-4xl md:text-6xl font-bold mb-4 text-kanagawa-foam hover-glow ink-brush-text relative z-0`}
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(220,215,186,0.2)",
                  "0 0 20px rgba(220,215,186,0.4)",
                  "0 0 10px rgba(220,215,186,0.2)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Riego Jeremy Terte
            </motion.h1>
          </div>
          <motion.p 
            className={`text-2xl md:text-3xl text-kanagawa-secondary mb-4 ${jetbrainsMono.className}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Electronics Engineer
          </motion.p>
          <motion.p
            className="text-kanagawa-foam mb-8 text-sm md:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm the R&D Director at Exoid Robotics. I get to spend my time doing what I love: coding, designing circuits, and building hardware – whether it's powering our robots or making smart home automation systems work. It's the perfect blend of software challenges and hands-on engineering for me.
          </motion.p>

          {/* Connect heading with Japanese */}
          <div className="mb-6 text-center md:text-left">
            <h3 className="text-xl text-kanagawa-foam mb-2 font-noto-jp">つながろう</h3>
            <p className="text-kanagawa-secondary flex items-center gap-2">
              <span>Connect with Me</span>
              <span className="text-[#DCA561]">✧</span>
              <span className="text-[#7E9CD8]">◇</span>
              <span className="text-[#957FB8]">✦</span>
            </p>
          </div>

          {/* Social Links with Japanese-style hover effects */}
          <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center md:justify-start flex-wrap">
            {[
              { icon: FiGithub, href: "https://github.com/riegojerey", label: "GitHub" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/riego-terte-210164173/", label: "LinkedIn" },
              { icon: FiFacebook, href: "https://www.facebook.com/RiegoJere", label: "Facebook" },
              { icon: FiTwitter, href: "https://twitter.com/RiegoJere", label: "Twitter" },
              { icon: FiMail, href: "mailto:riegojere@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#DCA561] to-[#7E9CD8] rounded-full blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <social.icon className="relative w-5 h-5 sm:w-6 sm:h-6 text-[#DCA561] group-hover:text-[#7E9CD8] transition-colors duration-300" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-kanagawa-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <section className="w-full max-w-7xl py-16 mt-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 section-title ink-brush-text">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-4 sm:p-8 hover:bg-kanagawa-sumiInk0/10 rounded-xl transition-all duration-300 border border-kanagawa-sumiInk4/20 backdrop-blur-sm bg-kanagawa-sumiInk0/5"
            >
              <h3 className="text-2xl font-semibold text-kanagawa-foam mb-4 group-hover:text-[#7E9CD8] transition-colors duration-300">
                {repo.name}
              </h3>
              <div className="mb-6">
                <p className="text-kanagawa-secondary mb-4 group-hover:text-opacity-90 transition-opacity duration-300">
                  {repo.description || 'No description available'}
                </p>
                {repo.readme && (
                  <p className="text-sm text-kanagawa-secondary opacity-80 line-clamp-3 group-hover:opacity-100 transition-opacity duration-300">
                    {repo.readme}
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="text-[#DCA561] group-hover:text-[#7E9CD8] transition-colors duration-300 text-sm">
                    ★ {repo.stargazers_count}
                  </span>
                  <span className="text-[#DCA561] group-hover:text-[#7E9CD8] transition-colors duration-300 text-sm">
                    🍴 {repo.forks_count}
                  </span>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#DCA561] to-[#7E9CD8] rounded-lg blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                  <div className="relative flex items-center gap-2 text-[#DCA561] group-hover:text-[#7E9CD8] transition-colors duration-300">
                    <span>View Project</span>
                    <FiExternalLink size={16} />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-7xl py-16 mt-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 section-title ink-brush-text">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start">
          <div className="h-[450px] w-full border border-kanagawa-sumiInk4/20 rounded-xl p-4 sm:p-6 backdrop-blur-sm bg-kanagawa-sumiInk0/5">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="65%" data={skillCategories}>
                <PolarGrid 
                  stroke="rgba(220, 215, 186, 0.1)"
                  gridType="polygon"
                />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ 
                    fill: '#DCD7BA',
                    fontSize: 14,
                    fontWeight: 600 
                  }}
                  stroke="#DCD7BA"
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={{ 
                    fill: '#957FB8',
                    fontSize: 12 
                  }}
                  stroke="#957FB8"
                />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#DCA561"
                  fill="#DCA561"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Skills Outline"
                  dataKey="A"
                  stroke="#7E9CD8"
                  fill="none"
                  strokeWidth={1}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {skills.hardSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group p-4 sm:p-6 hover:bg-kanagawa-sumiInk0/10 rounded-xl transition-all duration-300 border border-kanagawa-sumiInk4/20 backdrop-blur-sm bg-kanagawa-sumiInk0/5"
              >
                <div className="flex justify-between items-center gap-4">
                  <span className={`text-kanagawa-foam text-lg md:text-xl font-medium group-hover:text-[#7E9CD8] transition-colors duration-300 ${jetbrainsMono.className}`}>
                    {skill.name}
                  </span>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#DCA561] to-[#7E9CD8] rounded-full blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                    <div className="relative px-3 py-1">
                      <span className="text-[#DCA561] group-hover:text-[#7E9CD8] transition-colors duration-300 text-sm font-semibold">
                        {skill.value}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="w-full max-w-7xl py-16 mt-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 section-title ink-brush-text">Achievements</h2>
        <div className="w-full">
          <p className="text-kanagawa-foam text-lg md:text-xl mb-6 text-center px-4">
            Research Presenter, The 34th ITC-CSCC, Jeju shinhwa world, Republic of Korea
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { src: '/Homepage/korea0.jpg', alt: 'ITC-CSCC Conference Materials' },
              { src: '/Homepage/korea1.jpg', alt: 'ITC-CSCC Conference Presentation' }
            ].map((image, index) => (
              <div
                key={image.src}
                className="w-full h-[180px] md:h-[220px] relative rounded-xl overflow-hidden group transform-gpu border border-kanagawa-sumiInk4/20 backdrop-blur-sm mx-auto"
              >
                <div className="relative h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kanagawa-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-kanagawa-foam text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll indicator for the first section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-kanagawa-secondary text-sm">Scroll Down</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-6 h-6 text-kanagawa-accent"
        >
          ↓
        </motion.div>
      </motion.div>
    </main>
  );
} 