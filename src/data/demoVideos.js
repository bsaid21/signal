// Demo videos data — links reference TikToks, format specs, scripts, and generated videos
// Each entry contains everything needed to populate all 3 steps of the demo wizard

export const demoVideos = [
  // ── My Husband's Wife — Candlelit Book Quote Card ─────────────────
  {
    id: "husbands_wife_v1",
    reference: {
      title: "Candlelit book quote card",
      creator: "@macmillanpublishers",
      tiktokUrl: "https://www.tiktok.com/@macmillanpublishers/video/7567397377993215262",
      thumbnail: "/thumbnails/husbands_wife_v1_ref.jpg",
      views: "2.1M",
      likes: "487K",
      comments: "5.8K",
      shares: "22.3K",
      analysis: {
        name: "Candlelit Book Quote Card",
        description: "A single static-feeling atmospheric shot of a book beside a flickering candle, with a prominent literary quote overlaid in white text \u2014 no voiceover, no cuts, pure mood.",
        narrative_style: "Text Only",
        duration_seconds: 10,
        content_analysis: "The dark academia candlelit aesthetic taps into BookTok's love of moody atmospheric content. A gut-punch quote does all the selling \u2014 viewers pause, reread, and save. High save-to-view ratio format.",
        genre_topic: "Psychological Thriller",
        visual_direction: "Cinematic dark academia flatlay, dark wooden surface, amber tealight candle, deep shadows, moody candlelit atmosphere, portrait orientation",
        hook_strategy: "Visceral Scenario \u2014 A quote so unsettling it makes readers pause mid-scroll"
      }
    },
    book: {
      id: "my-husbands-wife",
      title: "My Husband's Wife",
      author: "Alice Feeney",
      imprint: "Flatiron Books",
      isbn: "9781250337818",
      coverUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1747668611i/231127462.jpg",
      genre: "Psychological Thriller",
      description: "When she returns to Spyglass, the enchanting old house in Hope Falls, nothing is as it should be. Her key doesn't fit. A woman eerily similar to her answers the door. And her husband insists that the stranger is his wife.",
      bookTokAppeal: "Alice Feeney's trademark unreliable narrators and jaw-dropping twists make this catnip for thriller BookTok \u2014 the 'who is the real wife?' premise is instantly shareable.",
      color: "#c8601a"
    },
    videoPath: "/videos/husbands_wife_v1_final.mp4",
    formatSpec: {
      format_meta: {
        name: "candlelit_book_quote_card",
        description: "A single static-feeling atmospheric shot of a book beside a flickering candle, with a prominent literary quote overlaid in white text \u2014 no voiceover, no cuts, pure mood."
      },
      script_direction: {
        narrative_style: "text_only",
        narrative_voice: "other",
        hook_strategy: "visceral_scenario",
        segment_pacing: "even",
        overlay_text_style: "full_sentence",
        caption_style: "emotional_with_hashtags",
        content_rules: [
          "ENTIRE video is 10 seconds \u2014 single atmospheric clip with no cuts",
          "Display one emotionally resonant quote from the book in large white serif-style text in the upper-left quadrant",
          "Quote should be 2\u20134 lines max, followed by an em-dash attribution line",
          "No voiceover \u2014 the quote IS the content; let it breathe for the full duration",
          "The book's cover must be visible and legible in the lower half of the frame",
          "A lit candle must appear beside the book to create warm practical lighting",
          "Dark, moody background reinforces the atmospheric tone",
          "Choose a quote that feels emotionally gut-punch worthy"
        ]
      },
      visual_direction: {
        image_style_prefix: "Cinematic dark academia flatlay, shot from a slight low angle looking across a dark wooden surface. A paperback book leans diagonally against a surface, its cover facing the camera. A small glowing tealight candle in an amber glass holder sits beside it, casting warm orange and amber light across the scene. Deep shadows fill the upper background. Moody, intimate, candlelit atmosphere. Portrait orientation, photorealistic.",
        color_mood: "dark_cozy",
        color_palette_hint: ["#1a0f0a", "#3d1f0d", "#c8601a", "#e8a040", "#2a2a3a"],
        image_types: ["book_on_surface", "flatlay", "atmospheric"],
        clip_duration: 10
      },
      audio_direction: {
        has_voiceover: false,
        voice_gender: null,
        voice_tone: "warm_friendly",
        has_music: true,
        music_mood: "dark_ambient",
        music_genre: "ambient atmospheric",
        music_volume: 0.6
      }
    },
    script: {
      creative_brief: {
        style: "Dark Academia Atmospheric Quote Card",
        style_rationale: "The candlelit flatlay format mirrors the book's liminal, between-worlds tension \u2014 the candle flame itself embodies Feeney's 'half dark' imagery.",
        tone: "Hushed, melancholic, eerie \u2014 the feeling of standing in a doorway between two versions of your life",
        target_hook: "A quote so quietly unsettling it makes readers pause mid-scroll and read it twice",
        music_direction: "Slow ambient atmospheric, ~70 BPM \u2014 sparse piano or bowed strings, low drone underneath, no percussion"
      },
      total_duration_seconds: 10,
      segments: [
        {
          segment_number: 1,
          start_time: 0.0,
          end_time: 10.0,
          voiceover_text: null,
          voice_direction: null,
          overlay_text: "\u201CThe half dark is my happy place. That thin sliver of time that separates night from day, and day from night. Twilight. Sunset. Nightfall.\u201D\n\u2014 Alice Feeney, My Husband\u2019s Wife"
        }
      ],
      caption: "that sliver between knowing and not knowing \u{1F56F}\uFE0F this book lives in the half dark and it will not let you go. comment the last book that gave you that eerie, can\u2019t-put-it-down feeling \u{1F447} #booktok #psychologicalthriller #myhusbandswifeBook #alicefeeney #darkacademia #thrillerbooks",
      cta: "Comment the last book that gave you that eerie, can\u2019t-put-it-down feeling \u{1F447}"
    }
  },

  // ── Silent Patient — POV Reader Reaction ──────────────────────────
  {
    id: "silent_patient_v1",
    reference: {
      title: "POV you just finished reading The Silent Patient",
      creator: "@macmillanpublishers",
      tiktokUrl: "https://www.tiktok.com/@macmillanpublishers/video/7553761166124748045",
      thumbnail: "/thumbnails/silent_patient_ref.jpg",
      views: "1.2M",
      likes: "287K",
      comments: "3.4K",
      shares: "15.2K",
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
    book: {
      id: "silent-patient",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      imprint: "Celadon Books",
      isbn: "9781250301710",
      coverUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg",
      genre: "Psychological Thriller",
      description: "Alicia Berenson shoots her husband five times in the face, and then never speaks another word. Criminal psychotherapist Theo Faber is determined to unravel the mystery of why.",
      bookTokAppeal: "The twist ending is legendary in BookTok culture — readers can't stop making reaction videos about the gut-punch reveal.",
      color: "#8B3A3A"
    },
    videoPath: "/videos/silent_patient_v1_final.mp4",
    formatSpec: {
      format_meta: {
        name: "pov_reader_reaction",
        description: "A single static-shot POV format showing a reader's escalating shocked reaction while reading, with a bold 'POV you just finished reading [book]' text overlay held for the entire clip."
      },
      script_direction: {
        narrative_style: "pov_hook",
        narrative_voice: "casual_gen_z",
        hook_strategy: "visceral_scenario",
        segment_pacing: "slow_build_fast_end",
        overlay_text_style: "full_sentence",
        caption_style: "pov_with_hashtags",
        content_rules: [
          "Single uncut shot — no scene changes",
          "Overlay text stays on screen the full duration",
          "Subject seated in casual setting holding and reading the book",
          "Reaction arc escalates: calm reading \u2192 jaw drop \u2192 hand-on-forehead shock",
          "No voiceover narration — visual reaction IS the content",
          "Book cover partially visible throughout",
          "No cuts, no zooms — single locked-off wide shot"
        ]
      },
      visual_direction: {
        image_style_prefix: "Candid wide shot of a young woman sitting in a modern interior chair holding an open book, natural overhead office or lobby lighting, neutral beige and muted red tones in the environment, slightly informal documentary-style framing, mid-distance shot showing full torso and face, realistic casual aesthetic with no filters",
        color_mood: "cinematic_warm",
        color_palette_hint: ["#C0A090", "#8B3A3A", "#F5F0EB", "#2B2B2B"],
        image_types: ["person_with_book", "cinematic_scene"],
        clip_duration: 10
      },
      audio_direction: {
        has_voiceover: false,
        voice_gender: null,
        voice_tone: "casual_chatty",
        has_music: true,
        music_mood: "dark_ambient",
        music_genre: "ambient suspense",
        music_volume: 0.6
      }
    },
    script: {
      creative_brief: {
        style: "Authentic POV Reader Shock \u2014 Static Confessional",
        style_rationale: "The static locked-off shot mirrors Alicia's own silence: still on the outside, chaos within.",
        tone: "Creeping dread \u2192 stunned disbelief \u2192 existential collapse",
        target_hook: "The moment a reader's face completely breaks — no words needed, the twist does all the talking",
        music_direction: "Slow, sparse ambient suspense — single low piano note held under soft dissonant strings, building in tension without resolving, ~80 BPM"
      },
      total_duration_seconds: 10,
      segments: [
        {
          segment_number: 1,
          start_time: 0.0,
          end_time: 10.0,
          voiceover_text: null,
          voice_direction: "No voiceover. Reaction arc: calm reading (0\u20133s), subtle double-take (3\u20135s), wide eyes and jaw drop (5\u20137s), hand-over-mouth collapse (7\u201310s).",
          overlay_text: "POV you just finished reading The Silent Patient"
        }
      ],
      caption: "the last 10 pages of this book should be illegal. i am not okay. not even a little. \u{1F90D}\u{1F52A} #BookTok #TheSilentPatient #AlexMichaelides #PsychologicalThriller #BookTokTwist #Unhinged #ReadingTok",
      cta: "If you've read it \u2014 don't you dare spoil it in the comments. If you haven't \u2014 start it tonight and come back to this video when you're done."
    }
  },

  // ── Wedding People — Reading Reaction Flip to CTA ─────────────────
  {
    id: "wedding_people_v2",
    reference: {
      title: "Reading about a woman who crashes a stranger's wedding weekend",
      creator: "@macmillanpublishers",
      tiktokUrl: "https://www.tiktok.com/@macmillanpublishers/video/7599673685514964254",
      thumbnail: "/thumbnails/wedding_people_v2_ref.jpg",
      views: "890K",
      likes: "198K",
      comments: "2.1K",
      shares: "14.5K",
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
    book: {
      id: "wedding-people",
      title: "The Wedding People",
      author: "Alison Espach",
      imprint: "Henry Holt and Co.",
      isbn: "9781250899576",
      coverUrl: "https://covers.openlibrary.org/b/id/14647406-L.jpg",
      genre: "Literary Fiction / Women's Fiction",
      description: "When Phoebe Stone arrives at the grand Cornwall Inn determined to have one last decadent splurge, she's mistaken for one of the wedding people. An unlikely friendship with the bride changes everything.",
      bookTokAppeal: "The perfect gift book — themes of self-worth, female friendship, and treating yourself resonate deeply with BookTok's core audience.",
      color: "#7B5EA7"
    },
    videoPath: "/videos/wedding_people_v2_final.mp4",
    formatSpec: {
      format_meta: {
        name: "reading_reaction_flip_to_cta",
        description: "A two-beat BookTok format where the first half shows a person reacting with delight while reading the book (with a punchy content hook as overlay text), then cuts to hands flipping through the book's interior pages with a direct CTA overlay."
      },
      script_direction: {
        narrative_style: "text_only",
        narrative_voice: "casual_excited",
        hook_strategy: "visceral_scenario",
        segment_pacing: "slow_build_fast_end",
        overlay_text_style: "full_sentence",
        caption_style: "pov_with_hashtags",
        content_rules: [
          "ENTIRE video is 10-12 seconds \u2014 no exceptions",
          "First overlay text describes a specific, intriguing thing the reader is discovering in the book",
          "Hook text should list 2-3 specific, curiosity-sparking benefits or topics from the book using casual, relatable language",
          "Second overlay text transitions to a direct purchase CTA",
          "No voiceover \u2014 text overlays carry the entire message",
          "Reaction shot of person genuinely engaged with the book anchors the hook segment",
          "Hands flipping through interior pages anchors the CTA segment"
        ]
      },
      visual_direction: {
        image_style_prefix: "Bright, naturally lit interior setting \u2014 soft daylight from a nearby window, neutral walls, cozy couch or chair. Person in casual everyday clothes reading a visually distinctive hardcover book, shot in a relaxed medium full-body framing. Second scene: close-up of hands holding and slowly fanning through the open pages of the book. Candid, unpolished aesthetic \u2014 feels like a genuine personal discovery moment, not a staged ad. Warm but clean color grading.",
        color_mood: "soft_warm",
        color_palette_hint: ["#F5EFE6", "#D4C5B2", "#7B5EA7", "#FFFFFF"],
        image_types: ["person_with_book", "hands_with_book"],
        clip_duration: 10
      },
      audio_direction: {
        has_voiceover: false,
        voice_gender: null,
        voice_tone: "casual_chatty",
        has_music: true,
        music_mood: "trending_soft",
        music_genre: "upbeat indie pop / witchy lo-fi",
        music_volume: 0.6
      }
    },
    script: {
      creative_brief: {
        style: "cozy-literary-escape with emotional gut-punch",
        style_rationale: "The Wedding People blends wedding-weekend whimsy with a quietly devastating emotional undercurrent \u2014 the visual style should feel warm and inviting on the surface, with a hint of something bittersweet underneath.",
        tone: "wistful but hopeful, conspiratorial, emotionally resonant",
        target_hook: "She checked into a wedding hotel alone \u2014 on purpose \u2014 and it changed everything",
        music_direction: "Upbeat indie pop with a slightly melancholic undertone, ~100 BPM \u2014 dreamy acoustic guitar with soft percussion"
      },
      total_duration_seconds: 9,
      segments: [
        {
          segment_number: 1,
          start_time: 0.0,
          end_time: 5.0,
          voiceover_text: null,
          voice_direction: null,
          overlay_text: "Reading about a woman who crashes a stranger\u2019s wedding weekend to save her own life \u2728"
        },
        {
          segment_number: 2,
          start_time: 5.0,
          end_time: 9.0,
          voiceover_text: null,
          voice_direction: null,
          overlay_text: "This is your sign to get The Wedding People while it\u2019s on sale! \u{1F49C}"
        }
      ],
      caption: "she showed up to a wedding hotel ALONE with no bags and a plan \u{1F62D}\u2728 this book wrecked me in the best way #BookTok #TheWeddingPeople #AlisonEspach #FictionReads #BookRecommendation #ReadingTok",
      cta: "Grab The Wedding People while it\u2019s on sale \u2014 link in bio! \u{1F49C}"
    }
  }
];

// Lookup helper: find a demoVideo by its ID
export function getDemoVideoById(id) {
  return demoVideos.find(d => d.id === id) || null;
}
