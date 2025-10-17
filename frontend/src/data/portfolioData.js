
export const portfolioData = {
  personalInfo: {
    name: "Jyoti Patel",
    title: "MERN Stack Developer",
    location: "Varanasi, Uttar Pradesh (221106)",
    email: "jyotipatel707172@gmail.com",
    phone: "+91-9936936394",
    linkedin: "https://linkedin.com/in/jyoti-patel-677141281",
    github: "https://github.com/Jyoti-patel707172",
    intro: "Aspiring MERN Full-Stack Developer with MCA degree, skilled in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js.",
    profileImage: "./public/profile.jpg" // Add your image in public folder
  },

  about: {
    description: "I am a passionate MERN stack developer with a strong foundation in software development. I love creating innovative web solutions that make a difference.",
    passions: [
      "Building scalable web applications",
      "Learning new technologies",
      "Problem solving and algorithm design",
      "Open source contributions"
    ],
    personalDetails: [
      "Strong problem-solving abilities",
      "Excellent communication skills",
      "Team player with leadership qualities",
      "Always eager to learn and grow"
    ],
     profileImage: "./public/profile_about.jpg" 
  },

  skills: {
  technical: [
    { name: "HTML/CSS", icon: "🛠️" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express.js", icon: "🛣️" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" }
  ],
  soft: [
    "Creative Problem Solving",
    "Team Collaboration",
    "Effective Communication",
    "Adaptability & Learning Mindset",
    "Attention to Detail",
    "Project Ownership"
  ]
},

 education: [
  {
    degree: "MCA",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    duration: "2022–2024",
    percentage: "74.12%",
    description: "Master of Computer Applications",
    certificate: "/MCA-Degree.pdf"
  },
  {
    degree: "BCA",
    institution: "Mahatma Gandhi Kashi Vidyapith (MGKVP)",
    duration: "2019–2022",
    percentage: "68.83%",
    description: "Bachelor of Computer Applications",
    certificate: "/BCA-Degree.pdf"
  }
]
,

 experience: [
  {
    title: "MERN Stack Developer",
    company: "Self Projects & Learning Experience",
    duration: "2025 – Present",
    description:
      "Gaining hands-on experience by building full-stack web applications and exploring modern web technologies within the MERN ecosystem.",
    achievements: [
      "Built multiple full-stack projects using MongoDB, Express.js, React.js, and Node.js",
      "Implemented RESTful APIs and secure authentication systems",
      "Integrated Socket.IO for real-time communication features",
      "Designed clean, responsive, and user-friendly interfaces",
      "Continuously improving through self-learning and open-source collaboration"
    ]
  }
],


  projects: [
    {
      id: 1,
      title: "LinkedIn Clone (MERN Stack)",
      description: "Developed a social networking platform with user authentication, profile creation, post sharing, likes, and comments.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      image: "/LinkedIn_Clone .jpg",
      githubLink: "https://github.com/Jyoti-patel707172/linkedin-clone",
      liveDemo: "https://linkedin-clone-frontend1.onrender.com"
    },
    {
      id: 2,
      title: "Chatly – Real-Time Chat Application",
      description: "Built a WhatsApp-like chat app with real-time messaging, online/offline indicators, typing status, and read receipts.",
      techStack: ["React.js", "Node.js", "Socket.IO", "MongoDB", "Redux"],
      image: "/Chatly.jpg",
      githubLink: "https://github.com/Jyoti-patel707172/Chat-appliaction.git",
      liveDemo: "https://chat-appliaction-frontend-yjgx.onrender.com"
    },
    {
      id: 3,
      title: "Virtual Assistant Web App",
      description: "Built an AI-powered virtual assistant with voice/text commands, reminders, and task automation.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Weather API"],
      image: "/Virtual_Assistant.jpg",
      githubLink: "https://github.com/Jyoti-patel707172/virtualAssistant.git",
      liveDemo: "https://virtualassistant-frontend-cfs0.onrender.com/"
    }
  ],

 achievements: [

  {
    title: "Full-Stack MERN Development",
    issuer: "Apna College",
    year: "2025",
    image: "/mern_fullstack.png",
    credentialId: "MERN-FULLSTACK-APNA-2025",
     skills: ["Full-Stack MERN Development","Web Development"]

  },
  
  {
    title: "Fundamentals of MERN Stack - SkillUp",
    issuer: "Simplilearn",
    year: "2025", 
    credentialId: "MERNSTACK-SKILLUP-2025",
    image: "/mern_stack_course.png", 
    verifyLink: "https://www.simplilearn.com/skillup-mern-stack-course",
     skills: ["MERN Stack","Web Development"]
  },
  {
    title: "AI Appreciate Badge - AI For All",
    issuer: "United Latino Students Association",
    year: "Jul 2025",
    credentialId: "U2FsdGVkX18xp1L2u3SM2es1L2a3S4heNSZxLp1L2u3SNyrlopi429VTPZdMak4e1Q2u3A4I",
    image: "/ai_appreciate_badge.png",
    verifyLink: "https://ai-for-all.in/#/badge?id=U2FsdGVkX18xp1L2u3SM2es1L2a3S4heNSZxLp1L2u3SNrylopi429VTPZdMak4e1Q2u3A4l",
  },
  {
    title: "Web Development Internship - Prodigy InfoTech",
    issuer: "Prodigy InfoTech",
    year: "Jul 2024",
    credentialId: "PRODWEBINT-JUL2024", // you can customize this
    image: "/prodigy_internship.png", // make sure this image exists in your project
    verifyLink: "https://lnkd.in/dHTGH3x7",
    skills: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "CSS Certification Test - YouTube Course",
    issuer: "Complete Coding by Prashant Sir",
    year: "08 February 2024",
    credentialId: "DH6HJCHF",
    image: "/css_certificate.jpg",
    verifyLink: "https://www.linkedin.com/feed/update/urn:li:activity-...",
    skills: ["HTML", "CSS"]
  },
  {
    title: "Digital Productivity - Certificate of Completion",
    issuer: "NIIT Foundation",
    year: "Jul 2024",
    credentialId: "NIIT-DP-2024",
    image: "/niit_digital_productivity.png", // add your certificate image in public/certificates
    verifyLink: "#",
    description: "This is to certify that Jyoti Patel has successfully completed the course Digital Productivity offered by NIIT Foundation on July 16, 2024.",
    skills: ["Digital Productivity"]
  },
  
]
};