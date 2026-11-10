// All site copy and content lives here so it can be edited without touching layout code.
// Every number below comes from John's résumé / fact sheet; update them there first.

export const site = {
  name: "John Fitzhenry",
  url: "https://johnfitzhenry.com",
  email: "johnafitzhenry@gmail.com",
  // Same Formspree form the previous johnfitzhenry.com and fitzframed.com use.
  formEndpoint: "https://formspree.io/f/xqegvprp",
  description:
    "John Fitzhenry is a photographer, filmmaker and web builder based in Syracuse, NY and Franklin, MA: Syracuse University senior portraits, video and live production, and websites.",
  links: {
    instagram: "https://www.instagram.com/fitzframed/",
    youtube: "https://www.youtube.com/@FitzFramed",
    linkedin: "https://www.linkedin.com/in/john-fitzhenry",
    github: "https://github.com/john-fitzhenry",
    fitzframed: "https://fitzframed.com",
  },
};

export const stats = [
  { value: "1.8M+", label: "views on my YouTube channel" },
  { value: "180K", label: "followers on @syracuseu, where my photo and video work runs" },
  { value: "28", label: "Syracuse seniors photographed in under two weeks" },
  { value: "2", label: "web products designed, built and live" },
];

export const disciplines = [
  {
    n: "01",
    title: "Video & film",
    href: "/#video",
    body: "Music videos, promos, documentary and short-form social. I direct, shoot, edit and color-grade.",
  },
  {
    n: "02",
    title: "Photography",
    href: "/#photo",
    body: "Portraits, headshots, and production and event photography, lit and edited with a filmmaker's eye.",
  },
  {
    n: "03",
    title: "Live & multimedia",
    href: "/#live",
    body: "Multi-camera show capture, live switching and streaming, playback for the stage, and podcasts built from scratch.",
  },
  {
    n: "04",
    title: "Web design & development",
    href: "/#web",
    body: "Fast, accessible websites and web apps, from a one-page portfolio to a subscription product.",
  },
];

// Click-to-play videos. `id` is the YouTube video ID; thumbnails are stored locally in /public/video.
export const videos = [
  {
    slug: "t3-sound-of-music",
    id: "hVeis3MdCyw",
    title: "T.3: The Sound of Music Medley",
    role: "Director",
    client: "T.3",
    note: "Official music video for the a cappella trio from America's Got Talent.",
    feature: true,
  },
  {
    slug: "ocean-state-star-awards",
    id: "X4lCg2iEqG0",
    title: "Ocean State Star Awards",
    role: "Behind-the-scenes film",
    client: "Providence Performing Arts Center",
    note: "A live awards show covered with a multi-camera rig around an ATEM switcher.",
  },
  {
    slug: "tom-abbott-time",
    id: "51pNNYyM4vs",
    title: "Tom Abbott: Time (Where You Going)",
    role: "Director of Photography",
    client: "Tom Abbott",
    note: "Narrative music video shot on Blackmagic URSA and graded in DaVinci Resolve.",
  },
  {
    slug: "fpac-tarzan",
    id: "uLgoiAT1x50",
    title: "Tarzan at FPAC",
    role: "Live performance capture",
    client: "Franklin Performing Arts Company",
    note: "A multi-camera workflow built to follow fast choreography and flying effects.",
  },
  {
    slug: "talk-talk-boom",
    id: "kKLryO0ERLU",
    title: "Talk Talk Boom!",
    role: "Podcast producer",
    client: "Franklin Performing Arts Company",
    note: "A video podcast launched in eight weeks: five episodes with Broadway guests.",
  },
  {
    slug: "su-campus-tour",
    id: "khwlwQ3X9h0",
    title: "Syracuse University campus tour",
    role: "B-camera",
    client: "Syracuse University Division of Marketing",
    note: "Part of the official tour series for prospective students and families.",
  },
  {
    slug: "otto-tunes-on-tour",
    id: "HPAAALt9ug8",
    title: "Otto Tunes on tour",
    role: "Producer & editor",
    client: "Otto Tunes a cappella",
    note: "A three-and-a-half-minute news piece on the group's winter tour.",
  },
];

export const videoAlso = [
  "A 39-minute season documentary for First Year Players, delivered by a six-person team on a two-week post schedule.",
  "A two-camera 4K capture of a full two-hour musical in the 1,500-seat Goldstein Auditorium.",
  "A Lockerbie remembrance reel for @syracuseu that drew 35K+ views in its first two days.",
  "Syracuse University's monthly recap series: the April 2026 edition cut 303 clips from nine campus events into one short video.",
  "Gear-sponsored Instagram Collaboration Reels with B&H Photo's @bheduadvantage.",
];

