const flightInstructor = {
  data: {
    //SEO Header Stuff
    pageTitle: "Certified Flight Instructor Course | Universal Flight Training",
    pageDescription:
      "Become a Certified Flight Instructor with UFT's comprehensive CFI course. Gain the skills and credentials needed to teach the next generation of pilots, with hands-on training from experienced instructors and a guaranteed interview opportunity upon graduation.",
    pageKeywords:
      "Certified Flight Instructor course, CFI training Sarasota, flight instructor certification, CFI school Florida, teach student pilots, aviation career training",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/uft-avel-chuklanov-copilot-over-shoulder.jpg",
      imageAlt: "universal flight training CFI cover, sourced from unsplash, picture by Avel Chuklanov",
      headerH1: `Certified Flight Instructor <br class="hidden lg:block" ><span class="text-accent-200">Course</span>`,
      paragraph:
        `The Certified Flight Instructor (CFI) course is a rewarding opportunity to share your passion for aviation while guiding new pilots through the fundamentals of flying. This certification empowers you to pass on your knowledge and skills, helping future aviators achieve their own dreams and fostering a safe, competent aviation community.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "How To Guide",
          link: "/pilot-training-guide",
          primary: false,
        },
      ],
    },

    pageSummary: {
      title: `Flight Instructor<br> Certification`,
      paragraphs: [
        "Becoming a CFI allows you to teach student pilots the essential techniques, safety protocols, and knowledge they need to become licensed pilots. Not only does this certification allow you to earn income as a flight instructor, but it also builds valuable flight hours and enhances your aviation knowledge. As a CFI, you’ll be qualified to teach ground and flight lessons, preparing your students for the Private Pilot License, Instrument Rating, and even advanced certificates. In the future, you can add multi-engine and instrument ratings to your instructor qualifications, making you an even more versatile educator.",
        "Let’s walk through the steps to earn your Certified Flight Instructor Certificate with Universal Flight Training.",
      ],
    },

    roadmap: {
      upperHeading: "Roadmap",
      heading: "Flight Instructor",
      descriptions: [
        "Your aviation dreams are our priority. Whether you’re aiming for a professional career, building flight hours, or exploring for fun, we offer the ideal path to reach your goals.",
      ],
      steps: [
        {
          title: "Meet the Initial Requirements",
          paragraphs: [
            "The journey to becoming a Certified Flight Instructor begins with meeting specific prerequisites, as outlined by FAA regulations. At Universal Flight Training, we’ll guide you through each requirement, ensuring you’re prepared for this new role in aviation. To start, you must be at least 18 years old, proficient in English, and hold a valid Commercial Pilot or Airline Transport Pilot certificate with the relevant ratings for the instruction you intend to provide.",
            "Our training program provides dedicated support for fulfilling all regulatory prerequisites, so you can focus on building the skills and knowledge needed to be an effective instructor.",
          ],
          imagePath: "/src/assets/uft-commercial-pilot-passed-checkride-on-top-of-cessna-172.jpg",
          imageAlt: "UFT student holding pilot certificate",
        },
        {
          title: "Complete Ground Instruction",
          paragraphs: [
            "Effective ground instruction is at the core of becoming a Certified Flight Instructor. At Universal Flight Training, you’ll complete 48 hours of in-depth ground training that covers the fundamentals of instruction, including teaching strategies, lesson planning, and aeronautical knowledge.",
            "Our curriculum emphasizes Cessna’s proven teaching methodologies, designed to produce competent, safety-focused pilots. With our experienced instructors and robust course materials, you’ll be well-prepared to handle all topics on the FAA knowledge exams and to pass on your knowledge confidently to future students.",
          ],
          imagePath: "/src/assets/ground-school-training.jpg",
          imageAlt: "Universal Flight school students attending ground school",
        },
        {
          title: "Conduct Flight Instruction Training",
          paragraphs: [
            "Once you’ve gained a solid foundation in instructional techniques on the ground, you’ll complete 15 hours of flight training to build the practical teaching skills required of a CFI. This flight training includes essential maneuvers, safety procedures, and emergency response techniques, ensuring you’re ready to provide students with the highest quality instruction.",
            "During your flight sessions, you’ll practice the stall awareness, spin entry, and spin recovery maneuvers necessary to teach these critical skills to your students. Universal Flight Training’s structured curriculum helps you develop the expertise needed to pass on these skills to student pilots effectively.",
          ],
          imagePath: "/src/assets/Flight-Simulation-Training.webp",
          imageAlt: "Picture of a pilot instructing a student on a simulator, sourced from learntofly.edu.au",
        },
        {
          title: "Pass the Knowledge and Practical Tests",
          paragraphs: [
            "The final step to obtaining your CFI certification is passing the FAA knowledge and practical exams. These exams test your understanding of instructional principles and aeronautical knowledge, as well as your ability to perform and teach flight maneuvers. Universal Flight Training offers personalized checkride preparation sessions to help you approach this final stage with confidence.",
            "Once you pass the exams, you’ll officially earn your CFI certificate, enabling you to begin teaching students and building valuable flight hours toward even higher-level aviation opportunities.",
          ],
          imagePath: "/src/assets/uft-avery-evans-studying.jpg",
          imageAlt: "Picture of a person studying for a test, sourced from unsplash, piture by Avery Evans",
        },
      ],
      finalParagraph:
        "Becoming a Certified Flight Instructor with Universal Flight Training is not only a step forward in your own aviation career but also a chance to inspire the next generation of pilots. Join us and begin this rewarding path, knowing that each student you teach will benefit from your dedication and expertise.",
      finalButton: {
        name: "Enroll Now",
        link: "/enroll-now",
        primary: true,
      },
    },
  },
};
export default flightInstructor;