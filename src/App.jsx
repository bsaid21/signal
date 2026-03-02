import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import StepIndicator from './components/StepIndicator';
import TrendingVideos from './components/TrendingVideos';
import Configuration from './components/Configuration';
import GeneratedVideo from './components/GeneratedVideo';
import { getDemoVideoById } from './data/demoVideos';
import './App.css';

const STEPS = [
  { id: 1, label: 'Discover', sublabel: 'Trending Videos' },
  { id: 2, label: 'Configure', sublabel: 'Format Specs' },
  { id: 3, label: 'Generate', sublabel: 'AI Video' },
];

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [demoVideo, setDemoVideo] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('signal-theme') || 'dark');

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('signal-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleVideoSelect = useCallback((video) => {
    setSelectedVideo(video);
    // Look up full demo entry if this trending video links to one
    const demo = video.demoId ? getDemoVideoById(video.demoId) : null;
    setDemoVideo(demo);
    setCurrentStep(2);
  }, []);

  const handleGenerate = useCallback(() => {
    setCurrentStep(3);
  }, []);

  const handleReset = useCallback(() => {
    setCurrentStep(1);
    setSelectedVideo(null);
    setDemoVideo(null);
  }, []);

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  return (
    <div className="app">
      <div className="app-bg" />
      <Header onReset={handleReset} theme={theme} onToggleTheme={toggleTheme} />
      <StepIndicator steps={STEPS} currentStep={currentStep} />
      <main className="main-content">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <TrendingVideos
              key="trending"
              onSelectVideo={handleVideoSelect}
            />
          )}
          {currentStep === 2 && (
            <Configuration
              key="config"
              selectedVideo={selectedVideo}
              demoVideo={demoVideo}
              onGenerate={handleGenerate}
              onBack={handleBack}
            />
          )}
          {currentStep === 3 && (
            <GeneratedVideo
              key="generated"
              selectedVideo={selectedVideo}
              demoVideo={demoVideo}
              onReset={handleReset}
              onBack={handleBack}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
