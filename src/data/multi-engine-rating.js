const multiEngineRating = {
  data: {
    //SEO Header Stuff
    pageTitle: "MULTI-ENGINE RATING | Universal Flight Training",
    pageDescription:
      "Expand your pilot credentials with UFT’s Multi-Engine Rating course. Gain the skills to operate multi-engine aircraft with confidence through advanced training on our state-of-the-art PA-44.",
    pageKeywords:
      "Multi-Engine Rating course, multi-engine pilot certification, multi-engine training Sarasota, PA-44 training Florida, advanced pilot ratings, aviation school Sarasota",

    //top header
    header: {
      stars: true,
      imagePath: "/src/assets/uft-multi-engine-plane.jpg",
      imageAlt: "Picture of Universal Flight Training's multi-engine plane",
      headerH1: `Multi-Engine rating <br class="hidden lg:block" ><span class="text-accent-200">Course</span>`,
      paragraph:
        `The Multi-Engine Rating course is ideal for pilots who are ready to expand their skills by moving into multi-engine aircraft. Whether you’re looking to fly more complex planes, build multi-engine experience, or prepare for commercial opportunities, this rating provides the essential training needed to handle twin-engine operations.`,
      buttons: [
        {
          name: "Enroll Today",
          link: "/enroll-now",
          primary: false,
        },
        {
          name: "How To Guide",
          link: "/pilot-training-guide",
          primary: false,
        },
      ],
    },

    pageSummary: {
      title: `Multi-Engine Rating<br> Certification`,
      paragraphs: [
        "A Multi-Engine Rating adds a new level of versatility and capability to your pilot credentials, enabling you to operate aircraft with more than one engine. With this certification, you’ll be able to handle the unique challenges and benefits of multi-engine flying, such as improved performance, redundancy, and the potential for higher-level aviation roles. This rating is highly recommended for pilots pursuing a commercial career, as multi-engine proficiency is often required by regional airlines and corporate flight departments.",
        "Let’s look at the steps to obtaining your Multi-Engine Rating at Universal Flight Training.",
      ],
    },

    roadmap: {
      upperHeading: "Roadmap",
      heading: "Multi-Engine Rating",
      descriptions: [
        "Your aviation dreams are our priority. Whether you’re aiming for a professional career, building flight hours, or exploring for fun, we offer the ideal path to reach your goals.",
      ],
      steps: [
        {
          title: "Complete Multi-Engine Ground Training",
          paragraphs: [
            "Before taking to the skies, you’ll begin with ground instruction specifically focused on the systems, aerodynamics, and handling characteristics of multi-engine aircraft. Universal Flight Training provides a comprehensive Multi-Engine Kit as part of this course, along with classroom sessions that break down the critical topics like engine-out procedures, weight and balance considerations, and emergency protocols.",
            "Our ground training prepares you for the specific demands of multi-engine flying, helping you understand how to manage both engines, troubleshoot potential issues, and confidently approach your first flight in a twin-engine plane.",
          ],
          imagePath: "/src/assets/ground-school-training.jpg",
          imageAlt: "Universal Flight school students attending ground school",
        },
        {
          title: "Conduct Multi-Engine Flight Training",
          paragraphs: [
            "Once you’re familiar with the principles of multi-engine flight, you’ll begin hands-on training in our dedicated multi-engine aircraft. This 10-hour flight training block includes dual instruction, allowing you to gain practical experience in managing two engines simultaneously and handling emergencies, such as an engine failure during flight.",
            "At Universal Flight Training, our experienced instructors will guide you through advanced maneuvers, single-engine operation, and the unique flight dynamics that come with a twin-engine plane. This focused flight time builds the skill and confidence needed for safe, proficient multi-engine operations.",
          ],
          imagePath: "/src/assets/uft-kristopher-allison-pilot-flying-plane.jpg",
          imageAlt: "Picture of a pilot flying a plane, sourced from unsplash, piture by Kristopher Allison",
        },
        {
          title: "Pass the Multi-Engine Checkride",
          paragraphs: [
            "The final step in earning your Multi-Engine Rating is the checkride, which includes both an oral and practical exam to assess your knowledge and flying ability in a multi-engine environment. Here at Universal Flight Training, we offer mock checkrides, detailed feedback, and one-on-one prep sessions to ensure you’re fully ready for this final evaluation.",
            "During the checkride, you’ll demonstrate essential skills such as handling engine-out scenarios, executing precise multi-engine maneuvers, and applying proper procedures in a range of flight conditions. Passing the checkride officially qualifies you to operate multi-engine aircraft, expanding your opportunities and enhancing your skillset as a pilot.",
          ],
          imagePath: "/src/assets/uft-piper-multi-engine-aircraft.jpg",
          imageAlt: "Picture of a multi-engine plane flying, sourced from piper.com",
        },
      ],
      finalParagraph:
        "With a Multi-Engine Rating from Universal Flight Training, you’ll unlock new possibilities in aviation, including the chance to fly more complex aircraft and pursue advanced commercial opportunities. Our team is here to support your journey, providing high-quality training and resources to help you excel in multi-engine flying.",
      finalButton: {
        name: "Enroll Now",
        link: "/enroll-now",
        primary: true,
      },
    },
  },
};
export default multiEngineRating;