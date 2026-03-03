import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Sparkles, BookOpen } from 'lucide-react';
import { books } from '../data/books';
import './BookPickerModal.css';

function getRecommendedBooks(currentBook, videoGenre) {
  // Extract the primary genre keyword (before any slash)
  const primaryGenre = videoGenre
    ? videoGenre.toLowerCase().split('/')[0].trim()
    : '';

  const matched = [];
  const recommended = [];
  const others = [];

  for (const book of books) {
    if (currentBook && book.id === currentBook.id) {
      matched.push({ ...book, _tier: 'matched' });
    } else if (
      primaryGenre &&
      book.genre.toLowerCase().includes(primaryGenre)
    ) {
      recommended.push({ ...book, _tier: 'recommended' });
    } else {
      others.push({ ...book, _tier: 'other' });
    }
  }

  return [...matched, ...recommended, ...others];
}

export default function BookPickerModal({ currentBook, videoGenre, onSelect, onClose }) {
  const sortedBooks = getRecommendedBooks(currentBook, videoGenre);

  return (
    <motion.div
      className="book-picker-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="book-picker-modal glass-panel"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="book-picker-header">
          <div className="book-picker-title-row">
            <BookOpen size={18} className="book-picker-icon" />
            <h3>Select a Macmillan Book</h3>
          </div>
          <p className="book-picker-subtitle">
            Choose a title to pair with this video format
          </p>
          <button className="book-picker-close" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div className="book-picker-list">
          {sortedBooks.map(book => (
            <button
              key={book.id}
              className={`book-picker-item ${book._tier === 'matched' ? 'book-picker-item--matched' : ''}`}
              onClick={() => onSelect(book)}
            >
              <div className="book-picker-cover" style={{ backgroundColor: book.color }}>
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  onError={e => (e.target.style.display = 'none')}
                />
              </div>

              <div className="book-picker-info">
                <div className="book-picker-badges">
                  {book._tier === 'matched' && (
                    <span className="book-picker-badge book-picker-badge--matched">
                      <Zap size={10} /> Auto-Matched
                    </span>
                  )}
                  {book._tier === 'recommended' && (
                    <span className="book-picker-badge book-picker-badge--rec">
                      <Sparkles size={10} /> Recommended
                    </span>
                  )}
                </div>
                <h4>{book.title}</h4>
                <p className="book-picker-author">{book.author} — {book.imprint}</p>
                <span className="book-picker-genre">{book.genre}</span>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
