const ourSimulator = {
  data: {
    //SEO Header Stuff
    pageTitle: "Flight Simulator Training | Universal Flight Training",
    pageDescription:
      "Train smarter with our FAA-approved Virtual Fly Solo Pro G1 AATD simulator. Perfect for instrument rating practice, emergency procedures, and cost-effective flight training in Sarasota, Florida.",
    pageKeywords:
      "flight simulator, AATD, Virtual Fly Solo Pro G1, FAA-approved simulator, instrument training, Universal Flight Training, pilot training, aviation simulator, Sarasota flight school",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/virtual-fly-solo-pro-g1-simulator.webp", // Updated image
      imageAlt:
        "Virtual Fly Solo Pro G1 FAA-approved simulator at Universal Flight Training",
      headerH1: `Advanced</br><span class="text-accent-300">Flight Simulator</span>`,
      paragraph:
        "Maximize your training efficiency with our FAA-approved Virtual Fly Solo Pro G1 AATD. Perfect for mastering instrument procedures, emergency scenarios, and complex maneuvers at a fraction of the cost of actual flight time.",
      buttons: [
        {
          name: "Book Simulator Time",
          link: "/contact",
          primary: false,
        },
      ],
    },

    pageSummary: {
      title: `Why Train in Our Simulator?`,
      paragraphs: [
        "The Virtual Fly Solo Pro G1 is an FAA-certified Advanced Aviation Training Device (AATD), allowing you to log up to 20 hours toward your instrument rating. With ultra-realistic Garmin avionics, force-feedback controls, and high-definition visuals, it replicates real-world flight dynamics for seamless skill transfer to actual aircraft.",
        "At Universal Flight Training, we combine cutting-edge simulation technology with expert instruction. Whether you're practicing IFR approaches, engine failures, or cross-country navigation, our simulator ensures you train safely, efficiently, and affordably.",
      ],
    },

    simulatorGrid: {
      upperHeading: "Explore",
      heading: "Our Simulator",
      description: `Our simulator offers an affordable and highly effective training environment for new and experienced pilots. FAA-approved and meticulously maintained, our flight simulator is designed to help you build skills safely and efficiently. Learn more about our available equipment below.`,
      aircraft: [
        {
          title: "Virtual Fly Solo Pro G1",
          imagePath: "/src/assets/virtual-fly-solo-pro-g1-simulator.webp",
          imageAlt: "Universal Flight Training Virtual Fly Solo Pro G1 flight simulator setup",
          description: `The Virtual Fly Solo Pro G1 is a FAA-approved Advanced Aviation Training Device (AATD) that offers a highly realistic flight training experience. It features a full cockpit layout with precise controls and realistic instrumentation, making it perfect for practicing instrument approaches, procedures, and maneuvers.<br>Rates:<br>$115/hr + $65/hr instructor`,
          link: "/contact",
          linkText: "Schedule a Session",
        },
      ],
    },
    
    benefits: {
      upperHeading: "Advantages",
      heading: "Simulator Training Benefits",
      description: "The Virtual Fly Solo Pro G1 AATD at Universal Flight Training provides an unparalleled training environment that enhances safety, reduces costs, and accelerates your learning curve. Here's how our FAA-approved simulator gives you the edge:",
      advantages: [
        {
          
          title: "Loggable Hours",
          description: "FAA allows 20 hours toward instrument rating (FAR 61.65).",
        },
        {
          
          title: "Save Money",
          description: "Practice procedures for less than half the cost of flying.",
        },
        {
          title: "Train in Any Weather",
          description: "Fly IFR approaches in storms, icing, or low visibility—safely.",
        },
        {
          
          title: "Instant Replay",
          description: "Review mistakes with your instructor in real time.",
        },
        {
          title: "G1000 Glass Cockpit",
          description: "Identical avionics to our Cessna 172 fleet for seamless transition.",
        },
        {
          title: "Risk-Free Emergencies",
          description: "Master engine failures, system malfunctions, and other critical scenarios with zero risk.",
        },
        {
          title: "Flexible Scheduling",
          description: "Available day/night with no weather cancellations or maintenance delays.",
        },
        {
          title: "Instructor Insights",
          description: "Pause and analyze your performance with CFIIs to accelerate progress.",
        },
      ],

    },

    bookCTA: {
      upperHeading: "Still looking for more information on pilot training?",
      headerH1: `Get Your <span class="text-accent-300">FREE</span><br> Pilot Training Guide!`,
      paragraph:
        "We have a free booklet which explains everything you need to know for your pilot certificate.",
      buttons: [
        {
          name: "Download Now",
          link: "/book-download",
          primary: true,
        },
      ],
      imagePath: "/src/assets/sun-city-book-mock-up.webp",
      imageAlt: "Right Rudder Marketing team on the runway",
    },

    quizCTA: {
      reverse: true,
      upperHeading: "Take Our Quiz",
      heading: "Do You Have What It Takes To Be A Pilot?",
      descriptions: [
        "Are you fascinated by the world of aviation? Have you dreamed of flying and exploring the skies? Do you often look upward at passing aircraft, wondering if you yourself could be in the cockpit?",
        "Begin your journey in aviation with our brief quiz. Our quiz is designed to look at your aviation related knowledge and aptitude, alongside your unique personality traits and interests, to provide insights into whether a future in aviation aligns with your aspirations.",
      ],
      imagePath: "/src/assets/sun-city-aviation-academy-be-pilot-square.jpg",
      imageAlt:
        "Universal Flight Training student flying a plane over the city of miami",
      quizModal: true,
    },

    flyWithUsCTA: {
      imagePath: "/src/assets/uft-avel-chuklanov-copilot-over-shoulder.jpg",
      imageAlt: "Right Rudder Marketing team on the runway",
      headerH1: `<span class="text-primary-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
      paragraph:
        "Experience the thrill of flying with a discovery flight at Universal Flight Training. Whether you're exploring a new hobby or dreaming of a professional pilot career, this is your chance to take the controls and see Sarasota and the surrounding Gulf Coast like never before. Schedule your discovery flight today and take the first step toward your aviation journey!",
      buttons: [
        {
          name: "Schedule Today",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },
  },
};
export default ourSimulator;
