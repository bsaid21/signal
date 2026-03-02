import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, Eye, Heart, MessageCircle, Share2,
  Play, ChevronLeft, ChevronRight, Sparkles, X, Clock, Tag, Film, Lightbulb
} from 'lucide-react';
import { trendingVideos } from '../data/trendingVideos';
import './TrendingVideos.css';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Color palette for thumbnail gradients
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

function VideoThumbnail({ video, index, size = 'large' }) {
  const [imgError, setImgError] = useState(false);
  const colors = thumbnailColors[index % thumbnailColors.length];
  const hasThumbnail = video.thumbnail && !imgError;

  return (
    <div
      className={`video-thumbnail ${size}`}
      style={{
        background: hasThumbnail ? '#000' : `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`
      }}
    >
      {hasThumbnail && (
        <img
          src={video.thumbnail}
          alt={video.title}
          className="thumbnail-img"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      )}
      <div className="thumbnail-overlay">
        <Play size={size === 'large' ? 32 : 20} />
      </div>
      <div className="thumbnail-rank">#{video.rank}</div>
      <div className="thumbnail-duration">{video.analysis.duration_seconds}s</div>
    </div>
  );
}

function FeaturedVideoCard({ video, onSelect, onViewAnalysis }) {
  const videoId = getTikTokVideoId(video.tiktokUrl);

  return (
    <motion.div
      className="top-video-card featured-embed"
      variants={cardVariants}
      whileHover={{ y: -4 }}
    >
      {/* TikTok embed */}
      <div className="featured-tiktok-frame">
        {videoId ? (
          <iframe
            src={`https://www.tiktok.com/player/v1/${videoId}?autoplay=0&loop=1&controls=1`}
            className="tiktok-embed-iframe"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div className="featured-tiktok-placeholder">
            <Play size={32} />
            <span>TikTok unavailable</span>
          </div>
        )}
      </div>

      {/* Info + actions */}
      <div className="top-video-info">
        <div className="video-rank-badge">#{video.rank}</div>
        <h4 className="video-title">{video.title}</h4>
        <p className="video-creator">{video.creator}</p>
        <div className="video-stats-row">
          <span><Eye size={12} />{video.views}</span>
          <span><Heart size={12} />{video.likes}</span>
        </div>
        <div className="featured-actions">
          <button className="btn-secondary featured-analysis-btn" onClick={(e) => { e.stopPropagation(); onViewAnalysis(video); }}>
            <Sparkles size={12} />
            AI Analysis
          </button>
          <button className="btn-primary featured-select-btn" onClick={() => onSelect(video)}>
            <Sparkles size={14} />
            Use This Format
          </button>
        </div>
      </div>
      <div className="card-glow" />
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
  const carouselRef = useRef(null);

  const topVideos = trendingVideos.slice(0, 3);
  const restVideos = trendingVideos.slice(3);

  const scrollCarousel = (dir) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * 240, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="trending-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div className="section-header" variants={cardVariants}>
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

      {/* Top 3 Featured Videos — always embedded TikTok players */}
      <motion.div className="top-videos" variants={cardVariants}>
        {topVideos.map((video) => (
          <FeaturedVideoCard
            key={video.id}
            video={video}
            onSelect={onSelectVideo}
            onViewAnalysis={setSelectedDetail}
          />
        ))}
      </motion.div>

      {/* Carousel for remaining videos */}
      {restVideos.length > 0 && (
        <motion.div className="carousel-section" variants={cardVariants}>
          <div className="carousel-header">
            <span className="carousel-label">More Trending</span>
            <div className="carousel-controls">
              <button className="carousel-btn" onClick={() => scrollCarousel(-1)}>
                <ChevronLeft size={16} />
              </button>
              <button className="carousel-btn" onClick={() => scrollCarousel(1)}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="carousel-track" ref={carouselRef}>
            {restVideos.map((video, i) => (
              <motion.div
                key={video.id}
                className="carousel-card"
                whileHover={{ y: -3, scale: 1.02 }}
                onClick={() => setSelectedDetail(video)}
              >
                <VideoThumbnail video={video} index={i + 3} size="small" />
                <div className="carousel-card-info">
                  <span className="carousel-rank">#{video.rank}</span>
                  <h5 className="carousel-title">{video.title}</h5>
                  <p className="carousel-creator">{video.creator}</p>
                  <div className="carousel-stats">
                    <span><Eye size={10} />{video.views}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Detail Panel */}
      <AnimatePresence>
        {selectedDetail && (
          <VideoDetailPanel
            video={selectedDetail}
            onClose={() => setSelectedDetail(null)}
            onSelect={onSelectVideo}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
