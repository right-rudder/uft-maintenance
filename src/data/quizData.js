import {
    COMPANY_NAME,
    COMPANY_NICKNAME,
    KEYWORDS,
    EMAIL_ADDRESS,
    PHONE_NUMBER,
    ADDRESS_LINE_1,
    ADDRESS_LINE_2,
    GMAPS
  } from "../consts";
  
  const quizPage = {
    data: {
      //SEO Header Stuff
      pageTitle: `Quiz | ${COMPANY_NAME}`,
      pageDescription:
        `${COMPANY_NAME} presents a fun and engaging quiz, 'Do You Have What It Takes to Be a Pilot?' Discover if you have the skills, mindset, and passion to conquer the skies. Perfect for aspiring aviators of all levels!`,
      pageKeywords:
        `pilot quiz, aviation skills test, become a pilot, flight training quiz, aspiring aviator quiz, aviation career test, ${COMPANY_NAME} quiz`,
  
      header: {
        stars: true,
        imagePath:
          "/src/assets/plane-flying.jpg",
        imageAlt: `${COMPANY_NAME} logo`,
        headerH1: `Quiz <span class="bg-gradient-to-br from-accent-500 via-accent-300 to-accent-400 bg-clip-text text-transparent">${COMPANY_NICKNAME}&nbsp</span>`,
        paragraph:
          `Whether you’re ready to start your flight training, schedule maintenance for your aircraft, or simply have questions about our programs, the team at ${COMPANY_NAME} is here to assist you.`,
        buttons: [
          {
            name: "Enroll Form",
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
  
      info:{
        form_url: import.meta.env.QUIZ_WEBHOOK_URL,
        redirect_url: "/enroll-confirmation",
        form_h: "What's Your Ideal Path to Becoming a Pilot?",
        form_p1: "This quick and engaging quiz will help you discover the best path to achieving your aviation goals. Whether you're looking to start a professional career, fly for fun, or advance your skills, your answers will help determine the right next steps for your journey.",
        form_p2: `At ${COMPANY_NAME}, we know every pilot’s journey is unique, and our mission is to guide you toward the best path for your aspirations. Whether you dream of flying commercially, enjoying recreational flights, or instructing future aviators, this quiz will help clarify your ideal training route. Answer a few questions, and let's find the perfect flight path for you!`,
        address_1: ADDRESS_LINE_1,
        address_2: ADDRESS_LINE_2,
        gmaps: GMAPS,
        phone_num: PHONE_NUMBER,
        email: EMAIL_ADDRESS,
        checkboxText: `I agree to <a href="/terms-of-service" target="_blank" class="font-semibold hover:underline">terms</a> & <a href="/privacy-policy" target="_blank" class="font-semibold hover:underline">conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.`,
      },
  
      quiz: {
        questions: [
          {
            question: "What’s your main reason for wanting to learn to fly?",
            options: [
              "I’ve always dreamed of becoming a professional pilot.",
              "I want to fly for fun and adventure.",
              "I’m looking for a flexible career with travel opportunities.",
              "I want to improve my skills and become a safer pilot."
            ]
          },
          {
            question: "How soon do you want to start training?",
            options: [
              "Right away! I’m ready to take off.",
              "Within the next few months.",
              "I’m still researching my options.",
              "I’m not sure—I’d like to talk to an expert first."
            ]
          },
          {
            question: "Have you ever flown in a small aircraft before?",
            options: [
              "Yes, I’ve flown and loved it!",
              "No, but I’m excited to try.",
              "I’ve taken a discovery flight before.",
              "I’ve logged some flight hours but haven’t finished my training."
            ]
          },
          {
            question: "What type of flying interests you most?",
            options: [
              "Commercial airline or corporate pilot career.",
              "Recreational flying for personal trips.",
              "Becoming a Certified Flight Instructor (CFI).",
              "Multi-engine or instrument-rated flying."
            ]
          },
          {
            question: "Are you ready for the commitment of flight training?",
            options: [
              "Yes, I’m ready to enroll.",
              "I need more information about schedules and financing.",
              "I’d like to start with a discovery flight first.",
              "I want to train at my own pace and see how it goes."
            ]
          },
          {
            question: "How would you describe your ideal training environment?",
            options: [
              "Structured and fast-paced, so I can earn my certifications quickly.",
              "Flexible, so I can balance flying with my other responsibilities.",
              "Hands-on with experienced instructors who can mentor me.",
              "A mix of classroom learning, simulator time, and real-world flying."
            ]
          },
          {
            question: "Would you like help financing your flight training?",
            options: [
              "Yes, I need information on financing options.",
              "No, I’m planning to pay out of pocket.",
              "I’m exploring scholarship or military benefits.",
              "I’m not sure—I'd like to learn more."
            ]
          },
        ],
        results: {
          type1: "You're Ready to Start Your Flight Training Journey!",
          type2: "You’d Love a Discovery Flight!",
          type3: "A Career as a Pilot Could Be Right for You!",
          type4: "You’re Interested but Need More Info!"
        }
      }
    }
  };
  
  export default quizPage;
  