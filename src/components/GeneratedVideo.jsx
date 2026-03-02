import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, RotateCcw, Play, Sparkles, Download,
  Film, Clock, Tag, Lightbulb, Mic, Type, BookOpen, Zap, Eye,
  Image, Music, Hash, Check
} from 'lucide-react';
import './GeneratedVideo.css';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const loadingSteps = [
  { label: 'Generating script segments...', icon: Type, duration: 1600 },
  { label: 'Generating visual direction...', icon: Image, duration: 1200 },
  { label: 'Synthesizing voiceover...', icon: Mic, duration: 2000 },
  { label: 'Compiling prompt...', icon: Zap, duration: 1000 },
  { label: 'Generating video...', icon: Film, duration: 5800 },
  { label: 'Adding overlay text...', icon: Type, duration: 1300 },
  { label: 'Applying final polish...', icon: Sparkles, duration: 700 },
];

function LoadingSequence({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (currentStep < loadingSteps.length) {
      const step = loadingSteps[currentStep];
      const startProgress = (currentStep / loadingSteps.length) * 100;
      const endProgress = ((currentStep + 1) / loadingSteps.length) * 100;

      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const next = prev + (endProgress - startProgress) / (step.duration / 50);
          return Math.min(next, endProgress);
        });
      }, 50);

      timer = setTimeout(() => {
        clearInterval(progressInterval);
        setProgress(endProgress);
        if (currentStep + 1 >= loadingSteps.length) {
          setTimeout(onComplete, 400);
        } else {
          setCurrentStep(prev => prev + 1);
        }
      }, step.duration);

      return () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
      };
    }
  }, [currentStep, onComplete]);

  const CurrentIcon = loadingSteps[currentStep]?.icon || Sparkles;

  return (
    <motion.div
      className="loading-sequence"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
    >
      <div className="loading-visual">
        <div className="loading-ring">
          <motion.div
            className="loading-ring-inner"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <motion.div
          className="loading-icon"
          key={currentStep}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <CurrentIcon size={28} />
        </motion.div>
      </div>

      <div className="loading-text">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentStep}
            className="loading-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {loadingSteps[currentStep]?.label}
          </motion.p>
        </AnimatePresence>
        <span className="loading-step">Step {currentStep + 1} of {loadingSteps.length}</span>
      </div>

      <div className="loading-progress">
        <div className="progress-track">
          <motion.div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="progress-pct">{Math.round(progress)}%</span>
      </div>

      <div className="loading-steps-list">
        {loadingSteps.map((step, i) => {
          const StepIcon = step.icon;
          const isDone = i < currentStep;
          return (
            <div
              key={i}
              className={`loading-step-item ${isDone ? 'done' : ''} ${i === currentStep ? 'active' : ''}`}
            >
              {isDone ? (
                <span className="step-check"><Check size={13} strokeWidth={3} /></span>
              ) : (
                <StepIcon size={15} />
              )}
              <span>{step.label.replace('...', '')}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function VideoShowcase({ demoVideo, selectedVideo }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleTimeUpdate = () => {
      if (video.duration) {
        setVideoProgress((video.currentTime / video.duration) * 100);
      }
    };
    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const script = demoVideo?.script || {};
  const brief = script.creative_brief || {};
  const segments = script.segments || [];
  const fmt = demoVideo?.formatSpec || {};
  const audioDir = fmt.audio_direction || {};
  const book = demoVideo?.book || {};
  const videoSrc = demoVideo?.videoPath || '/videos/booktok_final.mp4';
  const caption = script.caption || '';

  return (
    <motion.div
      className="video-showcase"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="showcase-layout">
        {/* Video Player */}
        <div className="showcase-player">
          <div className="player-frame" onClick={togglePlay}>
            <video
              ref={videoRef}
              src={videoSrc}
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
            {/* TikTok-style bottom info */}
            <div className="tiktok-bottom-info">
              <div className="tiktok-handle">@macmillanpublishers</div>
              {caption && <div className="tiktok-caption">{caption}</div>}
              <div className="tiktok-music">
                <Music size={12} />
                <div className="tiktok-music-ticker">
                  <span>Original sound - Macmillan Publishers</span>
                </div>
              </div>
            </div>
            {/* TikTok-style progress bar */}
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

        {/* Details Panel */}
        <div className="showcase-details">
          <div className="showcase-header">
            <div className="showcase-badge">
              <Sparkles size={12} />
              Generated Video Analysis
            </div>
            <h3 className="showcase-title">{book.title} — {fmt.format_meta?.name || 'BookTok Promo'}</h3>
            <p className="showcase-desc">{brief.style_rationale || brief.style || `AI-generated BookTok video for "${book.title}" by ${book.author}`}</p>
          </div>

          {/* Specs grid from creative brief + format spec */}
          <div className="showcase-specs">
            <div className="spec-item">
              <div className="spec-label"><Lightbulb size={13} /> Creative Style</div>
              <div className="spec-value">{brief.style || '—'}</div>
            </div>
            <div className="spec-item">
              <div className="spec-label"><Tag size={13} /> Tone</div>
              <div className="spec-value">{brief.tone || '—'}</div>
            </div>
            <div className="spec-item">
              <div className="spec-label"><Eye size={13} /> Target Hook</div>
              <div className="spec-value">{brief.target_hook || '—'}</div>
            </div>
            <div className="spec-item">
              <div className="spec-label"><Clock size={13} /> Duration</div>
              <div className="spec-value">{script.total_duration_seconds || '—'}s ({segments.length} segment{segments.length !== 1 ? 's' : ''})</div>
            </div>
            <div className="spec-item">
              <div className="spec-label"><Mic size={13} /> Voiceover</div>
              <div className="spec-value">{audioDir.has_voiceover ? `${audioDir.voice_tone || 'Yes'} (${audioDir.voice_gender || '—'})` : 'None'}</div>
            </div>
            <div className="spec-item">
              <div className="spec-label"><Music size={13} /> Music</div>
              <div className="spec-value">{audioDir.has_music ? `${audioDir.music_genre || 'Yes'} — ${audioDir.music_mood || ''}` : 'None'}</div>
            </div>
            <div className="spec-item">
              <div className="spec-label"><Film size={13} /> Source Format</div>
              <div className="spec-value">{selectedVideo?.analysis?.name || '—'}</div>
            </div>
            <div className="spec-item">
              <div className="spec-label"><BookOpen size={13} /> Genre</div>
              <div className="spec-value">{book.genre || '—'}</div>
            </div>
          </div>

          {/* Script Segments */}
          {segments.length > 0 && (
            <div className="script-segments">
              <h4 className="segments-title">
                <Type size={14} />
                Script Segments
              </h4>
              {segments.map((seg, i) => (
                <div key={i} className="segment-card">
                  <div className="segment-header">
                    <span className="segment-number">Segment {seg.segment_number}</span>
                    <span className="segment-time">{seg.start_time}s — {seg.end_time}s</span>
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

          {/* Caption + CTA */}
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
      </div>
    </motion.div>
  );
}

export default function GeneratedVideo({ selectedVideo, demoVideo, onReset, onBack }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      className="generated-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="section-header">
        <div className="section-header-left">
          <button className="btn-secondary back-btn" onClick={onBack}>
            <ArrowLeft size={16} />
          </button>
          <div>
            <h2 className="section-title">
              {isLoading ? (
                <>Generating Your <span className="gold-gradient-text">Video</span></>
              ) : (
                <>Your <span className="gold-gradient-text">Generated Video</span></>
              )}
            </h2>
            <p className="section-subtitle">
              {isLoading
                ? 'AI is crafting your BookTok video...'
                : `BookTok promo for "${demoVideo?.book?.title || '—'}" — ready to publish`
              }
            </p>
          </div>
        </div>
        {!isLoading && (
          <button className="btn-secondary" onClick={onReset}>
            <RotateCcw size={14} />
            Start Over
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingSequence
            key="loading"
            onComplete={() => setIsLoading(false)}
          />
        ) : (
          <VideoShowcase
            key="showcase"
            demoVideo={demoVideo}
            selectedVideo={selectedVideo}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
