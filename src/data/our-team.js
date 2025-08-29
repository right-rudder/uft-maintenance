import {
  COMPANY_NAME,
  SITE_DESCRIPTION,
  KEYWORDS,
} from "../consts";

const ourTeam = {
  data: {
    //SEO Header Stuff
    pageTitle: `About us | ${COMPANY_NAME}`,
    pageDescription: "Learn about Universal Flight Training, Sarasota’s premier aviation school offering flexible and personalized flight training. With a 98% checkride pass rate and over 500 graduates, we provide top-notch instruction, modern aircraft, and tailored programs to help you achieve your aviation goals.",
    pageKeywords: "Universal Flight Training, Sarasota aviation school, personalized flight training, 98% checkride pass rate, modern aircraft fleet, pilot training Sarasota, aviation school in Florida",
    //top header
    header: {
      imagePath: "/src/assets/cessna-in-uft-hangar.jpg",
      imageAlt: "Cessna airplane in the Universal Flight Training hangar",
      headerH1: `Come See</br><span class="bg-gradient-to-br from-accent-500 via-accent-200 to-accent-400 bg-clip-text text-transparent">What Everyone's Talking About</span>`,
      paragraph:
        "Our team of experienced pilots and instructors are dedicated to providing the highest quality flight training in Sarasota. Learn more about our team and how they can help you achieve your aviation goals.",
      buttons: [
        {
          name: "Say Hello",
          link: "/contact",
          primary: false,
        },
        {
          name: "Book a Discovery Flight",
          link: "/discovery-flight",
          primary: false,
        },
      ],
    },

    staffGrid: {
      imagePath: "/src/assets/uft-entire-team-picture.png",
      imageAlt: "Universal Flight Training crew",    
      upperHeading: "Meet Our Team",
      heading: "About us",
      description:
        `
          Founded in 2010 by Jose, a retired Master Gunnery Sergeant in the U.S. Marine Corps, Universal Flight Training (UFT) is an aviation school dedicated to providing high-quality, personalized flight training at Sarasota Bradenton International Airport (SRQ). Jose’s vision of starting a flight school began in the late 80s when he earned his pilot’s license in Florida, but it was only after his final military deployment that he could bring this dream to life. Starting with just one aircraft and a small office, UFT has grown into a top choice for aspiring pilots in Sarasota and beyond, known for its student-centered approach and commitment to building lifelong connections with its graduates.<br>

          At UFT, we believe in tailoring our programs to meet the unique goals and needs of each student. Whether you’re a career-changer, young adult, or college student, we offer flexible, custom training paths that allow you to excel at your own pace. Our range of courses spans Private Pilot Licenses (PPL) to advanced certifications like Certified Flight Instructor (CFI) and Multi-Engine Instructor (MEI), with accelerated and fast-track options available for those eager to advance quickly.<br>

          With an impressive 98% checkride pass rate and over 500 graduates since our founding, UFT stands out for its experienced team of Certified Flight Instructors (CFIs) who collectively hold 30,000 flight hours. Our modern fleet of aircraft, including Cessna 172s, a PA-28 Archer, and a PA-44 with Garmin G1000, GNS430, and Avidyne systems, provides students with real-world experience on state-of-the-art equipment.<br>

          For those interested in scenic flights, we offer discovery flights over some of Florida’s most stunning sights, including Anna Maria Island, Skyway Bridge, and Siesta Key.<br>

          Join us at UFT and take the first step towards a rewarding aviation career, backed by experienced instructors, personalized training, and a supportive community.
        `,
      members: [],
    },

    adminTeamGrid: {
      imagePath: "/src/assets/uft-admin-team-picture.png",
      imageAlt: "Universal Flight Training crew",    
      upperHeading: "Admin Team",
      heading: "The Backbone of Universal Flight Training",
      description:
        "Our administrative team is committed to delivering top-notch support and service at every stage of your aviation journey. With years of industry experience and a dedication to excellence, our staff is here to ensure your experience with Universal Flight Training is seamless and supportive, helping you stay focused on reaching your aviation goals.",
      members: [
        {
          name: `Jose Santos<br><small class="text-white font-normal text-sm">CEO of Universal Flight Training</small>`,
          imagePath: "/src/assets/uft-jose-santos-ceo.jpg",
          imageAlt:
            "Universal Flight Training CEO Jose Santos",
        },
        {
          name: `Jacob Kyser<br><small class="text-white font-normal text-sm">Vice President</small>`,
          imagePath: "/src/assets/uft-jacob-kyser-vice-president.jpg",
          imageAlt:
            "Universal Flight Training Vice President Jacob Kyser",
        },
        {
          name: `Carter Kerwin<br><small class="text-white font-normal text-sm">Admin</small>`,
          imagePath: "/src/assets/uft-Carter-Kerwin-Intern.jpg",
          imageAlt:
            "Universal Flight Training Intern Carter Kerwin",
        },
      ],
    },
    flightTeamGrid: {
      imagePath: "/src/assets/uft-flight-team-picture.png",
      imageAlt: "Universal Flight Training crew",    
      upperHeading: "Flight Instructors Team",
      heading: "Guiding You to New Heights",
      description:
        "Our team of experienced flight instructors is dedicated to providing top-quality training and mentorship at every step of your aviation journey. With a deep passion for flying and years of expertise, our instructors are here to ensure you receive exceptional guidance and support, helping you stay focused and confident as you work toward achieving your aviation dreams with Universal Flight Training.",
      members: [
        {
          name: `Joe Vasquez<br><small class="text-white font-normal text-sm">Chief Flight Instructor</small>`,
          imagePath: "/src/assets/uft-joe-vazquez-chief-instructor.jpg",
          imageAlt:
            "Universal Flight Training Chief Flight Instructor Joe Vasquez",
        },
        {
          name: `Daniel Gormley<br><small class="text-white font-normal text-sm">Flight Instructor</small>`,
          imagePath: "/src/assets/uft-Daniel-Gormley-instructor.jpg",
          imageAlt:
            "Universal Flight Training Flight Instructor Daniel Gormley",
        },
        {
          name: `Justin Gorrell<br><small class="text-white font-normal text-sm">Flight Instructor</small>`,
          imagePath: "/src/assets/uft-Justin-Gorrell-instructor.jpg",
          imageAlt:
            "Universal Flight Training Flight Instructor Justin Gorrell",
        },
        {
          name: `Matthew Bach<br><small class="text-white font-normal text-sm">Flight Instructor</small>`,
          imagePath: "/src/assets/uft-Matthew-Bach-instructor.jpg",
          imageAlt:
            "Universal Flight Training Flight Instructor Matthew Bach",
        },
        {
          name: `Thomas Donetz<br><small class="text-white font-normal text-sm">Flight Instructor</small>`,
          imagePath: "/src/assets/uft-Thomas-Donetz-instructor.jpg",
          imageAlt:
            "Universal Flight Training Flight Instructor Thomas Donetz",
        },
        {
          name: `Gabriel Perez<br><small class="text-white font-normal text-sm">Flight Instructor (CFII)</small>`,
          imagePath: "/src/assets/profile-silhouette-uft.webp",
          imageAlt:
            "Universal Flight Training Flight Instructor Gabriel Perez",
        },
        {
          name: `Sydney Jilek<br><small class="text-white font-normal text-sm">Flight Instructor (CFII)</small>`,
          imagePath: "/src/assets/profile-silhouette-uft.webp",
          imageAlt:
            "Universal Flight Training Flight Instructor Sydney Jilek",
        },
        {
          name: `Mark Ladwig<br><small class="text-white font-normal text-sm">Flight Instructor (CFII)</small>`,
          imagePath: "/src/assets/profile-silhouette-uft.webp",
          imageAlt:
            "Universal Flight Training Flight Instructor Mark Ladwig",
        },
      ],
    },
    maintenanceTeamGrid: {
      imagePath: "/src/assets/uft-maintenance-team-picture.jpg",
      imageAlt: "Universal Flight Training maintenance crew",
      upperHeading: "Maintenance Team",
      heading: "Keeping You Safe and Ready to Fly",
      description:
        "Our skilled maintenance team is committed to ensuring your aircraft is in top condition for every flight. With decades of experience and a meticulous approach, our technicians provide exceptional service to keep your plane performing reliably and safely. Whether it’s routine maintenance or specialized inspections, our team is here to support you with precision and care, so you can focus on enjoying your time in the skies.",
      members: [
        {
          name: `Paul Hopkins<br><small class="text-white font-normal text-sm">Mechanic</small>`,
          imagePath: "/src/assets/uft-Paul-Hopkins-Mechanic.jpg",
          imageAlt:
            "Universal Flight Training Mechanic Paul Hopkins",
        },
        {
          name: `Frank Ferney<br><small class="text-white font-normal text-sm">Mechanic</small>`,
          imagePath: "/src/assets/uft-Frank-Ferney-Mechanic.jpg",
          imageAlt:
            "Universal Flight Training Mechanic Frank Ferney",
        },
      ],
    },
    
    flyWithUsCTA: {
      imagePath: "/src/assets/uft-avel-chuklanov-copilot-over-shoulder.jpg",
      imageAlt: "Right Rudder Marketing team on the runway",
      headerH1: `<span class="text-primary-600">Start Your Aviation Journey</br></span>With a Discovery Flight`,
      paragraph:
        "Experience the thrill of flying with a discovery flight at Universal Flight Training. Whether you're exploring a new hobby or dreaming of a professional pilot career, this is your chance to take the controls and see Sarasota and the surrounding Gulf Coast like never before. Schedule your discovery flight today and take the first step toward your aviation journey!",
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
