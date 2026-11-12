// All company details and page words live here.

export const company = {
  name: "FJB's Softtech Limited",
  phone: "+255 717 313 797",
  phoneLink: "tel:+255717313797",
  emails: ["frank.mhando@gmail.com", "afidhumatata81@gmail.com"],
  location: "Survey, Dar es Salaam",
  mapUrl: "https://share.google/ixl67gfYgPUl0TcWl",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "How we work", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// "art" picks the drawn picture: "web", "mobile" or "ai".
// To use a real photo instead, put the file in public/ and add  image: "/your-photo.jpg"
export const services = [
  {
    icon: "code",
    art: "web",
    title: "Web development",
    text: "We build websites for your business.",
    items: ["Company websites", "Online shops", "Web systems"],
  },
  {
    icon: "mobile",
    art: "mobile",
    title: "Mobile development",
    text: "We build phone apps for your business.",
    items: ["Apps for your customers", "Apps for your team", "Updates after launch"],
  },
  {
    icon: "ai",
    art: "ai",
    title: "AI automations",
    text: "We let AI do your repeat work.",
    items: ["Customer chat helpers", "Automatic reports", "Connected business tools"],
  },
];

// OUR PRODUCTS
// Each product gets its own page at  #/products/<slug>
// status: "live" (people can register now) or "soon" (people join the waiting list).
// registerUrl: the product's own sign-up page. Leave it out and the page shows
//   a form that emails the visitor's details to us instead.
// image: optional photo or screenshot in public/, e.g. "/products/duka.png".
//   Without it the page uses the drawn picture named in "art".
//
// THE THREE PRODUCTS BELOW ARE SAMPLES. Replace them with the real products before the site goes live.
export const products = [
  {
    slug: "duka-app",
    name: "Duka App",
    status: "live",
    art: "mobile",
    category: "Sales and stock",
    tagline: "Track sales and stock from your phone.",
    summary: "A simple app for shops. Record every sale, see what is running low and know your profit each day.",
    description: [
      "Duka App helps shop owners see how the business is doing without paper books.",
      "Record a sale in a few taps. The app updates your stock and shows your profit for the day, week and month.",
    ],
    features: [
      "Record sales in a few taps",
      "Stock alerts when items run low",
      "Daily, weekly and monthly profit",
      "Works for more than one shop",
      "Accepts M-Pesa, Tigo Pesa and cash records",
      "Staff accounts with their own logins",
    ],
    audience: ["Retail shops", "Pharmacies", "Hardware stores", "Wholesalers"],
    registerUrl: "",
  },
  {
    slug: "shule-portal",
    name: "Shule Portal",
    status: "live",
    art: "web",
    category: "School management",
    tagline: "Results, fees and messages for your school in one place.",
    summary: "A website system for schools. Teachers enter results, parents see them online and the office tracks fees.",
    description: [
      "Shule Portal brings student records, exam results and school fees into one system.",
      "Parents log in to see results and fee balances. The school sends messages to all parents at once.",
    ],
    features: [
      "Student records",
      "Exam results and report cards",
      "Fee payments and balances",
      "Messages to parents",
      "Teacher and parent logins",
    ],
    audience: ["Primary schools", "Secondary schools", "Colleges"],
    registerUrl: "",
  },
  {
    slug: "msaidizi-ai",
    name: "Msaidizi AI",
    status: "soon",
    art: "ai",
    category: "AI customer chat",
    tagline: "An AI helper that answers your customers on WhatsApp.",
    summary: "Msaidizi answers common customer questions day and night, in Swahili and English, and passes hard ones to your team.",
    description: [
      "Msaidizi learns your prices, opening hours and common questions, then answers customers on WhatsApp for you.",
      "When a question needs a person, it hands the chat to your team.",
    ],
    features: [
      "Answers in Swahili and English",
      "Works on WhatsApp",
      "Open day and night",
      "Hands hard questions to your team",
      "Weekly report of what customers ask",
    ],
    audience: ["Shops", "Clinics", "Hotels", "Service businesses"],
    registerUrl: "",
  },
];

export const productStatus = {
  live: { label: "Available now", action: "Register", formTitle: "Register for" },
  soon: { label: "Coming soon", action: "Join the waiting list", formTitle: "Join the waiting list for" },
};

export const steps = [
  { title: "Talk", text: "You tell us what you need." },
  { title: "Plan", text: "We agree on the work, time and price." },
  { title: "Build", text: "We build it and show you as we go." },
  { title: "Launch", text: "We put it live and teach your team." },
];

export const values = [
  { title: "Clear", text: "We use simple words." },
  { title: "Skilled", text: "We know our work." },
  { title: "Reliable", text: "We do what we say." },
];
