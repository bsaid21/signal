import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './StepIndicator.css';

export default function StepIndicator({ steps, currentStep }) {
  return (
    <div className="step-indicator">
      <div className="step-indicator-inner">
        {steps.map((step, i) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;
          return (
            <div key={step.id} className="step-item-wrapper">
              {i > 0 && (
                <div className={`step-line ${isCompleted ? 'completed' : ''}`}>
                  <motion.div
                    className="step-line-fill"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isCompleted ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
              )}
              <motion.div
                className={`step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className="step-number">
                  {isCompleted ? <Check size={14} /> : step.id}
                </div>
                <div className="step-text">
                  <span className="step-label">{step.label}</span>
                  <span className="step-sublabel">{step.sublabel}</span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
