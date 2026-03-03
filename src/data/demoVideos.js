// Demo videos data — links reference TikToks, format specs, scripts, and generated videos
// Each entry contains everything needed to populate all 3 steps of the demo wizard

export const demoVideos = [
  // ── Once Upon a Broken Heart — Intimate Romantic Tension ──────────
  {
    id: "broken_heart_v1",
    reference: {
      title: "Just finished Fourth Wing and WOW",
      creator: "@digitaldreamstories",
      tiktokUrl: "https://www.tiktok.com/@digitaldreamstories/video/7443103396216933634",
      thumbnail: "/thumbnails/broken_heart_v1_ref.jpg",
      views: "3.2M",
      likes: "392.4K",
      comments: "3.8K",
      shares: "74.1K",
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
    book: {
      id: "once-upon-a-broken-heart",
      title: "Once Upon a Broken Heart",
      author: "Stephanie Garber",
      imprint: "Flatiron Books",
      isbn: "9781250268396",
      coverUrl: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1615486938i/55987278.jpg",
      genre: "YA Fantasy Romance",
      description: "Evangeline Fox strikes a deal with the charismatic but wicked Prince of Hearts, Jacks, to stop her true love's wedding — but bargaining with an immortal is a dangerous game, and Jacks wants far more than she'd pledged.",
      bookTokAppeal: "Jacks is BookTok's ultimate morally grey love interest — the dangerous bargain premise and fairy-tale-dark romance are endlessly shareable.",
      color: "#C8860A"
    },
    videoPath: "/videos/broken_heart_v1_final.mp4",
    formatSpec: {
      format_meta: {
        name: "intimate_romantic_tension",
        description: "A single smoldering near-kiss fantasy scene with a devastating quote overlay, ending on a book cover reveal — no voiceover, pure tension."
      },
      script_direction: {
        narrative_style: "text_only",
        narrative_voice: "other",
        hook_strategy: "visceral_scenario",
        segment_pacing: "slow_build_fast_end",
        overlay_text_style: "full_sentence",
        caption_style: "pov_with_hashtags",
        content_rules: [
          "ENTIRE video is 10-12 seconds — one scene, one feeling, no cuts except the final book cover reveal",
          "Scene is a fantasy near-kiss moment — two figures, breath apart, no contact — pure suspended tension",
          "No voiceover — the single quote overlay IS the narrative",
          "Quote must be devastatingly romantic: longing, restraint, or ache — pulled from the book or written in its voice",
          "Quote appears on screen within the first 2 seconds and holds for the full scene",
          "Book cover appears as a final hard cut in the last 1-2 seconds — no animation, no fade",
          "Do NOT break the mood with upbeat text or exclamation points",
          "Overlay text should feel like a whisper — short, weighted, unforgettable",
          "Content must be book-agnostic — designed to work for any dark romantic fantasy title"
        ]
      },
      visual_direction: {
        image_style_prefix: "Cinematic dark romantic fantasy, extreme shallow depth of field, candlelit close-up of two figures nearly touching — faces inches apart, eyes locked, breath suspended. Warm amber and deep black shadows, soft gold rim lighting, rose gold skin tones. Film still quality, 85mm portrait lens, bokeh candleflame background, velvet and shadow textures. No kiss — only the moment before. Aching intimacy.",
        color_mood: "dark_cozy",
        color_palette_hint: ["#C8860A", "#0D1B2A", "#B76E79", "#0D0D0D", "#D4A017"],
        image_types: ["cinematic_scene", "atmospheric"],
        clip_duration: 10
      },
      audio_direction: {
        has_voiceover: false,
        voice_gender: null,
        voice_tone: "whispery_dramatic",
        has_music: true,
        music_mood: "dark_ambient",
        music_genre: "dark romantic piano / slow strings",
        music_volume: 0.6
      }
    },
    script: {
      creative_brief: {
        style: "Candlelit Dark Fairy Tale — Suspended Breath",
        style_rationale: "The intimate_romantic_tension format demands a single unbroken mood, and Jacks as the Prince of Hearts is built for it — morally grey, magnetic, dangerous. The whole book lives in the space between want and ruin, so the video lives there too.",
        tone: "Smoldering restraint. The kind of quiet that precedes something irreversible.",
        target_hook: "The quote lands before the eyes adjust — 'You should be afraid of me' — and then you see why.",
        music_direction: "Dark romantic piano, single melody line, ~50 BPM — no percussion, just slow minor-key strings underneath, the kind that makes your chest feel heavy. Think late-night candlelight, not a dance floor."
      },
      total_duration_seconds: 10,
      segments: [
        {
          segment_number: 1,
          start_time: 0.0,
          end_time: 8.0,
          voiceover_text: null,
          voice_direction: null,
          overlay_text: "You should be afraid of me."
        },
        {
          segment_number: 2,
          start_time: 8.0,
          end_time: 10.0,
          voiceover_text: null,
          voice_direction: null,
          overlay_text: "Once Upon a Broken Heart — Stephanie Garber"
        }
      ],
      caption: "he said it like a warning. she heard it like a promise. \u{1F5A4}\u{1F0CF} #onceuponabrokenheartbook #stephaniegarber #jackspohe #booktok #darkromance #fantasyromance #yafantasy #morallygrey",
      cta: "save this for when you need a reminder why Jacks broke us all \u{1F5A4}"
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
