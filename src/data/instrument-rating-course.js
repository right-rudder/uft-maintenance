const instrumentRating = {
  data: {
    //SEO Header Stuff
    pageTitle: "INSTRUMENT RATING COURSE | Universal Flight Training",
    pageDescription:
      "Elevate your flying skills with UFT’s Instrument Rating Course. Learn to navigate and operate safely in low-visibility conditions using advanced avionics and expert guidance from our experienced instructors.",
    pageKeywords:
      "Instrument Rating Course, IFR training Sarasota, flight training in low visibility, instrument pilot certification, advanced aviation training, Garmin G1000 training",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/uft-kristopher-allison-pilot-flying-plane.jpg",
      imageAlt: "Picture of a pilot flying aircraft under cloudy sky, sourced from unsplash, piture by Kristopher Allison",
      headerH1: `Instrument Rating <br class="hidden lg:block" ><span class="text-accent-200">Course</span>`,
      paragraph:
        `This course is designed for pilots who have already earned their Private Pilot Certificate and are ready to advance to the next level. The Instrument Rating course equips you with the skills to fly safely in a wider range of weather conditions, enhancing your abilities and making you a more versatile pilot.`,
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
      title: `Instrument Rating<br> Certification`,
      paragraphs: [
        "An Instrument Rating allows you to operate under Instrument Flight Rules (IFR), enabling you to fly without relying solely on visual ground references. With this certification, you gain the ability to navigate through clouds, adverse weather, and challenging visibility conditions, making it a valuable addition for cross-country flights and overall flight safety. Instrument-rated pilots also demonstrate greater precision and adherence to procedures, making this an essential step if you plan to pursue commercial or airline transport pilot certifications in the future.",
        "The Instrument Rating is not only a practical skill booster but a major safety upgrade, allowing you to fly more confidently and complete flights that would be impossible without IFR privileges. Now, let’s look at the steps involved in obtaining your Instrument Rating at Universal Flight Training.",
      ],
    },

    roadmap: {
      upperHeading: "Roadmap",
      heading: "Instrument Rating",
      descriptions: [
        "Your aviation dreams are our priority. Whether you’re aiming for a professional career, building flight hours, or exploring for fun, we offer the ideal path to reach your goals.",
      ],
      steps: [
        {
          title: "Start with Ground Training for Instrument Flight Rules (IFR)",
          paragraphs: [
            "As a licensed private pilot, you’ll begin with ground instruction focused on instrument flight rules (IFR), covering essential topics like navigation, weather interpretation, and IFR procedures. At Universal Flight Training, we provide a comprehensive Instrument Pilot Kit, along with expert-led classroom sessions and resources to help you grasp the intricacies of flying without relying on visual cues.",
            "This phase will strengthen your understanding of air traffic control procedures, interpreting instruments, and reading IFR charts. With this foundation, you’ll be well-prepared for both the written exam and practical application of IFR concepts.",
          ],
          imagePath: "/src/assets/ground-school-training.jpg",
          imageAlt: "Universal Flight school students attending ground school",
        },
        {
          title: "Simulated Instrument Training with Flight Simulator",
          paragraphs: [
            "Once you’re comfortable with IFR theory, you’ll move on to simulated instrument training. Here at Universal Flight Training, we incorporate 10 hours in a state-of-the-art flight simulator, allowing you to practice critical instrument skills in a realistic yet controlled environment. This training introduces you to IFR operations and procedures, all while eliminating the stress of actual in-flight conditions.",
            "Using the simulator, you’ll gain experience handling various weather scenarios, system malfunctions, and instrument-only navigation, making you more precise and adept when you’re ready to fly under actual IFR conditions.",
          ],
          imagePath: "/src/assets/Flight-Simulation-Training.webp",
          imageAlt: "Picture of a pilot instructing a student on a simulator, sourced from learntofly.edu.au",
        },
        {
          title: "Begin IFR Flight Training with a Certified Instructor",
          paragraphs: [
            "With simulator hours complete, you’ll transition to flying Universal Flight Training’s modern Cessna aircraft, which are equipped with advanced avionics designed to make your instrument training smooth and enjoyable. During this stage, you’ll conduct 40 hours of hooded and cross-country flying under instrument conditions, supervised by a certified flight instructor (CFI) to ensure safe and effective training.",
            "This phase focuses on safely navigating through clouds, managing IFR clearances, and precisely following instrument approaches. You’ll also gain valuable experience flying longer cross-country routes, which is ideal for developing your skills in navigation and adherence to IFR flight plans.",
          ],
          imagePath: "/src/assets/uft-kristopher-allison-pilot-flying-plane.jpg",
          imageAlt: "Picture of a pilot flying aircraft under cloudy sky, sourced from unsplash, piture by Kristopher Allison",
        },
        {
          title: "Prepare for and Pass the FAA Instrument Knowledge Test",
          paragraphs: [
            "After completing your flight hours, the next step is to pass the FAA Instrument Knowledge Test. At Universal Flight Training, we provide personalized support, including review sessions and exam preparation materials, to help you confidently approach this written exam. Our instructors will guide you through practice tests and key concepts to ensure you’re ready for the questions on IFR regulations, navigation, and weather analysis.",
            "A passing score on this exam is essential for eligibility for the instrument checkride, bringing you one step closer to earning your Instrument Rating.",
          ],
          imagePath: "/src/assets/uft-jason-coudriet-studying.jpg",
          imageAlt: "Picture of a person taking a test, sourced from unsplash, piture by Jason Coudriet",
        },
        {
          title: "Instrument Checkride",
          paragraphs: [
            "The final requirement for your Instrument Rating is the checkride, a two-part exam with an oral and practical portion. At Universal Flight Training, we prepare you for this step with mock checkrides, personalized feedback, and dedicated training sessions. The oral portion tests your knowledge of IFR procedures and regulations, while the practical portion evaluates your ability to safely fly under IFR conditions, including approach procedures and emergency scenarios.",
            "This checkride does not require you to use your own aircraft, making it an accessible and streamlined experience. Passing it earns you the Instrument Rating, giving you the confidence and qualifications to fly safely in a wider range of weather conditions.",
          ],
          imagePath: "/src/assets/uft-instrument-proficiency-check-cover-picture.jpg",
          imageAlt: "UFT plane flying at night",
        },
      ],
      finalParagraph:
        "With your Instrument Rating, you’ll be equipped to fly through clouds and challenging weather, expanding your capabilities as a pilot and enhancing your cross-country and safety skills. Here at Universal Flight Training, our goal is to make this journey smooth, informative, and rewarding, so you’re ready to take on the skies confidently under IFR.",
      finalButton: {
        name: "Enroll Now",
        link: "/enroll-now",
        primary: true,
      },
    },
  },
};
export default instrumentRating;