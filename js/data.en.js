/* ===================================================================
   Site content — English
   Edit the text/image paths here; layout logic lives in main.js
=================================================================== */

const SITE_LANG = "en";

const SOCIAL_LINKS = {
  linkedin: "#", // TODO: replace with your LinkedIn URL
  instagram: "#", // TODO: replace with your Instagram URL
  note: "#", // TODO: replace with your note.com URL
  pinterest: "#" // TODO: replace with your Pinterest URL
};

const CONTACT_EMAIL = "your-email@example.com"; // TODO: replace with your address

const PROFILE = {
  name: "YYYYYYY",
  photo: "assets/images/profile_img.jpg",
  bio: [
    "Hi, I'm YK — a creative designer working across illustration, UI/UX, video and print.",
    "I like projects that ask for a bit of everything: a clear idea, a considered look, and a little craft in the details.",
    "Have a look through the work below, and get in touch if something resonates."
  ]
};

/* Each work category can hold 1–5+ items.
   1–5 items: shown as a static centered thumbnail row.
   6+ items: thumbnails auto-rotate through a 5-slot window every 3s. */
const WORKS = {
  illustration: {
    label: "Illustration",
    tileImage: "assets/images/works_illustration_img.jpg",
    items: [
      { image: "assets/images/works_illustration_1.jpg", title: "Paper Season", description: "An editorial illustration series exploring seasonal change through layered paper textures." },
      { image: "assets/images/works_illustration_2.jpg", title: "City Notebook", description: "Loose ink sketches of daily commutes, later composited into a small self-published zine." },
      { image: "assets/images/works_illustration_3.jpg", title: "Night Garden", description: "A moody botanical set commissioned for a boutique candle brand's packaging." }
    ]
  },
  uiux: {
    label: "UI/UX Design",
    tileImage: "assets/images/works_uiux_img.jpg",
    items: [
      { image: "assets/images/works_uiux_1.jpg", title: "Fintech Onboarding", description: "Redesigned a five-step signup flow, cutting drop-off by simplifying form logic and copy." },
      { image: "assets/images/works_uiux_2.jpg", title: "Recipe App Concept", description: "A cooking app concept built around one-handed use and large, glanceable typography." }
    ]
  },
  video: {
    label: "Video Contents",
    tileImage: "assets/images/works_video_img.jpg",
    items: [
      { image: "assets/images/works_video_1.jpg", title: "Studio Reel 2025", description: "A 45-second motion reel combining stop-motion and 2D animation for a design studio." },
      { image: "assets/images/works_video_2.jpg", title: "Product Launch Teaser", description: "A short vertical teaser cut for social, built from raw studio footage and title cards." },
      { image: "assets/images/works_video_3.jpg", title: "Behind the Scenes", description: "Documentary-style edit following a photoshoot from setup through final shot." }
    ]
  },
  products: {
    label: "Products",
    tileImage: "assets/images/works_products_img.jpg",
    items: [
      { image: "assets/images/works_products_1.jpg", title: "Ceramic Tableware", description: "A small tableware line designed and prototyped over a six-month studio residency." },
      { image: "assets/images/works_products_2.jpg", title: "Desk Objects", description: "A set of minimal desk accessories exploring a single extruded aluminum profile." }
    ]
  },
  writing: {
    label: "Writing",
    tileImage: "assets/images/works_writing_img.jpg",
    items: [
      { image: "assets/images/works_writing_1.jpg", title: "On Slow Design", description: "An essay on why unhurried process still matters in a deadline-driven industry." },
      { image: "assets/images/works_writing_2.jpg", title: "Studio Notes", description: "A running column documenting small decisions behind larger design projects." }
    ]
  }
};

const UI_TEXT = {
  langSwitchLabel: "日本語",
  langSwitchHref: "ja/index.html",
  mvTitle: "Portfolio",
  mvRole: "Creative Designer",
  mvName: "YK",
  worksTitle: "Works",
  profileTitle: "Profile",
  footer: "Copyright \u00A9 portfolio",
  contactTitle: "Contact",
  formName: "Name",
  formEmail: "Email",
  formMessage: "Message",
  formSending: "Sending\u2026",
  formSuccess: "Message sent. Thank you for reaching out \u2014 I'll reply to the email address you provided.",
  formError: "Something went wrong sending your message. Please try again or email me directly."
};
