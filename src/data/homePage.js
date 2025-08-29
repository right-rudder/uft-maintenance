import {
  COMPANY_NAME,
  SITE_DESCRIPTION,
  COMPANY_NAME_CAPS,
  COMPANY_NICKNAME,
  PHONE_NUMBER,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  EMAIL_ADDRESS,
  KEYWORDS
} from "../consts";

const locationCity = "Sarasota";
const locationStateShort = "FL";
const locationStateLong = "Florida";
const locationDescription = "A beautiful city with rich cultural heritage and access to coastal attractions.";
const locationCounty = "Sarasota County";
const locationKeyPlace1 = "Siesta Key Beach";
const locationKeyPlace2 = "Marie Selby Botanical Gardens";

const homePage = {
  data: {
    //SEO Header Stuff
    pageTitle: `${locationCity}, ${locationStateShort} Flight School for Pilot Training | ${COMPANY_NAME}`,
    pageDescription:
      `${SITE_DESCRIPTION}`,
    pageKeywords:
      `${KEYWORDS}, flight school ${locationCity} ${locationStateLong}, flight school ${locationCity} ${locationStateShort}, Private Pilot ${locationCity} ${locationStateLong}, Instrument Rating  ${locationCity} ${locationStateLong}, Commercial Pilot ${locationCity} ${locationStateLong}, Multi-Engine rating ${locationCity} ${locationStateLong}, Certified Flight Instructor ${locationCity} ${locationStateLong}, Sport Pilot ${locationCity} ${locationStateLong}, bachelor's in professional flight ${locationCity} ${locationStateLong}, bachelor's in aviation management ${locationCity} ${locationStateLong}, aircraft maintenance ${locationCity} ${locationStateLong}, discovery flight ${locationCity} ${locationStateLong}, intro flight ${locationCity} ${locationStateLong}, accelerated pilot training  ${locationCity} ${locationStateLong}, part time pilot training ${locationCity} ${locationStateLong}, ${COMPANY_NAME}, located at ${ADDRESS_LINE_1} ${ADDRESS_LINE_2}, ${PHONE_NUMBER}, ${COMPANY_NAME_CAPS}, ${COMPANY_NICKNAME}, ${EMAIL_ADDRESS}, how to become a pilot, flight school near, private pilot, discovery flight, introductory flight, instrument rating, commercial certificate, certified flight instructor, airline programs, how to become an airline pilot, flight school, pilot training, ${locationCity} flight school, personalized flight training, flexible flight programs, Private Pilot License training, Certified Flight Instructor (CFI) ${locationCity}, multi-engine training ${locationCity}, aviation school in ${locationStateLong}, Cessna 172 training, discovery flights ${locationCity}, pilot school near me, flight training with high pass rate, ${locationKeyPlace1}, ${locationKeyPlace2}, ${locationCounty}`,

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/uft-2006-Cessna-Skyhawk-172s.webp",
      imageAlt:
        "UFT's plane, a Cessna Skyhawk 172s 2006 on the runway viewed from the front with the co-pilot's side, under clear blue skies",
      headerH1: `Are you ready to <br class="hidden lg:block" ><div class="bg-gradient-to-br from-accent-500 via-accent-300 to-accent-400 bg-clip-text text-transparent">Become A Pilot?</div>`,
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

    whyUFT: {
      upperHeading: "You Can Become a Pilot",
      heading: "The UFT EXPERIENCE",
      descriptions: [
        "We are committed to your pilot training success.  We offer a diverse range of programs designed to skyrocket you in the world of aviation. Our experienced instructors and state-of-the-art fleet ensure you receive the best training possible.",
        `When you choose to fly at ${COMPANY_NAME}, you are choosing to fly with the best of the best.  Come see why everyone in the ${locationCounty} region is checking out ${COMPANY_NICKNAME}.`,
      ],
      bullets: [
        {
          title: "LOCAL AVIATION EXPERTISE",
          descriptions: [
          `Our experienced instructors bring years of expertise to flight training in the Sarasota and Bradenton area, ensuring top quality instruction.`,
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "PERSONALIZED FLIGHT TRAINING",
          descriptions: [
            `We offer customized, one-on-one training to help aviation students in Venice, Lakewood Ranch, ${locationCounty}, and surrounding areas achieve their goals.`,
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "DEDICATED CUSTOMER SERVICE",
          descriptions: [
            `Our team is committed to providing outstanding service to aviation enthusiasts throughout the Sarasota and the whole Central West ${locationStateLong} region.`,
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "COMPREHENSIVE FLIGHT LESSONS",
          descriptions: [
            `Our structured training programs offer a well organized learning experience, tailored for aspiring pilots in Palmetto, Osprey, ${locationCity} and nearby communities.`,
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
      ],
      imageLegend: `Jose Santos<br><small class="text-white font-normal text-sm">CEO of Universal Flight Training</small>`,
      imagePath: "/src/assets/uft-jose-santos-ceo.jpg",
      imageAlt:
        "CEO for Universal Flight Training Jose Santos",
    },

    quizCTA: {
      upperHeading: "Take Our Quiz",
      heading: "What's Your Ideal Path to Becoming a Pilot?",
      descriptions: [
        "Many aspiring pilots hesitate due to concerns about cost, time commitment, and career opportunities. It’s normal to feel uncertain when starting something new. At Universal Flight Training, we’re here to help you navigate your options and find the best path for your aviation journey.",

        "You don’t need to make a big commitment upfront. Your journey can start with an affordable Discovery Flight, giving you a firsthand experience before deciding on full training. Whether you're looking to fly for fun, start a career, or explore aviation at your own pace, we provide flexible programs to fit your needs.",

        `Not sure where to start? Take our "What's Your Ideal Path to Becoming a Pilot?" quiz! In just a few questions, you’ll gain insight into which training route suits your goals. Whether you dream of flying commercially, for personal adventure, or as an instructor, this quiz will guide you toward the right next step.`,
      ],
      imageLegend: ``,
      imagePath: "/src/assets/uft-flight-school-right-for-me.jpg",
      imageAlt: "Universal flight school student posing in front of plane",
      buttons: [
        {
          name: "Take the Quiz",
          link: "/quiz",
          primary: true,
        },
      ],
    },

    testimonials: {
      upperHeading: "The UFT Family",
      heading: "Our Students Love Us",
      headingText: [
        `At ${COMPANY_NAME}, our top priority is to train future pilots safely and effectively, but we also strive to create a fun and comfortable learning environment.`,
        `See what our students and visitors have to say about their experiences at ${COMPANY_NICKNAME}!`,
      ],
      buttonText: "Leave Us a Review",
      buttonLink:
        "https://search.google.com/local/writereview?placeid=ChIJc3mhi8w_w4gRnHFQZSqoiJA",
      reviews: [
        {
          body: "Our son Christian took his very first discovery flight at the age of 13 and it was an absolutely incredible experience!  That smile on his face says it all!  His instructor was so good with him and gave him some great information.  I would recommend this place to any future aviators, we will definitely be back!",
          author: "Cori R.",
        },
        {
          body: "Excellent place to train! Whether it is flying or taking a written knowledge exam, I highly recommend Universal Flight Training. The staff cares about your success. During my IRA knowledge exam, there was an unexpected county-wide internet outage. Jose allowed me to wait at the location until the internet was working again, and did everything in his power to help me take the test the same day it was scheduled. True class all around!",
          author: "Nick S.",
        },
        {
          body: "Great vibes from this place. We had a mechanical over the weekend and were grounded far from home. Jose and team went above and beyond (staying late on a Sunday!) to get us home by Sunday evening. This action speaks to the care and quality at this facility.",
          author: "Seth P.",
        },
        {
          body: "We rented a plane for a trip. Jose was very helpful in making our trip possible. His instructor Aldo was friendly and professional and helped get the checkout done quickly. The airplane was clean and well maintained. I highly recommend UFT for rental or flight instruction.",
          author: "Ryan O.",
        },
        {
          body: "Jose - who runs the flying school - was a fantastic instructor for my introductory lesson - very professional, talking me through everything before, during and after the flight. And it's a great location to learn to fly - spectacular views all around. Definitely recommend!",
          author: "Olliver K.",
        },
        {
          body: "I started attending UFT for my Private Pilots License and have gone all the way through to CFI. The quality of the staff and instructors are great and I’ve thoroughly enjoyed my time here at UFT. I can’t thank the team enough for all of the care and support they put into my training. Great aircraft options as well. Would recommend to anyone looking to learn how to fly or rent an aircraft.",
          author: "Aldo M.",
        },
        {
          body: "Great school with great instructors and well maintained planes. The owner Jose and all his staff are great people. One of the few places that offers a ground school course for both PPL and IFR. Ramp has easy access to taxiways for quick departures so it doesn’t run up the hobbs on you while also allowing you to gain valuable communications experience. SRQ controllers are also very accommodating and know the tail numbers and work well with you for IFR training. Overall great experience and I highly recommend them.",
          author: "Eric S.",
        },
      ],
    },
  },
};
export default homePage;
