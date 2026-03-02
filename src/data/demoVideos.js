// Demo videos data — links reference TikToks, format specs, scripts, and generated videos
// Each entry contains everything needed to populate all 3 steps of the demo wizard

export const demoVideos = [
  // ── Kristin Hannah — Before/After Crying BookTok ──────────────────
  {
    id: "kristin_hannah_v1",
    reference: {
      title: "Before vs after reading this book",
      creator: "@yannareads",
      tiktokUrl: "https://www.tiktok.com/@yannareads/video/7510655432021577006",
      thumbnail: "/thumbnails/kristin_hannah_ref.jpg",
      views: "2.1M",
      likes: "487K",
      comments: "5.8K",
      shares: "22.3K",
      analysis: {
        name: "Before/After Crying BookTok",
        description: "A two-part reaction format showing the creator confidently holding a book before starting it, then cutting to them visibly emotional and crying while clutching the same book after reading it.",
        narrative_style: "Voiceover Narration",
        duration_seconds: 10,
        content_analysis: "The stark before/after contrast is one of BookTok's most viral formats. The emotional gut-punch relies entirely on the visual whiplash between composed confidence and raw devastation — no explanation needed.",
        genre_topic: "Literary Fiction / Emotional",
        visual_direction: "Vertical smartphone selfie style, close-up portrait, bright natural daylight, candid and unfiltered feel, warm skin tones, authentic emotional expression",
        hook_strategy: "Visceral Scenario — The contrast between composed before and destroyed after IS the hook"
      }
    },
    book: {
      id: "great-alone",
      title: "The Great Alone",
      author: "Kristin Hannah",
      imprint: "St. Martin's Press",
      isbn: "9781250229533",
      coverUrl: "https://covers.openlibrary.org/b/id/10168469-L.jpg",
      genre: "Fiction / Family Life",
      description: "It is 1974 when Leni Allbright's impulsive father Ernt decides the family is moving to Alaska. But the Alaskan winter is just as unforgiving as Ernt, and life quickly becomes a struggle for survival.",
      bookTokAppeal: "Kristin Hannah's signature ability to emotionally destroy readers makes this a perennial BookTok favorite — the Alaska setting and family drama hit especially hard.",
      color: "#3d6b5a"
    },
    videoPath: "/videos/kristin_hannah_v1_final.mp4",
    formatSpec: {
      format_meta: {
        name: "before_after_crying_booktok",
        description: "A two-part reaction format showing the creator confidently holding a book before starting it, then cutting to them visibly emotional and crying while clutching the same book after reading it."
      },
      script_direction: {
        narrative_style: "voiceover_narration",
        narrative_voice: "casual_gen_z",
        hook_strategy: "visceral_scenario",
        segment_pacing: "slow_build_fast_end",
        overlay_text_style: "short_punchy",
        caption_style: "emotional_with_hashtags",
        content_rules: [
          "ENTIRE video is 10-12 seconds",
          "Open with creator holding the book confidently, smiling or neutral",
          "Cut immediately to creator visibly crying, clutching the book — raw emotional devastation",
          "Voiceover should be candid and unscripted-sounding",
          "Book cover must be visible in both 'before' and 'after' shots",
          "Keep voiceover short and raw — under 20 words total"
        ]
      },
      visual_direction: {
        image_style_prefix: "Vertical smartphone selfie style, close-up portrait of a young woman holding a book, bright natural daylight or softly lit indoor bookshelf background, candid and unfiltered feel, slight handheld camera shake, warm skin tones, authentic emotional expression, no filters or artificial polish",
        color_mood: "soft_warm",
        color_palette_hint: ["#F5E6D3", "#E8C4B8", "#D4A5A0", "#F0F0F0"],
        image_types: ["person_with_book", "hands_with_book"],
        clip_duration: 10
      },
      audio_direction: {
        has_voiceover: true,
        voice_gender: "female",
        voice_tone: "casual_chatty",
        has_music: false,
        music_mood: "romantic_soft",
        music_genre: "soft indie pop",
        music_volume: 0.4
      }
    },
    script: {
      creative_brief: {
        style: "Raw Emotional Contrast Reaction",
        style_rationale: "The stark before/after format perfectly mirrors the book's own brutal contrast — Leni's naive hope before Alaska vs. the survival nightmare she faces.",
        tone: "Devastated, raw, quietly wrecked — like someone who thought they were ready and absolutely was not",
        target_hook: "The visual whiplash of a confident smile cutting instantly to full emotional collapse — the contrast IS the scroll-stop moment",
        music_direction: "Soft indie folk, ~80 BPM, sparse acoustic guitar or piano"
      },
      total_duration_seconds: 9,
      segments: [
        {
          segment_number: 1,
          start_time: 0.0,
          end_time: 4.0,
          voiceover_text: "okay so... this is me before starting The Great Alone. Alaska sounds kinda cool, right?",
          voice_direction: "Casual, slightly playful — unbothered, maybe a tiny smirk. Zero idea what's coming.",
          overlay_text: "before The Great Alone"
        },
        {
          segment_number: 2,
          start_time: 4.0,
          end_time: 9.0,
          voiceover_text: "[crying] I can't... Leni didn't deserve any of that. [voice breaking] I literally have no thoughts.",
          voice_direction: "Completely wrecked. Voice cracking, trailing off into silence.",
          overlay_text: "she didn't deserve that"
        }
      ],
      caption: "kristin hannah said let me ruin your entire week \u{1F940} the alaska winter is nothing compared to what this book does to your heart #TheGreatAlone #KristinHannah #BookTok #BookTokCry #FictionTok #CryingOverBooks",
      cta: "drop a \u{1F43A} if this book absolutely wrecked you too"
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

  // ── Wedding People — Gift Wrapping POV ────────────────────────────
  {
    id: "macmillan_twp",
    reference: {
      title: "POV: wrapping the perfect gift for a book lover",
      creator: "@macmillanpublishers",
      tiktokUrl: "https://www.tiktok.com/@macmillanpublishers/video/7586447704532815117",
      thumbnail: "/thumbnails/wedding_people_ref.jpg",
      views: "890K",
      likes: "198K",
      comments: "2.1K",
      shares: "14.5K",
      analysis: {
        name: "Book Gift Wrapping POV",
        description: "A satisfying POV gift-wrapping video showing a book being wrapped in festive paper with cozy holiday aesthetic.",
        narrative_style: "POV Hook",
        duration_seconds: 10,
        content_analysis: "Satisfying gift-wrap POV content bridges BookTok and craft TikTok, driving high save rates. The cozy holiday aesthetic and product showcase format makes it perfect for driving purchase intent.",
        genre_topic: "Literary Fiction / Gift Content",
        visual_direction: "Overhead hands-only POV, warm natural daylight, red and cream botanical wrapping paper, cozy holiday home setting",
        hook_strategy: "Visceral Scenario — Satisfying visual experience drives saves and shares"
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
      color: "#C8372D"
    },
    videoPath: "/videos/macmillan_twp_final.mp4",
    formatSpec: {
      format_meta: {
        name: "book_gift_wrapping_pov",
        description: "A satisfying POV gift-wrapping video showing a book being wrapped in festive paper with cozy holiday aesthetic."
      },
      script_direction: {
        narrative_style: "pov_hook",
        narrative_voice: "warm_friendly",
        hook_strategy: "visceral_scenario",
        segment_pacing: "slow_build_fast_end",
        overlay_text_style: "full_sentence",
        caption_style: "pov_with_hashtags",
        content_rules: [
          "Single 10-second clip — one continuous shot, no cuts",
          "Open with hook overlay text: 'POV: wrapping the perfect gift for a book lover'",
          "Show the book prominently — let the cover shine",
          "Overhead/close-up POV of hands wrapping the book in festive paper",
          "Hands with red nails and jewelry visible — no face shown",
          "Red and cream/kraft holiday wrapping paper throughout"
        ]
      },
      visual_direction: {
        image_style_prefix: "Overhead hands-only POV video of gift wrapping a book on a light wood-grain table surface, warm natural daylight, red and cream botanical-print wrapping paper with holly and pinecones, red manicured nails and delicate gold jewelry visible, satisfying ASMR aesthetic, soft warm ambient light, no face shown, cozy holiday home setting",
        color_mood: "warm_cozy",
        color_palette_hint: ["#C8372D", "#E8D5B0", "#D4C4A0", "#8B6914", "#F5F0E8"],
        image_types: ["hands_with_book", "flatlay", "book_on_surface", "atmospheric"],
        clip_duration: 10
      },
      audio_direction: {
        has_voiceover: false,
        voice_gender: null,
        voice_tone: "warm_friendly",
        has_music: true,
        music_mood: "warm_cozy",
        music_genre: "soft acoustic holiday pop",
        music_volume: 0.6
      }
    },
    script: {
      creative_brief: {
        style: "Cozy Holiday POV Gift Wrap \u2014 Warm Feminine Aesthetic",
        style_rationale: "The satisfying gift-wrap POV format mirrors the book's themes of self-gifting and indulgence.",
        tone: "Warm, intimate, quietly emotional \u2014 like wrapping something that means more than just a book",
        target_hook: "POV: wrapping the perfect gift for a book lover",
        music_direction: "Soft acoustic holiday pop at ~90 BPM — gentle fingerpicked guitar with subtle jingle bell undertone"
      },
      total_duration_seconds: 10,
      segments: [
        {
          segment_number: 1,
          start_time: 0.0,
          end_time: 10.0,
          voiceover_text: null,
          voice_direction: null,
          overlay_text: "POV: wrapping the perfect gift for a book lover"
        }
      ],
      caption: "she deserves this one \u{1F381}\u2728 The Wedding People by Alison Espach \u2014 the perfect gift for the woman who needs a reminder she's enough. linked in bio \u{1F48C} #BookTok #GiftWrapping #BookGift #TheWeddingPeople #BookTokGifts #CozyReads #HolidayBooks",
      cta: "Tap the link in bio to get your copy \u2014 makes the most beautiful gift \u{1F380}"
    }
  }
];

// Lookup helper: find a demoVideo by its ID
export function getDemoVideoById(id) {
  return demoVideos.find(d => d.id === id) || null;
}
