import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './VideoModal.css';

export const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <AnimatePresence>
      <div className="video-modal-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="video-modal-dialog"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="video-modal-close" onClick={onClose} aria-label="Close Video">
            <X size={20} />
          </button>

          <div className="video-modal-iframe-wrap">
            <iframe
              src={`${video.videoUrl}?autoplay=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            />
          </div>

          <div className="video-modal-meta">
            <span className="video-modal-business">{video.business}</span>
            <h4 className="video-modal-title">{video.title}</h4>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
