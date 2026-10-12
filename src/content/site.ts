/**
 * ============================================================================
 *  SITE CONTENT — the ONLY file you need to edit to re-brand this website.
 * ============================================================================
 *  Every piece of business text, every image URL, every colour and every SEO
 *  string lives here. Components read from `site` and never hard-code copy.
 *
 *  Quick re-brand checklist:
 *    1. business.*  → name, doctor, phone, address, timings
 *    2. theme.*     → brand / brandDark / accent hex values
 *    3. images      → swap Unsplash URLs for the clinic's own photos
 *    4. seo.*       → title, description, site URL
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

/** Names of lucide-react icons used across the site (see src/components/Icon.tsx). */
export type IconName =
  | "Activity"
  | "Award"
  | "Baby"
  | "BadgeCheck"
  | "BadgeIndianRupee"
  | "CalendarCheck"
  | "Crown"
  | "Gem"
  | "HeartHandshake"
  | "Microscope"
  | "ScanLine"
  | "ShieldCheck"
  | "Smile"
  | "Sparkles"
  | "Stethoscope"
  | "Syringe"
  | "Users"
  | "Wand2"
  | "Zap"
  | "Tooth";

export type FAQ = { q: string; a: string };

export type Treatment = {
  slug: string;
  name: string;
  short: string; // card description (≈ 120 chars)
  icon: IconName;
  image: string;
  imageAlt: string;
  featured: boolean; // shown in the home-page grid
  priceFrom: number; // in ₹
  priceNote: string;
  duration: string;
  visits: string;
  tagline: string;
  whatIs: string[];
  whoNeeds: string[];
  steps: { title: string; text: string }[];
  benefits: string[];
  faqs: FAQ[];
};

export type Review = {
  name: string;
  initials: string;
  rating: number;
  when: string;
  treatment: string;
  text: string;
  localGuide?: boolean;
};

export type GalleryCategory = "Implants" | "Braces" | "Whitening" | "Makeover";

export type GalleryItem = {
  image: string;
  alt: string;
  category: GalleryCategory;
  title: string;
  detail: string;
};

export type BeforeAfterCase = {
  tab: string;
  title: string;
  summary: string;
  duration: string;
  image: string;
  alt: string;
  /** Optional separate "before" photo. If omitted, `beforeFilter` is applied to `image`. */
  beforeImage?: string;
  beforeFilter?: string;
};

/* ----------------------------------------------------------------------------
 * Content
 * ------------------------------------------------------------------------- */

const business = {
  name: "Kalyan",
  nameSuffix: "Dental",
  fullName: "Kalyan Dental",
  tagline: "A decade of dedicated dental care at Piska More, Ranchi",
  city: "Ranchi",
  state: "Jharkhand",
  phoneDisplay: "+91 74798 87337",
  phoneRaw: "+917479887337",
  whatsappNumber: "917479887337", // country code + number, digits only
  whatsappMessage: "Hi, I'd like to book an appointment at Kalyan Dental",
  email: "", // not listed publicly — add when the clinic shares one
  address: {
    line1: "Near Piska More Petrol Pump, Opp. Janta Petrol Pump, Vikash Nagar, Piska More",
    line2: "Vikash Nagar",
    city: "Ranchi",
    state: "Jharkhand",
    pin: "834005",
    country: "IN",
    landmark: "Opposite Janta Petrol Pump, Piska More",
  },
  geo: { lat: 23.3995, lng: 85.3155 }, // approx. Piska More — confirm from the Google Maps pin
  mapEmbedUrl: "https://www.google.com/maps?q=Kalyan+Dental+(estd.+2013),+Piska+More,+Vikash+Nagar,+Ranchi,+Jharkhand+834005&z=16&output=embed",
  mapLinkUrl: "https://www.google.com/maps/search/?api=1&query=Kalyan+Dental+(estd.+2013)+Piska+More+Ranchi+834005",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Kalyan+Dental+(estd.+2013)+Piska+More+Ranchi",
  rating: 4.9,
  reviewCount: 560,
  reviewCountLabel: "560+",
  established: 2013,
  priceRange: "₹₹",
  /** Opening hours — `day` is matched against today's weekday to highlight the row.
   *  Google lists closing time as 8 PM; opening time is assumed — confirm with the clinic. */
  hours: [
    { day: "Monday", short: "Mon", slots: ["10:00 AM – 8:00 PM"] },
    { day: "Tuesday", short: "Tue", slots: ["10:00 AM – 8:00 PM"] },
    { day: "Wednesday", short: "Wed", slots: ["10:00 AM – 8:00 PM"] },
    { day: "Thursday", short: "Thu", slots: ["10:00 AM – 8:00 PM"] },
    { day: "Friday", short: "Fri", slots: ["10:00 AM – 8:00 PM"] },
    { day: "Saturday", short: "Sat", slots: ["10:00 AM – 8:00 PM"] },
    { day: "Sunday", short: "Sun", slots: ["10:00 AM – 8:00 PM"] },
  ],
  hoursSummary: "Open daily · Closes 8 PM",
  /** Used in JSON-LD schema (24h format). */
  hoursSchema: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:00", closes: "20:00" },
  ],
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
};

