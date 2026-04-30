export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Computer Science and Engineering",
    institution: "North Western University",
    period: "2024 - Present",
    location: "Khulna, Bangladesh",
    summary:
      "Completing higher education above HSC with a focus on programming fundamentals, web technologies, database systems, software engineering, and practical project development. This academic foundation supports my work across frontend interfaces, backend logic, and full-stack application delivery.",
    highlights: [
      "Core focus areas: data structures, algorithms, web development, database management, networking, and software engineering practices",
      "Built academic and personal projects that strengthened practical problem solving, debugging, and project presentation skills",
      "Developed a foundation for production-oriented work with React, Next.js, APIs, and relational database thinking",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Rupdia Shaheed Smrity College",
    period: "2021-2023",
    location: "Jeshore",
    summary:
      "Completed HSC before moving into higher technical education. The combination of academic study and self-directed programming practice helped build the discipline needed for software development.",
    highlights: [
      "Strengthened analytical thinking and problem-solving habits",
      "Built the foundation for later technical study above HSC",
      "Continued learning programming through personal practice and project work",
    ],
  },
];
