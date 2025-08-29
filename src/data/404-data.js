import {
  COMPANY_NAME,
  SITE_DESCRIPTION,
  KEYWORDS,
} from "../consts";

const data404 = {
  data: {
    //SEO Header Stuff
    pageTitle: `404 | ${COMPANY_NAME}`,
    pageDescription:
      `This page shows a 404 error`,
    pageKeywords:
      `404 error`,


    header: {
      imagePath:
        "/src/assets/uft-plane-taking-off-runway.jpg",
      imageAlt: `${COMPANY_NAME} plane taking off`,
      headerH1: `well, this is <div class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">AWKWARD</div>`,
      paragraph:
        `It appears the page you're trying to access has already taken off, if you were trying to get some useful information please inform us so we can better accomodate your needs, otherwise just head on back to landing!`,
      buttons: [
        {
          name: "Home Page",
          link: "/",
          primary: false,
        },
        {
          name: "Contact us",
          link: "/contact",
          primary: false,
        },
      ],
    },
  }
};

export default data404;