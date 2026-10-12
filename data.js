/* =====================================================
   EDIT HERE. Everything on the page is rendered from this data.
   Replace placeholder items with your real projects.
   ===================================================== */
const PROFILE = {
  stats: [["Design","UI/UX & product"],["Build","Python & web"],["AI","APIs & automation"]],
  narrative: "I understand how products should work and look, and I'm learning to build those products myself using modern software and AI.",
  bridge: [
    ["Faster iteration","Designing and building in one loop means ideas get tested as working software sooner."],
    ["Fewer gaps","When one person holds the design and the code, less gets lost between mockup and product."],
    ["Better decisions","Understanding data, APIs and constraints leads to design choices that can actually ship."]
  ],
  intents: ["Product Design","AI Prototyping","Full-time Role"],
  photo: "",   // add an image path, e.g. "images/philip.jpg"

  name: "Philip Edward",
  role: "Product Designer & AI-Native Developer",
  tagline: "I design and build digital products using thoughtful UX and modern AI.",
  intro: "I combine product design, user experience and AI-powered development to turn ideas into useful digital products, from the first sketch to working software.",
  navCta: "Let's work together",
  email: "hello@your-email.com",           // placeholder: replace
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com/in/your-handle" },  // placeholder
    { label: "X",        url: "https://x.com/your-handle" },            // placeholder
    { label: "GitHub",   url: "https://github.com/your-handle" }        // placeholder
  ],
  contactText: "If you're a startup, a recruiter or a founder with a product to design, build, or both, send me a note. A few lines about the idea is enough to start.",
  designIntro: "I start with the person using the product, then work toward the simplest interface that gets them there. That means writing out the user's task, setting a clear visual hierarchy, and testing flows before polishing screens.",
  principles: [
    ["User needs", "Who is this for, and what are they trying to finish?"],
    ["Clarity", "One primary action per screen, in plain language."],
    ["Usability", "Familiar patterns, readable type, forgiving flows."],
    ["Visual hierarchy", "The eye lands on what matters first."],
    ["Product thinking", "Design choices tied to what the product must do."],
    ["Interaction design", "Motion and feedback that explain what changed."]
  ],
  process: ["Problem", "Research / Thinking", "Design Process", "Final Solution", "Outcome"],
  buildIntro: "I'm growing as an AI-native developer: using modern AI tools to turn product ideas into working software. Because I design first, I build with the interface, the flow and the user in mind.",
  about: [
    "I started in UI/UX design, where I learned to shape how products look, read and feel to the person using them.",
    "I'm expanding that into software development and AI, because the best design decisions come from understanding what's underneath the interface: the data, the APIs, the constraints.",
    "Today I design products and build them myself. I'm curious, I learn by shipping, and I like working close to the problem."
  ],
  toolkit: {
    Design: ["UI/UX Design", "Product Design", "Prototyping", "Design Systems", "Interaction Design"],
    Development: ["Python", "Web Development", "APIs", "Git / GitHub"],
    AI: ["AI-assisted development", "AI APIs", "AI application development", "Automation", "Prompt engineering"]
  },
  toolkitNote: "Add other technologies here only when you're ready to stand behind them."
};

