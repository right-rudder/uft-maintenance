import {
  COMPANY_NAME,
} from "../consts";

const resultA = {
  data: {
    pageTitle: `You're Ready to Start Your Flight Training Journey! | ${COMPANY_NAME}`,
    pageDescription:
      `You have what it takes to begin your flight training journey. Take the next step toward becoming a pilot by enrolling in our program today!`,
    pageKeywords:
      `quiz, pilot quiz, flight training, aviation career, enroll now, ${COMPANY_NAME}`,
    header: {
      imagePath: "/src/assets/airplane-sunset-stock-image.jpg",
      imageAlt: `Flight training student preparing for takeoff`,
      headerH1: "You're Ready to Start!",
      paragraph:
        `You have what it takes to begin your flight training journey. Take the next step toward becoming a pilot by enrolling in our program today!`,
      buttons: [
        {
          name: "Enroll Now",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "Contact Us",
          link: "/contact",
          primary: false,
        },
      ],
    },
  },
};

export default resultA;