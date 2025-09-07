import { COMPANY_NAME, SITE_DESCRIPTION, KEYWORDS } from "../consts";

const ourTeam = {
  data: {
    //SEO Header Stuff
    pageTitle: `About us | ${COMPANY_NAME}`,
    pageDescription:
      "Learn about Universal Aircraft Maintenance, Sarasota’s trusted provider of professional aircraft service and inspections. With decades of combined experience, our certified technicians deliver reliable maintenance, repairs, and compliance checks to keep your aircraft safe and flight-ready.",
    pageKeywords:
      "Universal Aircraft Maintenance, Sarasota aircraft maintenance, aircraft inspections, FAA compliance, aviation service Florida, aircraft repairs Sarasota, aircraft mechanics Florida",
    //top header
    header: {
      imagePath: "/src/assets/cessna-in-uft-hangar.jpg",
      imageAlt: "Cessna airplane in the Universal Aircraft Maintenance hangar",
      headerH1: `</br><span class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">Trusted Aircraft Care</span> For Safety and Peace of Mind`,
      paragraph:
        "Our team of experienced mechanics and technicians are dedicated to providing the highest quality aircraft maintenance in Sarasota. Learn more about our crew and how we keep your plane safe, compliant, and ready for every flight.",
      buttons: [],
    },

    staffGrid: {
      imagePath: "/src/assets/uft-entire-team-picture.png",
      imageAlt: "Universal Aircraft Maintenance crew",
      upperHeading: "Meet Our Team",
      heading: "About us",
      description: `
          Founded with a commitment to excellence in aviation service, Universal Aircraft Maintenance is dedicated to keeping aircraft owners in Sarasota and the surrounding region flying safely. Our roots trace back to a vision of providing dependable, high-quality maintenance support for general aviation pilots and aircraft operators.<br>

          What began with a small team has grown into a trusted operation at Sarasota Bradenton International Airport (SRQ). Today, we are proud to be the go-to maintenance solution for aircraft owners seeking reliable service, transparent communication, and competitive pricing.<br>

          At Universal Aircraft Maintenance, we tailor our services to meet the unique needs of each aircraft. From routine oil changes and tire replacements to A/D compliance, 100-hour inspections, and major repairs, our team combines decades of hands-on expertise with a meticulous attention to detail.<br>

          With more than 30 years of combined experience working on Cessna, Piper, Cirrus, Beechcraft, and other aircraft, our technicians deliver the care and precision your plane deserves. We are committed to safety, efficiency, and ensuring every client feels confident taking to the skies.<br>

          Join the Universal Aircraft Maintenance family and discover a team that values your aircraft as much as you do.
        `,
      members: [],
    },

    maintenanceTeamGrid: {
      imagePath: "/src/assets/uft-maintenance-team-picture.jpg",
      imageAlt: "Universal Aircraft Maintenance maintenance crew",
      upperHeading: "Maintenance Team",
      heading: "Keeping You Safe and Ready to Fly",
      description:
        "Our skilled maintenance team is committed to ensuring your aircraft is in top condition for every flight. With decades of combined experience and a meticulous approach, our technicians provide exceptional service to keep your plane performing reliably and safely. Whether it’s routine maintenance, detailed inspections, or urgent repairs, our crew is here to support you with precision and care, so you can focus on flying with confidence.",
      members: [
        {
          name: `Paul Hopkins<br><small class="text-white font-normal text-sm">Mechanic</small>`,
          imagePath: "/src/assets/uft-Paul-Hopkins-Mechanic.jpg",
          imageAlt: "Universal Aircraft Maintenance Mechanic Paul Hopkins",
        },
        {
          name: `Frank Ferney<br><small class="text-white font-normal text-sm">Mechanic</small>`,
          imagePath: "/src/assets/uft-Frank-Ferney-Mechanic.jpg",
          imageAlt: "Universal Aircraft Maintenance Mechanic Frank Ferney",
        },
      ],
    },

    adminTeamGrid: {
      imagePath: "/src/assets/uft-admin-team-picture.png",
      imageAlt: "Universal Aircraft Maintenance crew",
      upperHeading: "Admin Team",
      heading: "The Backbone of Universal Aircraft Maintenance",
      description:
        "Our administrative team is committed to delivering top-notch support and service at every stage of your aviation journey. With years of industry experience and a dedication to excellence, our staff is here to ensure your experience with Universal Aircraft Maintenance is seamless and supportive, helping you stay focused on reaching your aviation goals.",
      members: [
        {
          name: `Jose Santos<br><small class="text-white font-normal text-sm">CEO of Universal Aircraft Maintenance</small>`,
          imagePath: "/src/assets/uft-jose-santos-ceo.jpg",
          imageAlt: "Universal Aircraft Maintenance CEO Jose Santos",
        },
        {
          name: `Jacob Kyser<br><small class="text-white font-normal text-sm">Vice President</small>`,
          imagePath: "/src/assets/uft-jacob-kyser-vice-president.jpg",
          imageAlt: "Universal Aircraft Maintenance Vice President Jacob Kyser",
        },
        {
          name: `Carter Kerwin<br><small class="text-white font-normal text-sm">Admin</small>`,
          imagePath: "/src/assets/uft-Carter-Kerwin-Intern.jpg",
          imageAlt: "Universal Aircraft Maintenance Intern Carter Kerwin",
        },
      ],
    },
    flightTeamGrid: {
      imagePath: "/src/assets/uft-flight-team-picture.png",
      imageAlt: "Universal Aircraft Maintenance crew",
      upperHeading: "Flight Instructors Team",
      heading: "Guiding You to New Heights",
      description:
        "Our team of experienced flight instructors is dedicated to providing top-quality training and mentorship at every step of your aviation journey. With a deep passion for flying and years of expertise, our instructors are here to ensure you receive exceptional guidance and support, helping you stay focused and confident as you work toward achieving your aviation dreams with Universal Aircraft Maintenance.",
      members: [
        {
          name: `Joe Vasquez<br><small class="text-white font-normal text-sm">Chief Flight Instructor</small>`,
          imagePath: "/src/assets/uft-joe-vazquez-chief-instructor.jpg",
          imageAlt:
            "Universal Aircraft Maintenance Chief Flight Instructor Joe Vasquez",
        },
        {
          name: `Daniel Gormley<br><small class="text-white font-normal text-sm">Flight Instructor</small>`,
          imagePath: "/src/assets/uft-Daniel-Gormley-instructor.jpg",
          imageAlt:
            "Universal Aircraft Maintenance Flight Instructor Daniel Gormley",
        },
        {
          name: `Justin Gorrell<br><small class="text-white font-normal text-sm">Flight Instructor</small>`,
          imagePath: "/src/assets/uft-Justin-Gorrell-instructor.jpg",
          imageAlt:
            "Universal Aircraft Maintenance Flight Instructor Justin Gorrell",
        },
        {
          name: `Matthew Bach<br><small class="text-white font-normal text-sm">Flight Instructor</small>`,
          imagePath: "/src/assets/uft-Matthew-Bach-instructor.jpg",
          imageAlt:
            "Universal Aircraft Maintenance Flight Instructor Matthew Bach",
        },
        {
          name: `Thomas Donetz<br><small class="text-white font-normal text-sm">Flight Instructor</small>`,
          imagePath: "/src/assets/uft-Thomas-Donetz-instructor.jpg",
          imageAlt:
            "Universal Aircraft Maintenance Flight Instructor Thomas Donetz",
        },
        {
          name: `Gabriel Perez<br><small class="text-white font-normal text-sm">Flight Instructor (CFII)</small>`,
          imagePath: "/src/assets/profile-silhouette-uft.webp",
          imageAlt:
            "Universal Aircraft Maintenance Flight Instructor Gabriel Perez",
        },
        {
          name: `Sydney Jilek<br><small class="text-white font-normal text-sm">Flight Instructor (CFII)</small>`,
          imagePath: "/src/assets/profile-silhouette-uft.webp",
          imageAlt:
            "Universal Aircraft Maintenance Flight Instructor Sydney Jilek",
        },
        {
          name: `Mark Ladwig<br><small class="text-white font-normal text-sm">Flight Instructor (CFII)</small>`,
          imagePath: "/src/assets/profile-silhouette-uft.webp",
          imageAlt:
            "Universal Aircraft Maintenance Flight Instructor Mark Ladwig",
        },
      ],
    },

    flyWithUsCTA: {
      imagePath: "/src/assets/uft-avel-chuklanov-copilot-over-shoulder.jpg",
      imageAlt: "Right Rudder Marketing team on the runway",
      headerH1: `<span class="text-primary-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
      paragraph:
        "Experience the thrill of flying with a discovery flight at Universal Aircraft Maintenance. Whether you're exploring a new hobby or dreaming of a professional pilot career, this is your chance to take the controls and see Sarasota and the surrounding Gulf Coast like never before. Schedule your discovery flight today and take the first step toward your aviation journey!",
      buttons: [
        {
          name: "Schedule Today",
          link: "/discovery-flight",
          primary: true,
        },
      ],
    },
  },
};
export default ourTeam;
