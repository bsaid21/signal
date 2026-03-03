import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, Eye, Heart, MessageCircle, Share2,
  Play, Sparkles, X, Clock, Tag, Film, Lightbulb, Flame
} from 'lucide-react';
import { trendingVideos, parseViews } from '../data/trendingVideos';
import './TrendingVideos.css';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.05 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

// Color palette for thumbnail gradients (fallback when images fail)
const thumbnailColors = [
  ['#6b1d4a', '#1a0a1e'],
  ['#1a3a5c', '#0a1628'],
  ['#4a2d0a', '#1a0f05'],
  ['#0a3a2a', '#051a15'],
  ['#3a1a5c', '#150a28'],
  ['#5c3a1a', '#281a0a'],
  ['#1a4a4a', '#0a2020'],
  ['#4a1a2a', '#200a15'],
  ['#2a3a1a', '#15200a'],
  ['#3a2a4a', '#1a1528'],
];

function getTikTokVideoId(url) {
  if (!url) return null;
  const match = url.match(/video\/(\d+)/);
  return match ? match[1] : null;
}

function getVideoTier(video) {
  if (video.rank <= 3) return 'featured';
  const views = parseViews(video.views);
  if (views >= 1_000_000) return 'high';
  if (views >= 400_000) return 'medium';
  return 'small';
}

// Row/col spans vary per tier for organic cloud feel + tight packing
// With grid-auto-flow: dense, the browser fills gaps automatically
// Key: uniform row heights within tiers = no vertical gaps
function getRowSpan(tier, index) {
  if (tier === 'featured') return 8;
  if (tier === 'high') return 3;       // uniform height for high
  if (tier === 'medium') return 3;     // uniform height for medium
  return 2;                             // uniform height for small
}

function getColSpan(tier, index) {
  if (tier === 'featured') return 4;
  if (tier === 'high') return 3;        // 4 cards × 3 = 12 (perfect row)
  if (tier === 'medium') {
    // 5 cards: 3+3+2+2+2 = 12 → first 2 wider, last 3 narrower
    const pattern = [3, 3, 2, 2, 2];
    return pattern[index % pattern.length];
  }
  // small 9 cards: 2+2+2+3+3 = 12, 2+2+2+3+3 = 12 → clean tile
  const pattern = [2, 2, 2, 3, 3, 2, 2, 2, 3];
  return pattern[index % pattern.length];
}

function CloudThumbnail({ video, index }) {
  const [imgError, setImgError] = useState(false);
  const colors = thumbnailColors[index % thumbnailColors.length];
  const hasThumbnail = video.thumbnail && !imgError;

  return (
    <div
      className="cloud-thumb"
      style={{
        background: hasThumbnail ? '#000' : `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`
      }}
    >
      {hasThumbnail && (
        <img
          src={video.thumbnail}
          alt={video.title}
          className="cloud-thumb-img"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      )}
      <div className="cloud-thumb-play">
        <Play size={16} />
      </div>
    </div>
  );
}

function CloudCard({ video, tier, index, onSelect, onDetail }) {
  const videoId = getTikTokVideoId(video.tiktokUrl);
  const rowSpan = getRowSpan(tier, index);
  const colSpan = getColSpan(tier, index);

  return (
    <motion.div
      className={`cloud-card cloud-card--${tier}`}
      data-rank={video.rank}
      style={tier !== 'featured' ? {
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      } : undefined}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          delay: index * 0.04,
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
      whileHover={tier !== 'featured' ? { scale: 1.03, zIndex: 10 } : {}}
      onClick={() => tier !== 'featured' ? onDetail(video) : undefined}
    >
      {/* Featured cards get TikTok embed + trending badge */}
      {tier === 'featured' ? (
        <div className="cloud-featured-embed">
          {videoId ? (
            <iframe
              src={`https://www.tiktok.com/player/v1/${videoId}?autoplay=0&loop=1&controls=1`}
              className="cloud-tiktok-iframe"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <div className="cloud-tiktok-placeholder">
              <Play size={32} />
              <span>TikTok unavailable</span>
            </div>
          )}
          <div className="cloud-trending-badge">
            <Flame size={13} />
            <span>#{video.rank} Trending</span>
          </div>
        </div>
      ) : (
        <CloudThumbnail video={video} index={index} />
      )}

      {/* Info overlay */}
      <div className={`cloud-card-info ${tier === 'featured' ? 'cloud-info--featured' : 'cloud-info--hover'}`}>
        <div className="cloud-rank">#{video.rank}</div>
        <h4 className="cloud-title">{video.title}</h4>
        <p className="cloud-creator">{video.creator}</p>
        <div className="cloud-stats">
          <span><Eye size={11} />{video.views}</span>
          <span><Heart size={11} />{video.likes}</span>
        </div>

        {tier === 'featured' && (
          <div className="cloud-featured-actions">
            <button className="btn-secondary cloud-analysis-btn" onClick={(e) => { e.stopPropagation(); onDetail(video); }}>
              <Sparkles size={12} />
              AI Analysis
            </button>
            <button className="btn-primary cloud-use-btn" onClick={(e) => { e.stopPropagation(); onSelect(video); }}>
              <Sparkles size={14} />
              Use This Format
            </button>
          </div>
        )}
      </div>

      {/* Glow for featured cards */}
      {tier === 'featured' && <div className="cloud-card-glow" />}
    </motion.div>
  );
}

