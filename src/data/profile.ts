import { Profile } from "@/types";

export const profileData: Profile = {
  name: "Pal Patel",
  initials: "PP",
  headlineRole: "Web Developer",
  subRole: "MCA Student & Aspiring Software Developer",
  college: "UKA Tarsadia University",
  education: "MCA",
  location: "Valsad, Gujarat, India",
  city: "Valsad",
  country: "India",
  timezone: "Asia/Kolkata",
  timezoneAbbr: "IST (UTC+5:30)",
  availability: "Open to internships & entry-level opportunities",
  availableForHire: true,
  yearsOfExperience: "Fresher",
  stats: [
    { label: "Projects Completed", value: "5+" },
    { label: "Research Papers", value: "1" },
    { label: "Certifications", value: "1" },
    { label: "Technologies Used", value: "10+" },
  ],
  email: "palpatel.dev@gmail.com",
  github: "https://github.com/palptl1503-ctrl",
  linkedin: "https://www.linkedin.com/in/pal-patel-3a6712447",
  x: "https://x.com/palpatel_dev",
  instagram: "https://www.instagram.com/pall_patel_1513",
  resumeUrl: "/resume.pdf",
  bio: "I'm Pal Patel, an MCA student at UKA Tarsadia University in Valsad, Gujarat. I enjoy building websites and learning new technologies. I've worked on projects ranging from web apps to deep learning research.",
  fullBio: [
    "Hey, I'm Pal Patel from Valsad, Gujarat. I'm currently pursuing my MCA at UKA Tarsadia University. I got into coding during my college years and have been hooked ever since.",
    "So far I've built 5+ projects including web applications, a deep learning research paper on Indian currency note classification, and an N-MART retail project. I like working with React, Next.js, Python, and related tools.",
    "I'm always looking to learn something new and take on interesting challenges. When I'm not coding, you'll usually find me exploring new tech or working on ideas for my next project.",
  ],
  focusAreas: [
    {
      title: "Web Development",
      description:
        "Building responsive websites and web applications using React, Next.js, HTML, CSS, and JavaScript.",
      iconName: "Cpu",
    },
    {
      title: "Machine Learning",
      description:
        "Exploring deep learning and computer vision — published a research paper on Indian currency note classification using CNNs.",
      iconName: "Sparkles",
    },
    {
      title: "Problem Solving",
      description:
        "Enjoy solving real-world problems through code, from retail management systems to image recognition projects.",
      iconName: "Cloud",
    },
  ],
  idCard: {
    idNumber: "PP-2026-X9",
    specialization: "Web Development & ML",
    issuedYear: "2026",
    status: "ACTIVE // AVAILABLE",
  },
};
