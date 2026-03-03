import { motion } from 'framer-motion';
import { TrendingUp, Sparkles } from 'lucide-react';
import './WorkflowTabs.css';

const tabs = [
  { id: 'trend', label: 'Trend Replication', icon: TrendingUp },
  { id: 'prompt', label: 'Original Prompt', icon: Sparkles },
];

export default function WorkflowTabs({ activeWorkflow, onSwitch }) {
  return (
    <div className="workflow-tabs">
      <div className="workflow-tabs-inner">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeWorkflow === tab.id;
          return (
            <button
              key={tab.id}
              className={`workflow-tab ${isActive ? 'active' : ''}`}
              onClick={() => onSwitch(tab.id)}
            >
              <Icon size={15} />
              <span>{tab.label}</span>
              {isActive && (
                <motion.div
                  className="tab-underline"
                  layoutId="tab-underline"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
