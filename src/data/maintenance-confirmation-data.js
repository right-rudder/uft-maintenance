import {
  COMPANY_NAME,
  KEYWORDS,
} from "../consts";

const maintenanceConfirmation = {
  data: {
    //SEO Header Stuff
    pageTitle: `Maintenance Request Confirmation | ${COMPANY_NAME}`,
    pageDescription:
      `Start your aviation journey with a discovery flight at ${COMPANY_NAME}. Contact us to schedule your flight today!`,
    pageKeywords:
      `${KEYWORDS}, aircraft repair, aircraft maintenance, aircraft oil change, annual inspections, a/d compliance, tire replacement, general inspections, pre-buy inspections`,


    header: {
      imagePath:
        "/src/assets/uft-plane-sunny.jpg",
      imageAlt: `${COMPANY_NAME} Fly Over Sunset`,
      headerH1: "THANK YOU",
      paragraph:
        `Thank for choosing ${COMPANY_NAME} for your maintenance needs. We look forward to keeping you safe and ready for the skies!<br>Please allow 1-3 business days for one of our Training Support Specialists to get in touch with you`,
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

export default maintenanceConfirmation;