function VideoDetailPanel({ video, onClose, onSelect }) {
  return (
    <motion.div
      className="video-detail-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="video-detail-panel glass-panel"
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 40, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="detail-close" onClick={onClose}>
          <X size={18} />
        </button>

        <div className="detail-header">
          <div className="detail-badge">
            <Sparkles size={12} />
            AI Analysis
          </div>
          <h3 className="detail-title">{video.analysis.name}</h3>
          <p className="detail-creator">{video.creator}</p>
        </div>

        <div className="detail-stats">
          <div className="stat"><Eye size={14} />{video.views}</div>
          <div className="stat"><Heart size={14} />{video.likes}</div>
          <div className="stat"><MessageCircle size={14} />{video.comments}</div>
          <div className="stat"><Share2 size={14} />{video.shares}</div>
        </div>

        <div className="detail-sections">
          <div className="detail-section">
            <div className="section-label"><Film size={13} /> Description</div>
            <p>{video.analysis.description}</p>
          </div>
          <div className="detail-section">
            <div className="section-label"><Lightbulb size={13} /> Hook Strategy</div>
            <p>{video.analysis.hook_strategy}</p>
          </div>
          <div className="detail-section">
            <div className="section-label"><Sparkles size={13} /> Content Direction</div>
            <p>{video.analysis.content_analysis}</p>
          </div>
          <div className="detail-section">
            <div className="section-label"><Film size={13} /> Visual Direction</div>
            <p>{video.analysis.visual_direction}</p>
          </div>
          <div className="detail-section">
            <div className="section-label"><Tag size={13} /> Genre / Topic</div>
            <p>{video.analysis.genre_topic}</p>
          </div>
          <div className="detail-section">
            <div className="section-label"><Tag size={13} /> Narrative Style</div>
            <p>{video.analysis.narrative_style}</p>
          </div>
          <div className="detail-section">
            <div className="section-label"><Clock size={13} /> Duration</div>
            <p>{video.analysis.duration_seconds} seconds</p>
          </div>
        </div>

        <button className="btn-primary detail-select" onClick={() => onSelect(video)}>
          <Sparkles size={16} />
          Use This Format
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function TrendingVideos({ onSelectVideo }) {
  const [selectedDetail, setSelectedDetail] = useState(null);

  return (
    <motion.div
      className="trending-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="section-header-left">
          <TrendingUp size={20} className="section-icon" />
          <div>
            <h2 className="section-title">Trending on <span className="gold-gradient-text">#BookTok</span></h2>
            <p className="section-subtitle">Top performing videos analyzed by AI — select one to model your content after</p>
          </div>
        </div>
        <div className="trending-meta">
          <span className="meta-pill">{trendingVideos.length} videos</span>
          <span className="meta-pill">Last 7 days</span>
        </div>
      </motion.div>

      {/* Video Cloud */}
      <div className="video-cloud">
        {trendingVideos.map((video, i) => {
          const tier = getVideoTier(video);
          return (
            <CloudCard
              key={video.id}
              video={video}
              tier={tier}
              index={i}
              onSelect={onSelectVideo}
              onDetail={setSelectedDetail}
            />
          );
        })}
      </div>

      {/* Detail Panel — rendered via portal to escape .main-content stacking context */}
      {createPortal(
        <AnimatePresence>
          {selectedDetail && (
            <VideoDetailPanel
              video={selectedDetail}
              onClose={() => setSelectedDetail(null)}
              onSelect={onSelectVideo}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.div>
  );
}
