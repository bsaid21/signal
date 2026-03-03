// Prompt workflow demo data — pre-populated examples for the "Original Prompt" workflow
// Structure: { id, prompt, book, concepts: [{ id, name, formatSpec, script, videoPath }] }

export const promptDemos = [
  {
    id: "wild_reverence_concepts",
    prompt: "I want to make a cinematic video for Rebecca Ross' Wild Reverence. Feel free to web search to familiarize yourself with the piece, then come up with 4 concepts for us to explore.",
    book: {
      id: "wild-reverence",
      title: "Wild Reverence",
      author: "Rebecca Ross",
      imprint: "Flatiron Books",
      isbn: "9781250373359",
      coverUrl: "https://mpd-biblio-covers.imgix.net/9781250373359.jpg?w=900",
      genre: "Adult Romantasy / Fantasy Romance",
      description: "Matilda is the youngest goddess of her clan, blessed with humble messenger magic. A mortal boy named Vincent wrote to her on the darkest night of his life ten years ago \u2014 she never answered. Now she crashes through his window with a letter for him.",
      bookTokAppeal: "Doomed mortal-immortal love, slow-burn romance, lush fantasy worldbuilding \u2014 catnip for romantasy BookTok.",
      color: "#C8860A"
    },
    concepts: [
      // ── Concept 1: The Unanswered Letter (v1 — has video) ──────────
      {
        id: "unanswered_letter",
        name: "The Unanswered Letter",
        conceptDescription: "Candlelit close-up of a hand writing a letter with ink and quill, the flame flickers and dims. Wind catches the parchment. Cut to: 10 years later, a window shatters. Book reveal. Moody orchestral strings. Very atmospheric, very BookTok-save-bait.",
        formatSpec: {
          format_meta: {
            name: "dark_romantic_letter_trailer",
            description: "A cinematic, text-only dark fantasy book trailer using atmospheric letter-writing imagery, ethereal particle effects, and a dramatic book reveal with an overlay quote."
          },
          script_direction: {
            narrative_style: "text_only",
            narrative_voice: "other",
            hook_strategy: "visceral_scenario",
            segment_pacing: "slow_build_fast_end",
            overlay_text_style: "short_punchy",
            caption_style: "minimal",
            content_rules: [
              "ENTIRE video is 10\u201312 seconds \u2014 no voiceover, atmosphere and text do all the storytelling",
              "Open on an extreme close-up of a hand writing by candlelight \u2014 warm amber glow, parchment texture, flickering flame",
              "Transition to an ethereal moment: the letter or parchment dissolves or is carried away into darkness with golden particle effects",
              "End with a dramatic reveal of the book on a dark surface \u2014 shattered glass, burst of golden light, or similar cinematic punctuation",
              "Overlay a single short evocative quote or tagline \u2014 no more than 8 words \u2014 timed to the final reveal",
              "No voiceover \u2014 mood is conveyed entirely through visuals, music, and minimal text",
              "Maintain a dark romantic fantasy aesthetic throughout: moody, lush, slightly dangerous",
              "Color palette must stay within deep midnight blue, amber gold, and parchment cream tones"
            ]
          },
          visual_direction: {
            image_style_prefix: "Cinematic dark romantic fantasy aesthetic, extreme close-up candlelit photography, deep midnight blue shadows with warm amber and gold practical lighting, parchment cream textures, flickering flame bokeh, golden particle dissolve effects, moody atmospheric haze, shallow depth of field, film-quality color grading, 9:16 portrait orientation",
            color_mood: "cinematic_dark",
            color_palette_hint: ["#0D1B2A", "#C8860A", "#F5E6C8", "#1A1A2E", "#D4A017"],
            image_types: ["hands_with_book", "cinematic_scene", "atmospheric", "book_on_surface"],
            clip_duration: 10
          },
          audio_direction: {
            has_voiceover: false,
            voice_gender: null,
            voice_tone: "whispery_dramatic",
            has_music: true,
            music_mood: "dark_ambient",
            music_genre: "cinematic orchestral strings, dark romantic fantasy score",
            music_volume: 0.6
          }
        },
        script: {
          creative_brief: {
            style: "Dark Romantic Letter Trailer \u2014 Doomed Love Edition",
            style_rationale: "The unanswered letter premise is a built-in visceral hook \u2014 a mortal boy writing into the dark, a goddess who never answered. This cinematic text-only format lets that ache breathe through candlelight, dissolving parchment, and a final devastating book reveal.",
            tone: "Achingly romantic, fated and doomed, lush with longing \u2014 beautiful and slightly dangerous, like loving someone you were never supposed to keep",
            target_hook: "A mortal boy wrote to a goddess on the darkest night of his life. She never wrote back.",
            music_direction: "Dark orchestral strings, ~60 BPM, opening with a single mournful cello line that swells into a full string arrangement."
          },
          total_duration_seconds: 13,
          segments: [
            {
              segment_number: 1,
              start_time: 0.0,
              end_time: 5.5,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "He wrote to a goddess once. She never answered."
            },
            {
              segment_number: 2,
              start_time: 5.5,
              end_time: 9.0,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "Until she came tumbling through his window \u2014 ten years too late."
            },
            {
              segment_number: 3,
              start_time: 9.0,
              end_time: 13.0,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "We were doomed. Let us fully embrace it."
            }
          ],
          caption: "he wrote to a goddess once. she never answered. \uD83D\uDC8C\u26A1 #WildReverence #RebeccaRoss #BookTok #Romantasy #DoomedLove #DivineRivals #FourthWing #DarkRomance #FantasyRomance",
          cta: "Drop a \uD83D\uDD6F\uFE0F if doomed mortal-immortal love is your villain era \u2014 link to preorder in bio"
        },
        videoPath: "/videos/wild_reverence_v1_final.mp4"
      },

      // ── Concept 2: Doomed Love Duet (v2 — has video) ───────────────
      {
        id: "doomed_love_duet",
        name: "Doomed Love Duet",
        conceptDescription: "Split/alternating shots: divine realm (golden ethereal mist, dangerous beauty) vs. mortal realm (river, rain, candlelight). The two worlds colliding. Quote overlay builds line by line: \u201CWar only makes love flame brighter, defiant.\u201D Sweeping cinematic feel.",
        formatSpec: {
          format_meta: {
            name: "cinematic_doomed_love_duet",
            description: "A text-only dark romantic fantasy format that builds a quote line by line across alternating divine and mortal realm visuals, culminating in a book cover reveal."
          },
          script_direction: {
            narrative_style: "text_only",
            narrative_voice: "other",
            hook_strategy: "visceral_scenario",
            segment_pacing: "slow_build_fast_end",
            overlay_text_style: "full_sentence",
            caption_style: "pov_with_hashtags",
            content_rules: [
              "Video is 12-15 seconds across 4 segments alternating between divine and mortal realms",
              "No voiceover \u2014 all storytelling is delivered through text overlays only",
              "Text overlay builds a single romantic or doomed-love quote in 1-2 short lines, fading in dramatically",
              "Visual alternates conceptually between a celestial/divine aesthetic and a dark mortal/earthly aesthetic",
              "Quote language should feel like an excerpt \u2014 poetic, fatalistic, achingly romantic",
              "Final beat of the video (last 2 seconds) should transition to or overlay the book cover \u2014 treat it as the reveal",
              "Do NOT use character names or specific plot details \u2014 keep quote generic enough to tease any dark fantasy romance",
              "Tone is cinematic and aching \u2014 not campy or comedic"
            ]
          },
          visual_direction: {
            image_style_prefix: "Cinematic dark romantic fantasy, portrait 9:16, slow atmospheric motion. Scene blends two contrasting worlds: a divine ethereal realm with swirling golden mist, dangerous celestial light \u2014 and a mortal realm of dark rain-slicked stone, candlelight reflections on black river water, fog clinging to ancient walls at night.",
            color_mood: "cinematic_dark",
            color_palette_hint: ["#D4A017", "#0D1B2A", "#2D1B4E", "#C8860A", "#C0C0C0"],
            image_types: ["cinematic_scene", "atmospheric"],
            clip_duration: 10
          },
          audio_direction: {
            has_voiceover: false,
            voice_gender: null,
            voice_tone: "whispery_dramatic",
            has_music: true,
            music_mood: "dark_ambient",
            music_genre: "orchestral strings, dark romantic, solo violin building to full dramatic arrangement",
            music_volume: 0.6
          }
        },
        script: {
          creative_brief: {
            style: "Cinematic Doomed-Love Text Poetry \u2014 Divine Collision",
            style_rationale: "The alternating divine/mortal visual language mirrors Wild Reverence's core tension: a goddess and a mortal man caught between two incompatible worlds.",
            tone: "Achingly romantic, fatalistic, cinematic \u2014 the feeling of loving something you know will destroy you, and choosing it anyway",
            target_hook: "The collision of golden celestial light with dark rain-slicked stone \u2014 two worlds that should never touch, touching anyway",
            music_direction: "Solo violin opening \u2014 sparse, mournful, ~52 BPM \u2014 swelling into full dark orchestral strings by segment 3."
          },
          total_duration_seconds: 14,
          segments: [
            {
              segment_number: 1,
              start_time: 0.0,
              end_time: 3.5,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "War only makes love flame brighter, defiant."
            },
            {
              segment_number: 2,
              start_time: 3.5,
              end_time: 7.5,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "It seems to bloom from the bloodshed you leave behind."
            },
            {
              segment_number: 3,
              start_time: 7.5,
              end_time: 11.0,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "Unfurling from the most unlikely places."
            },
            {
              segment_number: 4,
              start_time: 11.0,
              end_time: 14.0,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "Wild Reverence \u2014 Rebecca Ross"
            }
          ],
          caption: "war only makes love flame brighter \uD83D\uDD6F\uFE0F\u2728 this book BROKE me and i am not okay #WildReverence #RebeccaRoss #BookTok #Romantasy #DoomedLove #DivineRivals #FantasyRomance #SlowBurn",
          cta: "Drop a \uD83D\uDD6F\uFE0F if you'd fall for a mortal-immortal love story \u2014 and save this if Wild Reverence is already on your TBR."
        },
        videoPath: "/videos/wild_reverence_v2_final.mp4"
      },

      // ── Concept 3: Who Would Love the Wind? (v3 — no video yet) ────
      {
        id: "who_would_love_the_wind",
        name: "Who Would Love the Wind?",
        conceptDescription: "Single continuous ethereal shot: wind blowing through a dark forest canopy with golden light filtering through, pages of a book fluttering. Slow zoom. Overlay: \u201CWho would be so foolish as to trust \u2014 to love \u2014 such a wild being?\u201D Pure mood, minimal, high save-rate format.",
        formatSpec: {
          format_meta: {
            name: "ethereal_mood_quote_piece",
            description: "A single atmospheric nature shot paired with a devastating text overlay quote, ending in a book cover reveal \u2014 no voiceover, high save-rate dark romantic format."
          },
          script_direction: {
            narrative_style: "text_only",
            narrative_voice: "other",
            hook_strategy: "visceral_scenario",
            segment_pacing: "slow_build_fast_end",
            overlay_text_style: "full_sentence",
            caption_style: "minimal",
            content_rules: [
              "ENTIRE video is 10-12 seconds \u2014 single continuous atmospheric shot",
              "No voiceover \u2014 text overlay only, one single quote from or about the book",
              "Quote must feel devastating, poetic, or emotionally arresting \u2014 8-14 words max",
              "Text appears slowly over the nature shot, lingers, then fades before or as book cover appears",
              "Book cover reveal is the final beat \u2014 treat it as the emotional payoff",
              "Do not explain the book \u2014 let the quote and mood do all the work",
              "No character names, plot summary, or genre labels in text overlays",
              "Visual must feel like it was pulled from a dream \u2014 not a review, not a recommendation"
            ]
          },
          visual_direction: {
            image_style_prefix: "Cinematic dark romantic fantasy aesthetic, shot on 35mm film with natural golden-hour light filtering through dense ancient forest canopy. Deep shadows, warm amber god rays, mist curling low across moss-covered ground. Slow meditative camera drift.",
            color_mood: "dark_cozy",
            color_palette_hint: ["#1A3C34", "#D4A017", "#0D0D0D", "#4A6741", "#C8860A"],
            image_types: ["atmospheric", "cinematic_scene"],
            clip_duration: 10
          },
          audio_direction: {
            has_voiceover: false,
            voice_gender: null,
            voice_tone: "whispery_dramatic",
            has_music: true,
            music_mood: "dark_ambient",
            music_genre: "ambient ethereal drone with distant wind and soft natural texture",
            music_volume: 0.6
          }
        },
        script: {
          creative_brief: {
            style: "Ethereal Dark Romantic Mood Piece",
            style_rationale: "The mortal-immortal doomed love at the heart of Wild Reverence demands a visual language that feels both ancient and heartbreaking \u2014 untouchable, like trying to hold wind.",
            tone: "Melancholic, enchanted, suspended between longing and inevitable loss",
            target_hook: "A question so devastatingly honest it stops the scroll \u2014 because the answer is already written on the viewer's chest.",
            music_direction: "Ambient ethereal drone with distant wind threading through soft natural texture \u2014 no melody, just atmosphere."
          },
          total_duration_seconds: 13,
          segments: [
            {
              segment_number: 1,
              start_time: 0.0,
              end_time: 9.0,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "Who would be so foolish as to trust \u2014 to love \u2014 such a wild being?"
            },
            {
              segment_number: 2,
              start_time: 9.0,
              end_time: 13.0,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "Wild Reverence"
            }
          ],
          caption: "who would be so foolish as to trust \u2014 to love \u2014 such a wild being? \uD83C\uDF42\u2728 #WildReverence #RebeccaRoss #BookTok #Romantasy #DoomedLove #DarkRomance #FantasyBooks",
          cta: "save this for when you need a book that breaks you beautifully \uD83D\uDDA4"
        },
        videoPath: "/videos/wild_reverence_v3_final.mp4"
      },

      // ── Concept 4: True Love Is More Divine (v4) ────
      {
        id: "true_love_is_more_divine",
        name: "True Love Is More Divine",
        conceptDescription: "Mini book-trailer energy: fast montage of cinematic fantasy imagery (stormy river, divine throne room, shattered glass, two silhouettes reaching for each other), building to the key line: \u201CTrue love is more divine than any ruthless god.\u201D Dramatic music crescendo \u2192 book cover reveal.",
        formatSpec: {
          format_meta: {
            name: "cinematic_mini_book_trailer_montage",
            description: "A fast-paced, text-only cinematic montage of dramatic dark fantasy imagery building to a visual crescendo, styled as a mini book trailer."
          },
          script_direction: {
            narrative_style: "text_only",
            narrative_voice: "other",
            hook_strategy: "visceral_scenario",
            segment_pacing: "slow_build_fast_end",
            overlay_text_style: "short_punchy",
            caption_style: "minimal",
            content_rules: [
              "ENTIRE video is 10-12 seconds \u2014 single cinematic clip, no looping",
              "Text overlays only \u2014 no voiceover, no spoken narration",
              "Open with a slow, ominous wide shot that establishes atmosphere \u2014 storm, ruins, or vast dark landscape",
              "Text overlays should feel like movie title cards \u2014 short, weighty, dramatic phrases (3-5 words max per card)",
              "Pacing accelerates toward the end \u2014 final moment should feel like a drop or crescendo hit",
              "End card displays the book title prominently, centered, in a high-contrast stylized treatment",
              "Imagery should feel like a Hollywood fantasy film teaser \u2014 not a cozy bookstagram post",
              "Avoid cheerful or warm tones \u2014 every shot should carry weight, tension, or dark beauty",
              "Color grade: storm grey shadows, gold highlights, crimson accents, midnight blue atmosphere"
            ]
          },
          visual_direction: {
            image_style_prefix: "Cinematic dark fantasy film still, anamorphic lens, dramatic chiaroscuro lighting with deep shadow and selective gold rim light, storm-lit skies in midnight blue and charcoal grey, flickers of blood crimson and divine gold, epic scale environments.",
            color_mood: "cinematic_dark",
            color_palette_hint: ["#3D3D3D", "#D4A017", "#8B0000", "#0D1B2A", "#F0F0F0"],
            image_types: ["cinematic_scene", "atmospheric"],
            clip_duration: 10
          },
          audio_direction: {
            has_voiceover: false,
            voice_gender: null,
            voice_tone: "deep_serious",
            has_music: true,
            music_mood: "dark_ambient",
            music_genre: "dramatic orchestral / epic cinematic \u2014 builds from ominous low strings to full bombastic percussion crescendo",
            music_volume: 0.6
          }
        },
        script: {
          creative_brief: {
            style: "Dark Divine Cinematic Montage",
            style_rationale: "Wild Reverence demands the visual language of a Hollywood fantasy epic \u2014 fast-cut atmospheric imagery that evokes the doomed beauty of mortal-immortal love.",
            tone: "Ominous, aching, electric \u2014 the feeling of loving something you cannot keep",
            target_hook: "The instant the stormy river fills the screen and the first title card reads 'She was a goddess' \u2014 BookTok romantasy readers stop scrolling.",
            music_direction: "Builds from a single low cello drone over distant thunder, shatters into full orchestral percussion on the book reveal."
          },
          total_duration_seconds: 13,
          segments: [
            {
              segment_number: 1,
              start_time: 0.0,
              end_time: 3.0,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "She was a goddess."
            },
            {
              segment_number: 2,
              start_time: 3.0,
              end_time: 6.0,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "He was already lost."
            },
            {
              segment_number: 3,
              start_time: 6.0,
              end_time: 8.5,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "True love is more divine"
            },
            {
              segment_number: 4,
              start_time: 8.5,
              end_time: 10.5,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "than any ruthless god."
            },
            {
              segment_number: 5,
              start_time: 10.5,
              end_time: 13.0,
              voiceover_text: null,
              voice_direction: null,
              overlay_text: "WILD REVERENCE\nRebecca Ross"
            }
          ],
          caption: "true love is more divine than any ruthless god. \uD83C\uDF29\uFE0F\u26A1 #WildReverence #RebeccaRoss #BookTok #Romantasy #DarkFantasy #DivineRivals #FourthWing #FantasyRomance #BookTrailer",
          cta: "Would you love a god who couldn't stay? \uD83D\uDDA4 Drop a \u26A1 if you're already pre-ordering."
        },
        videoPath: "/videos/wild_reverence_v4_final.mp4"
      }
    ]
  }
];

export function getPromptDemoById(id) {
  return promptDemos.find(d => d.id === id) || null;
}
