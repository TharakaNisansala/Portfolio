import aiCareerImage from '../ai_carree_assistant.jpg'
import globalSalesImage from '../global_sale.jpg'
import laptopImage from '../laptop_price_prediction.png'
import busReservationImage from '../online_bus_seat.jpg'
import researchImage from '../Research_image.jpg'
import yummyUnionImage from '../yummy_union.jpg'

export const profile = {
  name: 'Tharaka Nisansala Balasooriya',
  shortName: 'Tharaka Balasooriya',
  title: 'Computer Science Graduate | AI & Agentic AI Development | Software Engineering',
  email: 'tbalasuriya2001@gmail.com',
  phone: '+94 70 571 8956',
  phoneHref: '+94705718956',
  linkedin: 'https://www.linkedin.com/in/tharaka-balasooriya-538890243/',
  github: 'https://github.com/TharakaNisansala',
  portfolio: 'https://portfolio-delta-three-tvsftvjont.vercel.app/',
  resume: '/Tharaka_Nisansala_Balasooriya.pdf',
  resumeFileName: 'Tharaka_Nisansala_Balasooriya_CV.pdf',
  intro: "I'm a Computer Science graduate with hands-on experience in full-stack development and AI-powered applications. Currently, I'm working on AI integration and intelligent application workflows while expanding my knowledge of Agentic AI, multi-agent systems, and LLM orchestration.",
}

export const now = {
  working: 'Full Stack Developer Intern at RAAHI, contributing to Izzy, an AI travel assistant',
  learning: 'LangGraph, LangChain & CrewAI',
}

export const about = {
  lead: 'Computer Science graduate building practical, AI-powered software, and moving steadily toward Agentic AI engineering.',
  paragraphs: [
    "I graduated with a B.Sc. (Honours) in Computer Science from the University of Jaffna and have worked across the full stack, from React and Next.js interfaces to Node.js, Express.js, and FastAPI backends. At RAAHI, I contribute to Izzy, an AI-powered travel assistant, where I work on Google Gemini API integration, retrieval, conversation workflows, and AI response validation.",
    "I'm especially interested in LLM applications, Agentic AI, and multi-agent systems. I'm currently learning LangGraph, LangChain, and CrewAI through hands-on practice: picking up a concept, building something small with it, and figuring out why it works.",
    "I learn quickly, adapt well, and enjoy working through problems on my own. Whatever I learn, I try to put into practice.",
  ],
}

export const qualities = ['Fast Learning', 'Analytical Thinking', 'Problem-Solving', 'Adaptability', 'Continuous Learning', 'Team Collaboration', 'Independent Learning', 'Technical Troubleshooting']

export type SkillLevel = 'professional' | 'practice' | 'learning'

export const skillLevels: { level: SkillLevel; label: string; description: string }[] = [
  { level: 'professional', label: 'Professional experience', description: 'Used in internship work' },
  { level: 'practice', label: 'Hands-on practice', description: 'Projects, research & self-study' },
  { level: 'learning', label: 'Currently learning', description: 'Actively exploring' },
]

type Skill = { name: string; level: SkillLevel }
const pro = (name: string): Skill => ({ name, level: 'professional' })
const practice = (name: string): Skill => ({ name, level: 'practice' })
const learning = (name: string): Skill => ({ name, level: 'learning' })

export const skillGroups: { label: string; items: Skill[] }[] = [
  { label: 'AI & Agentic AI', items: [pro('Google Gemini API'), pro('LLM Integration'), practice('Prompt Engineering'), practice('Machine Learning'), practice('Computer Vision'), practice('MediaPipe'), practice('LangGraph'), learning('LangChain'), learning('CrewAI')] },
  { label: 'Programming Languages', items: [pro('Python'), pro('JavaScript'), pro('TypeScript'), pro('SQL'), practice('Java'), practice('C'), practice('C++'), practice('PHP')] },
  { label: 'Frontend', items: [pro('React.js'), pro('Next.js'), pro('HTML5'), pro('CSS3'), practice('Vite')] },
  { label: 'Backend', items: [pro('Node.js'), pro('Express.js'), pro('FastAPI'), pro('REST APIs'), practice('Flask'), practice('GraphQL')] },
  { label: 'Databases', items: [pro('PostgreSQL'), practice('MySQL'), practice('Supabase')] },
  { label: 'Tools', items: [pro('Git'), pro('GitHub'), pro('Docker'), pro('VS Code'), practice('Jupyter Notebook')] },
  { label: 'Cloud', items: [learning('AWS')] },
]

