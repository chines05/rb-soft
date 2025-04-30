import React from "react";
import { motion } from "framer-motion";

const VideoModal = ({ video, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video bg-black">
          <video
            src={video?.video}
            className="absolute inset-0 w-full h-full object-contain"
            controls
            autoPlay
            playsInline
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoModal;
