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
  name: "SmileCraft",
  nameSuffix: "Dental Studio",
  fullName: "SmileCraft Dental Studio",
  tagline: "Advanced, painless dentistry in Ranchi",
  city: "Ranchi",
  state: "Jharkhand",
  phoneDisplay: "+91 90000 00000",
  phoneRaw: "+919000000000",
  whatsappNumber: "919000000000", // country code + number, digits only
  whatsappMessage: "Hi, I'd like to book an appointment at SmileCraft",
  email: "hello@smilecraftdental.in",
  address: {
    line1: "2nd Floor, Lalpur Chowk",
    line2: "Opp. Lalpur Police Station",
    city: "Ranchi",
    state: "Jharkhand",
    pin: "834001",
    country: "IN",
    landmark: "Above HDFC Bank, Lalpur Chowk",
  },
  geo: { lat: 23.3732, lng: 85.3292 },
  mapEmbedUrl: "https://www.google.com/maps?q=Lalpur+Chowk,+Ranchi,+Jharkhand+834001&z=16&output=embed",
  mapLinkUrl: "https://www.google.com/maps/search/?api=1&query=Lalpur+Chowk+Ranchi+834001",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=SmileCraft+Dental+Studio+Ranchi",
  rating: 4.9,
  reviewCount: 860,
  reviewCountLabel: "860+",
  established: 2013,
  priceRange: "₹₹",
  /** Opening hours — `day` is matched against today's weekday to highlight the row. */
  hours: [
    { day: "Monday", short: "Mon", slots: ["10:00 AM – 2:00 PM", "5:00 PM – 9:00 PM"] },
    { day: "Tuesday", short: "Tue", slots: ["10:00 AM – 2:00 PM", "5:00 PM – 9:00 PM"] },
    { day: "Wednesday", short: "Wed", slots: ["10:00 AM – 2:00 PM", "5:00 PM – 9:00 PM"] },
    { day: "Thursday", short: "Thu", slots: ["10:00 AM – 2:00 PM", "5:00 PM – 9:00 PM"] },
    { day: "Friday", short: "Fri", slots: ["10:00 AM – 2:00 PM", "5:00 PM – 9:00 PM"] },
    { day: "Saturday", short: "Sat", slots: ["10:00 AM – 2:00 PM", "5:00 PM – 9:00 PM"] },
    { day: "Sunday", short: "Sun", slots: ["By appointment only"] },
  ],
  hoursSummary: "Mon–Sat 10 AM–2 PM & 5–9 PM · Sun by appointment",
  /** Used in JSON-LD schema (24h format). */
  hoursSchema: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "14:00" },
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "17:00", closes: "21:00" },
  ],
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
};

