// Configuration options for video generation
// Derived from the format spec JSON files

export const configOptions = {
  hookStrategy: {
    label: "Hook Strategy",
    icon: "Zap",
    description: "How the video opens to capture attention",
    options: [
      {
        id: "relatable_pain",
        label: "Relatable Pain",
        description: "Opens with emotional hook viewers connect with",
        example: '"books that destroyed me"'
      },
      {
        id: "pov_challenge",
        label: "POV Challenge",
        description: "Creates a scenario that compels viewers to engage",
        example: '"POV: you need a book that ruins you"'
      },
      {
        id: "curiosity_gap",
        label: "Curiosity Gap",
        description: "Withholds key info to drive watch-through",
        example: '"the book that made me stay up until 4am"'
      },
      {
        id: "controversy",
        label: "Hot Take",
        description: "Provocative framing drives comments and shares",
        example: '"unpopular opinion that will get me cancelled"'
      }
    ]
  },
  contentScript: {
    label: "Content & Script",
    icon: "FileText",
    description: "The narrative style and structure of the video",
    options: [
      {
        id: "listicle",
        label: "Quick Listicle",
        description: "Fast-paced list format with punchy reactions",
        detail: "1 segment, 10-12 seconds"
      },
      {
        id: "pov_hook",
        label: "POV Story",
        description: "Personal story format with emotional arc",
        detail: "2-3 segments, 8-12 seconds"
      },
      {
        id: "comparison",
        label: "Book Comparison",
        description: "If you liked X, read Y format",
        detail: "2 segments, 8-10 seconds"
      },
      {
        id: "reaction",
        label: "Authentic Reaction",
        description: "Raw emotional response to the book",
        detail: "1-2 segments, 8-10 seconds"
      }
    ]
  },
  voiceOver: {
    label: "Voice Over",
    icon: "Mic",
    description: "Voice style for the narration",
    options: [
      {
        id: "casual_chatty",
        label: "Casual & Chatty",
        description: "Relaxed, conversational tone like texting a friend",
        voice: "Female, Young"
      },
      {
        id: "casual_excited",
        label: "Excited & Gushy",
        description: "Enthusiastic energy, can't contain the excitement",
        voice: "Female, Young"
      },
      {
        id: "whispery_asmr",
        label: "Whispery ASMR",
        description: "Soft, intimate whisper for cozy aesthetic",
        voice: "Female, Young"
      },
      {
        id: "dramatic",
        label: "Dramatic & Intense",
        description: "Bold, theatrical delivery for impact",
        voice: "Female, Mid"
      }
    ]
  },
  textOverlay: {
    label: "Text Overlay",
    icon: "Type",
    description: "On-screen text style and placement",
    options: [
      {
        id: "book_title_only",
        label: "Book Title Only",
        description: "Minimal — just the book title and author",
        maxWords: 5
      },
      {
        id: "short_punchy",
        label: "Short & Punchy",
        description: "Brief captions with emotional reactions",
        maxWords: 8
      },
      {
        id: "tiktok_native",
        label: "TikTok Native",
        description: "Auto-generated caption style, full transcript",
        maxWords: 15
      },
      {
        id: "minimal_aesthetic",
        label: "Minimal Aesthetic",
        description: "Subtle, small text — let the visuals speak",
        maxWords: 3
      }
    ]
  },
  bookCoverImage: {
    label: "Book Cover Usage",
    icon: "BookOpen",
    description: "How the book cover appears in the video",
    options: [
      {
        id: "prominent_reveal",
        label: "Prominent Reveal",
        description: "Cover is the hero moment — dramatic reveal",
      },
      {
        id: "hands_holding",
        label: "Hands Holding Book",
        description: "Cozy aesthetic with someone holding the book",
      },
      {
        id: "flatlay_styled",
        label: "Styled Flat Lay",
        description: "Book staged with props in overhead shot",
      },
      {
        id: "no_cover",
        label: "No Cover — Text Only",
        description: "Cover not shown, title in text overlay instead",
      }
    ]
  },
  duration: {
    label: "Duration",
    icon: "Clock",
    description: "Target length of the generated video",
    options: [
      {
        id: "8s",
        label: "8 Seconds",
        description: "Ultra-short, maximum impact",
        seconds: 8
      },
      {
        id: "10s",
        label: "10 Seconds",
        description: "Sweet spot for BookTok engagement",
        seconds: 10
      },
      {
        id: "12s",
        label: "12 Seconds",
        description: "Room for story arc with fast pacing",
        seconds: 12
      },
      {
        id: "15s",
        label: "15 Seconds",
        description: "Extended format for deeper content",
        seconds: 15
      }
    ]
  }
};
