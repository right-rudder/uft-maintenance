import {
  COMPANY_NAME,
  KEYWORDS,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  GMAPS,
} from "../consts";

const maintenancePage = {
  data: {
    //SEO Header Stuff
    pageTitle: `Maintenance | ${COMPANY_NAME}`,
    pageDescription: `Keep your aircraft performing at its best with professional maintenance services at ${COMPANY_NAME}. From routine oil changes and tire replacements to comprehensive annual and pre-buy inspections, our team is here to ensure your plane is in peak condition. Schedule your maintenance with us today for safe and reliable flying!`,
    pageKeywords: `${KEYWORDS}, aircraft repair, aircraft maintenance, aircraft oil change, annual inspections, a/d compliance, tire replacement, general inspections, pre-buy inspections`,

    header: {
      stars: true,
      imagePath: "/src/assets/uft-plane-on-maintenance.jpg",
      imageAlt: `${COMPANY_NAME} Maintenance team`,
      headerH1: `<div class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">service</div>and<br class="hidden lg:block" ><div class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">MAINTENANCE</div>`,
      paragraph: `${COMPANY_NAME} is pleased to offer full service and maintenance for your personal aircraft.
`,
      buttons: [],
    },

    info: {
      form_url: import.meta.env.MAINTENANCE_WEBHOOK_URL,
      redirect_url: "/maintenance-confirmation",
      campaign: "maintenance",
      form_h: "Book a Service",
      form_p1:
        "Keep your aircraft in top condition and experience peace of mind in every flight.",
      form_p2:
        "Schedule your maintenance services with us today. Fill out the form to get started.",
      address_1: ADDRESS_LINE_1,
      address_2: ADDRESS_LINE_2,
      gmaps: GMAPS,
      phone_num: PHONE_NUMBER,
      email: EMAIL_ADDRESS,
      label: "Which maintenance service are you interested in?",
      options: [
        "Oil Change",
        "Annual Inspection",
        "100 Hour",
        "Altimeter",
        "Transponder",
        "Major Alteration or Repair (Form 337)",
        "Airworthiness Directives",
        "A/D Compliance",
        "Tire Replacement",
        "General Inspections",
        "Pre-buy Inspections",
        "Other (Please specify in Notes)",
      ],
      extra_info: [
        {
          label: "Aircraft Manufacturer",
          id: "aircraft-manufacturer",
        },
        {
          label: "Aircraft Type",
          id: "aircraft-type",
        },
      ],
      textArea: "Notes or Aditional Information",
      checkboxText: `I agree to <a href="/terms-of-service" target="_blank" class="font-semibold hover:underline">terms</a> & <a href="/privacy-policy" target="_blank" class="font-semibold hover:underline">conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.`,
    },
    whyUFT: {
      upperHeading: "Your Aircraft in Expert Hands",
      heading: "THE UFT MAINTENANCE EXPERIENCE",
      descriptions: [
        "At Universal Flight Training, we are committed to keeping your aircraft in peak condition with our comprehensive maintenance services. Our experienced staff provides reliable care for your plane, ensuring safety, performance, and longevity.",
        "With decades of combined experience, our maintenance team is here to provide the highest quality service for pilots throughout the Sarasota region. Discover why Universal Flight Training is trusted for aircraft maintenance and care.",
      ],
      bullets: [
        {
          title: "EXPERT MAINTENANCE TEAM",
          descriptions: [
            "Our skilled technicians, Paul and Frank, bring over 30 years of experience working with Cessna, Piper, Cirrus, Beechcraft, Props, and Jets. Their expertise ensures your aircraft receives the best care possible.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "FULL-SERVICE AIRCRAFT CARE",
          descriptions: [
            "From oil changes to A/D compliance and tire replacements, we offer a full range of maintenance services to keep your aircraft running smoothly and safely.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "RELIABLE SERVICE AT REASONABLE RATES",
          descriptions: [
            "We are dedicated to providing quality maintenance services at competitive rates. Trust us to keep your plane airworthy without breaking the bank.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
          title: "CONVENIENT MAINTENANCE SCHEDULING",
          descriptions: [
            "Reach out to our team to schedule your maintenance appointment and receive current service rates. We’re here to keep you flying safely.",
          ],
          icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
      ],
      imageLegend: `Paul and Frank<br><small class="text-white font-normal text-sm">Experienced Maintenance Staff</small>`,
      imagePath: "/src/assets/uft-maintenance-crew.jpg",
      imageAlt:
        "Maintenance team members Paul and Frank from Universal Flight Training",
    },
  },
};
export default maintenancePage;
