import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Sparkles, BookOpen, FileText, Mic, Image, Zap
} from 'lucide-react';
import './Configuration.css';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.08 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Convert snake_case pipeline values to human-readable labels
const humanLabels = {
  // narrative_style
  pov_hook: "POV Hook — opens with a point-of-view framing that puts the viewer in the scene",
  voiceover_narration: "Voiceover Narration — creator narrates over the visuals in their own voice",
  // hook_strategy
  visceral_scenario: "Visceral Scenario — an emotionally intense visual that stops the scroll instantly",
  // segment_pacing
  slow_build_fast_end: "Slow Build → Fast End — starts calm and escalates to a rapid emotional payoff",
  // overlay_text_style
  full_sentence: "Full Sentence — a single bold text overlay held on screen the entire clip",
  short_punchy: "Short & Punchy — brief text fragments that hit hard and change with each cut",
  // caption_style
  pov_with_hashtags: "POV caption with hashtags — 'POV: ...' framing plus trending BookTok tags",
  emotional_with_hashtags: "Emotional caption with hashtags — raw emotional reaction plus BookTok tags",
  // color_mood
  cinematic_warm: "Cinematic Warm — muted earth tones with natural interior warmth",
  soft_warm: "Soft & Warm — bright, airy pastels with gentle daylight feel",
  warm_cozy: "Warm & Cozy — holiday/candlelit tones, cream and gold palette",
  // voice_tone
  casual_chatty: "Casual & Chatty — sounds like talking to a friend, unscripted energy",
  warm_friendly: "Warm & Friendly — approachable and sincere, like a trusted recommendation",
  // music_mood
  dark_ambient: "Dark Ambient — slow suspenseful atmosphere, sparse piano or strings",
  warm_cozy_music: "Warm & Cozy — gentle acoustic guitar with soft holiday undertones",
  romantic_soft: "Romantic & Soft — tender indie folk, sparse and intimate",
};

function humanize(value) {
  if (!value) return '';
  if (humanLabels[value]) return humanLabels[value];
  // Fallback: convert snake_case to Title Case
  return value.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function humanizeArray(arr) {
  if (!arr || !arr.length) return '';
  return arr.map(v => v.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())).join(', ');
}

function SpecField({ label, hint, value, onChange, multiline = false }) {
  return (
    <div className="spec-field">
      <label className="spec-field-label">{label}</label>
      {hint && <span className="spec-field-hint">{hint}</span>}
      {multiline ? (
        <textarea
          className="spec-field-input spec-field-textarea"
          value={value}
          onChange={e => onChange(e.target.value)}
          rows={3}
        />
      ) : (
        <input
          className="spec-field-input"
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      )}
    </div>
  );
}

function SpecSection({ icon: Icon, title, children }) {
  return (
    <motion.div
      className="format-spec-section"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
    >
      <div className="spec-section-header">
        <Icon size={16} className="config-icon" />
        <h4 className="config-label">{title}</h4>
      </div>
      <div className="spec-fields">
        {children}
      </div>
    </motion.div>
  );
}

