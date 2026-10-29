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
  photo: "images/philip.webp",   // add an image path, e.g. "images/philip.jpg"

  name: "Philip Edward",
  role: "Product Designer & AI-Native Developer",
  tagline: "I design and build digital products using thoughtful UX and modern AI.",
  intro: "I combine product design, user experience and AI-powered development to turn ideas into useful digital products, from the first sketch to working software.",
  navCta: "Let's work together",
  email: "edwardphill37@gmail.com",           // placeholder: replace
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/philip-edward-b07664406" },  // placeholder
    { label: "X",        url: "https://x.com/PhilipChin34368" },            // placeholder
    { label: "GitHub",   url: "https://github.com/Phil230" }        // placeholder
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
    "I started designing digital products in 2023, drawn in by a love of design and creativity.",
    "Since then I have been learning to build what I design, using Python, web development, APIs, Git and GitHub, and AI tools. I designed a live English to Idoma translator and helped build it.",
    "I am open to roles in product management, frontend, mobile or backend development, where I can connect design decisions to how things are built."
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
    case: { "Key decisions": "Riders can raise or lower the fare in ₦50 steps. The driver list shows price, rating and arrival time side by side. Payment is cash, with a clear \"give the driver\" confirmation." } },
  { id: "ledger", type: "design", placeholder: false,
    title: "TheDailyLedger Blog Design", category: "Web UI/UX",
    description: "A web design for an editorial blogging site: homepage, article page, search and archive, and about page.",
    tools: ["Figma"],                       // add the tools you used, e.g. "Figma"
    image: "images/ledger/cover.webp", link: "",
    galleryLayout: "wide",
    gallery: [
      ["images/ledger/homepage.webp", "Homepage"],
      ["images/ledger/article.webp", "Article page"],
      ["images/ledger/archive.webp", "Search and archive"],
      ["images/ledger/about.webp", "About page"]
    ],
    case: { "Key decisions": "The homepage leads with one main story beside a Most Read list. The article page adds topic context beside the text and related stories below it. The archive lets readers filter by category and date and sort the results." } },
  { id: "idoma", type: "design", placeholder: false,
    title: "Idoma Translator", category: "Web UI/UX",
    description: "An interface for translating between English and Idoma, with a language switch, side-by-side text panels and a common phrases panel.",
    tools: ["Figma"],                       // add the tools you used, e.g. "Figma"
    image: "images/idoma/cover.webp", link: "https://idomaai.com/",   // add a live link when you have one
    galleryLayout: "wide",
    gallery: [["images/idoma/translator.webp", "Translator screen"]],
    case: { "Key decisions": "The input panel has a red outline and the result panel a green one, so each side is easy to tell apart. A common phrases panel shows ready-made examples, such as \"thank you\". The live version is at idomaai.com.", "My role": "Designed the interface and built part of the live product." } },
  { id: "elearning", type: "design", placeholder: false,
    title: "E-Learning Homepage", category: "Mobile UI/UX",
    description: "A mobile homepage design for an e-learning site: hero, benefits, course listings, testimonials, pricing and FAQ.",
    tools: ["Figma"],                       // add the tools you used, e.g. "Figma"
    image: "images/elearning/cover.webp", link: "",
    galleryLayout: "phone",
    gallery: [["images/elearning/homepage.webp", "Mobile homepage, full length"]],
    case: { "Key decisions": "Course cards show duration and level before the button. Pricing has a monthly and yearly switch and a Free versus Pro feature list with ticks and crosses. FAQs open and close with a plus button." } },
  { id: "estate", type: "design", placeholder: false,
    title: "Real Estate Website Homepage", category: "Web UI/UX",
    description: "A homepage design for a real estate website: property search, featured listings, city browsing, app promotion and latest news.",
    tools: ["Figma"],                       // add the tools you used, e.g. "Figma"
    image: "images/estate/cover.webp", link: "",
    galleryLayout: "wide",
    gallery: [["images/estate/homepage.webp", "Homepage, full length"]],
    case: { "Key decisions": "The hero puts a property search (type, size and location) first. Listing cards show price, bedrooms, bathrooms and size at a glance. City browsing, a recommended-property slider and an app promo banner follow." } },
  { id: "budget", type: "design", placeholder: false,
    title: "Budget Tracker App", category: "Mobile UI/UX",
    description: "A mobile budget tracker in naira: dashboard, expenses list, quick add, monthly reports and settings, with an app icon.",
    tools: ["Figma"],
    image: "images/budget/cover.webp", link: "",
    gallery: [
      ["images/budget/icon.webp", "App icon"],
      ["images/budget/home.webp", "Home dashboard"],
      ["images/budget/expenses.webp", "All expenses"],
      ["images/budget/quickadd.webp", "Quick add"],
      ["images/budget/reports.webp", "Monthly reports"],
      ["images/budget/settings.webp", "Settings"]
    ],
    case: { "Key decisions": "The dashboard shows the remaining budget, a progress bar and a warning at 80%. Quick add takes an amount, category and funding source in one sheet. Reports compare the budget with spending and rank the categories." } },
  { id: "afrometaverse", type: "design", placeholder: false, status: "In progress",
    title: "AfroMetaverse Game UI/UX", category: "Game & Web UI/UX",
    description: "UI/UX design for AfroMetaverse, a game project I am designing as the UI/UX designer. Work in progress: landing page, city explorer, marketplace, job terminal, wallet and profile.",
    tools: ["Figma"],
    image: "images/afrometaverse/cover.webp", link: "",
    galleryLayout: "wide",
    gallery: [
      ["images/afrometaverse/landing.webp", "Landing page"],
      ["images/afrometaverse/explorer.webp", "Virtual city explorer"],
      ["images/afrometaverse/marketplace.webp", "Marketplace and asset details"],
      ["images/afrometaverse/metawork.webp", "MetaWork terminal and job details"],
      ["images/afrometaverse/wallet.webp", "MetaNaira wallet and ledger"],
      ["images/afrometaverse/profile.webp", "Citizen profile and account"]
    ],
    case: { "Key decisions": "A dark interface with one gold accent for primary actions. The same top bar, with balance and Connect Node, appears on every screen. The designs are still in progress.", "My role": "UI/UX designer on the game team." } },
  { id: "moniepoint", type: "design", placeholder: false,
    title: "Moniepoint UI Redesign", category: "Mobile & web UI/UX",
    description: "A UI redesign of the Moniepoint mobile app, covering the home screen and the send-money flow.",
    tools: ["Figma"],                       // add tools, e.g. "Figma"
    image: "images/moniepoint/cover.webp",                       // add an image URL or data URI
    link: "",                        // add a Behance / Figma / case study URL
    gallery: [["images/moniepoint/n1.webp", "Home"], ["images/moniepoint/n2.webp", "Send money"]],
    case: { "Key decisions": "The home screen opens with the balance and four quick actions: send, bills, airtime and more. Transactions show a status tag such as Success or Processing. Send Money lists recent recipients and three transfer types, with a tip about finding people by @username." } },
];
