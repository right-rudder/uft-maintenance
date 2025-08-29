const pilotTrainingGuide = {
  data: {
    //SEO Header Stuff
    pageTitle:
      "Pilot Training Guide | Universal Flight Training",
    pageDescription:
      "Navigate your aviation journey with UFT’s Pilot Training Guide. Learn about the steps, certifications, and requirements to become a pilot, from beginner to advanced levels, with our expert instructors by your side.",
    pageKeywords:
      "Pilot Training Guide, aviation training roadmap, become a pilot Sarasota, flight certification steps, beginner to advanced pilot training, pilot career guidance",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/uft-kristopher-allison-pilot-flying-plane.jpg",
      imageAlt:
        "Universal flight training view of pilot over the shoulder",
      headerH1: `Pilot Training <br class="hidden lg:block" ><span class="text-accent-200">GUIDE</span>`,
      paragraph: `Universal Flight Training is your flight school to<br class="hidden lg:block" >become a pilot in the Sarasota Bradenton Florida area.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
      ],
    },

    programs: {
      upperHeading: "Learn More About",
      heading: "Our Training Programs",
      description:
        "Whether you are pursuing a professional career, building flight hours, or seeking leisurely adventure, we have the perfect program for you, no matter what your experience level is.",
      cards: [
        {
          title: "Professional Pilot Course",
          imagePath: "/src/assets/uft-professional-pilot-course.webp",
          imageAlt: "UFT student and Instructor taking off",
          description:
            "Comprehensive program covering private, instrument, commercial, and multi-engine flight training.",
          link: "/pilot-training-guide",
        },
        {
          title: "Private Pilot",
          imagePath: "/src/assets/uft-private-pilot.webp",
          imageAlt: "Photograph of a plane", //Change later - more info
          description:
            "Your passport to the skies! Learn to pilot your dreams with our Private Pilot Course.",
          link: "/programs/private-pilot-course",
        },
        {
          title: "Instrument Rating",
          imagePath: "/src/assets/uft-intrument-rating.webp",
          imageAlt: "Photograph of assistive equipment", //Change later
          description:
            "Navigate through clouds and the skies with precision through our Instrument Rating course.",
          link: "/instrument-rating",
        },
        {
          title: "Commercial Pilot",
          imagePath: "/src/assets/uft-commercial-pilot-course-picture.webp",
          imageAlt: "Photograph of plane's propellers",
          description:
            "Start your pilot career with our Commercial Pilot Course. Your path to the captain's seat is here.",
          link: "/commercial-pilot-training",
        },
        {
          title: "Airline Transport Pilot",
          imagePath:
            "/src/assets/uft-airline-transport-pilot-course-picture.webp",
          imageAlt:
            "Universal Flight Training airline transport pilot course cover picture",
          description:
            "For many this is their goal. The ATP certificate is a minimum requirement to join the airlines.",
          link: "/airline-transport-pilot-atp",
        },
        {
          title: "Multi-Engine Rating",
          imagePath: "/src/assets/uft-multi-engine-rating-course-picture.webp",
          imageAlt:
            "Universal Flight Training Multi-Engine Rating course cover picture",
          description:
            "Master the art of multi engine flying and unlock new horizons in your aviation career.",
          link: "/multi-engine-rating",
        },
        {
          title: "Certified Flight Instructor",
          imagePath:
            "/src/assets/uft-certified-flight-instructor-course-picture.webp",
          imageAlt:
            "Universal Flight Training Certified Flight Instructor course cover picture",
          description:
            "Become a trusted guide in the world of aviation. Become a CFI and teach others to fly.",
          link: "/certified-flight-instructor-cfi",
        },
        {
          title: "Flight Review",
          imagePath: "/src/assets/uft-flight-review-course-picture.webp",
          imageAlt:
            "Universal Flight Training Flight Review course cover picture - Cessna Skyhawk",
          description:
            "Recurrent training requirement for pilots to ensure they maintain proficiency and safety standards.",
          link: "/flight-review-bfr",
        },
        {
          title: "Instrument Proficiency Check",
          imagePath: "/src/assets/uft-blue-skies-cloud.jpg",
          imageAlt:
            "Universal Flight Training Instrument Proficiency Check course cover picture - day sky and some clouds",
          description:
            "Stay current with our Instrument Proficiency Check (IPC) to ensure your instrument flying skills are up to date.",
          link: "/instrument-proficiency-check-ipc",
        },
      ],
    },
  },
};
export default pilotTrainingGuide;
