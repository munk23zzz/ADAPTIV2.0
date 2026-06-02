import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#ec4899', '#06b6d4'];

const generateBurst = (count) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `burst-${i}`,
    color: colors[Math.floor(Math.random() * colors.length)],
    x: (Math.random() - 0.5) * 800, // horizontal spread
    y: -400 - Math.random() * 400, // upward force
    duration: 1.5 + Math.random() * 2,
    size: 8 + Math.random() * 8,
    rotation: Math.random() * 720
  }));
};

const generateFalling = (count) => {
  // Use window width if available, otherwise fallback
  const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
  return Array.from({ length: count }).map((_, i) => ({
    id: `fall-${i}-${Date.now()}`,
    color: colors[Math.floor(Math.random() * colors.length)],
    x: Math.random() * width,
    delay: Math.random() * 15, // stagger start times heavily
    duration: 4 + Math.random() * 6,
    size: 6 + Math.random() * 10,
    rotation: Math.random() * 1080
  }));
};

export const BurstConfetti = () => {
  const [burstPieces, setBurstPieces] = useState([]);

  useEffect(() => {
    setBurstPieces(generateBurst(120));
    const t1 = setTimeout(() => {
      setBurstPieces([]);
    }, 4000);
    return () => clearTimeout(t1);
  }, []);

  return (
    <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] pointer-events-none">
      <AnimatePresence>
        {burstPieces.map((p) => (
          <motion.div
            key={p.id}
            className="absolute"
            style={{
              backgroundColor: p.color,
              width: p.size,
              height: p.size,
              borderRadius: Math.random() > 0.5 ? '50%' : '2px'
            }}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
            animate={{ 
              x: p.x, 
              y: p.y, 
              scale: 1, 
              opacity: [1, 1, 1, 0],
              rotate: p.rotation
            }}
            transition={{ duration: p.duration, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export const FallingConfetti = () => {
  const [fallingPieces, setFallingPieces] = useState([]);

  useEffect(() => {
    // Generate only 20 pieces to not make it too crowded
    const t2 = setTimeout(() => {
      setFallingPieces(generateFalling(20));
    }, 1500);
    return () => clearTimeout(t2);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
      {fallingPieces.map((p) => (
        <motion.div
          key={p.id}
          className="absolute -top-[10%]"
          style={{
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            left: p.x
          }}
          initial={{ y: 0, opacity: 0, rotate: 0 }}
          animate={{ 
            y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000, 
            opacity: [0, 1, 1, 0],
            rotate: p.rotation,
            x: p.x + (Math.random() - 0.5) * 300
          }}
          transition={{ 
            duration: p.duration, 
            delay: p.delay, 
            ease: "linear", 
            repeat: Infinity 
          }}
        />
      ))}
      </AnimatePresence>
    </div>
  );
};