const PROJECTS = [
  { id: "okada", type: "design", placeholder: false,
    title: "Okada Ride-Hailing App", category: "Mobile UI/UX",
    description: "A mobile ride-hailing app designed end to end: sign-up, requesting a ride, choosing a driver, riding, paying and rating. 18 screens.",
    tools: ["Figma"],                       // add the tools you used, e.g. "Figma"
    image: "images/okada/cover.webp", link: "",   // add a Figma / Behance link when you have one
    gallery: [
      ["images/okada/n01.webp", "Splash"],
      ["images/okada/n02.webp", "Sign in with phone"],
      ["images/okada/n03.webp", "Verify code"],
      ["images/okada/n04.webp", "Set up profile"],
      ["images/okada/n05.webp", "Location permission"],
      ["images/okada/n06.webp", "Request a ride"],
      ["images/okada/n07.webp", "Edit price"],
      ["images/okada/n08.webp", "Searching for drivers"],
      ["images/okada/n09.webp", "Choose your driver"],
      ["images/okada/n10.webp", "Driver arriving"],
      ["images/okada/n11.webp", "Ride details"],
      ["images/okada/n12.webp", "Trip in progress"],
      ["images/okada/n13.webp", "Payment"],
      ["images/okada/n14.webp", "Rate your driver"],
      ["images/okada/n15.webp", "Profile settings"],
      ["images/okada/n16.webp", "My rides"],
      ["images/okada/n17.webp", "Trip details"],
      ["images/okada/n18.webp", "Settings"]
    ],
    case: { Problem: "Add the problem this app set out to solve.",
            "Research / Thinking": "Add the research or thinking behind the flow.",
            "Design Process": "Add your process: flows, wireframes, iterations.",
            "Final Solution": "A complete rider flow: phone or social sign-up with code verification, a ride request with an editable fare, a choice of drivers with price and arrival time, live trip tracking, cash payment, driver rating, ride history and settings.",
            Outcome: "Add an outcome only if you have real results." } },
  { id: "ledger", type: "design", placeholder: false,
    title: "TheDailyLedger Blog Design", category: "Web UI/UX",
    description: "A web design for an editorial blogging site: homepage, article page, search and archive, and about page.",
    tools: [],                       // add the tools you used, e.g. "Figma"
    image: "images/ledger/cover.webp", link: "",
    galleryLayout: "wide",
    gallery: [
      ["images/ledger/homepage.webp", "Homepage"],
      ["images/ledger/article.webp", "Article page"],
      ["images/ledger/archive.webp", "Search and archive"],
      ["images/ledger/about.webp", "About page"]
    ],
    case: { Problem: "Add the problem this blog design set out to solve.",
            "Research / Thinking": "Add the research or thinking behind the layout.",
            "Design Process": "Add your process: structure, wireframes, iterations.",
            "Final Solution": "A four-page editorial design: a homepage with a lead story and a most-read list, an article page with related terms and stories, an archive with category and date filters, and an about page with a contact form.",
            Outcome: "Add an outcome only if you have real results." } },
  { id: "idoma", type: "design", placeholder: false,
    title: "Idoma Translator", category: "Web UI/UX",
    description: "An interface for translating between English and Idoma, with a language switch, side-by-side text panels and a common phrases panel.",
    tools: [],                       // add the tools you used, e.g. "Figma"
    image: "images/idoma/cover.webp", link: "",   // add a live link when you have one
    galleryLayout: "wide",
    gallery: [["images/idoma/translator.webp", "Translator screen"]],
    case: { Problem: "Add the problem this tool set out to solve.",
            "Research / Thinking": "Add the research or thinking behind the interface.",
            "Design Process": "Add your process: flows, wireframes, iterations.",
            "Final Solution": "A translator interface with an English / Idoma language switch and swap button, side-by-side input and output panels, and a common phrases panel. The design is framed around preserving and celebrating the Idoma language and culture.",
            Outcome: "Add an outcome only if you have real results." } },
  { id: "moniepoint", type: "design", placeholder: false,
    title: "Moniepoint UI Redesign", category: "Mobile & web UI/UX",
    description: "A redesign of the Moniepoint interface focused on clearer flows and hierarchy.",
    tools: [],                       // add tools, e.g. "Figma"
    image: "",                       // add an image URL or data URI
    link: "",                        // add a Behance / Figma / case study URL
    case: { Problem: "Add the problem you identified.", "Research / Thinking": "Add what you looked at and why.",
            "Design Process": "Add sketches, flows, iterations.", "Final Solution": "Add final screens and key decisions.",
            Outcome: "Add an outcome only if you have real results. Otherwise explain the design decisions." } },
  { id: "d2", type: "design", placeholder: true, title: "Mobile app design", category: "Mobile UI/UX",
    description: "Placeholder: describe the product, your role and the problem it solved.", tools: [], image: "", link: "", case: null },
  { id: "d3", type: "design", placeholder: true, title: "Dashboard design", category: "Dashboard UI",
    description: "Placeholder: describe the data, the users and the decisions the dashboard supports.", tools: [], image: "", link: "", case: null },
  { id: "d4", type: "design", placeholder: true, title: "Web3 product design", category: "Web3 UI/UX",
    description: "Placeholder: describe the product and how you made it understandable.", tools: [], image: "", link: "", case: null },
  { id: "b1", type: "build", placeholder: true, title: "AI-powered application", category: "AI application",
    description: "Placeholder: what the app does and who it's for.", tools: [], image: "", link: "", github: "",
    built: "Add what you built.", why: "Add why you built it.", learned: "Add what you learned." },
  { id: "b2", type: "build", placeholder: true, title: "Web app or website", category: "Web development",
    description: "Placeholder: describe the site or app and the problem it solves.", tools: [], image: "", link: "", github: "",
    built: "Add what you built.", why: "Add why you built it.", learned: "Add what you learned." },
  { id: "b3", type: "build", placeholder: true, title: "Automation or API experiment", category: "Automation / APIs",
    description: "Placeholder: describe the workflow or experiment.", tools: [], image: "", link: "", github: "",
    built: "Add what you built.", why: "Add why you built it.", learned: "Add what you learned." }
];