export const liveWork = [
  {
    title: "Once, Franklin Performing Arts Company",
    body: "Ran live AV for a three-show run: wireless video to on-stage displays, about 68 live playback cues, a multi-camera archive and a broadcast stream.",
  },
  {
    title: "Podcasts, built to be owned",
    body: "Launched Talk Talk Boom! for FPAC in eight weeks and co-produced two pilot episodes of CUSE Q&A with Syracuse University's marketing staff. My podcast-consulting service won $1,500 in venture funding at the iSchool's RvD iPrize Pitchfest in 2026.",
  },
  {
    title: "Recitals, shows and events",
    body: "Camera operation and audio monitoring for dance recitals, live shows and a two-camera campaign event across Massachusetts with Boston Freelance Media.",
  },
];

export const photoWork = [
  {
    title: "Senior portraits",
    body: "Cap-and-gown sessions across the Syracuse University campus, solo or with your people.",
    href: "/senior-portraits/",
    cta: "See senior portraits",
  },
  {
    title: "Headshots",
    body: "About 50 cast headshots in three days for First Year Players, with professional portrait lighting.",
  },
  {
    title: "On-site portrait studios",
    body: "High-volume individual and group portraits in five-minute slots for a performing arts school's spring concert.",
  },
  {
    title: "Production & event photography",
    body: "Show photos ready to post on opening night, plus campus events for Syracuse University.",
  },
];

export const webProjects = [
  {
    slug: "tuberat",
    title: "Tube Rat",
    url: "https://tuberat.uk",
    display: "tuberat.uk",
    role: "Creator & developer",
    body: "A 3D browser game on London's real rail network: 381 stations generated from Transport for London open data, with serverless leaderboards and replay-verified anti-cheat.",
    stack: ["three.js", "JavaScript", "Python", "Netlify Functions"],
    alt: "Tube Rat title screen: a cartoon rat standing on railway tracks beside a brick station platform",
  },
  {
    slug: "mtresume",
    title: "MTResume",
    url: "https://mtresume.com",
    display: "mtresume.com",
    role: "Founder & developer",
    body: "A subscription web app that formats industry-standard theater résumés to fit an 8×10 headshot. Covered by 1,593 unit tests and 91 browser tests.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    alt: "MTResume editor: a form on the left and a live one-page theater résumé preview on the right",
  },
  {
    slug: "fitzframed",
    title: "FitzFramed",
    url: "https://fitzframed.com",
    display: "fitzframed.com",
    role: "Design & build",
    body: "My production company's site, rebuilt as static pages with click-to-play video. The rebuild cut its JavaScript from 447 KB to 4 KB.",
    stack: ["HTML & CSS", "Python build", "Technical SEO"],
    alt: "FitzFramed homepage: a performer flying above a dark stage behind the words Fitz Framed Media Production",
  },
];

export const webAlso = [
  "First Year Players: led a design system and accessibility pass across the group's 15-page site, ending with zero WCAG 2.1 AA contrast failures and alt text on every content image.",
  "Otto Tunes: refreshed the group's site with a new Meet the Team page, member bios and a Join Us page.",
  "Technical SEO as standard: sitemaps, structured data and Google Search Console.",
];

export const clients = [
  "Syracuse University Division of Marketing",
  "B&H Photo (EDU Advantage)",
  "Providence Performing Arts Center",
  "Franklin Performing Arts Company",
  "Franklin School for the Performing Arts",
  "T.3",
  "Tom Abbott",
  "Commerce Ventures",
  "Boston Freelance Media",
  "First Year Players",
  "Otto Tunes",
];

export const toolkit = [
  {
    title: "Camera & light",
    items: "Sony A7C II, Blackmagic URSA, DJI RS 4 gimbal, Atomos Ninja V, Aputure and Amaran lighting",
  },
  {
    title: "Post",
    items: "Adobe Premiere Pro, DaVinci Resolve, Lightroom, Photoshop; color grading from S-Log3 and Apple Log",
  },
  {
    title: "Live",
    items: "Blackmagic ATEM switching, OBS streaming, wireless video and lav audio",
  },
  {
    title: "Web",
    items: "JavaScript, TypeScript, Python, SQL, React, Next.js, three.js, Supabase, Stripe",
  },
];

// Photo sizes (w × h of the 1200px files in /public/photos).
const P = { w: 799, h: 1200 };
const L = { w: 1200, h: 799 };

