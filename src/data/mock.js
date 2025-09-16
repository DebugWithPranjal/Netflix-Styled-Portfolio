// Mock LinkedIn-style software development projects data
export const mockProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      longDescription: "Built a comprehensive e-commerce platform from scratch using modern web technologies. The frontend is developed with React and Redux for state management, while the backend uses Node.js with Express framework. MongoDB serves as the database with Mongoose ODM. Integrated Stripe for secure payment processing and implemented JWT authentication. The platform includes features like product catalog, shopping cart, order tracking, user profiles, and a comprehensive admin panel for inventory and order management.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe", "JWT"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      demoUrl: "https://demo-ecommerce.example.com",
      githubUrl: "https://github.com/username/ecommerce-platform",
      featured: true,
      completedDate: "2024-03-15"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      longDescription: "Developed a comprehensive task management application inspired by Trello and Asana. The application features real-time collaboration using Socket.io, drag-and-drop task organization with React Beautiful DND, and a responsive design that works seamlessly across devices. Users can create projects, assign tasks, set deadlines, and track progress through various stages. The backend is built with Node.js and PostgreSQL, ensuring data consistency and reliability.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Material-UI", "JWT"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      demoUrl: "https://demo-taskmanager.example.com",
      githubUrl: "https://github.com/username/task-manager",
      featured: true,
      completedDate: "2024-02-20"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, charts, and weather alerts using OpenWeatherMap API.",
      longDescription: "Created an intuitive weather dashboard that provides comprehensive weather information including current conditions, 5-day forecasts, and severe weather alerts. The application uses the OpenWeatherMap API to fetch real-time weather data and presents it through interactive charts using Chart.js. Features include geolocation support, city search, temperature unit conversion, and responsive design optimized for both desktop and mobile devices.",
      technologies: ["React", "Chart.js", "OpenWeatherMap API", "CSS3", "Local Storage"],
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      demoUrl: "https://demo-weather.example.com",
      githubUrl: "https://github.com/username/weather-dashboard",
      featured: false,
      completedDate: "2024-01-10"
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "Microservices API gateway with rate limiting, authentication, load balancing, and monitoring capabilities.",
      longDescription: "Designed and implemented a robust API gateway service to manage microservices communication. The gateway handles authentication, rate limiting, request routing, load balancing, and provides comprehensive monitoring and logging capabilities. Built with Node.js and Redis for caching, it supports both REST and GraphQL APIs. The service includes circuit breaker patterns for fault tolerance and integrates with monitoring tools like Prometheus and Grafana for observability.",
      technologies: ["Node.js", "Redis", "Docker", "Kubernetes", "Prometheus", "GraphQL"],
      category: "Backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      demoUrl: null,
      githubUrl: "https://github.com/username/api-gateway",
      featured: true,
      completedDate: "2024-04-05"
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "Multi-room chat application with file sharing, emoji reactions, user presence indicators, and message encryption.",
      longDescription: "Built a feature-rich real-time chat application supporting multiple chat rooms, private messaging, and group conversations. The application includes advanced features like file sharing, emoji reactions, typing indicators, user presence status, and end-to-end message encryption. The frontend is built with React and TypeScript, while the backend uses Node.js with Socket.io for real-time communication. MongoDB stores chat history and user data with proper indexing for optimal performance.",
      technologies: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB", "Crypto-js"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
      demoUrl: "https://demo-chat.example.com",
      githubUrl: "https://github.com/username/chat-app",
      featured: false,
      completedDate: "2023-12-18"
    },
    {
      id: 6,
      title: "Machine Learning Model API",
      description: "RESTful API serving trained ML models for image classification with automated model versioning and A/B testing.",
      longDescription: "Developed a production-ready API service for deploying and serving machine learning models. The service supports multiple model versions, A/B testing capabilities, and automated model updates. Built with Flask and integrated with TensorFlow Serving, it provides endpoints for image classification, sentiment analysis, and recommendation systems. The API includes comprehensive monitoring, logging, and performance metrics collection. Docker containerization ensures consistent deployment across environments.",
      technologies: ["Python", "Flask", "TensorFlow", "Docker", "PostgreSQL", "Redis"],
      category: "Backend",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      demoUrl: null,
      githubUrl: "https://github.com/username/ml-api",
      featured: false,
      completedDate: "2024-01-25"
    }
  ];
  
  export const mockSkills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "MongoDB", "PostgreSQL", 
    "Docker", "Kubernetes", "AWS", "Git", "GraphQL", "Redux", "Express", "Flask",
    "TensorFlow", "Socket.io", "Redis", "Microservices", "REST APIs"
  ];
  
  export const mockExperience = [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description: "Lead development of enterprise web applications using React, Node.js, and cloud technologies. Mentor junior developers and architect scalable solutions."
    },
    {
      id: 2,
      company: "Digital Solutions Co.",
      position: "Software Developer",
      duration: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software solutions."
    },
    {
      id: 3,
      company: "StartupX",
      position: "Junior Developer",
      duration: "2019 - 2020",
      description: "Built responsive web applications and contributed to the development of core platform features. Gained experience in agile development methodologies."
    }
  ];
  
  export const categories = ["All", "Full Stack", "Frontend", "Backend"];