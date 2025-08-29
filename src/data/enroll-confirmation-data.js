import {
  COMPANY_NAME,
  KEYWORDS,
} from "../consts";

const enrollConfirmation = {
  data: {
    //SEO Header Stuff
    pageTitle: `Enroll Confirmation | ${COMPANY_NAME}`,
    pageDescription:
      `Start your aviation journey with a discovery flight at ${COMPANY_NAME}. Contact us to schedule your flight today!`,
    pageKeywords:
      `${KEYWORDS} ,discovery flight, discovery flight training, discovery flight school, aviation academy, ${COMPANY_NAME}, flight training programs, aviation goals`,


    header: {
      imagePath:
        "/src/assets/uft-plane-sunny.jpg",
      imageAlt: `${COMPANY_NAME} Fly Over Sunset`,
      headerH1: "THANK YOU",
      paragraph:
        `Thank for your interest in ${COMPANY_NAME}. This is the first step to achieving your aviation goals!<br>Please allow 1-3 business days for one of our Training Support Specialists to get in touch with you`,
      buttons: [
        {
          name: "Home Page",
          link: "/",
          primary: false,
        },
      ],
    },
  }
};

export default enrollConfirmation;