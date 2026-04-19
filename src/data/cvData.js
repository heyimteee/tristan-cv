import photo from '../assets/images/ktm-photo.jpg'

const cv = {
  name: 'Tristan Al Harrish Basori',
  nim: '245150407141002',
  title: 'Information Systems Student, Brawijaya University',
  location: 'Malang, East Java, Indonesia',
  phone: '+62 811-7705-636',
  email: 'trstnalharrish@gmail.com',
  links: {
    github: 'https://github.com/heyimteee',
    linkedin: 'https://www.linkedin.com/in/tristanbasori?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    email: 'mailto:trstnalharrish@gmail.com'
  },
  photo,
  summary:
    'Information Systems student with experience in front-end engineering, full-stack AI products, and Go-based systems. Focused on clean architecture, performance, and polished user experience.',
  education: [
    {
      institution: 'Brawijaya University',
      place: 'Malang, Indonesia',
      degree: 'Computer Science, Information System',
      period: '2024 - Present',
      detail:
        'GPA 3.91/4. Relevant coursework: Advanced Programming, Web Programming, SQL Programming, Database Design, Data Security & Privacy, Cloud Computing & Networking, and AI-Based Information Systems.'
    },
    {
      institution: 'Universiti Tun Hussein Onn Malaysia',
      place: 'Johor, Malaysia',
      degree: 'Computer Science - Student Exchange Program',
      period: '2025 (1 Semester)',
      detail:
        'Relevant coursework: Network & Cyber Security, User Experience Design, Project Management Fundamentals, and Professional Ethics.'
    }
  ],
  experiences: [
    {
      role: 'Front-End Developer',
      org: 'BCC (Basic Computing Community)',
      period: '2024 - Present',
      points: [
        'Specialized in mobile and web front-end development using scalable clean architecture and seamless API integration across teams.',
        'Contributed as a technical interviewer for the 2026 open recruitment cycle, evaluating 50+ applicants and mentoring one junior developer.',
        'Bridged design and engineering by creating high-quality visual content for BCC social media while preserving design fidelity in product implementation.'
      ]
    },
    {
      role: 'Front-End Developer',
      org: 'BRACIATE - Student Executive Organization',
      period: '2025',
      points: [
        'Developed a high-traffic voting platform for 4,000+ active users with 100% stability during a live event.',
        'Built a real-time data visualization dashboard by integrating 5+ backend APIs and responsive UI animations.',
        'Optimized deployment on Vercel with a custom domain to ensure low-latency cross-device access.'
      ]
    }
  ],
  projects: [
    {
      role: 'Grawl',
      org: 'Tech Stack: Golang',
      period: 'Project',
      points: [
        'Engineered a concurrent web crawler with worker pools and channels to index 1,000+ unique links.',
        'Implemented mutex-backed deduplication to reduce redundant crawls and cut memory overhead by approximately 30-40%.',
        'Integrated robots.txt compliance, rate limiting, and a Homebrew tap for production-grade reliability.'
      ]
    },
    {
      role: 'Taski',
      org: 'Tech Stack: Golang',
      period: 'Project',
      points: [
        'Built a robust CLI task manager in Go with full CRUD flow and a flag-based interface with sub-millisecond operations.',
        'Designed a JSON persistence layer with a 30-day soft delete mechanism and a dedicated restore flow for full recoverability.',
        'Implemented monthly automated data lifecycle cleanup while maintaining high availability for active tasks.'
      ]
    },
    {
      role: 'NOTIN',
      org: 'Next.js, TypeScript, FastAPI, MySQL, Gemini API',
      period: 'Project',
      points: [
        'Architected and deployed a full-stack AI product that automates long-form summarization, reducing manual note-taking time by up to 80%.',
        'Delivered 100% of the MVP scope in a 4-week sprint, from MySQL schema design to front-end deployment.',
        'Built multimodal parsing for PDF files <= 1 MB and YouTube transcripts <= 2 hours into structured notes.'
      ]
    }
  ],
  skills: [
    {
      category: 'Languages',
      items: 'Go, TypeScript/JavaScript, PHP, Python, SQL'
    },
    {
      category: 'Back-End & Systems',
      items: 'Concurrency (Worker Pools, Channels), RESTful APIs, FastAPI, CLI Tooling'
    },
    {
      category: 'Front-End & Mobile',
      items: 'Next.js, React, TailwindCSS, Flutter (Clean Architecture), State Management'
    },
    {
      category: 'Databases & Tools',
      items: 'MySQL, PostgreSQL, JSON Serialization, Git/GitHub, Docker, Vercel, Railway'
    },
    {
      category: 'Languages',
      items: 'English (Bilingual), Indonesian (Native)'
    }
  ]
}

export default cv
