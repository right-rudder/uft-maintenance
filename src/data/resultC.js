import {
  COMPANY_NAME,
} from "../consts";

const resultC = {
  data: {
    pageTitle: `A Career as a Pilot Could Be Right for You! | ${COMPANY_NAME}`,
    pageDescription:
      `A professional pilot career might be the perfect fit for you. Learn more about our training programs and career opportunities!`,
    pageKeywords:
      `quiz, pilot career, commercial pilot, flight school, aviation training, ${COMPANY_NAME}`,
    header: {
      imagePath: "/src/assets/career-pilot-stock-image.jpg",
      imageAlt: `Aspiring commercial pilot in training`,
      headerH1: "A Career as a Pilot Could Be Right for You!",
      paragraph:
        `A professional pilot career might be the perfect fit for you. Learn more about our training programs and career opportunities!`,
      buttons: [
        {
          name: "Explore Training Programs",
          link: "/programs",
          primary: false,
        },
        {
          name: "Request More Info",
          link: "/contact",
          primary: false,
        },
      ],
    },
  },
};


export default resultC;