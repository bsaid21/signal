import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, FileText, Image, Mic, BookOpen, Zap, RefreshCw,
  Play, Film, Clock, Tag, Lightbulb, Eye, Music, Hash, Type,
  Download, Check, Send, Loader
} from 'lucide-react';
import BookPickerModal from './BookPickerModal';
import { promptDemos } from '../data/promptDemos';
import './PromptWorkflow.css';

// Reuse humanize helpers from Configuration
const humanLabels = {
  pov_hook: "POV Hook",
  voiceover_narration: "Voiceover Narration",
  text_only: "Text Only",
  visceral_scenario: "Visceral Scenario",
  relatable_pain: "Relatable Pain",
  bold_question: "Bold Question",
  hot_take: "Hot Take",
  slow_build_fast_end: "Slow Build \u2192 Fast End",
  even: "Even Pacing",
  fast_cuts: "Fast Cuts",
  full_sentence: "Full Sentence",
  short_punchy: "Short & Punchy",
  pov_with_hashtags: "POV with Hashtags",
  emotional_with_hashtags: "Emotional with Hashtags",
  cinematic_warm: "Cinematic Warm",
  cinematic_dark: "Cinematic Dark",
  soft_warm: "Soft & Warm",
  warm_cozy: "Warm & Cozy",
  dark_cozy: "Dark & Cozy",
  casual_chatty: "Casual & Chatty",
  casual_excited: "Casual & Excited",
  warm_friendly: "Warm & Friendly",
  whispery_dramatic: "Whispery & Dramatic",
  deep_serious: "Deep & Serious",
  dark_ambient: "Dark Ambient",
  romantic_soft: "Romantic & Soft",
  trending_soft: "Trending & Soft",
  soft_lofi: "Soft Lo-fi",
  minimal: "Minimal",
};

function humanize(value) {
  if (!value) return '';
  if (humanLabels[value]) return humanLabels[value];
  return value.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function humanizeArray(arr) {
  if (!arr || !arr.length) return '';
  return arr.map(v => v.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())).join(', ');
}

// Spec field components (same as Configuration)
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
    <div className="format-spec-section">
      <div className="spec-section-header">
        <Icon size={16} className="config-icon" />
        <h4 className="config-label">{title}</h4>
      </div>
      <div className="spec-fields">
        {children}
      </div>
    </div>
  );
}

// Simulated loading steps for spec generation
const specLoadingSteps = [
  { label: 'Analyzing prompt...', icon: Sparkles, duration: 800 },
  { label: 'Brainstorming concepts...', icon: Lightbulb, duration: 1000 },
  { label: 'Designing format specs...', icon: FileText, duration: 1200 },
  { label: 'Setting visual direction...', icon: Image, duration: 600 },
];

// Simulated loading steps for video generation
const videoLoadingSteps = [
  { label: 'Generating script...', icon: Type, duration: 1200 },
  { label: 'Generating scene image...', icon: Image, duration: 1400 },
  { label: 'Synthesizing voiceover...', icon: Mic, duration: 1200 },
  { label: 'Generating video clip...', icon: Film, duration: 3200 },
  { label: 'Composing final video...', icon: Sparkles, duration: 800 },
];

function MiniLoadingSequence({ steps, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentStep < steps.length) {
      const step = steps[currentStep];
      const startPct = (currentStep / steps.length) * 100;
      const endPct = ((currentStep + 1) / steps.length) * 100;

      const interval = setInterval(() => {
        setProgress(prev => Math.min(prev + (endPct - startPct) / (step.duration / 50), endPct));
      }, 50);

      const timer = setTimeout(() => {
        clearInterval(interval);
        setProgress(endPct);
        if (currentStep + 1 >= steps.length) {
          setTimeout(onComplete, 300);
        } else {
          setCurrentStep(prev => prev + 1);
        }
      }, step.duration);

      return () => { clearTimeout(timer); clearInterval(interval); };
    }
  }, [currentStep, steps, onComplete]);

  const CurrentIcon = steps[currentStep]?.icon || Sparkles;

  return (
    <motion.div
      className="mini-loading"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <div className="mini-loading-row">
        <motion.div
          className="mini-loading-icon"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        >
          <CurrentIcon size={18} />
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentStep}
            className="mini-loading-label"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
          >
            {steps[currentStep]?.label}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="mini-loading-bar">
        <div className="mini-loading-fill" style={{ width: `${progress}%` }} />
      </div>
    </motion.div>
  );
}

