import { NextResponse } from "next/server"

const portfolioData = {
  me: {
    name: "Asma MESTAYSSER",
    title: "AI Engineer & Computer Engineering Student",
    bio: "I'm Asma Mestaysser, a final-year computer engineering student and AI engineer passionate about turning ideas into real-world solutions. I enjoy exploring challenges from different angles, experimenting, and designing systems that are both intelligent and practical. Awarded multiple times for excellence — including the Silver Prize at Talan SummerCamp 2025, recognition as a Success Story by IPEIB in 2024, and active involvement in the Program Committee of the ENICarthage Enterprise Forum (2023 & 2024).",
    imageUrl: "/images/avatar.png",
    timeline: [
      {
        year: "2021",
        title: "Baccalaureate in Experimental Sciences",
        organization: "Remada, Tataouine",
        description: "Graduated with honors",
        type: "education" as const,
      },
      {
        year: "2021-2023",
        title: "Preparatory Diploma in Physics and Chemistry",
        organization: "IPEIB - Bizerte",
        description: "Recognized as Success Story IPEIB 2024",
        type: "education" as const,
      },
      {
        year: "2023-Present",
        title: "Computer Engineering Student",
        organization: "ENICarthage",
        description: "Specializing in AI and Machine Learning",
        type: "education" as const,
      },
      {
        year: "March-April 2025",
        title: "Machine Learning Intern",
        organization: "CodeAlpha (Remote)",
        description: "Developed real-time speech emotion detection model using CNN+LSTM",
        type: "experience" as const,
      },
      {
        year: "July-August 2025",
        title: "AI Consultant Intern",
        organization: "Talan Tunisia Consulting",
        description: "Built AURA, an AI-powered RFP analysis platform. Won Silver Prize at SummerCamp Hackathon 2025",
        type: "experience" as const,
      },
    ],
  },
  projects: [
    {
      id: "project-aura",
      name: "AURA - AI-powered Unified RFP Answering System",
        "description": "𝐀𝐔𝐑𝐀 is an intelligent system designed to 𝐜𝐫𝐞𝐚𝐭𝐞 𝐚 𝐥𝐢𝐛𝐫𝐚𝐫𝐲 𝐨𝐟 𝐫𝐞𝐮𝐬𝐚𝐛𝐥𝐞 𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧 𝐦𝐨𝐝𝐮𝐥𝐞𝐬 derived from the analysis of past 𝐑𝐞𝐪𝐮𝐞𝐬𝐭 𝐟𝐨𝐫 𝐏𝐫𝐨𝐩𝐨𝐬𝐚𝐥𝐬 (𝐑𝐅𝐏s).\n\nThe goal is to 𝐩𝐮𝐭 𝐦𝐨𝐝𝐮𝐥𝐞𝐬 𝐨𝐧 𝐭𝐡𝐞 𝐬𝐡𝐞𝐥𝐟 — pre-packaged, ready-to-use components that accelerate and optimize future proposal generation. The platform leverages advanced AI to:\n\n✅ 𝐈𝐝𝐞𝐧𝐭𝐢𝐟𝐲 𝐫𝐞𝐜𝐮𝐫𝐫𝐢𝐧𝐠 𝐩𝐚𝐭𝐭𝐞𝐫𝐧𝐬 across RFPs (requirements, constraints, key functionalities).\n✅ 𝐀𝐧𝐚𝐥𝐲𝐳𝐞 𝐩𝐚𝐬𝐭 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐞𝐬 (both successful and rejected) to uncover organizational strengths and weaknesses.\n✅ 𝐔𝐧𝐝𝐞𝐫𝐬𝐭𝐚𝐧𝐝 𝐰𝐢𝐧/𝐥𝐨𝐬𝐬 𝐟𝐚𝐜𝐭𝐨𝐫𝐬 and continuously refine future RFP responses.\n✅ 𝐂𝐨𝐦𝐩𝐚𝐫𝐞 𝐑𝐅𝐏𝐬 to detect commonalities and divergences between client needs and proposed solutions.\n✅ 𝐌𝐨𝐝𝐞𝐫𝐧𝐢𝐳𝐞 𝐚𝐧𝐝 𝐚𝐝𝐚𝐩𝐭 𝐞𝐱𝐢𝐬𝐭𝐢𝐧𝐠 𝐦𝐨𝐝𝐮𝐥𝐞𝐬 to align with evolving market demands.\n\nBefore responding to new RFPs, AURA can:\n✅ Analyze client requirements and 𝐦𝐚𝐭𝐜𝐡 𝐭𝐡𝐞𝐦 𝐰𝐢𝐭𝐡 𝐢𝐧𝐭𝐞𝐫𝐧𝐚𝐥 𝐜𝐚𝐩𝐚𝐛𝐢𝐥𝐢𝐭𝐢𝐞𝐬.\n✅ Assess the 𝐚𝐯𝐚𝐢𝐥𝐚𝐛𝐢𝐥𝐢𝐭𝐲 𝐨𝐟 𝐞𝐱𝐩𝐞𝐫𝐭𝐢𝐬𝐞 or the need for targeted recruitment.\n✅ Identify 𝐫𝐞𝐥𝐞𝐯𝐚𝐧𝐭 𝐫𝐞𝐟𝐞𝐫𝐞𝐧𝐜𝐞𝐬 𝐨𝐫 𝐩𝐚𝐬𝐭 𝐩𝐫𝐨𝐣𝐞𝐜𝐭𝐬 to enhance proposal credibility.\n\nIn essence, 𝐀𝐔𝐑𝐀 acts as an 𝐢𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐭 𝐨𝐫𝐠𝐚𝐧𝐢𝐳𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐦𝐞𝐦𝐨𝐫𝐲, mining historical data to make RFP responses 𝐟𝐚𝐬𝐭𝐞𝐫, 𝐬𝐦𝐚𝐫𝐭𝐞𝐫, 𝐚𝐧𝐝 𝐦𝐨𝐫𝐞 𝐜𝐨𝐧𝐬𝐢𝐬𝐭𝐞𝐧𝐭 — improving quality, agility, and profitability.",

      technologies: [
        "Python",
        "LangGraph",
        "LangChain",
        "RAG",
        "MuRAG",
        "FAISS",
        "Claude",
        "Zephyr-7B",
        "DeepSeek",
        "A2A",
        "MCP",
        "React",
        "Docker",
      ],
      githubLink: "",
      demoLink: "https://drive.google.com/file/d/1z4G3VgCuytQ9_839O7aNsm3Nra9kS1GA/view?usp=sharing",
      imageUrl: [
        "/projects/Aura/aura-preview.png",
        "/projects/Aura/aura-screenshot-1.png",
        "/projects/Aura/aura-screenshot-2.png",
        "/projects/Aura/aura-screenshot-3.png",
        "/projects/Aura/aura-screenshot-4.png",
        "/projects/Aura/aura-screenshot-5.png",
        "/projects/Aura/aura-screenshot-6.png",
        "/projects/Aura/aura-screenshot-7.png",
      ],
      details:
        "",
    },
    {
      id: "project-airline-bot",
      name: "Customer Support Bot for Airline Travel",
      description:
        "Designed and implemented an intelligent customer support bot tailored for the airline industry. The system assists users with flight bookings, hotel reservations, car rentals, and excursions by orchestrating specialized workflows. Using multi-agent orchestration and Generative AI, the bot ensures seamless interactions, robust state management, and secure task execution, providing a smooth and reliable user experience.\n\n𝐊𝐞𝐲 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧𝐬:\n\n✅ Multi-agent orchestration to delegate tasks across specialized workflows\n✅ Interrupts and checkpointing for robust state management\n✅ Integration of “safe tools” for secure and compliant execution\n✅ Leveraging Generative AI (LLMs) to enhance automation and user experience." ,
      technologies: ["Python", "LangChain", "LangGraph", "Claude LLM", "Tavily API", "SQLite"],
      githubLink: "https://github.com/asmamest/Customer-Support-for-Airline-Travel.git",
      demoLink: "",
      imageUrl: ["/projects/airlinebot/airline-bot-preview.png",
        "/projects/airlinebot/part-1-diagram.png",
        "/projects/airlinebot/part-2-diagram.png",
        "/projects/airlinebot/part-3-diagram.png",
        "/projects/airlinebot/part-4-diagram.png",

      ],
      details:
        "",
    },
    {
      id: "project-3d-generator",
      name: "3D Model Generator – AI-Powered 3D Asset Creation",
      description:
        "𝐀 𝐰𝐞𝐛-𝐛𝐚𝐬𝐞𝐝 𝐚𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐭𝐡𝐚𝐭 𝐮𝐬𝐞𝐬 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐢𝐯𝐞 𝐀𝐈 𝐚𝐧𝐝 𝐋𝐚𝐫𝐠𝐞 𝐋𝐚𝐧𝐠𝐮𝐚𝐠𝐞 𝐌𝐨𝐝𝐞𝐥𝐬 (𝐋𝐋𝐌𝐬) 𝐭𝐨 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐜𝐚𝐥𝐥𝐲 𝐠𝐞𝐧𝐞𝐫𝐚𝐭𝐞 𝐢𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐯𝐞 3𝐃 𝐦𝐨𝐝𝐞𝐥𝐬 𝐟𝐫𝐨𝐦 𝐬𝐢𝐦𝐩𝐥𝐞 𝐭𝐞𝐱𝐭 𝐩𝐫𝐨𝐦𝐩𝐭𝐬 𝐨𝐫 𝐢𝐦𝐚𝐠𝐞 𝐢𝐧𝐩𝐮𝐭𝐬.\n\nThe project explores how recent advancements in 𝐀𝐈, 𝐍𝐋𝐏, and 𝐆𝐞𝐧𝐀𝐈 pipelines can simplify and democratize 3D content creation — making it accessible to users without technical design skills.\n\n𝐊𝐞𝐲 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬:\n• Natural Language Understanding to semantically interpret user prompts\n• Integration with 𝐇𝐲𝐩𝐞𝐫3𝐃 𝐑𝐨𝐝𝐢𝐧 𝐀𝐏𝐈 for 𝐩𝐫𝐨𝐦𝐩𝐭-𝐭𝐨-3𝐃 generation\n• Downloadable 3D assets in GLB, OBJ, USDZ and other industry formats\n• Fully interactive 3D preview powered by 𝐑𝐞𝐚𝐜𝐭 𝐓𝐡𝐫𝐞𝐞 𝐅𝐢𝐛𝐞𝐫\n• Prompt-based quality configuration and material options.",
      technologies: [
        "Python",
        "Generative AI",
        "LLM (Gemini-2.5-pro)",
        "NLP",
        "React.js",
        "Next.js",
        "React Three Fiber",
        "Hyper3D Rodin API",
      ],
      githubLink: "https://github.com/asmamest/3D_Generator_System.git",
      demoLink: "https://3-d-generator-system.vercel.app/",
      imageUrl: ["/projects/3dgenerator/3d-generator-preview.png",
        "/projects/3dgenerator/3d-generator-screenshot-1.png",
        "/projects/3dgenerator/3d-generator-screenshot-2.png",
      ],
      details:
        "",
    },
    {
      id: "project-fault-diagnosis",
      name: "Process Fault Diagnosis",
      description:
        "Developed and evaluated multiple supervised machine learning models to diagnose faults in the Tennessee Eastman Process, a benchmark for chemical process fault detection.\n\n✅ Conducted extensive Exploratory Data Analysis (EDA)\n✅ Trained and tuned models: XGBoost, Neural Network, 1D CNN, LSTM\n✅ Designed a hybrid ANN + Random Forest model for enhanced performance\n✅ Achieved up to 94.3% accuracy for complex fault classification\n\nFocused on predictive maintenance for industrial and oil & gas sectors.",
      technologies: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "XGBoost",
        "1D CNN",
        "LSTM",
        "ANN + Random Forest",
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Keras",
      ],
      githubLink: "https://github.com/asmamest/Predicting-Failures-in-the-Tennessee-Eastman-Industrial-Process.git",
      demoLink: "",
      imageUrl: ["/projects/fault-diagnosis-preview.png",
        "/projects/fault-diagnosis-preview-screenshot-1.png",
      ],
      details:
        "",
    },
    {
      id: "project-football-analysis",
      name: "AI-Powered Football Analysis System",
      description:
        "Developed an advanced football analysis system leveraging 𝐦𝐚𝐜𝐡𝐢𝐧𝐞 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠, 𝐜𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐯𝐢𝐬𝐢𝐨𝐧, and 𝐝𝐞𝐞𝐩 𝐥𝐞𝐚𝐫𝐧𝐢𝐧𝐠. The system integrates cutting-edge technologies to detect, track, and analyze players, referees, and the ball in real time.\n\n𝐊𝐞𝐲 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬:\n• 𝐘𝐎𝐋𝐎 𝐎𝐛𝐣𝐞𝐜𝐭 𝐃𝐞𝐭𝐞𝐜𝐭𝐢𝐨𝐧: Used to identify players, referees, and footballs with state-of-the-art accuracy.\n• 𝐂𝐮𝐬𝐭𝐨𝐦 𝐎𝐛𝐣𝐞𝐜𝐭 𝐃𝐞𝐭𝐞𝐜𝐭𝐨𝐫: Trained on football-specific datasets to enhance detection accuracy.\n• 𝐓𝐞𝐚𝐦 𝐀𝐬𝐬𝐢𝐠𝐧𝐦𝐞𝐧𝐭: Implemented K-Means clustering for team classification based on t-shirt colors.\n• 𝐂𝐚𝐦𝐞𝐫𝐚 𝐌𝐨𝐭𝐢𝐨𝐧 𝐀𝐝𝐣𝐮𝐬𝐭𝐦𝐞𝐧𝐭: Used optical flow for compensating camera movement, enabling accurate player tracking.\n• 𝐑𝐞𝐚𝐥-𝐖𝐨𝐫𝐥𝐝 𝐌𝐞𝐚𝐬𝐮𝐫𝐞𝐦𝐞𝐧𝐭: Applied perspective transformation to measure player movement in meters, not pixels.\n• 𝐒𝐩𝐞𝐞𝐝 & 𝐃𝐢𝐬𝐭𝐚𝐧𝐜𝐞 𝐌𝐞𝐭𝐫𝐢𝐜𝐬: Calculated player speed and total distance covered during a match.",
      technologies: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "YOLO",
        "OpenCV",
        "K-Means Clustering",
        "Optical Flow",
      ],
      githubLink: "https://github.com/asmamest/ML-Football-Analysis",
      demoLink: "https://drive.google.com/file/d/1AH48MNA6PNG3RhkVG-8rxfXSsaEq37un/view?usp=sharing",
      imageUrl: ["/projects/football-analysis-preview.png",
        "/projects/football-analysis-screenshot-1.png",
      ],
      details:
        "",
    },
    {
      id: "project-breast-cancer",
      name: "Breast Cancer Predictor",
      description:
        "Developed an AI-powered web application called Breast Cancer Predictor to assist in the early detection of breast cancer. Using a logistic regression model, the application predicts whether a cell cluster is benign or malignant with an accuracy of 97.36%. The app features interactive visualizations created with Plotly, allowing users to explore the data and predictions intuitively. Built with Python and deployed on Streamlit Cloud, this project combines machine learning and web development to provide an accessible tool for breast cancer awareness, particularly during Breast Cancer Awareness Month.",
      technologies: [
        "Python",
        "Machine Learning",
        "Logistic Regression",
        "Streamlit",
        "Plotly",
        "Pandas",
        "Scikit-learn",
      ],
      githubLink: "https://github.com/asmamest/Breast_Cancer_Predictor",
      demoLink: "",
      imageUrl: ["/projects/breast-cancer-predictor-preview.png",
        "/projects/breast-cancer-predictor-screenshot-1.png",
      ],
      details:
        "",
    },
    {
      id: "project-cvd-prediction",
      name: "Predicting Cardiovascular Diseases Using K-Nearest Neighbors",
      description:
        "Developed a K-Nearest Neighbors (KNN) classifier to predict the likelihood of patients developing cardiovascular diseases (CVDs) using a dataset from Kaggle. This project aims to highlight the importance of early identification of risk factors associated with CVDs to prevent premature deaths. Key steps included conducting exploratory data analysis (EDA) including descriptive statistics and visualizations, performing data cleaning to address missing values and inconsistencies, selecting relevant features to enhance model accuracy, building and optimizing the KNN classifier with hyperparameter tuning, and evaluating the model's effectiveness using a test set.",
      technologies: [
        "Machine Learning",
        "Python",
        "K-Nearest Neighbors (KNN)",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
      githubLink: "https://github.com/asmamest/ML_Projects/tree/main/Predicting%20Heart%20Disease",
      demoLink: "",
      imageUrl: ["/projects/cvd-prediction-preview.png"],
      details:
        "",
    },
  ],
  skills: {
    "Programming Languages": ["Python", "C", "C++", "Java", "JavaScript", "TypeScript"],
    "Machine Learning & Deep Learning": [
      "Supervised (Regression, SVM, XGBoost)",
      "Unsupervised (K-means, ACH)",
      "Neural Networks (ANN, CNN, LSTM)",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
    ],
    "Generative AI": [
      "LLMs (BERT, Zephyr, Mistral, DeepSeek, Claude)",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "RAG, CAG, MuRAG",
      "MCP",
      "A2A",
    ],
    "Web Scraping": ["Scrapy", "BeautifulSoup", "Selenium"],
    "Cloud & DevOps": ["Docker", "Kubernetes", "GitHub Actions (CI/CD)", "Jenkins", "Azure"],
    Databases: ["SQL (MySQL)", "NoSQL (MongoDB)", "VectorDB (FAISS)", "PostgreSQL"],
    "Project Management": ["Agile/Scrum", "Jira", "Slack"],
    "Web Development": ["React", "Angular", "Streamlit", "RESTful APIs", "Springboot"],
    Languages: ["Arabic (Native)", "French (B2)", "English (B2)", "German (A2)"],
  },
  awards: [
    {
      id: "award-silver-talan",
      title: "Silver Prize - Talan SummerCamp Hackathon 2025",
      organization: "Talan Tunisia",
      year: "2025",
      description: "Won Silver Prize for building AURA, an AI-powered RFP analysis and response generation platform",
      imageUrl: ["/awards/talan-silver-prize.jpg",
        "/awards/talan-silver-prize-1.jpg",
      ],
      details:
        "Received the Silver Prize at the Talan Tunisia SummerCamp Hackathon 2025 for developing AURA, an intelligent platform for managing Requests for Proposals and generating automated responses. The project earned high praise from the jury, including Mr. Mahdi Haouas, Co-founder of Talan, and Mr. Bahjet Boussafara, CEO of Talan Tunisia, as well as other Talan experts, highlighting the creativity, impact, and excellence of the solution.",
    },
    {
      id: "award-success-story",
      title: "Success Story IPEIB 2024",
      organization: "Preparatory Institute for Engineering Studies of Bizerte",
      year: "2024",
      description: "Recognized as a Success Story for academic excellence and achievements",
      imageUrl: ["/awards/ipeib-success-story.jpg",
        "/awards/ipeib-success-story-1.jpg",
        "/awards/ipeib-success-story-2.jpg",
        "/awards/ipeib-success-story-3.jpg",

      ],
      details:
        "Invited as a Success Story speaker by the Preparatory Institute for Engineering Studies of Bizerte (IPEIB) in 2024, where I shared my academic journey, personal experiences, and insights with students. I encouraged them to pursue excellence and provided practical advice on how to achieve high ranks and succeed in engineering studies. This event highlighted my passion for mentorship, motivation, and academic leadership.",
    },
    {
      id: "award-best-poster",
      title: "Best Poster ENICarthage 2024",
      organization: "National Engineering School of Carthage",
      year: "2024",
      description: "Awarded Best Poster for research presentation at ENICarthage",
      imageUrl: "/awards/best-poster-enicarthage.jpg",
      details:
        "Received the Best Poster award at ENICarthage 2024 for an outstanding research presentation. This recognition demonstrates my ability to communicate complex technical concepts effectively and showcase innovative research in a clear, engaging manner. The award reflects both my technical expertise and my skills in visual communication and presentation.",
    },
    {
      id: "award-omv-certificate",
      title: "Certificate of Merit",
      organization: "OMV Tunisia",
      year: "2024",
      description: "Certificate of Merit for exceptional performance during internship at OMV Tunisia",
      imageUrl: "/awards/omv-certificate-merit.jpg",
      details:
        "Awarded a Certificate of Merit by OMV Tunisia for exceptional performance and contributions during my internship. This recognition highlights my professionalism, technical skills, and ability to deliver value in a corporate environment. The experience at OMV Tunisia strengthened my understanding of industrial applications of AI and machine learning in the energy sector.",
    },
  ],
  fun: {
    description:
      "Beyond coding, I spend my time exploring ideas that inspire me — from the rhythms of agriculture to the stories shared in podcasts and the worlds opened by books. Teaching Python to bachelor students allows me to give back while learning from others, and moments with my family remind me of what truly matters. Every experience fuels my curiosity and strengthens my drive to create technology that makes a meaningful, lasting impact.",
    podcasts: [
      {
        title: "OpenAI's Sam Altman Talks ChatGPT, AI Agents and Superintelligence — Live at TED2025",
        channel: "TED",
        youtubeUrl: "https://www.youtube.com/live/5MWT_doo68k?si=6wHUK7OhJxb96fB-",
      },
      {
        title: "LIVE: Jeff Bezos speaks at Italian Tech Week 2025",
        channel: "Reuters",
        youtubeUrl: "https://www.youtube.com/live/4wTSZDZ_seU?si=9KJiwDYQNzPT4DCv",
      },
      {
        title: "I lead a Google DeepMind team at 26. If you want to work at an AI company...",
        channel: "80,000 Hours",
        youtubeUrl: "https://youtu.be/MfMq4sVJSFc?si=UAO34KMB4HGshlCz",
      },
      {
        title: "Google DeepMind CEO Demis Hassabis on AI, Creativity, and a Golden Age of Science",
        channel: "All-In Podcast",
        youtubeUrl: "https://youtu.be/Kr3Sh2PKA8Y?si=xk17O0WjoNQRwEy-",
      },
      {
        title: "The Truth About AI | #ABtalks Special with Mo Gawdat",
        channel: "ABtalks",
        youtubeUrl: "https://youtu.be/7WvKcFsAj6E?si=TM3kfbJnEOIIYSS_",
      },
    ],
    books: [
      {
        title: "Deep Learning",
        author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
        coverUrl: "/books/deep-learning-cover.jpg",
      },
      {
        title: "Hands-On Machine Learning",
        author: "Aurélien Géron",
        coverUrl: "/books/hands-on-ml-cover.jpg",
      },
      {
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        coverUrl: "/designing-data-intensive-applications.jpg",
      },
      { title: "Atomic Habits", author: "James Clear", coverUrl: "/atomic-habits-cover.jpg" },
      { title: "Rich Dad, Poor Dad", author: "Robert T. Kiyosaki", coverUrl: "/books/rich-dad-poor-dad-cover.jpg" },
      { title: "The 48 Laws of Power", author: "Robert Greene", coverUrl: "/books/48-laws-power-cover.jpg" },
    ],
    events: [
      {
        title: "ENICarthage Enterprise Forum 2023 & 2024 - Program Committee Member",
        description:
          "Active member of the Program Committee for the ENICarthage Enterprise Forum in both 2023 and 2024. Organized and coordinated one of the largest career and networking events for engineering students, connecting them with leading companies and industry professionals.",
        imageUrl: "/events/enicarthage-forum-2023.jpg",
      },
      {
        title: "Company Visit - OOREDOO Tunisia",
        description:
          "Participated in an insightful company visit to OOREDOO Tunisia, exploring their technology infrastructure, innovation labs, and learning about telecommunications and digital transformation in Tunisia.",
        imageUrl: "/events/ooredoo-visit.jpg",
      },
      {
        title: "Company Visit - LineData",
        description:
          "Visited LineData to discover their software solutions for the financial services industry. Gained valuable insights into fintech, software engineering practices, and career opportunities in the financial technology sector.",
        imageUrl: "/events/linedata-visit.jpg",
      },
      {
        title: "Internship at Talan Tunisia Consulting",
        description:
          "Unforgettable internship experience at Talan Tunisia Consulting where I built AURA and won the Silver Prize at the SummerCamp Hackathon. Amazing team atmosphere, challenging projects, and incredible learning opportunities.",
        imageUrl: "/events/talan-internship-team.jpg",
      },
      {
        title: "Internship at OMV Tunisia",
        description:
          "Enriching internship experience at OMV Tunisia, working on AI and machine learning projects in the energy sector. Received a Certificate of Merit for exceptional performance. Great team, supportive mentors, and valuable industry exposure.",
        imageUrl: "/events/omv-internship-team.jpg",
      },
    ],
    moments: [
      {
        type: "image" as const,
        url: "/moments/enicarthage-forum-organizing.jpg",
        caption: "Organizing ENICarthage Enterprise Forum - bringing students and companies together!",
      },
      {
        type: "image" as const,
        url: "/moments/talan-hackathon-celebration.jpg",
        caption: "Celebrating Silver Prize at Talan SummerCamp Hackathon with my amazing team!",
      },
      {
        type: "image" as const,
        url: "/moments/teaching-python-students.jpg",
        caption: "Teaching Python to bachelor students - sharing knowledge and learning together",
      },
    ],
  },
  contact: {
    name: "Asma MESTAYSSER",
    email: "mestaysserasma@gmail.com",
    phone: "+216 94 016 899",
    location: "Tunis, Tunisia",
    linkedin: "https://www.linkedin.com/in/mestaysserasma",
    github: "https://github.com/asmamest",
  },
}

