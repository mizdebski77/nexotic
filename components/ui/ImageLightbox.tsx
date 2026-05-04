'use client'
import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface LightboxProps {
  src: string
  alt: string
  onClose: () => void
}

export function ImageLightbox({ src, alt, onClose }: LightboxProps) {
  // Close on Escape key
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[500] flex items-center justify-center p-4 md:p-10"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          aria-label="Zamknij"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Hint */}
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-[12px] z-10">
          Kliknij gdziekolwiek lub naciśnij ESC aby zamknąć
        </p>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
          onClick={e => e.stopPropagation()} // don't close when clicking image
        >
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-full object-contain"
            style={{ maxHeight: '85vh' }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