const doctor = {
  name: "Dr. Nitul Sumit",
  title: "Dental Surgeon & Implantologist",
  degrees: "BDS",
  experience: "13+ years",
  registration: "",
  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
  imageAlt: "Dr. Nitul Sumit, dental surgeon at Kalyan Dental, Piska More, Ranchi",
  signature: "Nitul Sumit",
  greeting: "A note from your dentist",
  message: [
    "Kalyan Dental opened at Piska More in 2013 with a simple idea: the families of our neighbourhood deserve high-quality dental treatment close to home, at a price that is fair.",
    "More than a decade later, that hasn't changed. Every visit begins with a proper check-up and a clear explanation in simple Hindi or English, so you know exactly what you need and what it will cost before we begin.",
  ],
  highlights: [
    "Serving Piska More since 2013",
    "Dental surgery & implants",
    "Rated 4.9★ by 560+ patients on Google",
    "Quality treatment at a reasonable price",
  ],
  education: [
    { year: "BDS", title: "Bachelor of Dental Surgery", place: "Qualified dental surgeon" },
    { year: "2013", title: "Founded Kalyan Dental", place: "Piska More, Ranchi" },
  ],
};

const treatments: Treatment[] = [
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    short: "Single-sitting, rotary RCT under gentle anaesthesia. Save your natural tooth and get out of pain — today.",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99",
    imageAlt: "Dentist examining a patient's teeth with a mirror and probe",
    featured: true,
    priceFrom: 3500,
    priceNote: "per tooth, front teeth · molars from ₹5,500",
    duration: "45–90 minutes",
    visits: "1–2 visits",
    tagline: "Painless, single-sitting root canals that save your natural tooth.",
    whatIs: [
      "A root canal removes infected or inflamed pulp from inside the tooth, cleans and disinfects the canals, and seals them so the tooth can stay in your mouth for decades.",
      "With modern instruments and careful technique, the procedure is far more comfortable than the RCT most people imagine.",
    ],
    whoNeeds: [
      "Throbbing toothache, especially at night",
      "Lingering sensitivity to hot or cold",
      "A swollen gum or pimple-like boil near a tooth",
      "Deep cavity or a cracked tooth",
      "A tooth that has darkened after an injury",
    ],
    steps: [
      { title: "X-ray & diagnosis", text: "An X-ray shows how deep the infection goes, and we explain it to you before starting." },
      { title: "Painless anaesthesia", text: "The area is fully numbed with local anaesthesia so you stay comfortable throughout." },
      { title: "Cleaning the canals", text: "Rotary files remove the infected pulp; the canals are disinfected and shaped." },
      { title: "Sealing", text: "Canals are filled with biocompatible gutta-percha and sealed to keep bacteria out." },
      { title: "Crown for protection", text: "A cap (crown) protects the treated tooth from cracking. Usually fitted 5–7 days later." },
    ],
    benefits: ["Keeps your natural tooth", "Relieves pain in one visit", "Prevents spread of infection", "Looks and works like a normal tooth"],
    faqs: [
      { q: "Will a root canal hurt?", a: "No more than a filling. With modern anaesthesia and rotary instruments, most of our patients say the toothache before treatment hurt far more than the RCT itself." },
      { q: "Do I need a crown after RCT?", a: "For back teeth, yes. A root-canal-treated tooth becomes brittle; a crown prevents it from cracking. Crowns start from ₹4,500 (metal-ceramic) and ₹9,000 (zirconia)." },
      { q: "Can it be done in one visit?", a: "In most cases, yes. If there is a large abscess we may place medicine and finish in a second short visit." },
    ],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    short: "Permanent, natural-looking replacement for missing teeth — planned digitally, placed by an experienced dental surgeon.",
    icon: "Tooth",
    image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9",
    imageAlt: "Model of a dental implant with crown beside natural teeth models",
    featured: true,
    priceFrom: 22000,
    priceNote: "per implant incl. crown · exact cost after consultation",
    duration: "60 minutes per implant",
    visits: "2–3 visits over 3 months",
    tagline: "Fixed teeth that look, feel and chew like your own — for life.",
    whatIs: [
      "A dental implant is a small titanium post placed in the jaw bone that acts as a new root. Once it fuses with the bone, a custom crown is fixed on top — giving you a tooth that doesn't move, doesn't need neighbouring teeth to be cut, and can last a lifetime.",
      "Dr. Nitul Sumit performs dental surgery and implant treatment at Kalyan Dental, and every case is planned carefully with X-rays before treatment begins.",
    ],
    whoNeeds: [
      "One or more missing teeth",
      "Loose or uncomfortable dentures",
      "Teeth that cannot be saved with RCT",
      "People who don't want neighbouring teeth cut for a bridge",
    ],
    steps: [
      { title: "Consultation & X-ray", text: "We check bone height and density and plan the implant position carefully." },
      { title: "Implant placement", text: "A short, minimally invasive procedure under local anaesthesia. Most patients return to work the next day." },
      { title: "Healing (8–12 weeks)", text: "The implant fuses with your bone. You wear a temporary tooth so you're never without a smile." },
      { title: "Final crown", text: "A custom zirconia or ceramic crown is shade-matched and fixed on the implant." },
    ],
    benefits: ["Does not damage neighbouring teeth", "Prevents bone loss", "Chew anything — roti, nuts, sugarcane", "Fixed, natural-looking result"],
    faqs: [
      { q: "How long do implants last?", a: "With good brushing and yearly check-ups, implants commonly last 25 years to a lifetime. The crown on top may need replacing after 15–20 years." },
      { q: "Am I too old for implants?", a: "Age is rarely the problem — bone health and general health matter more. We regularly place implants for patients in their 70s, including those with controlled diabetes." },
      { q: "Is the surgery painful?", a: "It's done under local anaesthesia and most people describe it as easier than an extraction. Mild soreness for 2–3 days is managed with regular painkillers." },
    ],
  },
  {
    slug: "braces-and-clear-aligners",
    name: "Braces & Clear Aligners",
    short: "Metal, ceramic or invisible aligners for straight teeth at any age.",
    icon: "Smile",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe",
    imageAlt: "Person fitting a transparent clear aligner onto their teeth",
    featured: true,
    priceFrom: 25000,
    priceNote: "metal braces · ceramic from ₹40,000 · clear aligners from ₹75,000",
    duration: "12–24 months",
    visits: "Monthly reviews",
    tagline: "Straighter teeth, more confidence — visible or virtually invisible.",
    whatIs: [
      "Braces and aligners gently move teeth into the right position over time, fixing crowding, gaps, protruding teeth and bite problems.",
      "Choose between classic metal braces, tooth-coloured ceramic braces, or clear aligners that are almost invisible and removable for meals.",
    ],
    whoNeeds: [
      "Crooked, crowded or overlapping teeth",
      "Gaps between teeth",
      "Forwardly placed (protruding) upper teeth",
      "Deep bite, open bite or crossbite",
      "Teens and adults — there's no upper age limit",
    ],
    steps: [
      { title: "Smile assessment", text: "Photos, X-rays and impressions of your teeth." },
      { title: "Treatment plan", text: "We explain how your teeth will move, how long it will take and the full cost before you commit." },
      { title: "Fitting", text: "Braces are bonded in one comfortable visit, or you receive your first set of aligners." },
      { title: "Monthly adjustments", text: "Short check-ups every 4–6 weeks to keep teeth moving on schedule." },
      { title: "Retainers", text: "Once teeth are straight, retainers keep them there for good." },
    ],
    benefits: ["Easier cleaning & healthier gums", "Better bite and chewing", "Options for teens and adults", "Clear plan before you begin"],
    faqs: [
      { q: "Am I too old for braces?", a: "No. A third of our orthodontic patients are adults — many in their 30s and 40s choose clear aligners because they're discreet at work." },
      { q: "Do aligners work as well as braces?", a: "For most mild-to-moderate cases, yes. For complex bite problems, braces may be faster. We'll tell you honestly which suits you." },
      { q: "Can I pay in instalments?", a: "Please ask at the clinic — we will explain the payment options available for your treatment." },
    ],
  },
  {
    slug: "teeth-cleaning-and-whitening",
    name: "Teeth Cleaning & Whitening",
    short: "Ultrasonic scaling and polishing, plus in-clinic whitening that brightens teeth up to 6–8 shades in an hour.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04",
    imageAlt: "Bamboo toothbrushes in a glass jar on a bright white table",
    featured: true,
    priceFrom: 800,
    priceNote: "scaling & polishing · professional whitening from ₹4,000",
    duration: "30–60 minutes",
    visits: "Single visit",
    tagline: "Fresh, clean, visibly brighter teeth — in a single visit.",
    whatIs: [
      "Professional cleaning (scaling and polishing) removes tartar, stains from tea, coffee, gutkha and smoking, and bacteria that brushing can't reach — protecting your gums and freshening your breath.",
      "Whitening uses a dentist-supervised gel activated by LED light to lift deep stains safely, without damaging enamel.",
    ],
    whoNeeds: [
      "Yellow or stained teeth",
      "Bleeding gums while brushing",
      "Bad breath that doesn't go away",
      "Anyone who hasn't had a cleaning in 6 months",
      "Brides, grooms and anyone with a big day coming up",
    ],
    steps: [
      { title: "Gum check", text: "We check gum health and note your current tooth shade." },
      { title: "Ultrasonic scaling", text: "Gentle vibrations break up tartar above and below the gum line." },
      { title: "Polishing", text: "Removes surface stains and leaves teeth smooth so plaque sticks less." },
      { title: "Whitening (optional)", text: "Protective barrier on gums, whitening gel applied and activated in three short cycles." },
    ],
    benefits: ["Healthier gums, fresher breath", "Up to 6–8 shades whiter", "Enamel-safe, dentist-supervised", "Results in one hour"],
    faqs: [
      { q: "Does cleaning make teeth loose?", a: "No — this is a common myth. Tartar sometimes fills gaps caused by gum disease; removing it lets the gums heal and tighten." },
      { q: "How long does whitening last?", a: "Typically 1–2 years, depending on tea, coffee and tobacco habits. A yearly touch-up keeps it fresh." },
      { q: "Is whitening safe?", a: "Yes, when done by a dentist. We protect your gums and use enamel-safe gels. Some temporary sensitivity for 24 hours is normal." },
    ],
  },
  {
    slug: "smile-makeover",
    name: "Smile Makeover",
    short: "Veneers, contouring and digital smile design — a custom plan to give you the smile you've always wanted.",
    icon: "Gem",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    imageAlt: "Woman with a bright, confident smile",
    featured: true,
    priceFrom: 8000,
    priceNote: "per tooth for ceramic veneers · full makeovers quoted after consultation",
    duration: "2–3 weeks",
    visits: "2–4 visits",
    tagline: "Designed around your face. Crafted to look naturally yours.",
    whatIs: [
      "A smile makeover combines treatments such as veneers, crowns, whitening and gum contouring to improve the shape, colour and alignment of your teeth.",
      "With Digital Smile Design (DSD), we photograph your face and design your new smile on screen — then try it in your mouth as a temporary mock-up before anything is final.",
    ],
    whoNeeds: [
      "Chipped, uneven or worn-down teeth",
      "Gaps or small teeth",
      "Discolouration that whitening can't fix",
      "A 'gummy' smile",
      "Anyone preparing for a wedding or important event",
    ],
    steps: [
      { title: "Smile consultation", text: "We understand what you'd like to change and take photos and scans." },
      { title: "Digital Smile Design", text: "Your new smile is designed on screen, proportioned to your face." },
      { title: "Trial smile", text: "A temporary mock-up lets you see and feel the result before we begin." },
      { title: "Final veneers / crowns", text: "Hand-finished ceramics are bonded for a natural, long-lasting finish." },
    ],
    benefits: ["Preview before you commit", "Natural, face-matched design", "Stain-resistant ceramics", "Long-lasting results (10–15 years)"],
    faqs: [
      { q: "Will veneers look fake?", a: "Not when they're designed well. We match shape, translucency and shade to your face and skin tone, and you approve a trial smile first." },
      { q: "Do veneers damage my teeth?", a: "Modern veneers need only 0.3–0.5 mm of enamel reshaping — about the thickness of a contact lens." },
    ],
  },
  {
    slug: "kids-dentistry",
    name: "Kids' Dentistry",
    short: "Gentle, fun and fear-free care for little ones — check-ups, fluoride, sealants and painless fillings.",
    icon: "Baby",
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4",
    imageAlt: "Happy young boy smiling outdoors by the lake",
    featured: true,
    priceFrom: 300,
    priceNote: "check-up · fluoride from ₹800 · sealants from ₹600 per tooth",
    duration: "20–40 minutes",
    visits: "Every 6 months",
    tagline: "Happy visits today, healthy smiles for life.",
    whatIs: [
      "Children's teeth need special care — and children need a dentist who is patient, playful and gentle. Our kids' visits are designed so that the dentist becomes a friend, not a fear.",
      "We focus on prevention: catching cavities early, protecting teeth with fluoride and sealants, and teaching good brushing habits.",
    ],
    whoNeeds: [
      "Children from their first tooth (around 1 year)",
      "Kids with cavities or black spots on teeth",
      "Thumb-sucking or mouth-breathing habits",
      "Crooked teeth starting to come in (age 7+)",
    ],
    steps: [
      { title: "Tell-show-do", text: "We show and explain every instrument before using it, in language kids understand." },
      { title: "Gentle check-up", text: "Teeth counting, cleaning and a look at how jaws are developing." },
      { title: "Protection", text: "Fluoride varnish and pit-and-fissure sealants to prevent cavities." },
      { title: "Reward", text: "Every brave patient leaves with a sticker and a new toothbrush." },
    ],
    benefits: ["Fear-free, child-friendly approach", "Prevents cavities early", "Guides healthy jaw growth", "Parents stay with the child throughout"],
    faqs: [
      { q: "When should my child first visit a dentist?", a: "By their first birthday, or within six months of the first tooth appearing." },
      { q: "Do milk teeth really need fillings?", a: "Yes. Milk teeth hold space for permanent teeth and help children chew and speak. Untreated cavities can cause pain and infection." },
    ],
  },
  {
    slug: "crowns-and-bridges",
    name: "Crowns & Bridges",
    short: "Metal-free zirconia and E-max crowns that protect weak teeth and replace missing ones with a natural look.",
    icon: "Crown",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    imageAlt: "Dentist reviewing dental X-ray images on a lightbox",
    featured: false,
    priceFrom: 4500,
    priceNote: "metal-ceramic · zirconia from ₹9,000 · E-max from ₹12,000",
    duration: "2 visits, 5–7 days apart",
    visits: "2 visits",
    tagline: "Strong, natural-looking caps built to last.",
    whatIs: [
      "A crown is a custom cap that covers a damaged or root-canal-treated tooth, restoring its strength and shape. A bridge uses crowns on neighbouring teeth to replace a missing tooth.",
    ],
    whoNeeds: ["Teeth after root canal treatment", "Broken or heavily filled teeth", "One or two missing teeth (bridge)", "Discoloured teeth that need a new look"],
    steps: [
      { title: "Preparation", text: "The tooth is gently shaped under anaesthesia." },
      { title: "Digital impression", text: "A scan or impression is sent to our lab; you wear a temporary crown." },
      { title: "Fitting", text: "The final crown is checked for bite and shade, then cemented." },
    ],
    benefits: ["Protects weak teeth", "Shade-matched to your smile", "Metal-free options", "Long-lasting restoration"],
    faqs: [
      { q: "Which crown is best?", a: "Zirconia is our most popular choice — very strong, metal-free and natural-looking. E-max is ideal for front teeth where aesthetics matter most." },
    ],
  },
  {
    slug: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    short: "Gentle, precise removal of painful or impacted wisdom teeth with quick, comfortable healing.",
    icon: "Syringe",
    image: "https://images.unsplash.com/photo-1588776813677-77aaf5595b83",
    imageAlt: "Dental surgeon in mask and loupes performing a procedure",
    featured: false,
    priceFrom: 2500,
    priceNote: "simple extraction · surgical/impacted from ₹5,000",
    duration: "30–60 minutes",
    visits: "1 visit + review",
    tagline: "Stop the pain at the back of your mouth — comfortably.",
    whatIs: [
      "Wisdom teeth often don't have enough room to come in properly. When they get stuck (impacted), they can cause pain, swelling and damage to neighbouring teeth.",
    ],
    whoNeeds: ["Pain or swelling at the back of the jaw", "Food getting stuck behind the last molar", "Partially erupted wisdom tooth", "Difficulty opening the mouth"],
    steps: [
      { title: "X-ray assessment", text: "We check the tooth's position and its distance from the nerve." },
      { title: "Comfortable removal", text: "Under local anaesthesia, with minimally invasive technique." },
      { title: "Aftercare", text: "Clear aftercare instructions and medicines, with a review visit if needed." },
    ],
    benefits: ["Minimally invasive technique", "Faster healing", "Clear aftercare guidance", "Prevents damage to other teeth"],
    faqs: [
      { q: "How long is the recovery?", a: "Most people feel normal in 2–3 days. Swelling peaks on day 2 and settles within a week." },
    ],
  },
  {
    slug: "tooth-coloured-fillings",
    name: "Tooth-coloured Fillings",
    short: "Invisible composite fillings that bond to your tooth — no silver, no black, no mercury.",
    icon: "Wand2",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc",
    imageAlt: "Dentist wearing a mask holding a dental mirror and probe",
    featured: false,
    priceFrom: 1000,
    priceNote: "per tooth · GIC fillings for kids from ₹600",
    duration: "20–40 minutes",
    visits: "Single visit",
    tagline: "Fix cavities invisibly, in one short visit.",
    whatIs: [
      "Composite fillings are made of tooth-coloured resin that is shaded to match your tooth exactly and bonded in place — so nobody can tell you've had a filling.",
    ],
    whoNeeds: ["Small to medium cavities", "Black or brown spots on teeth", "Chipped edges on front teeth", "Replacing old silver fillings"],
    steps: [
      { title: "Remove decay", text: "Decay is removed gently, often without needing an injection." },
      { title: "Shade match & bond", text: "Resin is layered and hardened with a blue curing light." },
      { title: "Polish", text: "Shaped and polished to blend perfectly with your tooth." },
    ],
    benefits: ["Invisible result", "Mercury-free", "Preserves more natural tooth", "Done in one visit"],
    faqs: [
      { q: "How long do composite fillings last?", a: "Typically 7–10 years with good oral hygiene." },
    ],
  },
];

