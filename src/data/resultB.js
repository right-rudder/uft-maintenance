import {
  COMPANY_NAME,
} from "../consts";

const resultB = {
  data: {
    pageTitle: `You’d Love a Discovery Flight! | ${COMPANY_NAME}`,
    pageDescription:
      `Experience the joy of flying with a discovery flight. Get a taste of what it's like to be at the controls of an aircraft!`,
    pageKeywords:
      `quiz, pilot quiz, discovery flight, intro flight, aviation experience, ${COMPANY_NAME}`,
    header: {
      imagePath: "/src/assets/uft-plane-over-islands.jpg",
      imageAlt: `Student enjoying a discovery flight`,
      headerH1: "You’d Love a Discovery Flight!",
      paragraph:
        `Experience the joy of flying with a discovery flight. Get a taste of what it's like to be at the controls of an aircraft!`,
      buttons: [
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
        {
          name: "Learn More",
          link: "/blog/why-a-discovery-flight-is-the-perfect-first-step-in-your-aviation-journey/",
          primary: false,
        },
      ],
    },
  },
};


export default resultB;