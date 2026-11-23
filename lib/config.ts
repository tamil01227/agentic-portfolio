// Change the team name HERE only.
export const TEAM_NAME = "Qubit.ai";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sujitha-a-421878451/";
export const EMAIL = "tamilselvir932@gmail.com";
export const LOCATION = "Coimbatore, Tamil Nadu, India";
export const NAV = [["Home", "#home"], ["Services", "#services"], ["Work", "#work"], ["Team", "#team"]] as const;

export const PROBLEMS = [
  ["Repetitive Work Is Slowing You Down", "Your team spends valuable hours on tasks that could be automated, leaving less time for meaningful work.", "Time loss · Productivity"],
  ["Your Systems Don't Work Together", "Disconnected applications and scattered data make everyday operations harder than they need to be.", "Frustration · Complexity"],
  ["Scaling Is Becoming Expensive", "As your business grows, manual processes and inefficient systems make it harder to maintain speed and control costs.", "Growth · Cost awareness"],
] as const;

export const SERVICES = [
  { t: "AI Solutions & Intelligent Automation", flow: ["Task", "AI agent", "Tools & APIs", "Workflow", "Outcome"], d: "Make complex tasks simpler with AI systems that understand, reason and take action.", b: ["Autonomous AI agents", "Multi-agent workflows", "AI-powered automation", "LLM integration and RAG systems"], value: "Less manual work. Smarter decisions." },
  { t: "AI-Powered Applications & Web Development", flow: ["User", "Application", "AI assistant", "Connected APIs", "Outcome"], d: "Build digital experiences that connect your users, business processes and intelligent AI capabilities.", b: ["AI-powered web applications", "Intelligent chatbots and assistants", "API and backend integration", "Automated research and data extraction"], value: "Better experiences. Connected workflows." },
  { t: "Cloud Engineering & Infrastructure", flow: ["Request", "Cloud platform", "Model routing", "CI/CD", "Scale"], d: "Build secure and scalable infrastructure that supports your applications and AI workloads.", b: ["AWS, GCP and Azure deployment", "LLM hosting and model routing", "Cloud architecture and optimisation", "CI/CD and containerisation"], value: "Reliable systems. Ready to scale." },
];
export const PROJECTS = [
  { n: "RAG-based chatbot", s: "RAG", cat: "Chatbots", d: "Answers grounded in your documents with retrieval and citations." },
  { n: "E-commerce chatbot", s: "E-commerce", cat: "Chatbots", d: "Product and order assistance connected to store systems." },
  { n: "Analytics chatbot", s: "Analytics", cat: "Chatbots", d: "Natural-language questions over business data." },
  { n: "Medical chatbot", s: "Medical", cat: "Chatbots", d: "Guardrailed medical information assistant." },
  { n: "Meeting analysis agent", s: "Meetings", cat: "Agents", d: "Turns meetings into summaries, decisions and action items." },
  { n: "YOLO-based image analysis agent", s: "YOLO", cat: "Agents", d: "Object detection feeding an agent that reports findings." },
  { n: "AI automation", s: "Automation", cat: "Automation", d: "LLM-driven workflows wired into existing business APIs." },
] as const;

export const CASES = [
  { n: "Smart Construction Progress Monitoring via CNN", c: "Construction firm (anonymised)", p: "Site progress was tracked manually and reported late.", s: "CNN-based image classification on site photos, feeding an automated progress report.", tags: ["Python", "CNN", "Docker", "PostgreSQL"] },
  { n: "Plant Disease Detection using CNN", c: "Agri-tech client (anonymised)", p: "Crop diseases were spotted late, by eye, and inconsistently.", s: "A CNN classifier trained on leaf images that identifies the disease from a photo and returns a ranked result.", tags: ["Python", "CNN", "Image classification", "FastAPI"] },
  { n: "Explainable AI (XAI) for Truthfulness", c: "AI product team (anonymised)", p: "Stakeholders could not see why a model gave an answer, so they could not trust it.", s: "An explanation layer that shows the evidence behind each output and flags answers that lack support.", tags: ["Python", "XAI", "Pydantic", "RAG"] },
];

export const MEMBERS = [
  { name: "Priyadharshini J V", role: "Applied AI Engineer", img: "/team/priyadharshini.jpg",
    chips: ["Python", "Prompt Engineering", "AI Models", "MCP", "Deep Learning"],
    team: "Designs and builds AI-powered applications, bringing together Python, AI models, prompt engineering and MCP integrations." },
  { name: "Tamilselvi R", role: "Full-Stack AI Engineer & DevOps Engineer", img: "/team/tamilselvi-sharp.webp",
    chips: ["Next.js", "UI/UX", "Python", "MCP", "DevOps"], team: "Builds full-stack AI experiences, from user-friendly interfaces to Python and MCP integrations, and supports deployment workflows." },
  { name: "Sujitha A", role: "Data Analyst", img: "/team/sujitha.jpg",
    chips: ["Data Analysis", "Business Insights", "Data Visualisation", "Data Quality"], team: "Analyses business and operational data to surface useful insights and support informed decisions." },
  { name: "Megalai S", role: "Frontend Developer", img: "/team/megalai-sharp.webp",
    chips: ["Frontend Development", "Responsive UI", "Web Interfaces", "UI Implementation"], team: "Builds responsive, user-friendly frontend experiences with clear layouts and accessible interactions." },
];
export const STACK = ["Python","FastAPI","LangChain","LangGraph","MCP","FAISS","Qdrant","PostgreSQL","Docker","Kubernetes","AWS","GCP","Azure","vLLM","Ollama"];
