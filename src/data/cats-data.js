import {
  COMPANY_NAME,
  KEYWORDS,
} from "../consts";

const catsPage = {
  data: {
    // SEO Header Stuff
    pageTitle: `CATS Testing | ${COMPANY_NAME}`,
    pageDescription:
      `Prepare for your FAA exams with confidence at ${COMPANY_NAME}'s certified CATS Testing facility. Conveniently located in Sarasota, our testing center is equipped to provide a seamless and comfortable testing experience for aspiring pilots. Schedule your exam today to take the next step in your aviation journey!`,
    pageKeywords:
      `${KEYWORDS}, FAA testing, aviation exams, CATS testing, aviation certification, CATS facility Sarasota, flight test facility, pilot exams`,
  
    header: {
      stars: true,
      imagePath:
        "/src/assets/uft-headway-person-studying.jpg",
      imageAlt: `${COMPANY_NAME} sourced from unsplash, image by headway`,
      headerH1: `<div class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">Certified</div>CATS TESTING<br class="hidden lg:block" >`,
      paragraph:
        `${COMPANY_NAME} proudly serves as a certified CATS Testing facility for FAA exams. Conveniently located at 8140 15th St E, Sarasota, FL 34243, our facility offers a professional environment for all your aviation certification needs.`,
      buttons: [],
    },

    pageContent: {
      upperHeading: "Prepare with Confidence",
      heading: "FAA CATS Testing Facility",
      descriptions: [
        "Universal Flight Training is proud to offer a certified FAA Computer Assisted Testing Service (CATS) facility, conveniently located in Sarasota. Our center is designed to provide a comfortable, professional environment for taking your aviation certification exams, from private pilot knowledge tests to advanced flight instructor exams.",
    
        "Computer Assisted Testing Service (CATS) is an essential tool for anyone pursuing an FAA certification. CATS ensures that all candidates are tested under the FAA's strict standards, allowing you to progress through your certification journey with the confidence that your exam is handled professionally and securely. Our facility is open to anyone looking to advance their aviation career with an official FAA certification exam.",
    
        "Ready to take the next step? Scheduling your exam is easy—simply visit the FAA’s official testing portal, enter our site number (LAS34204), and choose your preferred time slot. For additional assistance or more information, feel free to reach out to our team. We’re here to support you in every step toward achieving your aviation goals.",
      ],
      imageLegend: `CATS Testing Facility`,
      imagePath: "/src/assets/uft-thisisengineering-graphs-on-laptop.jpg",
      imageAlt: "UFT sourced from unsplash, image by thisisengineering",
      buttons: [
        {
          name: "Schedule Your Exam",
          link: "https://faa.psiexams.com/faa/login",
          primary: true,
        },
      ],
    },
  },
};
export default catsPage;
