"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function ResumeDownload() {
  const handleDownload = () => {
    // Create resume content
    const resumeContent = `
ASMA MESTAYSSER
Tunis, Tunisia | mestaysserasma@gmail.com | +216 94 016 899
linkedin.com/in/mestaysserasma | github.com/asmamest

Award-winning last-year Computer Engineering student, recognized with multiple honors including 
"Success Story IPEIB 2024," "Best Poster ENICarthage 2024," a Certificate of Merit from OMV Tunisia, 
and the Silver Prize from the Talan Tunisia SummerCamp Hackathon 2025.

EXPERIENCE

AI Consultant Intern, Talan Tunisie Consulting                                    Jul 2025 – Aug 2025
• Built AURA, an AI-powered platform for end-to-end Requests for Proposals analysis, reusable 
  module extraction, and automated response generation.
• Tools Used: LangGraph/LangChain, LLMs (Claude, Zephyr-7B, DeepSeek), A2A/MCP, FAISS, 
  Python, React, Docker

Internship in Machine Learning, CodeAlpha (Remote)                              April 2025 – May 2025
• Developed a real-time speech emotion detection model (CNN+LSTM), leveraging Librosa to 
  extract features and PyAudio for live audio input.
• Tools Used: PyTorch, Librosa, CNN + LSTM, PyAudio

EDUCATION

National Engineering Diploma in Computer Engineering                              Sept 2023 – Present
National Engineering School of Carthage

Preparatory Diploma in Physics and Chemistry                                      Sept 2021 – July 2023
Preparatory Institute for Engineering Studies of Bizerte

PROJECTS

Customer Support Bot for Airline Travel                                          [github.com/asmamest]
• Engineered an AI-powered airline support bot using LangGraph for state management and 
  workflow orchestration, integrating Claude LLM with custom tools and Tavily Search.
• Tools Used: Python, LangChain/LangGraph, Claude LLM, Tavily API, SQLite

Fault Diagnosis with Supervised Machine Learning                                [github.com/asmamest]
• Developed a supervised machine learning approach for industrial fault diagnosis, achieved 
  94.3% accuracy rate on the Tennessee Eastman Process (TEP) dataset.
• Tools Used: Python, Scikit-learn, TensorFlow/Keras, PyTorch, XGBoost, MLP, 1D CNN, LSTM

TECHNICAL SKILLS

Programming Languages: Python, C, C++, Java, JavaScript, TypeScript
Machine Learning & DL: Supervised (Regression, SVM, XGBoost), Unsupervised (K-means), 
Neural Networks (ANN, CNN, LSTM); Frameworks: TensorFlow, PyTorch, Scikit-learn
Generative AI: LLMs (BERT, Zephyr, Mistral, DeepSeek), Frameworks (LangChain, LangGraph, 
CrewAI), Architectures (RAG, CAG), Multi-Agent Systems Protocols (MCP, A2A)
Web scraping: Scrapy, BeautifulSoup, Selenium
Cloud & DevOps: Docker, Kubernetes, GitHub Actions (CI/CD), Jenkins, AWS (EC2, S3), Azure
Databases: SQL (MySQL), NoSQL (MongoDB), VectorDB (FAISS)
Project Management: Agile/Scrum, Jira
Web & APIs: React, Angular, Streamlit, RESTful APIs

LANGUAGES & CERTIFICATIONS

French: B2 | English: B2 | German: A2 | Arabic: Native proficiency
Building Language Models - Amazon Web Services
Azure AI Fundamentals - Microsoft
Supervised ML & Advanced Learning Algorithms - DeepLearning.AI
`

    // Create blob and download
    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Asma_MESTAYSSER_Resume.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  return (
    <Button onClick={handleDownload} variant="outline" className="gap-2 bg-transparent">
      <Download className="h-4 w-4" />
      Download Resume
    </Button>
  )
}
