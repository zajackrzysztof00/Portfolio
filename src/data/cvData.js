// src/data/cvData.js
export const experience = [
  {
    role: "Validation Engineer",
    company: "BWI Poland Technologies sp. z o.o.",
    duration: "2024 – Ongoing",
    location: "Balice, Poland",
    details: [
      "Developing calculation methods and software solutions for validation processes",
      "Python programming for test signal generation and testing machine automation",
      "Programming in Python for test automation and data analysis workflows",
      "VBA development for Excel-based calculation tools and document management systems",
      "Statistical data analysis and reporting using Python libraries (pandas, NumPy, Matplotlib)",
      "Training employees in new software tools and automated calculation methods",
      "Developing automated test result processing and report generation systems",
      "Implementation of resource-efficient CNN models and LSTM networks for data analysis (Keras, TensorFlow)",
    ],
  },
  {
    role: "Chassis Trainee",
    company: "BWI Poland Technologies sp. z o.o.",
    duration: "2022 – 2024",
    location: "Balice, Poland",
    details: [
      "VBA development for automated document management and data processing workflows",
      "Statistical data analysis and visualization using Python (pandas, Matplotlib, SciPy)",
      "SQL database operations for test equipment and test management",
      "Creating automated test reports and data processing scripts",
      "Developing calculation algorithms for chassis component validation",
    ],
  },
];

export const education = [
  {
    degree: "Postgraduate Studies - Software Development Methods",
    institution: "AGH University of Science and Technology",
    faculty: "Faculty of Computer Science",
    duration: "2024 – Ongoing",
  },
  {
    degree: "Master's Degree - Metal Engineering",
    institution: "AGH University of Science and Technology",
    faculty: "Faculty of Metal Engineering and Industrial Computer Science",
    duration: "2023 – 2024",
    thesis: "Formation and characterization of morphology of binary alloy films with a composition gradient.",
  },
  {
    degree: "Engineering Degree - Materials Engineering",
    institution: "AGH University of Science and Technology",
    faculty: "Faculty of Metal Engineering and Industrial Computer Science",
    duration: "2019 – 2023",
    thesis: "Analysis of diffraction images of steel after hardening in the context of registering residual austenite and assessing martensite tetragonality.",
  },
];

export const projects = [
  {
    title: "CAD Designer at AGH FingerPrint",
    organization: "AGH FingerPrint",
    duration: "2021 - 2023",
    details: [
      "Designed a biomechanical finger prosthesis for patients with amputation-related defects",
      "Performed 3D printing, assembly, finishing, and customization according to patient requirements",
    ],
  },
  {
    title: "Member of the Metallurgy Science Club (SKN Metaloznawców)",
    organization: "SKN Metaloznawców",
    duration: "2021 - 2023",
    details: [
      "Completed grant-funded projects",
      "Created 3D printed models of Kraków landmarks for visually impaired kindergarten children",
      "Organized 3D design and additive manufacturing training",
      "Participated in club events and scientific fairs",
    ],
  },
];

export const skills = {
  programmingLanguages: [
    { 
      name: "Python", 
      level: 5, 
      details: "pandas, NumPy, Flask, TensorFlow, Keras, Scikit-learn, Matplotlib" 
    },
    { 
      name: "C# (.NET)", 
      level: 4, 
      details: ".NET Core, Entity Framework, ASP.NET" 
    },
    { 
      name: "Java", 
      level: 4, 
      details: "Spring, Hibernate, Maven" 
    },
    { 
      name: "JavaScript", 
      level: 4, 
      details: "React" 
    },
    { name: "VBA", level: 3 },
    { name: "Lua", level: 3 },
  ],
  databases: [
    {
      category: "Relational Databases (SQL)",
      technologies: "MySQL, PostgreSQL, SQLite",
      description: "schema design, complex joins, window functions, indexing, query optimization"
    },
    {
      category: "Big Data Technologies", 
      technologies: "Hadoop (HDFS,MapReduce), Hive",
      description: "distributed data processing and querying large datasets"
    },
    {
      category: "NoSQL Databases",
      technologies: "MongoDB, DynamoDB", 
      description: "schema modeling, aggregation pipelines"
    },
    {
      category: "Data Integration",
      technologies: "ETL workflows using Python",
      description: "pandas, pymongo, mysql-connector"
    }
  ],
  webAndCloud: [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 4 },
    { name: "LaTeX", level: 4 },
    { 
      name: "AWS", 
      level: 3, 
      details: "S3, Lambda, CloudWatch, API Gateway" 
    },
  ],
  versionControl: [
    { name: "Git", level: 4 },
    { name: "GitHub", level: 4 },
    { name: "Docker", level: 4 },
  ],
  cadTools: ["SolidWorks", "Fusion360", "Autodesk Inventor", "AutoCAD"],
  softwareTools: [
    { name: "Microsoft Office", level: 5 },
    { name: "Visual Studio", level: 4 },
    { name: "Visual Studio Code", level: 5 },
    { name: "IntelliJ IDEA", level: 4 },
    { name: "PyCharm", level: 4 },
    { name: "MATLAB", level: 3 },
    { name: "QForm", level: 3 },
    { name: "Blender", level: 2 },
  ],
  languagesSpoken: [
    { name: "English", level: "Fluent" },
    { name: "German", level: "Beginner" },
  ],
};

export const strengths = [
  "Hard-working",
  "Eye for detail",
  "Motivator & Leader",
  "Creativity",
  "Self-discipline",
  "Statistical Analysis",
];

export const certifications = [
  {
    name: "Certification in Analysis of measurement systems according to MSA v.4 requirements",
    provider: "PRONOST Training",
    year: 2024,
    description: "Measurement Systems Analysis (MSA) v4 evaluates the accuracy, precision, and reliability of measurement processes to ensure data quality and consistency in manufacturing or inspection."
  },
  {
    name: "Certification in Statistical process control according to SPC v.2 requirements", 
    provider: "PRONOST Training",
    year: 2024,
    description: "Statistical Process Control (SPC) v2 uses statistical methods and control charts to monitor, control, and improve process performance by detecting and reducing variability."
  },
  {
    name: "Solidworks Associate",
    location: "Krakow, Poland",
    year: 2021,
  },
  {
    name: "SEP G1 qualifications",
    location: "Krakow, Poland", 
    year: 2024,
  },
];

export const professionalDevelopment = [
  {
    name: "Data Software Engineering",
    provider: "EPAM Campus",
    technologies: "Python, SQL, Hadoop"
  },
  {
    name: "Understanding Python Sentiment Analysis Methodology",
    provider: "Alison.com Online Course",
    description: "Natural Language Processing, Sentiment Analysis, Python Implementation"
  },
  {
    name: "Data Visualization with Python and Matplotlib",
    provider: "Alison.com Online Course", 
    description: "Python Data Visualization, Matplotlib Library, Chart Creation"
  },
];
