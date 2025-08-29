const coursesIndex = {
  data: {
    //SEO Header Stuff
    pageTitle:
      "Training Courses | Universal Flight Training",
    pageDescription:
      "Explore Universal Flight Training’s full range of aviation courses, from Private Pilot License to advanced certifications like Instrument Rating, Multi-Engine, and Certified Flight Instructor. Flexible programs tailored to fit your schedule and career goals.",
    pageKeywords:
      "flight training courses Sarasota, aviation certifications, private to commercial pilot, multi-engine rating training, CFI courses Florida, aviation school programs",
  
        //top header
        header: {
          stars: true,
          imagePath: "/src/assets/pilot-programs-index-cover.jpg",
          imageAlt:
            "Photograph of a Universal Flight Training plane on the runway",
          headerH1: `Pilot <br class="hidden lg:block" ><span class="text-accent-200">PROGRAMS</span>`,
          paragraph:
            `Discover how UFT can help you achieve your aviation dreams. We offer a range of programs designed to guide you on your journey to becoming a pilot.`,
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
  
   }
};

export default coursesIndex;