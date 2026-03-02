import { motion } from 'framer-motion';
import { RefreshCw, Sun, Moon } from 'lucide-react';
import './Header.css';

export default function Header({ onReset, theme, onToggleTheme }) {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-inner">
        <button className="header-logo" onClick={onReset}>
          <div className="logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3z"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-title">Signal<span className="logo-accent">to</span>Screen</span>
            <span className="logo-subtitle">
              <span className="macmillan-by">by</span>
              <span className="macmillan-name">Macmillan Publishers</span>
            </span>
          </div>
        </button>

        <div className="header-right">
          <div className="header-tag">
            <span className="tag-dot" />
            #BookTok
          </div>
          <div className="header-tag inactive">
            #TBR
          </div>
          <div className="header-tag inactive">
            #bookrecs
          </div>
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="btn-secondary header-reset" onClick={onReset}>
            <RefreshCw size={14} />
            Refresh Data
          </button>
        </div>
      </div>
    </motion.header>
  );
}
