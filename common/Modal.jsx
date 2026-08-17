import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Modal = ({ isOpen, onClose, title, children, maxWidth = "max-w-lg" }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#21191A]/60 backdrop-blur-sm transition-opacity"
        />

        {/* Dialog Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`relative w-full ${maxWidth} bg-white rounded-2xl shadow-2xl border border-[#8B1020]/10 overflow-hidden z-10 my-8`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#8B1020]/10 bg-[#FFF9F7]">
            <h3 className="text-lg font-bold text-[#21191A]">{title}</h3>
            <button
              onClick={onClose}
              className="p-1.5 text-[#625557] hover:text-[#8B1020] hover:bg-[#FFF4F2] rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
