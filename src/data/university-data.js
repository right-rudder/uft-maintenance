import {
  COMPANY_NAME,
} from "../consts";
const VANITY_URL = "https://www.purdueglobal.edu/degree-programs/aviation/online-bachelor-professional-flight/";

const universityData = {
  data: {
    //SEO Header Stuff
    pageTitle: `University Programs | ${COMPANY_NAME} feat. Purdue GLobal`,
    pageDescription: "Discover the advantages of Universal Flight Training's partnership with Purdue Global. Earn a bachelor's degree in Professional Flight or Aviation Management while completing your flight training. Flexible, affordable, and designed to advance your aviation career.",
    pageKeywords: "Universal Flight Training, Purdue Global, Professional Flight degree, Aviation Management degree, Sarasota flight school, Bradenton flight school, online aviation degrees, pilot education, flight school university partnership, flexible aviation training",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/bg-clouds-from-above.webp",
      imageAlt:
        "Picture of clouds from above",
      headerH1: `<p class="text-2xl md:text-4xl lg:text-6xl font-semibold">Are you ready for <br class="hidden lg:block" ><div class="bg-gradient-to-br from-accent-300 via-accent-200 to-accent-400 bg-clip-text text-transparent">the next step?&nbsp</div></p>`,
      paragraph: `Universal Flight Training is partnering with Purdue Global to offer online bachelor’s degrees in professional flight and aviation management`,
      buttons: [
        {
          name: "Enroll",
          link: `${VANITY_URL}`,
          primary: false,
        },
        {
          name: "Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
      ],
    },
    content: {
      intro: `Our partnership with Purdue Global offers benefits to our flight school students who are interested in
              advancing their aviation career. The School of Aviation includes online bachelor’s degrees in professional
              flight or aviation management.`,
      
      bannerSrc: "/src/assets/university-page-banner.jpg",
      bannerAlt: "Universal Flight Training (logo) & Purdue Global (logo)",
      
      courses: [
        {
          title: `BS in Professional Flight`,
          text: `Purdue Global’s professional flight degree program is a collaboration between Purdue Global and
                  Purdue University’s School of Aviation and Transportation Technology. It combines the quality of
                  Purdue’s legendary aviation program spanning more than six decades with the flexibility and
                  affordability that Purdue Global offers. Legendary aviators like Amelia Earhart, Neil Armstrong, and Sully
                  Sullenberger once called Purdue University their home.`,
          ul: `After completing your professional pilot certificates and ratings, you could receive 45 transfer credits
                when enrolled in the professional flight degree at Purdue Global, which could help you:`,
          lis: [
            `Complete a bachelor’s degree in professional flight online in 2–3 years`,
            `Save up to $28,400 in tuition`,
            `Work on your degree while completing your flight training or working as a full-time flight instructor`,
          ]
        },
        {
          title: `BS in Aviation Management`,
          text: `Purdue Global’s aviation management program combines aviation operations and business
management skills to develop you for managerial-level positions. Offered 100% online, you’ll gain
specialized knowledge of the aviation industry, taught by faculty with years of aviation industry
experience as pilots, entrepreneurs, executives, managers, and military personnel. This program can
also accept eligible transfer credits for those who hold FAA certificates and ratings.`,
        },
      ],

      reasonsH: `Why Choose Purdue Global?`,
      reasonsLi: [
        `Receive a Partner School Tuition Reduction: Purdue Global’s alliance with our flight school
        includes a variety of time- and money-saving benefits. Through the partnership, all students and
        immediate family members receive a 20% tuition reduction on undergraduate programs and a
        14% tuition reduction on graduate programs. Textbooks are included for undergraduate
        programs.`,
        `Created for Adults: With flexible learning options, a generous transfer credit policy, and
        personalized support, we&#39;re dedicated to helping you achieve your goals.`,
        `Nationally Ranked and Respected: Purdue Global is part of the respected Purdue University
        system, one of the most prestigious research universities in the world.`,
      ],
      reasonsCTA: `Enroll now or visit <a class="hover:text-accent-300 underline" href=${VANITY_URL} target="_blank" rel="noopener noreferrer">the website</a> to learn more about this
      opportunity.`,

      ctaButtons: [
        {
          name: "Enroll at Purdue University",
          link: `${VANITY_URL}`,
        }
      ],

      additionalInfo: [
        {
          h: `Credit for Prior Learning:`,
          p: `See the University Catalog for Prior Learning policy. Credits for certifications
          apply only to BS in Professional Flight.`,
        },
        {
          h: `Employment and Completion Time:`,
          p: `Purdue Global cannot guarantee employment or career
          advancement. This program is relatively new and thus historical data regarding time to completion are
          not available. Completion time estimates based on: 3 years, 2 courses per term; 2 years, 3 courses per
          term.`,
        },
        {
          h: `Nationally Ranked and Respected:`,
          p: `Source: www.timeshighereducation.com/student/best-
          universities/best-public-universities-united-states. Rankings apply to Purdue University West Lafayette
          and not to Purdue Global.`,
        },
        {
          h: `Textbooks:`,
          p: `Not all courses require textbooks; some use electronic instructional materials. Books and
          course materials are included in the price of tuition for all undergraduate courses. Graduate students
          are responsible for the cost of textbooks/instructional materials.`,
        },
        {
          h: `Tuition Reduction:`,
          p: `Must be an employee, member (if an association), flight student (if a flight school),
          or family member of an employee, member, or flight student of an organization with which Purdue
          Global has an educational relationship; family members include spouses, domestic partners, parents,
          siblings, and children. Tuition reduction cannot be applied in conjunction with any other Purdue Global
          reduction, voucher, scholarship, military tuition reductions, or ExcelTrack® pricing.`,
        },
      ]
    }
  },
};
export default universityData;