function shouldShowCards(message: string): "projects" | "awards" | "skills" | "me" | "fun" | "contact" | null {
  const lowerMessage = message.toLowerCase()
  if (lowerMessage.includes("project")) return "projects"
  if (lowerMessage.includes("award")) return "awards"
  if (lowerMessage.includes("skill")) return "skills"
  if (lowerMessage.includes("fun")) return "fun"
  if (lowerMessage.includes("contact")) return "contact"
  if (lowerMessage.includes("me") || lowerMessage.includes("about")) return "me"
  return null
}

function findItemDetails(itemId: string): string | null {
  const project = portfolioData.projects.find((p) => p.id === itemId)
  if (project) return project.details

  const award = portfolioData.awards.find((a) => a.id === itemId)
  if (award) return award.details

  return null
}

export async function POST(request: Request) {
  try {
    const { message, feedbackData } = await request.json()

    if (feedbackData) {
      console.log("Feedback received:", feedbackData)
      return NextResponse.json({
        response: "Thank you for your feedback! I really appreciate your input and will consider your suggestions.",
      })
    }

    if (message.startsWith("Tell me more about:")) {
      const itemId = message.replace("Tell me more about:", "").trim()
      const details = findItemDetails(itemId)

      if (details) {
        return NextResponse.json({ response: details })
      }
    }

    const cardType = shouldShowCards(message)
    if (cardType) {
      if (cardType === "projects") {
        const cards = portfolioData.projects.map((p) => ({
          id: p.id,
          title: p.name,
          description: p.description,
          tags: p.technologies,
          githubLink: p.githubLink,
          demoLink: p.demoLink,
          imageUrl: p.imageUrl,
        }))
        return NextResponse.json({
          response: "Here are my projects. Click on any to learn more:",
          cards,
          cardType: "projects",
        })
      } else if (cardType === "awards") {
        const cards = portfolioData.awards.map((a) => ({
          id: a.id,
          title: a.title,
          subtitle: `${a.organization} - ${a.year}`,
          description: a.description,
          imageUrl: a.imageUrl,
        }))
        return NextResponse.json({
          response: "Here are my awards and achievements:",
          cards,
          cardType: "awards",
        })
      } else if (cardType === "skills") {
        return NextResponse.json({
          response: "Here are my skills organized by category:",
          skillsData: portfolioData.skills,
        })
      } else if (cardType === "me") {
        return NextResponse.json({
          response: "Let me tell you about myself:",
          profileData: portfolioData.me,
        })
      } else if (cardType === "fun") {
        return NextResponse.json({
          response: "Here are some fun things about me beyond code:",
          funData: portfolioData.fun,
        })
      } else if (cardType === "contact") {
        return NextResponse.json({
          response: "You can reach me through the following channels:",
          contactData: portfolioData.contact,
        })
      }
    }

    // Check if Gemini API key is configured
    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          response:
            "⚠️ Gemini API key not configured. Please add GEMINI_API_KEY to your environment variables.\n\nFor now, I can share some basic information about the portfolio!",
        },
        { status: 200 },
      )
    }

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are an AI assistant for a personal portfolio website. Here is the portfolio data:

${JSON.stringify(portfolioData, null, 2)}

User question: ${message}

Please provide a helpful, friendly, and informative response based on the portfolio data. If the question is about something not in the portfolio data, politely let them know and offer to help with something else.`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
          },
        }),
      },
    )

    if (!response.ok) {
      throw new Error("Gemini API request failed")
    }

    const data = await response.json()
    const aiResponse = data.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't generate a response."

    return NextResponse.json({ response: aiResponse })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ response: "Sorry, I encountered an error. Please try again." }, { status: 500 })
  }
}