export const experience = [
  {
    period: 'Jun 2026 — Present',
    role: 'Full Stack Developer Intern',
    company: 'RAAHI Inc.',
    location: 'Remote',
    current: true,
    highlight: 'Contributing to Izzy, an AI-powered travel assistant integrated with Google Gemini.',
    points: [
      'Develop and maintain web application features using React.js, JavaScript, and TypeScript.',
      'Contribute to backend functionality using Node.js and Express.js.',
      'Work on Izzy’s AI integration, information retrieval, conversation workflows, and response validation.',
      'Work on authenticated traveler and professional conversation experiences.',
      'Debug application issues and improve application reliability.',
      'Collaborate through Git and GitHub-based development workflows.',
    ],
    tags: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'Google Gemini API'],
  },
  {
    period: 'Mar 2026 — Aug 2026',
    role: 'AI Developer Intern',
    company: 'Thrimaa Interactive',
    location: 'Remote',
    current: false,
    points: [
      'Contributed to an AI Hotel Management System and an HR Management System.',
      'Worked on frontend and backend integration using Next.js, React.js, FastAPI, and PostgreSQL.',
      'Participated in debugging, functionality validation, and application improvements.',
      'Used Docker during development.',
    ],
    tags: ['Next.js', 'React.js', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
]

export type Project = {
  id: string
  title: string
  kind: string
  status?: string
  description: string
  contributionsLabel?: string
  contributions?: string[]
  tags: string[]
  image?: string
  links: { label: string; href: string; external?: boolean }[]
  note?: string
}

export const featuredProjects: Project[] = [
  {
    id: 'izzy',
    title: 'Izzy — AI-Powered Travel Assistant',
    kind: 'Professional · Team project at RAAHI',
    status: 'Ongoing',
    description: 'Izzy is an AI-powered travel assistant integrated into the RAAHI platform. It uses Google Gemini to support intelligent conversational experiences.',
    contributionsLabel: 'My contributions',
    contributions: ['Gemini API integration', 'AI response validation', 'Retrieval improvements', 'Conversation workflow development', 'Debugging and application reliability'],
    tags: ['Google Gemini API', 'Node.js', 'Express.js', 'Information Retrieval'],
    links: [{ label: 'Visit RAAHI', href: 'https://raahi.io/', external: true }],
    note: 'Izzy and the RAAHI platform are built by the RAAHI team; the work listed here is my contribution.',
  },
  {
    id: 'career',
    title: 'AI Career Assistant',
    kind: 'Personal project',
    description: 'An AI-powered career assistance application designed to support job-search and application workflows. I worked on frontend functionality, backend services, API integration, and database connectivity.',
    tags: ['React.js', 'TypeScript', 'Vite', 'Node.js', 'Express.js', 'Supabase'],
    image: aiCareerImage,
    links: [
      { label: 'Live demo', href: 'https://ai-career-assistant-frontend-coral.vercel.app/', external: true },
      { label: 'GitHub', href: 'https://github.com/TharakaNisansala/AI-Career-Assistant', external: true },
    ],
  },
  {
    id: 'agentic',
    title: 'Agentic AI — Learning & Practical Exploration',
    kind: 'Learning in progress',
    status: 'Learning',
    description: 'An ongoing learning journey focused on understanding and implementing intelligent AI agents using modern agentic frameworks.',
    contributionsLabel: 'Topics I’m exploring',
    contributions: ['LLM application development', 'Agent workflows', 'Graph-based orchestration', 'State management', 'Nodes and edges', 'Tool integration', 'Role-based agents', 'Multi-agent collaboration', 'Task orchestration'],
    tags: ['Python', 'LangChain', 'LangGraph', 'CrewAI'],
    links: [],
    note: 'Hands-on exercises and experiments, not production work.',
  },
  {
    id: 'javelin',
    title: 'Javelin Throw Technique Classification',
    kind: 'Undergraduate research',
    description: 'A computer vision and machine learning research project focused on classifying javelin throwing techniques using pose estimation and movement data.',
    tags: ['Python', 'MediaPipe', 'Computer Vision', 'Machine Learning'],
    image: researchImage,
    links: [
      { label: 'GitHub', href: 'https://github.com/TharakaNisansala/javelin-throw-technique-classification', external: true },
      { label: 'Research details', href: '#research' },
    ],
  },
  {
    id: 'yummy',
    title: 'Yummy Union — Web Application',
    kind: 'Academic project',
    description: 'A database-driven recipe sharing web application with user registration, login, recipe browsing, and recipe submission.',
    tags: ['PHP', 'MySQL', 'HTML5', 'CSS3'],
    image: yummyUnionImage,
    links: [{ label: 'GitHub', href: 'https://github.com/TharakaNisansala/Yummy_Union', external: true }],
  },
]

export const otherProjects = [
  { title: 'Laptop Price Prediction', description: 'A regression model and web interface that predicts laptop prices from specifications such as brand, RAM, CPU, storage, GPU, and screen size.', tags: ['Python', 'Machine Learning', 'Regression'], image: laptopImage, github: 'https://github.com/TharakaNisansala/LaptopPricePrediction' },
  { title: 'Global Sales & Profit Analysis', description: 'Interactive Power BI dashboards built from 10,000+ sales records, surfacing KPI performance, regional trends, category insights, and profitability.', tags: ['Power BI', 'Data Analysis', 'Data Visualization'], image: globalSalesImage, github: 'https://github.com/TharakaNisansala/Global-Sales-Profit-Analysis-Dashboard-' },
  { title: 'Online Bus Seat Reservation', description: 'Modular Python console application for seat booking, payment and ticket generation, authentication, and SQLite database integration.', tags: ['Python', 'OOP', 'SQLite'], image: busReservationImage, github: 'https://github.com/TharakaNisansala/Online-Bus-Seat-Reservation-System-Using-Python' },
]

export const research = {
  title: 'AI-Based Computer Vision Framework for Classifying Correct and Incorrect Javelin Throw Techniques',
  github: 'https://github.com/TharakaNisansala/javelin-throw-technique-classification',
  stats: [['97.48%', 'accuracy'], ['270', 'videos'], ['33,923', 'frames'], ['24', 'features']],
  points: [
    'Designed a markerless computer vision framework using standard video recordings, removing the need for expensive motion-capture equipment.',
    'Built a dataset of 270 annotated videos spanning approach run, withdrawal, cross-step, delivery, and follow-through phases.',
    'Used MediaPipe Pose to extract 33 body landmarks per frame and engineered biomechanical features for joint angles, velocity, and motion trajectories.',
    'Benchmarked LSTM, BiLSTM, GRU, BiGRU, and ConvLSTM sequence models; BiLSTM achieved 84.5% accuracy and 83.7% F1-score.',
    'Deployed a Random Forest production classifier with 97.48% accuracy, 97.61% precision, 97.48% recall, and 97.48% F1-score.',
    'Built a Flask web application for video upload, pose visualization, technique classification, and actionable feedback, evaluated with confusion matrix, ROC-AUC, and Precision-Recall analysis.',
  ],
  tags: ['Python', 'MediaPipe Pose', 'TensorFlow / Keras', 'Scikit-learn', 'OpenCV', 'Flask'],
}

export const education = { degree: 'B.Sc. (Honours) in Computer Science', institution: 'University of Jaffna, Sri Lanka', year: '2026' }

export const certifications = ['Front-End Web Development — University of Moratuwa', 'Introduction to Data Science — Cisco Networking Academy', 'Python Essentials 1 — Cisco Networking Academy']
