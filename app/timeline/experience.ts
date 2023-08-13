export interface IEvent {
  date: string;
  org: string; // organization
  title: string;
  desc: string; // description
  acc: string[]; // accomplishments
  skills: string[];
}

export const workEvents = [
  {
    date: "Sep 2021 -> now",
    org: "Rakuten Travel",
    title: "Backend Engineer",
    desc: "",
    acc: [
      "Maintaining clean codebase and hunting down PROD bugs as a system maintainability lead.",
      "Built high-quality RESTful APIs by leading discussions with UI and PDM teams.",
      "Developing and maintaining microservice backend for travel.rakuten.com.",
    ],
    skills: [
      "TDD",
      "Microservices",
      "RDBMS",
      "Jenkins",
      "REST APIs",
      "Elasticsearch",
      "Kafka",
      "Oracle DB",
      "Kotlin",
      "Java",
      "Spring Boot",
      "MongoDB",
    ],
  },
  {
    date: "May 2022 -> now",
    org: "Gertech Inc.",
    title: "Freelance lead software engineer",
    desc: "",
    acc: [
      "Designed and built SaaS client management system for salons.",
      "Designed and built conference app.",
      "Built and containerized interactive hotel revenue dashboard.",
    ],
    skills: [
      "NestJS",
      "docker",
      "Express.js",
      "MySQL",
      "Amazon Web Services (AWS)",
      "Django",
      "Node.js",
      "Python",
    ],
  },
  {
    date: "Dec 2020 -> Sep 2021",
    org: "Goldware Japan Inc.",
    title: "Software engineering intern",
    desc: "",
    acc: [
      "Implemented complex UIs with ReactJS",
      "Collaborated extensively with PDMs & designers ",
      "Mentored a fellow intern",
    ],
    skills: [
      "React.js",
      "JavaScript",
      "Unit Testing",
      "Node.js",
      "Apollo GraphQL",
      "TypeScript",
    ],
  },
  {
    date: "Feb 2020 -> Apr 2020",
    org: "Tab Solution Co.,Ltd",
    title: "Software engineering intern",
    desc: "",
    acc: ["Deployed Custom Chatbot with LineSDK and iterated several times"],
    skills: ["JavaScript", "Heroku", "Line chatbot api", "Node.js"],
  },
];
export const educationEvents = [
  {
    date: "Apr 2018 -> Sep 2021",
    org: "Tokyo Institute of Technology",
    title: "Bachelor's degree of Transdisciplinary Science and Engineering",
    desc: "",
    acc: [
      "MEXT scholarship",
      "Completed my bachelor's degree in 3.5 years.",
      "Researched ML, NLP, and text-to-speech(TTS) models.",
      "Participated in 4 startup competitions.",
    ],
    skills: ["Python", "Machine Learning", "Project management"],
  },
  {
    date: "Sep 2013 -> Jun 2016",
    org: "Erdmiin Dalai Complex high school",
    title: "High school student",
    desc: "",
    acc: [
      "Debate club team leader. Gold medal at regional 2x2 debate competition.",
      "Math Olympiad team leader. Bronze medal at National Math Olympics in 2014.",
    ],
    skills: ["C++", "Problem solving", "Communication", "team work"],
  },
];