const doctor = {
  name: "Dr. Ananya Sinha",
  title: "Prosthodontist & Implantologist",
  degrees: "BDS, MDS (Prosthodontics & Implantology)",
  experience: "12+ years",
  registration: "Jharkhand State Dental Council Reg. No. A-2871",
  image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47",
  imageAlt: "Dr. Ananya Sinha, prosthodontist at SmileCraft Dental Studio, in a white coat",
  signature: "Ananya Sinha",
  greeting: "A note from your dentist",
  message: [
    "When I opened SmileCraft in 2013, I had one promise in mind: nobody in Ranchi should have to travel to Delhi or Kolkata for world-class dental care — or be afraid of the dentist's chair.",
    "Every treatment here begins with a conversation. I'll show you your X-ray on screen, explain your options in simple Hindi or English, and give you the full cost before we start. No surprises, no pressure, no pain.",
  ],
  highlights: [
    "MDS from Manipal College of Dental Sciences",
    "Fellowship in Oral Implantology (ICOI, USA)",
    "2,400+ implants placed",
    "Invisalign® & clear-aligner certified provider",
  ],
  education: [
    { year: "2008", title: "BDS", place: "Rajendra Institute of Medical Sciences, Ranchi" },
    { year: "2012", title: "MDS — Prosthodontics & Implantology", place: "Manipal College of Dental Sciences" },
    { year: "2016", title: "Fellowship in Oral Implantology", place: "International Congress of Oral Implantologists" },
    { year: "2019", title: "Certified Clear-Aligner Provider", place: "Invisalign® & Illusion Aligners" },
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
      "We use rotary endodontic files, an apex locator and digital X-rays, which make the procedure faster, more precise and far more comfortable than the RCT most people imagine.",
    ],
    whoNeeds: [
      "Throbbing toothache, especially at night",
      "Lingering sensitivity to hot or cold",
      "A swollen gum or pimple-like boil near a tooth",
      "Deep cavity or a cracked tooth",
      "A tooth that has darkened after an injury",
    ],
    steps: [
      { title: "Digital X-ray & diagnosis", text: "A low-radiation digital X-ray shows exactly how deep the infection goes. You see it on screen with us." },
      { title: "Painless anaesthesia", text: "We numb the area with a topical gel first, then a slow computer-controlled injection. Most patients don't feel the needle." },
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
    short: "Permanent, natural-looking replacement for missing teeth — planned digitally, placed by an MDS implantologist.",
    icon: "Tooth",
    image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9",
    imageAlt: "Model of a dental implant with crown beside natural teeth models",
    featured: true,
    priceFrom: 22000,
    priceNote: "per implant incl. crown · premium Swiss/US systems from ₹35,000",
    duration: "60 minutes per implant",
    visits: "2–3 visits over 3 months",
    tagline: "Fixed teeth that look, feel and chew like your own — for life.",
    whatIs: [
      "A dental implant is a small titanium post placed in the jaw bone that acts as a new root. Once it fuses with the bone, a custom crown is fixed on top — giving you a tooth that doesn't move, doesn't need neighbouring teeth to be cut, and can last a lifetime.",
      "Dr. Ananya Sinha has placed more than 2,400 implants. Every case is planned on a 3D scan so the implant goes exactly where it should.",
    ],
    whoNeeds: [
      "One or more missing teeth",
      "Loose or uncomfortable dentures",
      "Teeth that cannot be saved with RCT",
      "People who don't want neighbouring teeth cut for a bridge",
    ],
    steps: [
      { title: "Consultation & 3D scan", text: "We check bone height and density with a CBCT scan and plan the implant position digitally." },
      { title: "Implant placement", text: "A short, minimally invasive procedure under local anaesthesia. Most patients return to work the next day." },
      { title: "Healing (8–12 weeks)", text: "The implant fuses with your bone. You wear a temporary tooth so you're never without a smile." },
      { title: "Final crown", text: "A custom zirconia or ceramic crown is shade-matched and fixed on the implant." },
    ],
    benefits: ["Does not damage neighbouring teeth", "Prevents bone loss", "Chew anything — roti, nuts, sugarcane", "Lifetime warranty on implant fixture"],
    faqs: [
      { q: "How long do implants last?", a: "With good brushing and yearly check-ups, implants commonly last 25 years to a lifetime. The crown on top may need replacing after 15–20 years." },
      { q: "Am I too old for implants?", a: "Age is rarely the problem — bone health and general health matter more. We regularly place implants for patients in their 70s, including those with controlled diabetes." },
      { q: "Is the surgery painful?", a: "It's done under local anaesthesia and most people describe it as easier than an extraction. Mild soreness for 2–3 days is managed with regular painkillers." },
    ],
  },
  {
    slug: "braces-and-clear-aligners",
    name: "Braces & Clear Aligners",
    short: "Metal, ceramic or invisible aligners for straight teeth at any age — with a 3D preview of your final smile.",
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
      { title: "Smile assessment", text: "Photos, X-rays and an intra-oral scan of your teeth." },
      { title: "3D smile preview", text: "See a simulation of how your teeth will move and your final result before you commit." },
      { title: "Fitting", text: "Braces are bonded in one comfortable visit, or you receive your first set of aligners." },
      { title: "Monthly adjustments", text: "Short check-ups every 4–6 weeks to keep teeth moving on schedule." },
      { title: "Retainers", text: "Once teeth are straight, retainers keep them there for good." },
    ],
    benefits: ["Easier cleaning & healthier gums", "Better bite and chewing", "No-cost EMI options available", "3D preview before you begin"],
    faqs: [
      { q: "Am I too old for braces?", a: "No. A third of our orthodontic patients are adults — many in their 30s and 40s choose clear aligners because they're discreet at work." },
      { q: "Do aligners work as well as braces?", a: "For most mild-to-moderate cases, yes. For complex bite problems, braces may be faster. We'll tell you honestly which suits you." },
      { q: "Can I pay in instalments?", a: "Yes, we offer 0% EMI over 6–12 months through Bajaj Finserv and credit cards." },
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
    benefits: ["Protects weak teeth", "Shade-matched to your smile", "Metal-free options", "5–10 year warranty"],
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
      { title: "Aftercare", text: "Clear instructions, medicines and a WhatsApp check-in the next day." },
    ],
    benefits: ["Minimally invasive technique", "Faster healing", "Next-day WhatsApp follow-up", "Prevents damage to other teeth"],
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

const reviews: Review[] = [
  {
    name: "Priyanka Mahto",
    initials: "PM",
    rating: 5,
    when: "2 weeks ago",
    treatment: "Root Canal Treatment",
    text: "I was terrified of RCT after hearing stories from my family. Dr. Ananya explained everything on the screen and honestly I didn't feel anything except a little pressure. Done in one sitting, no pain the next day. Clinic is spotless.",
    localGuide: true,
  },
  {
    name: "Rohit Kumar Singh",
    initials: "RS",
    rating: 5,
    when: "1 month ago",
    treatment: "Dental Implants",
    text: "Got two implants done for my father (68 yrs, diabetic). They planned everything properly with a 3D scan and gave the full cost upfront — no hidden charges later. He can eat roti and apple again. Very grateful.",
  },
  {
    name: "Sneha Agarwal",
    initials: "SA",
    rating: 5,
    when: "3 weeks ago",
    treatment: "Clear Aligners",
    text: "Started aligners 10 months ago and my teeth are almost perfect now. Nobody at office even noticed I was wearing them. The staff sends reminders on WhatsApp for every check-up. Best dental clinic in Ranchi, hands down.",
    localGuide: true,
  },
  {
    name: "Md. Faizan Ansari",
    initials: "FA",
    rating: 5,
    when: "2 months ago",
    treatment: "Teeth Cleaning & Whitening",
    text: "Went for cleaning and whitening before my wedding. Result was amazing — teeth became 5–6 shades brighter and wedding photos came out so good. Reasonable price compared to other clinics in Lalpur.",
  },
  {
    name: "Kavita Oraon",
    initials: "KO",
    rating: 5,
    when: "1 week ago",
    treatment: "Kids' Dentistry",
    text: "My 6-year-old daughter used to cry at every doctor visit. Here they showed her all the tools first, let her hold the mirror and she actually enjoyed it! Got a sticker and a new brush. Now she asks when we're going again.",
  },
  {
    name: "Abhishek Tiwari",
    initials: "AT",
    rating: 5,
    when: "5 weeks ago",
    treatment: "Wisdom Tooth Removal",
    text: "Impacted wisdom tooth removed in about 40 minutes. Very professional — they even messaged next morning on WhatsApp to check if I was okay. Swelling was minimal. Timings are convenient too, I went after office at 7 PM.",
    localGuide: true,
  },
  {
    name: "Neha Kumari",
    initials: "NK",
    rating: 5,
    when: "3 months ago",
    treatment: "Smile Makeover",
    text: "I had a gap and chipped front teeth for years. Doctor first showed me a trial smile so I knew exactly how it would look. Veneers look completely natural. I smile in photos now without covering my mouth.",
  },
  {
    name: "Sanjay Prasad",
    initials: "SP",
    rating: 4,
    when: "1 month ago",
    treatment: "Crowns & Bridges",
    text: "Good experience overall. Zirconia crown fits perfectly and colour matches my teeth. Had to wait 15 minutes on a Saturday evening as it was busy, but treatment quality is excellent. Recommended.",
  },
  {
    name: "Ritika Lakra",
    initials: "RL",
    rating: 5,
    when: "6 days ago",
    treatment: "Dental Check-up",
    text: "Came for the free check-up offer expecting a sales pitch, but doctor only advised what was actually needed and told me one tooth could wait. That honesty is rare. Will be coming here for everything now.",
  },
];

const gallery: GalleryItem[] = [
  { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", alt: "Smiling woman after a smile makeover with porcelain veneers", category: "Makeover", title: "8 porcelain veneers", detail: "Closed gaps & corrected chipped edges · 3 weeks" },
  { image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9", alt: "Implant model showing titanium post and ceramic crown", category: "Implants", title: "Single-tooth implant", detail: "Replaced a missing molar · 3 months" },
  { image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe", alt: "Patient wearing clear aligners", category: "Braces", title: "Clear aligners", detail: "Crowding corrected · 11 months" },
  { image: "https://images.unsplash.com/photo-1580489944761-15a19d654956", alt: "Woman with bright white teeth after professional whitening", category: "Whitening", title: "In-clinic whitening", detail: "7 shades brighter · 1 hour" },
  { image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c", alt: "Smiling man after smile makeover treatment", category: "Makeover", title: "Full-mouth rehabilitation", detail: "Crowns & bite correction · 5 weeks" },
  { image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49", alt: "Digital 3D scan of teeth used for implant planning", category: "Implants", title: "3D-guided implants", detail: "Two implants planned on CBCT scan" },
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
    siteUrl: "https://smilecraft-dental.vercel.app",
    title: "SmileCraft Dental Studio | Best Painless Dentist in Lalpur, Ranchi",
    titleTemplate: "%s | SmileCraft Dental Studio, Ranchi",
    description:
      "Painless root canals, dental implants, braces, clear aligners and smile makeovers in Ranchi by Dr. Ananya Sinha, MDS. Rated 4.9★ by 860+ patients. Book on WhatsApp.",
    keywords: ["dentist in Ranchi", "dental clinic Lalpur", "root canal Ranchi", "dental implants Ranchi", "braces Ranchi", "teeth whitening Ranchi"],
    ogImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=630&fit=crop&q=80",
    locale: "en_IN",
  },

  announcement: {
    enabled: true,
    text: "Free dental check-up this month",
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
      eyebrow: "Ranchi's MDS-led dental studio",
      headlineStart: "Painless dentistry for a",
      headlineAccent: "smile you'll love",
      sub: "Advanced dental care in the heart of Ranchi, by an MDS specialist.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
      imageAlt: "Dentist showing a patient her dental scan on a screen in a modern clinic",
      ratingCard: { title: "Google rating", sub: "860+ happy patients" },
      availabilityCard: { title: "Next available slot", sub: "Today, 5:30 PM" },
      specialistCard: { title: "MDS Specialist", sub: "12+ years experience" },
      trustLine: "15,000+ smiles crafted in Ranchi",
      avatars: [
        "https://images.unsplash.com/photo-1580489944761-15a19d654956",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      ],
    },
    stats: [
      { value: 12, suffix: "+", label: "Years of experience", decimals: 0 },
      { value: 15000, suffix: "+", label: "Patients treated", decimals: 0 },
      { value: 4.9, suffix: "★", label: "Google rating", decimals: 1 },
      { text: "MDS", label: "Specialist-led care" },
      { text: "100%", label: "Sterilised & safe" },
    ] as { value?: number; suffix?: string; decimals?: number; text?: string; label: string }[],
    marquee: ["Painless injections", "Digital X-ray", "Single-sitting RCT", "3D implant planning", "Clear aligners", "0% EMI", "Class-B autoclave", "Evening appointments"],
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
      eyebrow: "Why SmileCraft",
      title: "Care that feels",
      titleAccent: "different",
      sub: "We've built every part of the clinic around one idea: you should leave calmer than you came in.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
      imageAlt: "Bright, modern SmileCraft treatment room with dental chair",
      items: [
        { icon: "HeartHandshake" as IconName, title: "Painless procedures", text: "Numbing gel, computer-controlled injections and a gentle, unhurried approach. Anxious patients are our speciality." },
        { icon: "ScanLine" as IconName, title: "Latest equipment & digital X-ray", text: "90% less radiation than film X-rays, intra-oral cameras and 3D CBCT planning — see exactly what we see." },
        { icon: "ShieldCheck" as IconName, title: "100% sterilisation protocol", text: "Class-B autoclave, sealed instrument pouches opened in front of you and single-use disposables, every time." },
        { icon: "BadgeIndianRupee" as IconName, title: "Transparent pricing", text: "A written estimate before treatment starts. No hidden charges. UPI, cards and 0% EMI accepted." },
      ],
    },
    doctor: {
      eyebrow: "Meet your dentist",
      cta: "More about Dr. Ananya",
    },
    reviews: {
      eyebrow: "Patient stories",
      title: "Loved by",
      titleAccent: "860+ families",
      titleEnd: "in Ranchi",
      readAll: "Read all 860+ reviews on Google",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions,",
      titleAccent: "answered",
      sub: "Can't find what you're looking for? Send us a WhatsApp — we usually reply within 15 minutes.",
      items: [
        { q: "Is root canal treatment painful?", a: "Not anymore. With modern anaesthesia, rotary instruments and a gentle approach, most patients say it feels like getting a filling. The toothache you have before an RCT is almost always worse than the treatment itself." },
        { q: "How long do dental implants last?", a: "With good brushing and a check-up once a year, implants commonly last 25 years to a lifetime. We use internationally certified implant systems and give a lifetime warranty on the implant fixture." },
        { q: "Do you treat children?", a: "Yes! We see children from their first tooth onwards. Our 'tell-show-do' approach makes visits fun and fear-free, and parents can stay with their child throughout." },
        { q: "Do you accept UPI and cards?", a: "Yes — we accept UPI (GPay, PhonePe, Paytm), all debit and credit cards, and cash. For treatments above ₹15,000 we also offer 0% EMI over 6–12 months." },
        { q: "Do I need an appointment?", a: "We recommend booking so you don't have to wait — just send a WhatsApp or call. Walk-ins are welcome during clinic hours, and dental emergencies are always seen the same day." },
        { q: "What does a check-up cost?", a: "A consultation and check-up is ₹300 (free this month as part of our dental health drive). If an X-ray is needed, a digital X-ray is ₹200. You'll always get a written estimate before any treatment." },
      ] as FAQ[],
    },
    ctaBand: {
      title: "Your new smile is",
      titleAccent: "one message away",
      sub: "Send us a WhatsApp and we'll find a time that suits you — evenings and Sundays included.",
    },
    contact: {
      eyebrow: "Visit us",
      title: "Find the studio",
      sub: "Right at Lalpur Chowk, with easy parking behind the building.",
      todayLabel: "Today",
    },
  },

  /* ---------------- Inner pages ---------------- */
  pages: {
    treatments: {
      title: "Treatments",
      metaDescription: "Explore root canal treatment, dental implants, braces, clear aligners, whitening, smile makeovers and kids' dentistry at SmileCraft Dental Studio, Ranchi — with transparent starting prices.",
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
      metaDescription: "See real smile transformations from SmileCraft Dental Studio, Ranchi — implants, braces, aligners, whitening and smile makeovers.",
      eyebrow: "Smile gallery",
      heading: "Smiles we're",
      headingAccent: "proud of",
      sub: "A few of the thousands of smiles crafted at our Lalpur studio. Tap any photo to view it larger.",
      allLabel: "All",
      filters: ["Implants", "Braces", "Whitening", "Makeover"] as GalleryCategory[],
      disclaimer: "Images shown are illustrative for this demo. Individual results vary.",
    },
    about: {
      title: "About",
      metaDescription: "Meet Dr. Ananya Sinha, MDS, and the team behind SmileCraft Dental Studio — Ranchi's specialist-led dental clinic at Lalpur Chowk since 2013.",
      eyebrow: "Our story",
      heading: "A dental studio built on",
      headingAccent: "trust",
      story: [
        "SmileCraft began in 2013 as a single-chair clinic above a pharmacy at Lalpur Chowk. Dr. Ananya Sinha had just returned home to Ranchi after her MDS at Manipal, determined to bring specialist-level dentistry to the city she grew up in.",
        "Twelve years and more than 15,000 patients later, the studio has grown to three treatment suites, an in-house digital X-ray and 3D scan room, and a team of eight — but the founding idea hasn't changed. Explain everything. Hurt no one. Charge fairly.",
        "Today, families from across Jharkhand — Ranchi, Hazaribagh, Ramgarh, Khunti and beyond — trust us with everything from their child's first check-up to full-mouth implants.",
      ],
      storyImage: "https://images.unsplash.com/photo-1629909615184-74f495363b67",
      storyImageAlt: "Spacious treatment suite with dental chair and natural light",
      milestones: [
        { value: "2013", label: "Founded in Lalpur" },
        { value: "3", label: "Treatment suites" },
        { value: "2,400+", label: "Implants placed" },
        { value: "8", label: "Team members" },
      ],
      doctorEyebrow: "Founder & lead dentist",
      educationLabel: "Education & training",
      teamEyebrow: "The team",
      teamHeading: "The people behind",
      teamHeadingAccent: "your smile",
      team: [
        { name: "Dr. Rahul Verma", role: "Orthodontist (MDS)", bio: "Braces & clear-aligner specialist. Visits Tue, Thu & Sat.", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d", alt: "Dr. Rahul Verma, orthodontist, in a white coat" },
        { name: "Dr. Kunal Tirkey", role: "Endodontist (MDS)", bio: "Root canal & microscope dentistry. 8 years experience.", image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471", alt: "Dr. Kunal Tirkey, endodontist, standing with arms folded" },
        { name: "Pooja Kachhap", role: "Dental Hygienist", bio: "Cleaning, whitening & oral-hygiene coaching for kids and adults.", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f", alt: "Pooja Kachhap, dental hygienist, in teal scrubs" },
      ],
      tourEyebrow: "Clinic tour",
      tourHeading: "Step inside the",
      tourHeadingAccent: "studio",
      tour: [
        { image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09", alt: "Main treatment suite with modern dental chair", caption: "Suite 1 — Implants & surgery" },
        { image: "https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81", alt: "Calm treatment room with teal dental chair", caption: "Suite 2 — General & cosmetic" },
        { image: "https://images.unsplash.com/photo-1643660526741-094639fbe53a", alt: "Colourful kids-friendly dental room", caption: "Kids' corner" },
        { image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d", alt: "Clinic reception area", caption: "Reception & lounge" },
        { image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49", alt: "Digital 3D dental scan on a tablet", caption: "Digital scan & X-ray room" },
      ],
      certEyebrow: "Certifications & memberships",
      certs: [
        { icon: "Award" as IconName, title: "Indian Dental Association", text: "Member, Ranchi branch" },
        { icon: "BadgeCheck" as IconName, title: "ICOI Fellowship", text: "International Congress of Oral Implantologists" },
        { icon: "ShieldCheck" as IconName, title: "Class-B Sterilisation", text: "EN 13060 certified autoclave" },
        { icon: "Microscope" as IconName, title: "Digital Dentistry", text: "CBCT, RVG & intra-oral scanning" },
      ],
    },
    reviews: {
      title: "Reviews",
      metaDescription: "Read what 860+ patients say about SmileCraft Dental Studio, Ranchi. Rated 4.9★ on Google for painless treatment, honest pricing and a spotless clinic.",
      eyebrow: "Patient reviews",
      heading: "Rated",
      headingAccent: "4.9★",
      headingEnd: "by Ranchi",
      sub: "Every review below is from a real visit. We read every single one — the good and the constructive.",
      basedOn: "Based on 860+ Google reviews",
      distribution: [
        { stars: 5, count: 792 },
        { stars: 4, count: 51 },
        { stars: 3, count: 10 },
        { stars: 2, count: 3 },
        { stars: 1, count: 4 },
      ],
      writeReview: "Write a review",
      readAll: "Read all reviews on Google",
      localGuide: "Local Guide",
    },
    contact: {
      title: "Book an Appointment",
      metaDescription: "Book a dental appointment at SmileCraft Dental Studio, Lalpur Chowk, Ranchi. Call or WhatsApp +91 90000 00000. Open Mon–Sat 10 AM–2 PM & 5–9 PM.",
      eyebrow: "Book a visit",
      heading: "Let's plan your",
      headingAccent: "visit",
      sub: "Fill in the form and we'll open WhatsApp with your details ready to send. We confirm most bookings within 15 minutes.",
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
      timeSlots: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"],
      whatsappHeader: "New appointment request — SmileCraft Dental Studio",
      success: {
        title: "WhatsApp is opening…",
        text: "Just tap send in WhatsApp and we'll confirm your slot shortly. If WhatsApp didn't open, use the button below.",
        again: "Book another appointment",
        openAgain: "Open WhatsApp again",
      },
      sideTitle: "Prefer to talk?",
      sideText: "Call us during clinic hours or message any time on WhatsApp.",
      emergency: "Dental emergency? Severe pain, swelling or a broken tooth — call us directly and we'll see you the same day.",
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
    credit: "Demo website designed by AN Web Agency",
    footerBlurb: "Specialist-led, painless dentistry at Lalpur Chowk, Ranchi — since 2013.",
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
