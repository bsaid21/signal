// Helper: parse view strings like "2.1M" or "487K" into numbers
export function parseViews(viewStr) {
  const num = parseFloat(viewStr);
  if (viewStr.includes('M')) return num * 1_000_000;
  if (viewStr.includes('K')) return num * 1_000;
  return num;
}

// Trending BookTok videos data — top 3 are our demo references with demoId links
export const trendingVideos = [
  // ── Demo references (linked to demoVideos.js) ────────────────────
  {
    id: 1,
    rank: 1,
    demoId: "broken_heart_v1",
    title: "Just finished Fourth Wing and WOW",
    creator: "@digitaldreamstories",
    tiktokUrl: "https://www.tiktok.com/@digitaldreamstories/video/7443103396216933634",
    videoSrc: "/videos/broken_heart_v1_final.mp4",
    thumbnail: "/thumbnails/broken_heart_v1_ref.jpg",
    views: "3.2M",
    likes: "392.4K",
    comments: "3.8K",
    shares: "74.1K",
    postedDate: "3 days ago",
    analysis: {
      name: "Intimate Romantic Tension",
      description: "A single smoldering near-kiss AI-generated fantasy scene with a devastating quote overlay, ending on a book cover reveal — no voiceover, pure tension.",
      narrative_style: "Text Only",
      duration_seconds: 10,
      content_analysis: "AI-generated dark romantic fantasy visuals tap into BookTok's obsession with morally grey love interests and forbidden romance. The near-kiss tension and single devastating quote create an irresistible scroll-stopper with massive save rates.",
      genre_topic: "YA Fantasy Romance",
      visual_direction: "Cinematic dark romantic fantasy, extreme shallow depth of field, candlelit close-up of two figures nearly touching, warm amber and deep black shadows, soft gold rim lighting",
      hook_strategy: "Visceral Scenario — A smoldering near-kiss moment so charged it stops the scroll before the quote even registers"
    }
  },
  {
    id: 2,
    rank: 2,
    demoId: "silent_patient_v1",
    title: "POV you just finished reading The Silent Patient",
    creator: "@macmillanpublishers",
    tiktokUrl: "https://www.tiktok.com/@macmillanpublishers/video/7553761166124748045",
    videoSrc: "/videos/silent_patient_v1_final.mp4",
    thumbnail: "/thumbnails/silent_patient_ref.jpg",
    views: "1.2M",
    likes: "287K",
    comments: "3.4K",
    shares: "15.2K",
    postedDate: "3 days ago",
    analysis: {
      name: "POV Reader Reaction",
      description: "A single static-shot POV format showing a reader's escalating shocked reaction while reading, with a bold text overlay held for the entire clip.",
      narrative_style: "POV Hook",
      duration_seconds: 10,
      content_analysis: "The Silent Patient's devastating twist ending is tailor-made for the 'POV reader reaction' format — the slow-burn psychological dread pays off in one gut-punch reveal that translates perfectly into an escalating facial reaction arc.",
      genre_topic: "Psychological Thriller",
      visual_direction: "Candid wide shot, modern interior, natural overhead lighting, neutral beige and muted red tones, documentary-style framing",
      hook_strategy: "Visceral Scenario — The moment a reader's face completely breaks — no words needed"
    }
  },
  {
    id: 3,
    rank: 3,
    demoId: "wedding_people_v2",
    title: "Reading about a woman who crashes a stranger's wedding weekend",
    creator: "@macmillanpublishers",
    tiktokUrl: "https://www.tiktok.com/@macmillanpublishers/video/7599673685514964254",
    videoSrc: "/videos/wedding_people_v2_final.mp4",
    thumbnail: "/thumbnails/wedding_people_v2_ref.jpg",
    views: "890K",
    likes: "198K",
    comments: "2.1K",
    shares: "14.5K",
    postedDate: "5 days ago",
    analysis: {
      name: "Reading Reaction Flip to CTA",
      description: "A two-beat BookTok format where the first half shows a person reacting with delight while reading the book (with a punchy content hook as overlay text), then cuts to hands flipping through the book's interior pages with a direct CTA overlay.",
      narrative_style: "Text Only",
      duration_seconds: 9,
      content_analysis: "The two-beat structure hooks with a relatable reading discovery moment, then pivots to a direct CTA with urgency — combining organic BookTok energy with clear purchase intent.",
      genre_topic: "Literary Fiction / Women's Fiction",
      visual_direction: "Bright, naturally lit interior, cozy couch reading setup, then close-up hands flipping through pages, warm clean color grading",
      hook_strategy: "Visceral Scenario — Curiosity-sparking book content description hooks the viewer"
    }
  },

  // ── Additional trending videos for carousel ─────────────────────
  {
    id: 4,
    rank: 4,
    title: "Harry Potter bookstore finds #booktok",
    creator: "@mojoprovo",
    tiktokUrl: "https://www.tiktok.com/@mojoprovo/video/7143670996669844782",
    videoSrc: "/videos/booktok_final.mp4",
    thumbnail: "/thumbnails/video4.jpg",
    views: "1.8M",
    likes: "423K",
    comments: "5.6K",
    shares: "18.9K",
    postedDate: "4 days ago",
    analysis: {
      name: "Bookstore Shopping Tour",
      description: "Small business bookstore tour showcasing Harry Potter and Hogwarts-themed merchandise and books. Nostalgic browsing content with cozy shopping aesthetic.",
      narrative_style: "Store Tour / Haul",
      duration_seconds: 15,
      content_analysis: "Nostalgia marketing at its finest — Harry Potter content consistently performs well. The bookstore setting creates aspirational shopping content while driving foot traffic to indie bookstores.",
      genre_topic: "Harry Potter / Bookstore Culture",
      visual_direction: "Walking tour through bookstore aisles, close-ups of themed merchandise, warm store lighting. Whimsical background music.",
      hook_strategy: "Nostalgia Bridge — Harry Potter aesthetic creates immediate emotional pull"
    }
  },
  {
    id: 5,
    rank: 5,
    title: "I will never stop recommending this book",
    creator: "@sarareads121",
    tiktokUrl: "https://www.tiktok.com/@sarareads121/video/7148429528619289902",
    videoSrc: "/videos/booktok_final.mp4",
    thumbnail: "/thumbnails/video5.jpg",
    views: "1.5M",
    likes: "389K",
    comments: "4.2K",
    shares: "22.1K",
    postedDate: "6 days ago",
    analysis: {
      name: "Passionate Book Rec",
      description: "Heartfelt single-book recommendation with strong personal endorsement.",
      narrative_style: "Personal Recommendation",
      duration_seconds: 14,
      content_analysis: "Single-book deep-dive creates stronger emotional connection than listicles.",
      genre_topic: "Contemporary YA / Emotional Fiction",
      visual_direction: "Cozy reading setup, hands with book, soft lighting.",
      hook_strategy: "Emotional Authenticity — Genuine passion creates trust and curiosity"
    }
  },
  {
    id: 6,
    rank: 6,
    title: "It Happened One Summer #spicybooktok",
    creator: "@kierralewis75",
    tiktokUrl: "https://www.tiktok.com/@kierralewis75/video/7143434652789804331",
    videoSrc: "/videos/booktok_final.mp4",
    thumbnail: "/thumbnails/video6.jpg",
    views: "1.3M",
    likes: "298K",
    comments: "8.9K",
    shares: "15.6K",
    postedDate: "2 days ago",
    analysis: {
      name: "Spicy Book Spotlight",
      description: "Quick spotlight on a romance novel targeting the spicy BookTok community.",
      narrative_style: "POV Hook",
      duration_seconds: 13,
      content_analysis: "Spicy BookTok is a massive sub-niche. Single-book spotlights reach highly engaged romance readers.",
      genre_topic: "Romance / Spicy Fiction",
      visual_direction: "Moody romantic aesthetic, warm tones, book staged with romantic props.",
      hook_strategy: "Niche Targeting — #spicybooktok hashtag signals content for engaged romance readers"
    }
  },
  {
    id: 7,
    rank: 7,
    title: "Books we can barely keep in stock!",
    creator: "@bnpotomacyard",
    tiktokUrl: "https://www.tiktok.com/@bnpotomacyard/video/7148925313962020142",
    videoSrc: "/videos/booktok_final.mp4",
    thumbnail: "/thumbnails/video7.jpg",
    views: "1.1M",
    likes: "267K",
    comments: "3.8K",
    shares: "19.3K",
    postedDate: "1 week ago",
    analysis: {
      name: "Bookstore Trending List",
      description: "Barnes & Noble employee showcasing books flying off shelves.",
      narrative_style: "Listicle / Social Proof",
      duration_seconds: 9,
      content_analysis: "Retailer-created content carries unique authority. 'Can barely keep in stock' creates scarcity urgency.",
      genre_topic: "Trending Books / Mixed Genre",
      visual_direction: "In-store footage, employee handling books, retail display shots.",
      hook_strategy: "Social Proof — Retailer authority creates urgency and trust"
    }
  },
  {
    id: 8,
    rank: 8,
    title: "Fantasy books by women you need to read",
    creator: "@thedogearedbook",
    tiktokUrl: "https://www.tiktok.com/@thedogearedbook/video/7224130784351997230",
    videoSrc: "/videos/booktok_final.mp4",
    thumbnail: "/thumbnails/video10.jpg",
    views: "760K",
    likes: "178K",
    comments: "1.8K",
    shares: "11.2K",
    postedDate: "1 week ago",
    analysis: {
      name: "Fantasy Books by Women",
      description: "Bookseller recommendation highlighting fantasy titles by women authors.",
      narrative_style: "Expert Recommendation",
      duration_seconds: 12,
      content_analysis: "Bookseller-created content carries unique authority. Championing women in fantasy taps into a passionate community.",
      genre_topic: "Fantasy / Books by Women",
      visual_direction: "Bookstore setting, curated stack reveals, warm lighting.",
      hook_strategy: "Expert Authority — Bookseller credibility drives trust and saves"
    }
  },
  {
    id: 9,
    rank: 9,
    title: "Incredible books you need to read!",
    creator: "@tatis_corner",
    tiktokUrl: "https://www.tiktok.com/@tatis_corner/video/7609444635290766605",
    videoSrc: "/videos/booktok_final.mp4",
    thumbnail: "/thumbnails/video12.jpg",
    views: "620K",
    likes: "142K",
    comments: "1.2K",
    shares: "8.4K",
    postedDate: "6 days ago",
    analysis: {
      name: "5-Star Book Recs",
      description: "Curated list of incredible must-read books with heartfelt delivery.",
      narrative_style: "Personal Recommendation / Listicle",
      duration_seconds: 14,
      content_analysis: "Warm, genuine delivery combined with 'incredible books' framing creates immediate trust.",
      genre_topic: "Mixed Genre / Book Recommendations",
      visual_direction: "Cozy aesthetic with book reveals, warm lighting, genuine enthusiasm.",
      hook_strategy: "Warm Authority — Genuine enthusiasm and personal touch drives trust and saves"
    }
  }
];
