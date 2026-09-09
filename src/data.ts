import aiCareerImage from '../ai_carree_assistant.jpg'
import globalSalesImage from '../global_sale.jpg'
import laptopImage from '../laptop_price_prediction.png'
import busReservationImage from '../online_bus_seat.jpg'
import researchImage from '../Research_image.png'
import yummyUnionImage from '../yummy_union.jpg'

export const profile = {
  name: 'Tharaka Nisansala Balasooriya',
  shortName: 'Tharaka Balasooriya',
  title: 'Associate Software Engineer',
  subtitle: 'Computer Science Graduate',
  email: 'tbalasuriya2001@gmail.com',
  phone: '+94 70 571 8956',
  linkedin: 'https://www.linkedin.com/in/tharaka-balasooriya-538890243/',
  github: 'https://github.com/TharakaNisansala',
  resume: '/Tharaka_Balasooriya.pdf',
  summary: 'Computer Science graduate with a strong foundation in object-oriented programming and hands-on experience across full-stack development, REST API design, database-driven applications, and AI/LLM-powered features using React.js, TypeScript, Node.js, Express.js, Python, and SQL.',
}

export const skillGroups = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'C', 'PHP', 'OOP'] },
  { label: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'GraphQL'] },
  { label: 'Data & AI', items: ['MySQL', 'PostgreSQL', 'SQL', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Pose Estimation', 'LLM Integration', 'AI Applications'] },
  { label: 'ML Stack', items: ['TensorFlow / Keras', 'Scikit-learn', 'OpenCV', 'MediaPipe', 'NumPy', 'Pandas'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Jupyter Notebook', 'Agile'] },
]

export const experience = [
  { period: 'Jun 2026 — Present', role: 'Full Stack Developer Intern', company: 'RAAHI', location: 'Remote', points: ['Develop full-stack features with React.js, TypeScript, Node.js, and Express.js', 'Design and integrate REST APIs', 'Implement AI-powered chatbot functionality', 'Debug, test, and contribute through Git-based code reviews'] },
  { period: 'Mar 2026 — Aug 2026', role: 'Intern — AI Developer', company: 'Thrimaa Interactive (Pvt) Ltd.', location: 'Remote', points: ['Contributed to AI components of a Hotel Management System and Olympus HRM', 'Supported AI-powered feature integration', 'Worked in a cross-functional remote team'] },
]

export const projects = [
  { number: '01', title: 'AI Career Assistant Platform', description: 'A full-stack career companion for resume analysis, ATS scoring, job matching, skill-gap detection, and AI interview preparation with feedback.', tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Groq API'], image: aiCareerImage, demo: 'https://ai-career-assistant-frontend-coral.vercel.app/', github: 'https://github.com/TharakaNisansala/AI-Career-Assistant' },
  { number: '02', title: 'Javelin Technique Classification', description: 'A full-stack AI research system that classifies correct versus incorrect javelin throwing technique from ordinary video, with pose visualization and actionable feedback.', tags: ['Computer Vision', 'Deep Learning', 'Pose Estimation', 'Flask', 'Sports Analytics'], image: researchImage },
  { number: '03', title: 'Laptop Price Prediction', description: 'A regression model and web interface that predicts laptop prices from specifications such as brand, RAM, CPU, storage, GPU, and screen size.', tags: ['Python', 'Machine Learning', 'Data Science', 'Regression'], image: laptopImage, github: 'https://github.com/TharakaNisansala/LaptopPricePrediction' },
  { number: '04', title: 'Global Sales & Profit Analysis', description: 'Interactive Power BI dashboards built from 10,000+ sales records, surfacing KPI performance, regional trends, category insights, and profitability.', tags: ['Power BI', 'Data Analysis', 'Data Visualization'], image: globalSalesImage, github: 'https://github.com/TharakaNisansala/Global-Sales-Profit-Analysis-Dashboard-' },
  { number: '05', title: 'Online Bus Seat Reservation', description: 'Modular Python console application for seat booking, payment and ticket generation, authentication, and SQLite database integration.', tags: ['Python', 'OOP', 'SQLite', 'Database Design'], image: busReservationImage, github: 'https://github.com/TharakaNisansala/Online-Bus-Seat-Reservation-System-Using-Python' },
  { number: '06', title: 'Yummy Union', description: 'Database-driven recipe sharing platform with 200+ recipes and 50+ users, including authentication, CRUD workflows, and content management.', tags: ['PHP', 'MySQL', 'HTML5', 'CSS3'], image: yummyUnionImage, github: 'https://github.com/TharakaNisansala/Yummy_Union' },
]

export const research = {
  title: 'AI-Based Computer Vision Framework for Classifying Correct and Incorrect Javelin Throw Techniques',
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

export const certifications = ['Front-End Web Development — University of Moratuwa', 'Introduction to Data Science — Cisco Networking Academy', 'Python Essentials 1 — Cisco Networking Academy']