export default function Configuration({ selectedVideo, demoVideo, onGenerate, onBack }) {
  const fmt = demoVideo?.formatSpec || {};
  const scriptDir = fmt.script_direction || {};
  const visualDir = fmt.visual_direction || {};
  const audioDir = fmt.audio_direction || {};

  // Editable format spec state — pre-filled with human-readable values
  const [fields, setFields] = useState({
    narrativeStyle: humanize(scriptDir.narrative_style),
    hookStrategy: humanize(scriptDir.hook_strategy),
    segmentPacing: humanize(scriptDir.segment_pacing),
    overlayTextStyle: humanize(scriptDir.overlay_text_style),
    captionStyle: humanize(scriptDir.caption_style),
    visualStyle: visualDir.image_style_prefix || '',
    colorMood: humanize(visualDir.color_mood),
    imageTypes: humanizeArray(visualDir.image_types),
    voiceover: audioDir.has_voiceover ? 'Yes' : 'No',
    voiceTone: humanize(audioDir.voice_tone),
    music: audioDir.has_music ? 'Yes' : 'No',
    musicGenre: audioDir.music_genre || '',
    musicMood: humanize(audioDir.music_mood),
  });

  const updateField = (key, value) => {
    setFields(prev => ({ ...prev, [key]: value }));
  };

  const book = demoVideo?.book;

  return (
    <motion.div
      className="config-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div className="section-header" variants={cardVariants}>
        <div className="section-header-left">
          <button className="btn-secondary back-btn" onClick={onBack}>
            <ArrowLeft size={16} />
          </button>
          <div>
            <h2 className="section-title">
              Configure <span className="gold-gradient-text">Format Spec</span>
            </h2>
            <p className="section-subtitle">
              Modeling after: "{selectedVideo?.title}" by {selectedVideo?.creator}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="config-settings"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Selected book mini card */}
        {book && (
          <motion.div className="selected-book-mini glass-panel"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="mini-cover" style={{ backgroundColor: book.color }}>
              <img
                src={book.coverUrl}
                alt={book.title}
                onError={e => e.target.style.display = 'none'}
              />
            </div>
            <div className="mini-info">
              <h4>{book.title}</h4>
              <p>{book.author} — {book.imprint}</p>
              <span className="mini-genre">{book.genre}</span>
            </div>
            <div className="mini-meta">
              <span className="mini-auto-match">
                <Zap size={11} />
                Book auto-matched by Signal
              </span>
              <button className="mini-change-link" onClick={onBack}>
                Select another Macmillan book
              </button>
            </div>
          </motion.div>
        )}

        {/* Format name badge */}
        {fmt.format_meta && (
          <div className="format-name-badge">
            <Sparkles size={12} />
            <span>{fmt.format_meta.name}</span>
          </div>
        )}

        {/* Format spec fields in 3 sections */}
        <div className="format-spec-grid">
          <SpecSection icon={FileText} title="Script Direction">
            <SpecField label="Narrative Style" hint="How the story is told — voiceover, POV framing, direct-to-camera, etc." value={fields.narrativeStyle} onChange={v => updateField('narrativeStyle', v)} />
            <SpecField label="Hook Strategy" hint="What stops the scroll in the first 1-2 seconds" value={fields.hookStrategy} onChange={v => updateField('hookStrategy', v)} />
            <SpecField label="Segment Pacing" hint="How energy and tension build across the video's segments" value={fields.segmentPacing} onChange={v => updateField('segmentPacing', v)} />
            <SpecField label="Overlay Text Style" hint="How on-screen text appears — bold single caption vs. quick fragments" value={fields.overlayTextStyle} onChange={v => updateField('overlayTextStyle', v)} />
            <SpecField label="Caption Style" hint="The post caption format beneath the video" value={fields.captionStyle} onChange={v => updateField('captionStyle', v)} />
          </SpecSection>

          <SpecSection icon={Image} title="Visual Direction">
            <SpecField label="Visual Style" hint="Full scene description passed to the image generator" value={fields.visualStyle} onChange={v => updateField('visualStyle', v)} multiline />
            <SpecField label="Color Mood" hint="Overall color temperature and feeling" value={fields.colorMood} onChange={v => updateField('colorMood', v)} />
            <SpecField label="Image Types" hint="Types of shots to generate — person with book, flatlay, cinematic, etc." value={fields.imageTypes} onChange={v => updateField('imageTypes', v)} />
          </SpecSection>

          <SpecSection icon={Mic} title="Audio Direction">
            <SpecField label="Voiceover" hint="Whether the video includes spoken narration" value={fields.voiceover} onChange={v => updateField('voiceover', v)} />
            <SpecField label="Voice Tone" hint="How the narrator should sound — casual, emotional, authoritative, etc." value={fields.voiceTone} onChange={v => updateField('voiceTone', v)} />
            <SpecField label="Background Music" hint="Whether background music is included" value={fields.music} onChange={v => updateField('music', v)} />
            <SpecField label="Music Genre" hint="Style of music — e.g. soft indie pop, ambient suspense, acoustic folk" value={fields.musicGenre} onChange={v => updateField('musicGenre', v)} />
            <SpecField label="Music Mood" hint="Emotional quality of the music track" value={fields.musicMood} onChange={v => updateField('musicMood', v)} />
          </SpecSection>
        </div>

        {/* Content rules (read-only display) */}
        {scriptDir.content_rules && scriptDir.content_rules.length > 0 && (
          <motion.div className="content-rules glass-panel"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="spec-section-header">
              <BookOpen size={16} className="config-icon" />
              <h4 className="config-label">Content Rules</h4>
            </div>
            <ul className="rules-list">
              {scriptDir.content_rules.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Generate button */}
        <motion.div className="generate-bar"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="generate-summary">
            <span className="summary-count">
              Format spec ready
            </span>
          </div>
          <button
            className="btn-primary generate-btn"
            onClick={() => onGenerate()}
          >
            <Sparkles size={18} />
            Generate Video
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