// Derive editable fields from a concept's format spec
function deriveFields(concept) {
  if (!concept?.formatSpec) return {};
  const fmt = concept.formatSpec;
  const scriptDir = fmt.script_direction || {};
  const visualDir = fmt.visual_direction || {};
  const audioDir = fmt.audio_direction || {};
  return {
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
  };
}

export default function PromptWorkflow() {
  // Find a demo with concepts, or fall back to empty
  const demo = promptDemos.find(d => d.concepts?.length > 0) || promptDemos[0] || {};
  const concepts = demo.concepts || [];
  const hasConcepts = concepts.length > 0;

  const [promptText, setPromptText] = useState(demo.prompt || '');
  const [specGenerated, setSpecGenerated] = useState(false);
  const [specLoading, setSpecLoading] = useState(false);
  const [videoGenerated, setVideoGenerated] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);

  // Active concept tab
  const [activeConceptIndex, setActiveConceptIndex] = useState(0);
  const activeConcept = concepts[activeConceptIndex] || null;

  // Book state
  const [selectedBook, setSelectedBook] = useState(demo.book || null);
  const [showBookPicker, setShowBookPicker] = useState(false);

  // Format spec fields — derived from active concept
  const [fields, setFields] = useState(() => deriveFields(activeConcept));

  // Rebuild fields when switching concepts
  useEffect(() => {
    setFields(deriveFields(activeConcept));
  }, [activeConceptIndex]);

  const updateField = (key, value) => {
    setFields(prev => ({ ...prev, [key]: value }));
  };

  // Video player state
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  // Reset video player when switching concepts
  useEffect(() => {
    setIsPlaying(false);
    setVideoProgress(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [activeConceptIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleTimeUpdate = () => {
      if (video.duration) setVideoProgress((video.currentTime / video.duration) * 100);
    };
    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, [videoGenerated, activeConceptIndex]);

  const handleGenerateSpec = () => {
    if (!promptText.trim()) return;
    setSpecLoading(true);
  };

  const handleGenerateVideo = () => {
    setVideoLoading(true);
  };

  // Active concept data
  const fmt = activeConcept?.formatSpec || {};
  const scriptDir = fmt.script_direction || {};
  const audioDir = fmt.audio_direction || {};
  const script = activeConcept?.script || {};
  const brief = script.creative_brief || {};
  const segments = script.segments || [];
  const hasVideo = !!activeConcept?.videoPath;

  return (
    <motion.div
      className="prompt-workflow"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
    >
      {/* Section 1: Prompt Input */}
      <motion.section
        className="pw-section pw-prompt-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="pw-section-header">
          <h2 className="section-title">
            Describe Your <span className="gold-gradient-text">Video</span>
          </h2>
          <p className="section-subtitle">
            Describe the BookTok video style you want to create — the AI will generate format specs for multiple concepts
          </p>
        </div>

        <div className="pw-prompt-card glass-panel">
          <textarea
            className="pw-prompt-input"
            placeholder="e.g. Give me 4 ideas for BookTok videos to post for [book title] by [author]..."
            value={promptText}
            onChange={e => setPromptText(e.target.value)}
            rows={4}
          />
          <div className="pw-prompt-actions">
            <span className="pw-char-count">{promptText.length} characters</span>
            <button
              className="btn-primary"
              onClick={handleGenerateSpec}
              disabled={!promptText.trim() || specLoading}
            >
              <Send size={16} />
              Generate Format Specs
            </button>
          </div>
        </div>

        <AnimatePresence>
          {specLoading && (
            <MiniLoadingSequence
              steps={specLoadingSteps}
              onComplete={() => {
                setSpecLoading(false);
                setSpecGenerated(true);
              }}
            />
          )}
        </AnimatePresence>
      </motion.section>

      {/* Section 2: Format Spec with Concept Tabs */}
      <AnimatePresence>
        {specGenerated && hasConcepts && (
          <motion.section
            className="pw-section pw-spec-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pw-section-header">
              <h2 className="section-title">
                Format <span className="gold-gradient-text">Specs</span>
              </h2>
              <p className="section-subtitle">
                {concepts.length} concepts generated — select one to review and edit
              </p>
            </div>

            {/* Concept Tabs */}
            <div className="concept-tabs">
              <div className="concept-tabs-inner">
                {concepts.map((concept, i) => (
                  <button
                    key={concept.id}
                    className={`concept-tab ${i === activeConceptIndex ? 'active' : ''}`}
                    onClick={() => setActiveConceptIndex(i)}
                  >
                    <span className="concept-tab-number">{i + 1}</span>
                    <span className="concept-tab-name">{concept.name}</span>
                    {!concept.videoPath && (
                      <span className="concept-tab-badge">Coming Soon</span>
                    )}
                    {i === activeConceptIndex && (
                      <motion.div
                        className="concept-tab-underline"
                        layoutId="concept-underline"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Concept Description */}
            {activeConcept?.conceptDescription && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-${activeConceptIndex}`}
                  className="concept-description glass-panel"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Lightbulb size={15} className="concept-desc-icon" />
                  <p>{activeConcept.conceptDescription}</p>
                </motion.div>
              </AnimatePresence>
            )}

            {/* Book selector */}
            {selectedBook ? (
              <div className="selected-book-mini glass-panel">
                <div className="mini-cover" style={{ backgroundColor: selectedBook.color }}>
                  <img
                    src={selectedBook.coverUrl}
                    alt={selectedBook.title}
                    onError={e => e.target.style.display = 'none'}
                  />
                </div>
                <div className="mini-info">
                  <h4>{selectedBook.title}</h4>
                  <p>{selectedBook.author} — {selectedBook.imprint || ''}</p>
                  <span className="mini-genre">{selectedBook.genre}</span>
                </div>
                <div className="mini-meta">
                  <button className="mini-change-btn" onClick={() => setShowBookPicker(true)}>
                    <RefreshCw size={12} />
                    Change Book
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="pw-select-book-btn glass-panel"
                onClick={() => setShowBookPicker(true)}
              >
                <BookOpen size={18} />
                <span>Select a Book</span>
              </button>
            )}

            {/* Format name badge */}
            {fmt.format_meta && (
              <div className="format-name-badge">
                <Sparkles size={12} />
                <span>{fmt.format_meta.name || 'custom_format'}</span>
              </div>
            )}

            {/* Spec fields grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeConceptIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="format-spec-grid">
                  <SpecSection icon={FileText} title="Script Direction">
                    <SpecField label="Narrative Style" hint="How the story is told" value={fields.narrativeStyle} onChange={v => updateField('narrativeStyle', v)} />
                    <SpecField label="Hook Strategy" hint="What stops the scroll" value={fields.hookStrategy} onChange={v => updateField('hookStrategy', v)} />
                    <SpecField label="Segment Pacing" hint="How energy builds" value={fields.segmentPacing} onChange={v => updateField('segmentPacing', v)} />
                    <SpecField label="Overlay Text Style" hint="On-screen text format" value={fields.overlayTextStyle} onChange={v => updateField('overlayTextStyle', v)} />
                    <SpecField label="Caption Style" hint="Post caption format" value={fields.captionStyle} onChange={v => updateField('captionStyle', v)} />
                  </SpecSection>

                  <SpecSection icon={Image} title="Visual Direction">
                    <SpecField label="Visual Style" hint="Scene description for image generation" value={fields.visualStyle} onChange={v => updateField('visualStyle', v)} multiline />
                    <SpecField label="Color Mood" hint="Overall color feel" value={fields.colorMood} onChange={v => updateField('colorMood', v)} />
                    <SpecField label="Image Types" hint="Types of shots" value={fields.imageTypes} onChange={v => updateField('imageTypes', v)} />
                  </SpecSection>

                  <SpecSection icon={Mic} title="Audio Direction">
                    <SpecField label="Voiceover" hint="Spoken narration" value={fields.voiceover} onChange={v => updateField('voiceover', v)} />
                    <SpecField label="Voice Tone" hint="Narrator voice style" value={fields.voiceTone} onChange={v => updateField('voiceTone', v)} />
                    <SpecField label="Background Music" hint="Music included" value={fields.music} onChange={v => updateField('music', v)} />
                    <SpecField label="Music Genre" hint="Style of music" value={fields.musicGenre} onChange={v => updateField('musicGenre', v)} />
                    <SpecField label="Music Mood" hint="Emotional quality" value={fields.musicMood} onChange={v => updateField('musicMood', v)} />
                  </SpecSection>
                </div>

                {/* Content rules */}
                {scriptDir.content_rules && scriptDir.content_rules.length > 0 && (
                  <div className="content-rules glass-panel">
                    <div className="spec-section-header">
                      <BookOpen size={16} className="config-icon" />
                      <h4 className="config-label">Content Rules</h4>
                    </div>
                    <ul className="rules-list">
                      {scriptDir.content_rules.map((rule, i) => (
                        <li key={i}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Generate video button */}
            <div className="generate-bar">
              <div className="generate-summary">
                <span className="summary-count">Format spec ready — {activeConcept?.name}</span>
              </div>
              <button
                className="btn-primary generate-btn"
                onClick={handleGenerateVideo}
                disabled={videoLoading}
              >
                <Film size={18} />
                Generate Videos
              </button>
            </div>

            <AnimatePresence>
              {videoLoading && (
                <MiniLoadingSequence
                  steps={videoLoadingSteps}
                  onComplete={() => {
                    setVideoLoading(false);
                    setVideoGenerated(true);
                  }}
                />
              )}
            </AnimatePresence>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Section 3: Generated Video */}
      <AnimatePresence>
        {videoGenerated && !videoLoading && hasConcepts && (
          <motion.section
            className="pw-section pw-video-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="pw-section-header">
              <h2 className="section-title">
                Generated <span className="gold-gradient-text">Video</span>
              </h2>
              <p className="section-subtitle">
                {hasVideo
                  ? `"${activeConcept.name}" — ready to publish`
                  : `"${activeConcept?.name}" — video generation in progress`
                }
              </p>
            </div>

            <AnimatePresence mode="wait">
              {hasVideo ? (
                <motion.div
                  key={`video-${activeConceptIndex}`}
                  className="pw-video-layout"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Video player */}
                  <div className="showcase-player">
                    <div className="player-frame" onClick={togglePlay}>
                      <video
                        ref={videoRef}
                        src={activeConcept.videoPath}
                        className="player-video"
                        loop
                        playsInline
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      />
                      <AnimatePresence>
                        {!isPlaying && (
                          <motion.div
                            className="player-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <div className="play-button-large">
                              <Play size={36} fill="currentColor" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <div className="tiktok-bottom-info">
                        <div className="tiktok-handle">@macmillanpublishers</div>
                        {script.caption && <div className="tiktok-caption">{script.caption}</div>}
                        <div className="tiktok-music">
                          <Music size={12} />
                          <div className="tiktok-music-ticker">
                            <span>Original sound - Macmillan Publishers</span>
                          </div>
                        </div>
                      </div>
                      <div className="tiktok-progress">
                        <div className="tiktok-progress-fill" style={{ width: `${videoProgress}%` }} />
                      </div>
                    </div>
                    <div className="player-meta">
                      <span className="player-badge">
                        <Sparkles size={12} /> AI Generated
                      </span>
                      <span className="player-ready">Ready for TikTok</span>
                    </div>
                  </div>

                  {/* Details panel */}
                  <div className="showcase-details">
                    <div className="showcase-header">
                      <div className="showcase-badge">
                        <Sparkles size={12} />
                        Generated Video Analysis
                      </div>
                      <h3 className="showcase-title">
                        {selectedBook?.title || 'BookTok Promo'} — {activeConcept.name}
                      </h3>
                      <p className="showcase-desc">
                        {brief.style_rationale || brief.style || 'AI-generated BookTok video'}
                      </p>
                    </div>

                    <div className="showcase-specs">
                      <div className="spec-item">
                        <div className="spec-label"><Lightbulb size={13} /> Creative Style</div>
                        <div className="spec-value">{brief.style || '\u2014'}</div>
                      </div>
                      <div className="spec-item">
                        <div className="spec-label"><Tag size={13} /> Tone</div>
                        <div className="spec-value">{brief.tone || '\u2014'}</div>
                      </div>
                      <div className="spec-item">
                        <div className="spec-label"><Eye size={13} /> Target Hook</div>
                        <div className="spec-value">{brief.target_hook || '\u2014'}</div>
                      </div>
                      <div className="spec-item">
                        <div className="spec-label"><Clock size={13} /> Duration</div>
                        <div className="spec-value">{script.total_duration_seconds || '\u2014'}s ({segments.length} segment{segments.length !== 1 ? 's' : ''})</div>
                      </div>
                      <div className="spec-item">
                        <div className="spec-label"><Mic size={13} /> Voiceover</div>
                        <div className="spec-value">{audioDir.has_voiceover ? `${humanize(audioDir.voice_tone)} (${audioDir.voice_gender || '\u2014'})` : 'None'}</div>
                      </div>
                      <div className="spec-item">
                        <div className="spec-label"><Music size={13} /> Music</div>
                        <div className="spec-value">{audioDir.has_music ? `${audioDir.music_genre || 'Yes'} \u2014 ${humanize(audioDir.music_mood) || ''}` : 'None'}</div>
                      </div>
                    </div>

                    {segments.length > 0 && (
                      <div className="script-segments">
                        <h4 className="segments-title"><Type size={14} /> Script Segments</h4>
                        {segments.map((seg, i) => (
                          <div key={i} className="segment-card">
                            <div className="segment-header">
                              <span className="segment-number">Segment {seg.segment_number}</span>
                              <span className="segment-time">{seg.start_time}s \u2014 {seg.end_time}s</span>
                            </div>
                            {seg.voiceover_text && (
                              <div className="segment-row">
                                <Mic size={11} />
                                <span className="segment-vo">{seg.voiceover_text}</span>
                              </div>
                            )}
                            {seg.overlay_text && (
                              <div className="segment-row">
                                <Type size={11} />
                                <span className="segment-overlay">{seg.overlay_text}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {script.caption && (
                      <div className="script-caption">
                        <h4 className="caption-title"><Hash size={14} /> Caption</h4>
                        <p className="caption-text">{script.caption}</p>
                      </div>
                    )}

                    {script.cta && (
                      <div className="script-cta">
                        <p className="cta-text">{script.cta}</p>
                      </div>
                    )}

                    <div className="showcase-actions">
                      <button className="btn-primary">
                        <Download size={16} />
                        Export Video
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={`placeholder-${activeConceptIndex}`}
                  className="pw-coming-soon glass-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="coming-soon-icon">
                    <Loader size={32} />
                  </div>
                  <h3>Video Generation In Progress</h3>
                  <p>"{activeConcept?.name}" is currently being generated and will appear here once complete.</p>
                  <div className="coming-soon-spec">
                    <span><Clock size={13} /> {script.total_duration_seconds || '\u2014'}s</span>
                    <span><Film size={13} /> {segments.length} segment{segments.length !== 1 ? 's' : ''}</span>
                    <span><Music size={13} /> {fmt.audio_direction?.music_genre || 'Music'}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Book Picker Modal */}
      {createPortal(
        <AnimatePresence>
          {showBookPicker && (
            <BookPickerModal
              currentBook={selectedBook}
              videoGenre={null}
              onSelect={(book) => {
                setSelectedBook(book);
                setShowBookPicker(false);
              }}
              onClose={() => setShowBookPicker(false)}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.div>
  );
}
