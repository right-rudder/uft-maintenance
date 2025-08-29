import {
  COMPANY_NAME,
  KEYWORDS,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  GMAPS,
} from "../consts";

const contactPage = {
  data: {
    //SEO Header Stuff
    pageTitle: `Contact us | ${COMPANY_NAME}`,
    pageDescription: `Get in touch with ${COMPANY_NAME} for all your flight training, aircraft maintenance, and aviation service needs. Our team is ready to assist you with any questions and help guide you on your aviation journey. Contact us today to learn more or to book a service!`,
    pageKeywords: `${KEYWORDS}, contact ${COMPANY_NAME}, flight training inquiries, aviation services, aircraft maintenance booking, Sarasota aviation support, contact flight school, Sarasota aviation maintenance`,

    header: {
      stars: true,
      imagePath: "/src/assets/uft-logo-new-bg-gradient-blue.png",
      imageAlt: `${COMPANY_NAME} logo`,
      headerH1: `<div class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">Contact</div><div class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">${COMPANY_NAME}</div>`,
      paragraph: `Whether you’re ready to start your flight training, schedule maintenance for your aircraft, or simply have questions about our programs, the team at ${COMPANY_NAME} is here to assist you.`,
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
        {
          name: "Maintenance Form",
          link: "/services/maintenance",
          primary: false,
        },
      ],
    },

    info: {
      form_url: import.meta.env.CONTACT_WEBHOOK_URL,
      redirect_url: "/enroll-confirmation",
      campaign: "contact_us",
      form_h: "Connect with Us",
      form_p1:
        "For questions about flight training, scheduling a discovery flight, or booking maintenance services, our team is here to help. At Universal Flight Training, we’re committed to providing you with the guidance and support you need at every stage of your aviation journey.",
      form_p2:
        "Located at Sarasota Bradenton International Airport, we’re proud to serve both aspiring pilots and aircraft owners. Fill out the contact form, and one of our team members will be in touch soon to answer your questions or assist with your booking.",
      address_1: ADDRESS_LINE_1,
      address_2: ADDRESS_LINE_2,
      gmaps: GMAPS,
      phone_num: PHONE_NUMBER,
      email: EMAIL_ADDRESS,
      // label: "Which maintenance service are you interested in?",
      // options: [
      //   "Oil Change",
      //   "Annual Inspection",
      //   "100 Hour",
      //   "Altimeter",
      //   "Transponder",
      //   "Major Alteration or Repair (Form 337)",
      //   "Airworthiness Directives",
      //   "A/D Compliance",
      //   "Tire Replacement",
      //   "General Inspections",
      //   "Pre-buy Inspections",
      //   "Other (Please specify in Notes)",
      // ],
      // extra_info: [
      //   {
      //     label: "Aircraft Manufacturer",
      //     id: "aircraft-manufacturer",
      //   },
      //   {
      //     label: "Aircraft Type",
      //     id: "aircraft-type",
      //   },
      // ],
      textArea:
        "Say hello! Our team will be happy to answer any questions you might have about our programs",
      checkboxText: `I agree to <a href="/terms-of-service" target="_blank" class="font-semibold hover:underline">terms</a> & <a href="/privacy-policy" target="_blank" class="font-semibold hover:underline">conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.`,
    },
  },
};
export default contactPage;
