const testDataCourse = [
  {
    id: 3,
    title: "Language Training Programs",
    description:
      "Ocean Connecting offers expert language training in English, Spanish, German, French, and Italian to help you excel.",
    img: [
      "https://res.cloudinary.com/djs2qkksb/image/upload/v1733848235/langague.jpg",
    ],
    details: "Learn New Languages and Move Forward",
    duration: "15h",
    students: 15,
    lessons: 20,
    rating: 4.7,
    price: 99.99,
    discount_price: 79.99,
    options: ["English", "Spanish", "German", "French", "Italian"],
    level: "Beginner to Advanced",
    certificate_included: true,
    access_duration: "Lifetime",
    what_you_will_learn: [
      "Master basic to advanced grammar",
      "Develop fluent speaking skills",
      "Improve listening and comprehension",
      "Cultural immersion for real-life communication",
      "Practice pronunciation with native instructors",
    ],
    requirements: [
      "No prior experience required",
      "Basic reading comprehension in any language",
      "Willingness to practice and speak",
    ],
    curriculum: [
      {
        title: "Introduction to Language Learning",
        duration: "10:00",
      },
      {
        title: "Grammar and Vocabulary Basics",
        duration: "12:45",
      },
      {
        title: "Conversational Practice",
        duration: "20:30",
      },
      {
        title: "Listening Skills with Native Speakers",
        duration: "15:20",
      },
      {
        title: "Final Cultural Immersion",
        duration: "18:00",
      },
    ],
    instructors: [
      {
        name: "Maria Gonzales",
        title: "Linguist & Translator",
        students: 10,
        rating: 4.9,
        img: "",
        bio: "Maria has been teaching languages for over 10 years and speaks 6 languages fluently. Her passion is connecting cultures through communication.",
      },
    ],
  },
  {
    id: 4,
    title: "Airport Check-in Agent Training",
    description:
      "The training for an Airport Check-in Agent prepares professionals...",
    img: [
      "https://res.cloudinary.com/djs2qkksb/image/upload/v1733848288/Aeroport.jpg",
    ],
    details:
      "Elevate your career in the aviation industry with our comprehensive Airport Check-in Agent Training at Ocean connecting. This program equips professionals with the essential skills and knowledge to manage passenger check-in efficiently, ensuring smooth airport operations.",
    duration: "20h",
    students: 10,
    lessons: 25,
    rating: 4.5,
    price: 149.99,
    discount_price: 119.99,
    options: ["Full-time", "Part-time"],
    level: "Beginner",
    certificate_included: true,
    access_duration: "6 months",
    what_you_will_learn: [
      "Passenger check-in procedures",
      "Baggage handling and security protocols",
      "Customer service excellence",
      "Airport systems and software",
      "Problem-solving in fast-paced environments",
    ],
    requirements: [
      "High school diploma or equivalent",
      "Basic computer skills",
      "Good communication skills",
    ],
    curriculum: [
      {
        title: "Introduction to Airport Operations",
        duration: "15:00",
      },
      {
        title: "Check-in Procedures and Systems",
        duration: "20:00",
      },
      {
        title: "Security and Safety Protocols",
        duration: "18:00",
      },
      {
        title: "Customer Service Training",
        duration: "15:00",
      },
      {
        title: "Practical Simulations",
        duration: "22:00",
      },
    ],
    instructors: [
      {
        name: "John Smith",
        title: "Aviation Specialist",
        students: 80,
        rating: 4.7,
        img: "",
        bio: "John has over 15 years of experience in airport operations and training. He specializes in customer service and operational efficiency.",
      },
    ],
  },
  {
    id: 5,
    title: "DJ Training Program",
    description: "DJ training teaches the skills necessary to become a DJ...",
    img: [
      "https://res.cloudinary.com/djs2qkksb/image/upload/v1733848278/dj.jpg",
    ],
    details:
      "Transform your passion for music into a professional career with our comprehensive DJ Training at Ocean connecting. This program is designed to equip aspiring DJs with the skills necessary to thrive in the music industry, whether you're just starting or looking to refine your craft.",
    duration: "30h",
    students: 20,
    lessons: 35,
    rating: 4.8,
    price: 199.99,
    discount_price: 159.99,
    options: ["Digital DJing", "Vinyl DJing"],
    level: "Beginner to Intermediate",
    certificate_included: true,
    access_duration: "Lifetime",
    what_you_will_learn: [
      "Beatmatching and mixing techniques",
      "Equipment setup and maintenance",
      "Music theory for DJs",
      "Live performance skills",
      "Building your DJ brand",
    ],
    requirements: [
      "Passion for music",
      "Basic understanding of rhythm",
      "Own DJ equipment (optional)",
    ],
    curriculum: [
      {
        title: "Introduction to DJ Equipment",
        duration: "12:00",
      },
      {
        title: "Basic Mixing Techniques",
        duration: "18:00",
      },
      {
        title: "Advanced Transitions",
        duration: "20:00",
      },
      {
        title: "Live Performance Practice",
        duration: "25:00",
      },
      {
        title: "Music Selection and Crowd Reading",
        duration: "15:00",
      },
    ],
    instructors: [
      {
        name: "Alex Johnson",
        title: "Professional DJ",
        students: 10,
        rating: 4.9,
        img: "",
        bio: "Alex has been a touring DJ for 12 years, performing at major clubs and festivals worldwide. He specializes in electronic dance music.",
      },
    ],
  },
  {
    id: 6,
    title: "Boat and Sailboat Driving Training",
    description:
      "This training offers a comprehensive experience for sailing enthusiasts...",
    img: [
      "https://res.cloudinary.com/djs2qkksb/image/upload/v1733848166/Formatiodeconduitendes.jpg",
    ],
    details:
      "This training offers a comprehensive experience for sailing enthusiasts, including theoretical and practical courses on safety, sailing techniques, and coastal and offshore navigation. Sessions are led by experienced instructors and include intensive sea practice. Participants can obtain recognized certifications, allowing them to pilot various types of boats and sailboats. Join us to develop your nautical skills and experience an unforgettable maritime adventure!",
    duration: "40h",
    students: 15,
    lessons: 30,
    rating: 4.6,
    price: 299.99,
    discount_price: 249.99,
    options: ["Powerboat", "Sailboat"],
    level: "Beginner to Advanced",
    certificate_included: true,
    access_duration: "1 year",
    what_you_will_learn: [
      "Boat handling and maneuvering",
      "Navigation rules and regulations",
      "Safety procedures and emergency protocols",
      "Weather interpretation",
      "Docking and mooring techniques",
    ],
    requirements: [
      "Minimum age 16",
      "Basic swimming ability",
      "No prior experience needed",
    ],
    curriculum: [
      {
        title: "Introduction to Boating Safety",
        duration: "10:00",
      },
      {
        title: "Basic Boat Handling",
        duration: "15:00",
      },
      {
        title: "Navigation Fundamentals",
        duration: "20:00",
      },
      {
        title: "Advanced Maneuvering",
        duration: "25:00",
      },
      {
        title: "Practical On-Water Training",
        duration: "30:00",
      },
    ],
    instructors: [
      {
        name: "Captain Robert Taylor",
        title: "Master Mariner",
        students: 15,
        rating: 4.8,
        img: "",
        bio: "With 20 years of sailing experience, Captain Robert has trained hundreds of students in both recreational and professional boating.",
      },
    ],
  },
  {
    id: 7,
    title: "HOME & FAMILY",
    description:
      "The Home & Family training is designed to provide practical skills and...",
    img: [
      "https://res.cloudinary.com/djs2qkksb/image/upload/v1733848174/HOMEFAMILY.jpg",
    ],
    details:
      "The Home & Family training is designed to provide practical skills and in-depth knowledge on managing domestic life and family relationships. It covers various topics from home organization to family financial management, communication techniques, and conflict resolution. The goal is to provide participants with the necessary tools to create a harmonious and well-organized family environment.",
    duration: "12h",
    students: 15,
    lessons: 15,
    rating: 4.4,
    price: 79.99,
    discount_price: 59.99,
    options: ["Family Management", "Home Organization"],
    level: "All Levels",
    certificate_included: true,
    access_duration: "Lifetime",
    what_you_will_learn: [
      "Effective family budgeting",
      "Time management for families",
      "Communication strategies",
      "Home organization techniques",
      "Conflict resolution methods",
    ],
    requirements: ["No prior experience needed", "Open to all family members"],
    curriculum: [
      {
        title: "Introduction to Family Management",
        duration: "08:00",
      },
      {
        title: "Financial Planning for Families",
        duration: "10:00",
      },
      {
        title: "Effective Communication",
        duration: "12:00",
      },
      {
        title: "Home Organization Strategies",
        duration: "10:00",
      },
      {
        title: "Creating Family Harmony",
        duration: "12:00",
      },
    ],
    instructors: [
      {
        name: "Dr. Sarah Williams",
        title: "Family Counselor",
        students: 19,
        rating: 4.7,
        img: "",
        bio: "Dr. Williams has been helping families improve their dynamics for 15 years through practical, research-based methods.",
      },
    ],
  },
  {
    id: 8,
    title: "VAR Installation and Usage Training",
    description: "The VAR installation and usage training...",
    img: [
      "https://res.cloudinary.com/djs2qkksb/image/upload/v1733848336/var.jpg",
    ],
    details:
      "The VAR (Value Added Resellers) installation and usage training aims to provide professionals with the skills needed to install, configure, and use VAR technology solutions effectively. It covers hardware and software installation steps, advanced configuration, and daily use of tools and applications. Participants also learn to provide technical support, diagnose and resolve issues, perform preventive maintenance, and optimize solution performance. This training is essential for effective VAR solution management and ensuring optimal system performance.",
    duration: "25h",
    students: 16,
    lessons: 22,
    rating: 4.3,
    price: 249.99,
    discount_price: 199.99,
    options: ["Basic", "Advanced"],
    level: "Intermediate",
    certificate_included: true,
    access_duration: "6 months",
    what_you_will_learn: [
      "VAR system installation",
      "Configuration and customization",
      "Troubleshooting techniques",
      "Performance optimization",
      "Client support strategies",
    ],
    requirements: [
      "Basic IT knowledge",
      "Understanding of networking concepts",
    ],
    curriculum: [
      {
        title: "Introduction to VAR Systems",
        duration: "10:00",
      },
      {
        title: "Installation Procedures",
        duration: "15:00",
      },
      {
        title: "Configuration Techniques",
        duration: "20:00",
      },
      {
        title: "Troubleshooting Methods",
        duration: "18:00",
      },
      {
        title: "Advanced Optimization",
        duration: "22:00",
      },
    ],
    instructors: [
      {
        name: "Michael Chen",
        title: "IT Solutions Architect",
        students: 17,
        rating: 4.6,
        img: "",
        bio: "Michael has 10 years of experience implementing VAR solutions for enterprise clients across multiple industries.",
      },
    ],
  },
  {
    id: 9,
    title: "Maritime Navigation Training",
    description:
      "Maritime navigation training teaches participants the skills...",
    img: [
      "https://res.cloudinary.com/djs2qkksb/image/upload/v1733848319/navigationmaritime.jpg",
    ],
    details:
      "Maritime navigation training teaches participants the essential skills to navigate safely at sea, covering the use of navigation tools such as nautical charts and GPS systems, as well as understanding international regulations. Participants learn to plan routes, manage weather conditions, and ensure the safety of the vessel and crew. The training also includes rescue techniques and emergency management, ensuring effective and safe navigation while adhering to maritime rules.",
    duration: "50h",
    students: 14,
    lessons: 35,
    rating: 4.7,
    price: 349.99,
    discount_price: 299.99,
    options: ["Recreational", "Commercial"],
    level: "Intermediate to Advanced",
    certificate_included: true,
    access_duration: "1 year",
    what_you_will_learn: [
      "Chart reading and interpretation",
      "Electronic navigation systems",
      "Collision regulations",
      "Weather routing",
      "Emergency procedures",
    ],
    requirements: [
      "Basic boating experience",
      "Understanding of maritime concepts",
    ],
    curriculum: [
      {
        title: "Introduction to Marine Navigation",
        duration: "12:00",
      },
      {
        title: "Traditional Navigation Methods",
        duration: "18:00",
      },
      {
        title: "Electronic Navigation Systems",
        duration: "20:00",
      },
      {
        title: "Passage Planning",
        duration: "25:00",
      },
      {
        title: "Emergency Navigation",
        duration: "15:00",
      },
    ],
    instructors: [
      {
        name: "Captain Emily O'Connor",
        title: "Master Mariner",
        students:14,
        rating: 4.9,
        img: "",
        bio: "Captain O'Connor has sailed over 100,000 nautical miles and brings real-world navigation experience to her teaching.",
      },
    ],
  },
  {
    id: 10,
    title: "Precious Stones",
    description:
      "The training on precious stones and metals provides an understanding...",
    img: [
      "https://res.cloudinary.com/djs2qkksb/image/upload/v1733848327/m%C3%A9tauxpr%C3%A9cieux.jpg",
    ],
    details:
      "The training on precious stones and metals provides an in-depth understanding of the characteristics, evaluation, and maintenance of these valuable materials. Participants learn to identify and evaluate precious stones and metals using quality and certification criteria. The training also covers treatment and maintenance techniques to preserve their value, as well as market trends and business practices. Additionally, it addresses ethical issues and sustainable practices related to the extraction and trade of these resources.",
    duration: "18h",
    students: 19,
    lessons: 20,
    rating: 4.5,
    price: 179.99,
    discount_price: 149.99,
    options: ["Diamonds", "Colored Stones", "Metals"],
    level: "Beginner to Intermediate",
    certificate_included: true,
    access_duration: "Lifetime",
    what_you_will_learn: [
      "Identification of gemstones",
      "Grading and valuation techniques",
      "Market analysis",
      "Ethical sourcing",
      "Jewelry manufacturing basics",
    ],
    requirements: ["No prior experience needed", "Interest in gemology"],
    curriculum: [
      {
        title: "Introduction to Gemology",
        duration: "10:00",
      },
      {
        title: "Diamond Grading",
        duration: "15:00",
      },
      {
        title: "Colored Stone Identification",
        duration: "18:00",
      },
      {
        title: "Market Valuation",
        duration: "12:00",
      },
      {
        title: "Ethical Considerations",
        duration: "10:00",
      },
    ],
    instructors: [
      {
        name: "David Goldstein",
        title: "Gemologist",
        students: 16,
        rating: 4.8,
        img: "",
        bio: "David is a GIA-certified gemologist with 20 years of experience in the diamond and precious stone industry.",
      },
    ],
  },
  {
    id: 11,
    title: "Agriculture and Fishing",
    description:
      "The training to develop agriculture and fishing aims to optimize...",
    img: [
      "https://res.cloudinary.com/djs2qkksb/image/upload/v1733848310/l%27argriculturep%C3%AAche.jpg",
    ],
    details:
      "Our Agriculture and Fishing service is designed to support and empower individuals and businesses involved in these vital sectors. We provide innovative solutions tailored to the unique challenges of farming and fishing industries, ensuring sustainable practices, enhanced productivity, and profitability.",
    duration: "35h",
    students: 11,
    lessons: 28,
    rating: 4.4,
    price: 199.99,
    discount_price: 169.99,
    options: ["Agriculture", "Fishing"],
    level: "Beginner to Advanced",
    certificate_included: true,
    access_duration: "1 year",
    what_you_will_learn: [
      "Sustainable farming techniques",
      "Modern fishing methods",
      "Market access strategies",
      "Resource management",
      "Value-added processing",
    ],
    requirements: [
      "Interest in agriculture or fishing",
      "No technical background required",
    ],
    curriculum: [
      {
        title: "Introduction to Sustainable Practices",
        duration: "12:00",
      },
      {
        title: "Crop Management",
        duration: "15:00",
      },
      {
        title: "Fishing Techniques",
        duration: "18:00",
      },
      {
        title: "Market Strategies",
        duration: "12:00",
      },
      {
        title: "Case Studies",
        duration: "15:00",
      },
    ],
    instructors: [
      {
        name: "Dr. Amina Diallo",
        title: "Agricultural Specialist",
        students: 15,
        rating: 4.7,
        img: "",
        bio: "Dr. Diallo has worked with farming communities across Africa to implement sustainable agricultural practices.",
      },
    ],
  },
  {
    id: 12,
    title: "Earth Sciences and Seismology",
    description:
      "The training in Earth sciences and seismology offers an understanding...",
    img: [
      "https://res.cloudinary.com/djs2qkksb/image/upload/v1733848298/SciencesS%C3%A9ismes.jpg",
    ],
    details:
      "The training in Earth sciences and seismology offers an in-depth understanding of geological processes, earthquake mechanisms, and techniques for assessing seismic risks. It covers fundamental principles of geology, tectonic plate movements, and earthquake causes, as well as methods for monitoring and predicting earthquakes. Participants also learn to assess seismic risks, develop strategies to reduce risks, and prepare infrastructure and communities for the impacts of earthquakes. This training is essential for researchers, engineers, and risk management professionals looking to enhance their expertise in seismology and risk reduction.",
    duration: "40h",
    students: 16,
    lessons: 30,
    rating: 4.6,
    price: 279.99,
    discount_price: 229.99,
    options: ["Geology", "Seismology"],
    level: "Intermediate",
    certificate_included: true,
    access_duration: "1 year",
    what_you_will_learn: [
      "Plate tectonics theory",
      "Earthquake prediction methods",
      "Seismic risk assessment",
      "Disaster preparedness",
      "Geological fieldwork techniques",
    ],
    requirements: ["Basic science background", "Interest in earth processes"],
    curriculum: [
      {
        title: "Introduction to Earth Sciences",
        duration: "10:00",
      },
      {
        title: "Plate Tectonics",
        duration: "15:00",
      },
      {
        title: "Seismic Monitoring",
        duration: "18:00",
      },
      {
        title: "Risk Assessment",
        duration: "20:00",
      },
      {
        title: "Case Studies",
        duration: "15:00",
      },
    ],
    instructors: [
      {
        name: "Prof. Hiroshi Tanaka",
        title: "Seismologist",
        students: 35,
        rating: 4.8,
        img: "",
        bio: "Professor Tanaka has published extensively on earthquake prediction and works with governments on disaster preparedness.",
      },
    ],
  },
  {
    id: 14,
    title: "Elevator Training",
    description: "The elevator training is designed to provide participants...",
    img: [
      "https://res.cloudinary.com/djs2qkksb/image/upload/v1733848358/Formationascenseur.jpg",
    ],
    details:
      "The elevator training is designed to provide participants with a comprehensive understanding of elevator systems, from installation to maintenance. It covers the principles of elevator operation, safety procedures, and troubleshooting techniques. Participants will learn to install, maintain, and repair elevators while adhering to safety and regulatory standards. The training is ideal for technicians, engineers, and anyone involved in the elevator sector, offering the skills needed to ensure the proper functioning and safety of equipment.",
    duration: "60h",
    students: 14,
    lessons: 40,
    rating: 4.5,
    price: 399.99,
    discount_price: 349.99,
    options: ["Installation", "Maintenance"],
    level: "Technical",
    certificate_included: true,
    access_duration: "1 year",
    what_you_will_learn: [
      "Elevator system components",
      "Installation procedures",
      "Maintenance protocols",
      "Safety regulations",
      "Troubleshooting techniques",
    ],
    requirements: [
      "Technical background preferred",
      "Basic mechanical knowledge",
    ],
    curriculum: [
      {
        title: "Introduction to Elevator Systems",
        duration: "15:00",
      },
      {
        title: "Mechanical Components",
        duration: "20:00",
      },
      {
        title: "Electrical Systems",
        duration: "25:00",
      },
      {
        title: "Safety Standards",
        duration: "18:00",
      },
      {
        title: "Hands-on Workshop",
        duration: "30:00",
      },
    ],
    instructors: [
      {
        name: "Carlos Mendez",
        title: "Elevator Engineer",
        students: 13,
        rating: 4.7,
        img: "",
        bio: "Carlos has installed and maintained elevator systems for 15 years across commercial and residential projects.",
      },
    ],
  },
  {
    id: 15,
    title: "Train and Tramway Driving Training",
    description:
      "The training for driving trains and trams prepares participants...",
    img: [
      "https://res.cloudinary.com/djs2qkksb/image/upload/v1733848358/Formationascenseur.jpg",
    ],
    details:
      "The training for driving trains and trams prepares participants to operate these vehicles safely and efficiently. It covers the technical aspects of driving, including handling controls, managing signaling systems, and adhering to safety procedures. Participants also learn to manage emergency situations, optimize energy consumption, and ensure passenger comfort. The training includes practical and theoretical simulations to develop in-depth skills in driving and managing railway and tramway operations while complying with current regulations",
    duration: "80h",
    students: 15,
    lessons: 45,
    rating: 4.7,
    price: 499.99,
    discount_price: 449.99,
    options: ["Train", "Tramway"],
    level: "Professional",
    certificate_included: true,
    access_duration: "2 years",
    what_you_will_learn: [
      "Vehicle operation techniques",
      "Signaling systems",
      "Safety protocols",
      "Passenger management",
      "Emergency procedures",
    ],
    requirements: [
      "Clean driving record",
      "Technical aptitude",
      "Physical fitness",
    ],
    curriculum: [
      {
        title: "Introduction to Rail Systems",
        duration: "15:00",
      },
      {
        title: "Basic Controls",
        duration: "20:00",
      },
      {
        title: "Signaling and Safety",
        duration: "25:00",
      },
      {
        title: "Emergency Management",
        duration: "18:00",
      },
      {
        title: "Simulator Training",
        duration: "35:00",
      },
    ],
    instructors: [
      {
        name: "Anna Kowalski",
        title: "Rail Operations Specialist",
        students: 40,
        rating: 4.8,
        img: "",
        bio: "Anna has trained metro and tram operators for 10 years, focusing on safety and efficiency in urban transit systems.",
      },
    ],
  },{
    id: 16,
    title: "Bus and Truck Driving Training",
    description: "Bus and truck drivers operate commercial vehicles to safely transport passengers or goods over designated routes and distances.",
    img: [
      "https://res.cloudinary.com/dtcfvpu6n/image/upload/fl_preserve_transparency/v1746443931/Trucker_cvr_rknfu5.jpg?_s=public-apps"
    ],
    details: "This training prepares individuals to become skilled bus and truck drivers capable of safely operating commercial vehicles. It covers regulations, road safety, vehicle maintenance, cargo/passenger handling, and professional conduct. Trainees will learn how to operate buses on scheduled routes and trucks for freight transport over various distances. The program includes theoretical and practical modules, driving simulations, and on-road practice to ensure competence and confidence behind the wheel.",
    duration: "100h",
    students: 18,
    lessons: 50,
    rating: 4.6,
    price: 599.99,
    discount_price: 499.99,
    options: ["Bus", "Truck"],
    level: "Professional",
    certificate_included: true,
  access_duration: "2 years",
    what_you_will_learn: [
      "Safe vehicle operation techniques",
      "Passenger and cargo management",
      "Road regulations and compliance",
      "Basic vehicle maintenance",
      "Emergency procedures and protocols"
    ],
    requirements: [
      "Valid driver’s license",
      "Clean driving record",
      "Physical fitness",
      "Ability to follow road safety rules"
    ],
    curriculum: [
      {
        title: "Introduction to Commercial Driving",
        duration: "10:00"
      },
      {
        title: "Bus Driving Essentials",
        duration: "20:00"
      },
      {
        title: "Truck Operations and Logistics",
        duration: "25:00"
      },
      {
        title: "Road Safety and Regulations",
        duration: "15:00"
      },
      {
        title: "Emergency Handling and First Aid",
        duration: "30:00"
      },
      {
        title: "Hands-on Vehicle Training",
        duration: "40:00"
      }
    ],
    instructors: [
      {
        name: "John Miller",
        title: "Certified Commercial Driving Instructor",
        students: 15,
        rating: 4.7,
        img: "",
        bio: "John has over 15 years of experience training drivers for both public transport and logistics sectors. His expertise ensures safe, efficient, and responsible driving."
      }
    ]
  }
  
];

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (method === "GET") {
    const courseId = parseInt(id);
    const course = testDataCourse.find((c) => c.id === courseId);

    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
