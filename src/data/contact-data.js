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
    pageDescription: `Get in touch with ${COMPANY_NAME} for all your aircraft maintenance, inspections, and aviation service needs. Our experienced team is ready to assist you with scheduling, questions, and support to keep your aircraft safe and reliable. Contact us today to book your next service!`,
    pageKeywords: `${KEYWORDS}, contact ${COMPANY_NAME}, aircraft maintenance Sarasota, aviation inspections SRQ, schedule aircraft service, Sarasota aircraft repair, aviation maintenance support`,

    header: {
      stars: true,
      imagePath: "/src/assets/uft-logo-new-bg-gradient-blue.png",
      imageAlt: `${COMPANY_NAME} logo`,
      headerH1: `<div class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">Contact</div><div class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">${COMPANY_NAME}</div>`,
      paragraph: `Whether you need to schedule routine maintenance, arrange an inspection, or have questions about our services, the team at ${COMPANY_NAME} is here to assist you with professionalism and care.`,
      buttons: [
        {
          name: "Maintenance Form",
          link: "/services/maintenance",
          primary: true,
        },
        {
          name: "General Contact",
          link: "/contact",
          primary: false,
        },
      ],
    },

    info: {
      form_url: import.meta.env.CONTACT_WEBHOOK_URL,
      redirect_url: "/enroll-confirmation",
      campaign: "contact_us",
      form_h: "Connect with Our Maintenance Team",
      form_p1:
        "For questions about inspections, routine servicing, or specialized aircraft repairs, our experienced maintenance team is here to help. At Universal Aircraft Maintenance, safety and reliability come first.",
      form_p2:
        "Located at Sarasota Bradenton International Airport, we proudly serve aircraft owners, pilots, and operators throughout Florida. Fill out the contact form, and one of our technicians will be in touch soon to assist with your needs.",
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
        "Tell us about your aircraft maintenance needs and our team will be happy to assist.",
      checkboxText: `I agree to <a href="/terms-of-service" target="_blank" class="font-semibold hover:underline">terms</a> & <a href="/privacy-policy" target="_blank" class="font-semibold hover:underline">conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.`,
    },
  },
};

export default contactPage;