export const photos = {
  "dsc05859": { ...P, alt: "Graduate seated on a stone balustrade in warm golden-hour light" },
  "dsc02648": { ...P, alt: "Graduate tossing his cap skyward on a grassy hill on the Syracuse University campus" },
  "charlotte_1": { ...L, alt: "Graduate in a white dress and orange stole posing playfully with the Lincoln statue" },
  "lizzy_1": { ...P, alt: "Graduate in an orange stole sitting on a stone ledge in front of a campus clock tower" },
  "dsc02228": { ...P, alt: "Graduate in an orange Syracuse stole holding her cap on a sunlit spring quad" },
  "lizzy_2": { ...P, alt: "Graduate in a white dress and orange stole leaning against a stone doorway" },
  "dsc02594": { ...P, alt: "Graduate in a navy gown and orange stole in front of Crouse College" },
  "charlotte_2": { ...P, alt: "Graduate in a white dress beside the Lincoln statue on the Syracuse campus" },
  "maggie_1": { ...P, alt: "Graduate in an open navy gown and stoles laughing in front of a stone campus building" },
  "dsc02980": { ...P, alt: "Graduate flinging her cap in front of a carved stone wall" },
  "maggie_2": { ...P, alt: "Graduate in gown and stoles smiling in soft evening light" },
  "dsc03635": { ...L, alt: "Friends in graduation whites spraying champagne on the lawn below Crouse College" },
  "dsc03843": { ...P, alt: "Couple sharing a smile on the campus promenade with the Crouse College tower behind them" },
  "dsc03997": { ...P, alt: "Newhouse graduate posing in the NCC News studio beneath the broadcast lighting grid" },
  "dsc04885": { ...P, alt: "Graduate throwing her cap in front of the Hall of Languages" },
  "dsc05303": { ...P, alt: "Five friends in Syracuse shirts relaxing together on the campus turf field" },
  "dsc05655": { ...P, alt: "Five graduates in white dresses and orange stoles posing together below Crouse College" },
  "dsc06574": { ...P, alt: "Graduate posing playfully in the lap of the Lincoln statue" },
  "dsc06605": { ...P, alt: "Graduate in a charcoal suit and teal tie laughing beside a brick archway" },
  "dsc06699": { ...P, alt: "Graduate in gown, stole and honor cords leaning against a limestone column" },
  "dsc06747": { ...P, alt: "Graduate with honor cords and an Otto Tunes stole sitting atop a stone monument" },
  "dsc06907": { ...P, alt: "Graduate launching his cap in the air with campus towers and the stadium dome behind" },
  "dsc07155": { ...P, alt: "Graduate in sunglasses sitting on the Syracuse University entrance sign among spring tulips" },
  "ryan_1": { ...P, alt: "Graduate in a navy suit standing in a glass-walled campus building" },
  "ryan_3": { ...P, alt: "Graduate in a navy gown looking up at Crouse College from the lawn" },
  "lizzy_3": { ...P, alt: "Graduate in a white dress and orange stole walking a sunlit campus path" },
  "charlotte_3": { ...P, alt: "Graduate in a white dress and orange stole in front of a white doorway" },
  "maggie_3": { ...L, alt: "Graduate in a varsity jacket outside a neon-lit storefront" },
  "john-headshot": { w: 800, h: 1200, alt: "John Fitzhenry" },
};

// Order of the gallery on the senior portraits page.
export const seniorGallery = [
  "lizzy_1", "dsc02228", "dsc02594", "charlotte_1", "dsc05859", "maggie_1",
  "dsc06907", "dsc03843", "dsc05655", "dsc02980", "dsc06605", "dsc03635",
  "dsc03997", "lizzy_2", "dsc06699", "dsc04885", "charlotte_2", "dsc05303",
  "dsc07155", "ryan_3", "dsc06574", "maggie_2", "dsc06747", "dsc02648",
  "lizzy_3", "ryan_1", "charlotte_3", "maggie_3",
];

// The smaller selection shown on the home page.
export const homeGallery = ["dsc02228", "dsc06907", "dsc05655", "lizzy_2", "dsc06605", "dsc03997"];

export const seniorSteps = [
  {
    n: "01",
    title: "Plan",
    body: "Tell me who's coming and which corners of campus matter to you. We pick a time when the light is good.",
  },
  {
    n: "02",
    title: "Shoot",
    body: "We walk the campus together. I direct as much or as little as you like, so nobody has to know how to pose.",
  },
  {
    n: "03",
    title: "Gallery",
    body: "Your edited photos arrive in a private online gallery, ready to download, post and print.",
  },
];

export const seniorSpots = [
  "Crouse College",
  "Hall of Languages",
  "The Quad",
  "The Lincoln statue",
  "The Syracuse University entrance sign",
  "Newhouse and the NCC News studio",
  "Your own school, studio or favorite corner",
];

export const seniorFaq = [
  {
    q: "Who are these sessions for?",
    a: "Graduating Syracuse University seniors and grad students. Come solo, as a couple, with your roommates, or with your whole team or a cappella group.",
  },
  {
    q: "When do sessions happen?",
    a: "In the spring, in the weeks before Commencement. Last year's sessions ran from late April into May. I'm studying in London this fall and back on campus for spring 2027, so get in touch now and I'll hold a spot for you.",
  },
  {
    q: "What should I bring?",
    a: "Your cap, gown and stole, plus one outfit that feels like you. Anything that tells your Syracuse story is welcome: a jersey, an instrument, your org's stole, a bottle of champagne.",
  },
  {
    q: "Can my friends be in the photos?",
    a: "Yes. A lot of last year's sessions were groups, and group shots end up being the ones people keep. Tell me how many of you there are when you book.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on the length of the session and the size of your group. Send me a note and I'll reply with this year's rates.",
  },
  {
    q: "How do I get my photos?",
    a: "Through a private online gallery you can download from and share with family.",
  },
];