/** Real Google reviews (Kalyan Dental Google Business Profile). Add more as the clinic shares them. */
const reviews: Review[] = [
  {
    name: "Mohan Kumar",
    initials: "MK",
    rating: 5,
    when: "Google review",
    treatment: "Dental Treatment",
    text: "Very supportive people with high quality treatment in a reasonable price.",
  },
  {
    name: "Gabbar Singh",
    initials: "GS",
    rating: 5,
    when: "Google review",
    treatment: "Dental Surgery & Implants",
    text: "Doctor Nitul has one of the finest hands in dental surgery and implants.",
  },
  {
    name: "Praveen Kumar",
    initials: "PK",
    rating: 5,
    when: "Google review",
    treatment: "Clinic Visit",
    text: "Ambience is also good and staff behaviour is friendly.",
  },
];

const gallery: GalleryItem[] = [
  { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", alt: "Smiling woman after a smile makeover with porcelain veneers", category: "Makeover", title: "8 porcelain veneers", detail: "Closed gaps & corrected chipped edges · 3 weeks" },
  { image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9", alt: "Implant model showing titanium post and ceramic crown", category: "Implants", title: "Single-tooth implant", detail: "Replaced a missing molar · 3 months" },
  { image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe", alt: "Patient wearing clear aligners", category: "Braces", title: "Clear aligners", detail: "Crowding corrected · 11 months" },
  { image: "https://images.unsplash.com/photo-1580489944761-15a19d654956", alt: "Woman with bright white teeth after professional whitening", category: "Whitening", title: "In-clinic whitening", detail: "7 shades brighter · 1 hour" },
  { image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c", alt: "Smiling man after smile makeover treatment", category: "Makeover", title: "Full-mouth rehabilitation", detail: "Crowns & bite correction · 5 weeks" },
  { image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49", alt: "Digital 3D scan of teeth used for implant planning", category: "Implants", title: "Planned implants", detail: "Two implants placed after careful planning" },
  { image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349", alt: "Woman with a broad natural smile after braces", category: "Braces", title: "Ceramic braces", detail: "Protruding teeth corrected · 18 months" },
  { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", alt: "Smiling man after teeth whitening", category: "Whitening", title: "Stain removal + whitening", detail: "Tea & tobacco stains lifted · 1 visit" },
  { image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", alt: "Young woman with a confident smile after makeover", category: "Makeover", title: "Gum contouring + veneers", detail: "Balanced gummy smile · 2 weeks" },
];

const beforeAfter: BeforeAfterCase[] = [
  {
    tab: "Whitening",
    title: "Professional whitening",
    summary: "Years of tea and coffee stains lifted in a single one-hour session — 7 shades brighter.",
    duration: "1 visit",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    alt: "Close-up of a smiling woman",
    beforeFilter: "sepia(0.55) saturate(0.75) brightness(0.9) contrast(0.95)",
  },
  {
    tab: "Veneers",
    title: "Smile makeover with veneers",
    summary: "Chipped, uneven front teeth reshaped with 6 ultra-thin ceramic veneers designed digitally.",
    duration: "3 weeks",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    alt: "Woman with a confident smile",
    beforeFilter: "sepia(0.5) saturate(0.6) brightness(0.88) contrast(0.92) hue-rotate(-6deg)",
  },
  {
    tab: "Aligners",
    title: "Clear aligner straightening",
    summary: "Crowded lower teeth aligned with 22 sets of invisible aligners — no metal, no fuss.",
    duration: "11 months",
    image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349",
    alt: "Woman laughing with straight teeth",
    beforeFilter: "sepia(0.45) saturate(0.7) brightness(0.9) contrast(0.92)",
  },
];

/* ----------------------------------------------------------------------------
 * The exported site object
 * ------------------------------------------------------------------------- */

export const site = {
  business,
  doctor,
  treatments,
  reviews,
  gallery,
  beforeAfter,

  /** Change these hex values to re-theme the entire site. */
  theme: {
    brand: "#0E7C86",
    brandDark: "#0B3B45",
    accent: "#E8B04B",
    background: "#F7FBFC",
  },

  seo: {
    siteUrl: "https://kalyan-dental.vercel.app",
    title: "Kalyan Dental (Estd. 2013) | Trusted Dentist at Piska More, Ranchi",
    titleTemplate: "%s | Kalyan Dental, Piska More, Ranchi",
    description:
      "Kalyan Dental, Piska More, Ranchi — a decade of dedicated dental care since 2013. Dental surgery, implants, root canals and more by Dr. Nitul Sumit. Rated 4.9★ by 560+ patients on Google. Call 074798 87337.",
    keywords: ["dentist in Ranchi", "dental clinic Piska More", "root canal Ranchi", "dental implants Ranchi", "braces Ranchi", "dentist Vikash Nagar Ranchi", "Kalyan Dental Ranchi"],
    ogImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=630&fit=crop&q=80",
    locale: "en_IN",
  },

  announcement: {
    enabled: true,
    text: "Serving Piska More, Ranchi since 2013",
    linkText: "Book now",
    href: "/contact/",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments/" },
    { label: "Smile Gallery", href: "/gallery/" },
    { label: "About", href: "/about/" },
    { label: "Reviews", href: "/reviews/" },
    { label: "Contact", href: "/contact/" },
  ],

  cta: {
    book: "Book Appointment",
    whatsapp: "Book on WhatsApp",
    call: "Call Now",
    learnMore: "Learn more",
  },

  /* ---------------- Home page ---------------- */
  home: {
    hero: {
      eyebrow: "Piska More, Ranchi · Estd. 2013",
      headlineStart: "A decade of dedicated care for a",
      headlineAccent: "healthier smile",
      sub: "High-quality dental treatment at a reasonable price — trusted by the Piska More community since 2013.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
      imageAlt: "Dentist showing a patient her dental scan on a screen in a modern clinic",
      ratingCard: { title: "Google rating", sub: "560+ patient reviews" },
      availabilityCard: { title: "Open today", sub: "Closes 8:00 PM" },
      specialistCard: { title: "Since 2013", sub: "13+ years of care" },
      trustLine: "Trusted by 560+ reviewers on Google",
      avatars: [
        "https://images.unsplash.com/photo-1580489944761-15a19d654956",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      ],
    },
    stats: [
      { value: 13, suffix: "+", label: "Years of experience", decimals: 0 },
      { value: 560, suffix: "+", label: "Google reviews", decimals: 0 },
      { value: 4.9, suffix: "★", label: "Google rating", decimals: 1 },
      { text: "2013", label: "Established" },
      { text: "100%", label: "Sterilised & safe" },
    ] as { value?: number; suffix?: string; decimals?: number; text?: string; label: string }[],
    marquee: ["Estd. 2013", "Dental surgery", "Dental implants", "Root canal treatment", "Friendly staff", "Reasonable prices", "Open till 8 PM", "Piska More, Ranchi"],
    treatments: {
      eyebrow: "Treatments",
      title: "Everything your smile needs,",
      titleAccent: "under one roof",
      sub: "From a quick clean to a full smile makeover — specialist care with transparent, upfront pricing.",
      viewAll: "View all treatments",
    },
    beforeAfter: {
      eyebrow: "Smile makeovers",
      title: "Real change you can",
      titleAccent: "see",
      sub: "Drag the handle to compare. Every smile is planned digitally and previewed before we begin.",
      disclaimer: "Illustrative demo images. Individual results vary.",
      beforeLabel: "Before",
      afterLabel: "After",
    },
    why: {
      eyebrow: "Why Kalyan Dental",
      title: "Care that feels",
      titleAccent: "different",
      sub: "We've built every part of the clinic around one idea: you should leave calmer than you came in.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
      imageAlt: "Clean, modern dental treatment room with dental chair",
      items: [
        { icon: "HeartHandshake" as IconName, title: "Supportive, friendly team", text: "Patients consistently mention our supportive people and friendly staff behaviour. Anxious patients are always welcome." },
        { icon: "Award" as IconName, title: "A decade of experience", text: "Serving Piska More and Vikash Nagar since 2013, with skilled hands in dental surgery and implants." },
        { icon: "ShieldCheck" as IconName, title: "Hygiene & sterilisation", text: "Sterilised instruments and single-use disposables for every patient, every time." },
        { icon: "BadgeIndianRupee" as IconName, title: "Reasonable prices", text: "High-quality treatment at a reasonable price, with costs explained clearly before treatment starts." },
      ],
    },
    doctor: {
      eyebrow: "Meet your dentist",
      cta: "More about Dr. Nitul",
    },
    reviews: {
      eyebrow: "Patient stories",
      title: "Loved by",
      titleAccent: "560+ patients",
      titleEnd: "in Ranchi",
      readAll: "Read all 560+ reviews on Google",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions,",
      titleAccent: "answered",
      sub: "Can't find what you're looking for? Call or WhatsApp us on 074798 87337.",
      items: [
        { q: "Is root canal treatment painful?", a: "Not anymore. With modern anaesthesia, rotary instruments and a gentle approach, most patients say it feels like getting a filling. The toothache you have before an RCT is almost always worse than the treatment itself." },
        { q: "How long do dental implants last?", a: "With good brushing and a check-up once a year, implants commonly last 25 years to a lifetime. Dr. Nitul will explain the implant options and expected lifespan for your case at consultation." },
        { q: "Do you treat children?", a: "Yes. We see children and adults alike, and parents can stay with their child throughout the visit." },
        { q: "Do you accept UPI and cards?", a: "Please call the clinic on 074798 87337 to confirm the payment options currently accepted." },
        { q: "Do I need an appointment?", a: "We recommend calling ahead so you don't have to wait — afternoons around 2 PM are usually a little busy. Walk-ins are welcome during clinic hours." },
        { q: "Where exactly is the clinic?", a: "We are at Piska More, near Piska More petrol pump and opposite Janta petrol pump, Vikash Nagar, Ranchi 834005. Tap 'Get directions' for the Google Maps location." },
      ] as FAQ[],
    },
    ctaBand: {
      title: "Your new smile is",
      titleAccent: "one message away",
      sub: "Call or WhatsApp us and we'll find a time that suits you — open till 8 PM.",
    },
    contact: {
      eyebrow: "Visit us",
      title: "Find the clinic",
      sub: "At Piska More, opposite Janta petrol pump, Vikash Nagar.",
      todayLabel: "Today",
    },
  },

  /* ---------------- Inner pages ---------------- */
  pages: {
    treatments: {
      title: "Treatments",
      metaDescription: "Explore root canal treatment, dental implants, braces, clear aligners, whitening, smile makeovers and kids' dentistry at Kalyan Dental, Piska More, Ranchi — with indicative starting prices.",
      eyebrow: "Our treatments",
      heading: "Specialist dental care,",
      headingAccent: "honestly priced",
      sub: "Every treatment starts with a clear diagnosis and a written estimate. Prices below are starting points — your exact cost depends on your case.",
      fromLabel: "Starting from",
      durationLabel: "Duration",
      visitsLabel: "Visits",
      whatIsLabel: "What is it?",
      whoLabel: "Who needs it?",
      stepsLabel: "How it works",
      benefitsLabel: "Benefits",
      faqLabel: "Common questions",
      otherLabel: "Other treatments",
      detailCta: "Book a consultation",
    },
    gallery: {
      title: "Smile Gallery",
      metaDescription: "Smile transformations at Kalyan Dental, Piska More, Ranchi — implants, braces, whitening and smile makeovers.",
      eyebrow: "Smile gallery",
      heading: "Smiles we're",
      headingAccent: "proud of",
      sub: "The kind of results we work towards at Kalyan Dental. Tap any photo to view it larger.",
      allLabel: "All",
      filters: ["Implants", "Braces", "Whitening", "Makeover"] as GalleryCategory[],
      disclaimer: "Images shown are illustrative for this demo. Individual results vary.",
    },
    about: {
      title: "About",
      metaDescription: "Meet Dr. Nitul Sumit and the team behind Kalyan Dental — a trusted dental clinic at Piska More, Ranchi since 2013.",
      eyebrow: "Our story",
      heading: "A neighbourhood clinic built on",
      headingAccent: "trust",
      story: [
        "Kalyan Dental opened at Piska More, Ranchi in 2013 to give the families of Vikash Nagar and the surrounding neighbourhoods a trusted dental clinic close to home.",
        "More than a decade later, the clinic is known for supportive people, high-quality treatment at a reasonable price, a pleasant ambience and friendly staff — and for Dr. Nitul's skilled hands in dental surgery and implants.",
        "Today Kalyan Dental is rated 4.9★ by more than 560 patients on Google, continuing a tradition of excellence in oral healthcare.",
      ],
      storyImage: "https://images.unsplash.com/photo-1629909615184-74f495363b67",
      storyImageAlt: "Dental treatment room with dental chair and natural light",
      milestones: [
        { value: "2013", label: "Established at Piska More" },
        { value: "13+", label: "Years of care" },
        { value: "4.9★", label: "Google rating" },
        { value: "560+", label: "Google reviews" },
      ],
      doctorEyebrow: "Lead dentist",
      educationLabel: "Qualifications & journey",
      teamEyebrow: "The team",
      teamHeading: "The people behind",
      teamHeadingAccent: "your smile",
      team: [
        { name: "Dr. Nitul Sumit", role: "Dental Surgeon & Implantologist", bio: "Dental surgery, implants and complete dental care at Kalyan Dental.", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d", alt: "Dr. Nitul Sumit, dental surgeon" },
        { name: "Clinic team", role: "Assistants & front desk", bio: "Friendly, supportive staff who make every visit comfortable.", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f", alt: "Kalyan Dental clinic staff member in scrubs" },
      ],
      tourEyebrow: "Clinic tour",
      tourHeading: "Step inside the",
      tourHeadingAccent: "clinic",
      tour: [
        { image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09", alt: "Treatment room with modern dental chair", caption: "Treatment room" },
        { image: "https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81", alt: "Calm treatment area with dental chair", caption: "General & cosmetic care" },
        { image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d", alt: "Clinic reception area", caption: "Reception & waiting area" },
      ],
      certEyebrow: "Why patients trust us",
      certs: [
        { icon: "Award" as IconName, title: "Estd. 2013", text: "Over a decade at Piska More" },
        { icon: "BadgeCheck" as IconName, title: "4.9★ on Google", text: "560+ patient reviews" },
        { icon: "ShieldCheck" as IconName, title: "Sterilised instruments", text: "Hygiene-first protocol" },
        { icon: "HeartHandshake" as IconName, title: "Friendly staff", text: "Supportive, patient-first care" },
      ],
    },
    reviews: {
      title: "Reviews",
      metaDescription: "Read what patients say about Kalyan Dental, Piska More, Ranchi. Rated 4.9★ on Google by 560+ reviewers for quality treatment, reasonable prices and friendly staff.",
      eyebrow: "Patient reviews",
      heading: "Rated",
      headingAccent: "4.9★",
      headingEnd: "on Google",
      sub: "Highlights from our Google reviews. We read every single one — the good and the constructive.",
      basedOn: "Based on 560+ Google reviews",
      distribution: [
        // Estimated split consistent with 4.9★ / 560 reviews — replace with exact counts from Google.
        { stars: 5, count: 517 },
        { stars: 4, count: 30 },
        { stars: 3, count: 6 },
        { stars: 2, count: 2 },
        { stars: 1, count: 5 },
      ],
      writeReview: "Write a review",
      readAll: "Read all reviews on Google",
      localGuide: "Local Guide",
    },
    contact: {
      title: "Book an Appointment",
      metaDescription: "Book a dental appointment at Kalyan Dental, Piska More, Vikash Nagar, Ranchi. Call or WhatsApp 074798 87337. Open daily till 8 PM.",
      eyebrow: "Book a visit",
      heading: "Let's plan your",
      headingAccent: "visit",
      sub: "Fill in the form and we'll open WhatsApp with your details ready to send. We'll confirm your slot as soon as possible.",
      form: {
        name: { label: "Full name", placeholder: "e.g. Priya Sharma", error: "Please enter your name" },
        phone: { label: "Mobile number", placeholder: "10-digit mobile number", error: "Enter a valid 10-digit Indian mobile number" },
        treatment: { label: "Treatment", placeholder: "Select a treatment", general: "General check-up", notSure: "Not sure — need advice", error: "Please choose a treatment" },
        date: { label: "Preferred date", error: "Please pick today or a future date" },
        time: { label: "Preferred time", placeholder: "Select a time", error: "Please choose a time slot" },
        message: { label: "Anything we should know?", placeholder: "Describe your concern, e.g. pain in lower left tooth since 3 days" },
        submit: "Send on WhatsApp",
        privacy: "We only use your details to confirm your appointment. No spam, ever.",
      },
      timeSlots: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"],
      whatsappHeader: "New appointment request — Kalyan Dental",
      success: {
        title: "WhatsApp is opening…",
        text: "Just tap send in WhatsApp and we'll confirm your slot shortly. If WhatsApp didn't open, use the button below.",
        again: "Book another appointment",
        openAgain: "Open WhatsApp again",
      },
      sideTitle: "Prefer to talk?",
      sideText: "Call us during clinic hours or message any time on WhatsApp.",
      emergency: "Dental emergency? Severe pain, swelling or a broken tooth — call us directly on 074798 87337.",
    },
    notFound: {
      title: "Page not found",
      code: "404",
      heading: "This page has gone",
      headingAccent: "missing",
      text: "Like a tooth fairy's coin, the page you're looking for isn't where you expected. Let's get you back to something useful.",
      home: "Back to home",
      contact: "Book an appointment",
    },
  },

  /* ---------------- Shared labels ---------------- */
  labels: {
    menu: "Menu",
    close: "Close",
    callUs: "Call us",
    whatsappUs: "WhatsApp",
    address: "Address",
    phone: "Phone",
    hours: "Clinic hours",
    directions: "Get directions",
    quickLinks: "Quick links",
    treatmentsHeading: "Treatments",
    contactHeading: "Contact",
    followUs: "Follow us",
    copyright: "All rights reserved.",
    credit: "Website designed by AN Web Agency",
    footerBlurb: "A decade of dedicated dental care at Piska More, Ranchi — since 2013.",
    googleLabel: "Google",
    previous: "Previous",
    next: "Next",
    skipToContent: "Skip to content",
    from: "from",
    reviewsOnGoogle: "reviews on Google",
    since: "Since",
    years: "years",
  },
};

export type Site = typeof site;

/* ----------------------------------------------------------------------------
 * Derived helpers (no business text below this line)
 * ------------------------------------------------------------------------- */

export const whatsappLink = (text: string = site.business.whatsappMessage) =>
  `https://wa.me/${site.business.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const telLink = `tel:${site.business.phoneRaw}`;

export const formatINR = (n: number) => "₹" + n.toLocaleString("en-IN");

export const fullAddress = () => {
  const a = site.business.address;
  return `${a.line1}, ${a.city}, ${a.state} ${a.pin}`;
};
