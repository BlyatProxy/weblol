"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import WordPullUp from "@/components/ui/word-pull-up";
import { motion } from "framer-motion";

function Title() {
  return (
    <div className="space-y-8">
      <div className="relative rounded-3xl p-10 overflow-hidden bg-gradient-to-br from-[#0A0F1C] via-[#111827] to-[#0A0F1C] border border-indigo-500/20 shadow-[0_0_80px_rgba(79,70,229,0.15)]">
        {/* Animated background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(79,70,229,0.15),transparent_70%)] animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_50%)] animate-[pulse_7s_ease-in-out_infinite]" />
        </div>

        {/* Enhanced floating particles with varied sizes and colors */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: `rgba(${
                  [
                    '147, 51, 234',  // Purple
                    '59, 130, 246',   // Blue
                    '79, 70, 229',    // Indigo
                    '236, 72, 153'    // Pink
                  ][Math.floor(Math.random() * 4)]
                }, ${Math.random() * 0.5 + 0.3})`,
                filter: 'blur(1px)',
                boxShadow: '0 0 8px currentColor',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [
                  0,
                  Math.random() * 100 - 50,
                  Math.random() * -100 + 50,
                  0
                ],
                y: [
                  0,
                  Math.random() * 100 - 50,
                  Math.random() * -100 + 50,
                  0
                ],
                scale: [
                  1,
                  Math.random() + 1.5,
                  Math.random() + 0.5,
                  1
                ],
                opacity: [0.8, 0.6, 0.4, 0.8]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative flex flex-col items-center justify-center text-center space-y-10">
          {/* Logo + Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="group bg-gradient-to-br from-[#0F1729]/90 to-[#1E293B]/80 p-6 rounded-2xl border border-indigo-400/10 hover:border-indigo-400/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(79,70,229,0.15)]"
          >
            <motion.div 
              className="flex items-center gap-5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 0.95, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full animate-pulse" />
                <svg
                  width="56" 
                  height="56"
                  viewBox="0 0 24 24"
                  className="text-indigo-400 relative z-10 drop-shadow-[0_0_6px_rgba(79,70,229,0.4)]"
                  fill="currentColor"
                >
                  <path d="M1 12.5h2.75c1.43-1.43 5.08-4.26 5.69-4.83 1-1 2.88-1 4.51.51.29.29.57.57.82.85l-2.34-7.53h2.5l4.27 10.58c1.12 1.12 2.35 2.35 3.45 3.45.44.43.96.61 1.35.61v2c-.81 0-1.73-.32-2.41-1l-3.43-3.43c-.23.24-.44.47-.65.68-1.03 1.02-2.05 2.05-3.07 3.07l-2.85-2.85c-.27.31-.52.58-.79.85-.37.37-1.06.85-1.91.85H1v-3.81zm11.45.55l2.76 2.76c.66-.66 1.32-1.32 1.98-1.98.66-.66 1.32-1.32 1.98-1.98l-3.45-8.54-1.5 4.83c.52.52 1.06 1.06 1.6 1.6l-1.69 1.69c-.34-.34-.69-.69-1.03-1.03-.5-.5-1.01-1.01-1.51-1.51l-.14.16z"/>
                </svg>
              </motion.div>

              <WordPullUp
                className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-500 drop-shadow-[0_0_12px_rgba(79,70,229,0.3)] md:text-7xl"
                words="Wave Proxy"
              />
            </motion.div>
          </motion.div>

          {/* Description Cards */}
          <div className="space-y-4 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="group bg-gradient-to-br from-[#0F1729]/90 to-[#1E293B]/80 p-5 rounded-xl border border-indigo-400/10 hover:border-indigo-400/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(79,70,229,0.15)]"
            >
              <WordPullUp
                className="text-xl font-bold text-indigo-100 md:text-2xl"
                words="Advanced Growtopia Proxy for Casino & Daily Activities"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
              className="group bg-gradient-to-br from-[#0F1729]/90 to-[#1E293B]/80 p-4 rounded-xl border border-indigo-400/10 hover:border-indigo-400/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(79,70,229,0.15)]"
            >
              <WordPullUp
                className="text-lg font-semibold text-indigo-200 md:text-xl"
                words="Compatible with Swiftix - Free Mod Menu"
              />
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <motion.a
                href="https://dsc.gg/waveproxy"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium rounded-lg shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord
              </motion.a>

              <motion.a
                href="https://www.mediafire.com/file/iwhnkss9oo8w5ay/Swiftix_%252B%252B.zip/file"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-700 to-indigo-800 hover:from-indigo-600 hover:to-indigo-700 text-white font-medium rounded-lg shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Swiftix
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoSection() {
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/xSpZEsx8jSQ?vq=hd1080&autoplay=1&mute=0&modestbranding=1&rel=0&controls=1&showinfo=0&playsinline=1"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="mx-auto rounded-2xl"
    ></iframe>
  );
}



import { GlareCard } from "@/components/ui/glare-card";

function WhyUsSection() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">
      {/* Smoother animated glowing particles */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="absolute w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false }}
              className="absolute rounded-full animate-pulse"
              style={{
                width: Math.random() * 6 + 3 + "px",
                height: Math.random() * 6 + 3 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                background: `radial-gradient(circle at center, ${
                  ['rgba(147,51,234,0.4)', 'rgba(59,130,246,0.4)', 'rgba(16,185,129,0.4)'][
                    Math.floor(Math.random() * 3)
                  ]
                } 0%, transparent 80%)`,
                filter: 'blur(1px)',
                boxShadow: `0 0 15px ${
                  ['rgba(147,51,234,0.6)', 'rgba(59,130,246,0.6)', 'rgba(16,185,129,0.6)'][
                    Math.floor(Math.random() * 3)
                  ]
                }`,
                animation: `floatSmooth ${Math.random() * 12 + 8}s ease-in-out infinite`,
                animationDelay: `-${Math.random() * 8}s`,
                transform: `scale(${Math.random() * 1.5 + 1})`
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Smoother animated stars */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
              viewport={{ once: false }}
              className="absolute"
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `twinkleSmooth ${Math.random() * 4 + 3}s ease-in-out infinite`,
                animationDelay: `-${Math.random() * 4}s`
              }}
            >
              <svg 
                className="w-3 h-3 text-white/40" 
                viewBox="0 0 24 24"
                style={{
                  filter: 'blur(0.5px) drop-shadow(0 0 3px rgba(255,255,255,0.5))'
                }}
              >
                <path
                  fill="currentColor"
                  d="M12 1l3 6.3 7 1-5 4.8 1.2 7-6.2-3.3L5.8 20 7 13.1 2 8.3l7-1z"
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="relative text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <div className="inline-block">
          <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 mb-4 [text-shadow:0_0_30px_rgba(168,85,247,0.4)]">
            Why Choose Wave Proxy?
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="group"
        >
          <GlareCard className="relative flex flex-col items-start p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 group-hover:border-purple-500/50 transition-all duration-500 hover:scale-105 overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg
              className="h-16 w-16 text-purple-400 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out [filter:drop-shadow(0_0_8px_rgba(168,85,247,0.4))]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors duration-500 [text-shadow:0_0_15px_rgba(168,85,247,0.4)]">Industry Leader</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-500">
              Dominating the Growtopia proxy scene with cutting-edge features and unmatched reliability. Join thousands of satisfied users today!
            </p>
          </GlareCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false }}
          className="group"
        >
          <GlareCard className="relative flex flex-col items-start p-8 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 group-hover:border-blue-500/50 transition-all duration-500 hover:scale-105 overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg
              className="h-16 w-16 text-blue-400 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out [filter:drop-shadow(0_0_8px_rgba(59,130,246,0.4))]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors duration-500 [text-shadow:0_0_15px_rgba(59,130,246,0.4)]">Advanced Controls</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-500">
              Take full command with our comprehensive settings panel. Fine-tune every aspect of your proxy experience for optimal performance.
            </p>
          </GlareCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: false }}
          className="group"
        >
          <GlareCard className="relative flex flex-col items-start p-8 rounded-2xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border border-white/10 group-hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 overflow-hidden shadow-[0_0_25px_rgba(16,185,129,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg
              className="h-16 w-16 text-emerald-400 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out [filter:drop-shadow(0_0_8px_rgba(16,185,129,0.4))]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-emerald-300 mb-2 group-hover:text-emerald-200 transition-colors duration-500 [text-shadow:0_0_15px_rgba(16,185,129,0.4)]">Maximum Compatibility</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-500">
              Seamlessly works with all major clients including REME, LEME, QQ, and BTK. Your perfect gaming companion, guaranteed.
            </p>
          </GlareCard>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes floatSmooth {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(15px, 15px) rotate(90deg) scale(1.1); }
          50% { transform: translate(25px, 25px) rotate(180deg) scale(1); }
          75% { transform: translate(15px, 15px) rotate(270deg) scale(1.1); }
          100% { transform: translate(0, 0) rotate(360deg) scale(1); }
        }
        @keyframes twinkleSmooth {
          0% { opacity: 0.2; transform: scale(0.8) rotate(0deg); }
          25% { opacity: 0.6; transform: scale(1.1) rotate(90deg); }
          50% { opacity: 1; transform: scale(1.3) rotate(180deg); }
          75% { opacity: 0.6; transform: scale(1.1) rotate(270deg); }
          100% { opacity: 0.2; transform: scale(0.8) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function CommandProxySection() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-32 mt-8 flex flex-col items-center">
      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.1) 0%, transparent 50%)'}}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                background: 'rgb(34,211,238)',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `floatParticle ${Math.random() * 3 + 2}s linear infinite`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative">
        <h2 className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="relative block text-xl font-medium text-cyan-400 mb-6 [text-shadow:0_0_15px_rgba(34,211,238,0.5)]"
          >
            
            <div className="absolute -inset-x-4 -inset-y-2 bg-cyan-500/10 blur-xl rounded-lg" />
          </motion.span>
          <motion.div 
        className="relative text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <div className="inline-block">
          <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 mb-4 [text-shadow:0_0_30px_rgba(168,85,247,0.4)]">
            Premium Commands
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
        </div>
      </motion.div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Effects & Features",
              icon: "✨",
              gradient: "from-pink-500 to-rose-500",
              items: [
                "Show Green Box Particle Effect",
                "Show Star Particle Effect", 
                "Show Red Geiger Effect",
                "Webhook BTK",
                "Webhook Fake Spin",
                "Check Lock Feature"
              ]
            },
            {
              title: "Game Commands",
              icon: "🎮",
              gradient: "from-blue-500 to-cyan-500",
              items: [
                "/config - Configure settings, effects & BTK log",
                "/btk - Dialog BTK",
                "/blacks - Convert BGL to Black",
                "/blue - Convert Black to BGL",
                "/windah - World attendance",
                "/emojichat - Colorful emoji chat",
                "/ctext - Toggle colorful text",
                "/reme - Spin REME",
                "/qq - Spin QQ",
                "/allspin - Spin REME, CSN, QQ"
              ]
            },
            {
              title: "Utility Commands",
              icon: "🛠",
              gradient: "from-amber-500 to-orange-500",
              items: [
                "/ds - Drop Arroz",
                "/dc - Drop Clover", 
                "/modal - Show modal",
                "/tele - Telephone Post",
                "/tax - Set Tax",
                "/save - Save BTK post & settings",
                "/load - Load BTK post & settings",
                "/cd - Custom Drop"
              ]
            },
            {
              title: "Game Settings",
              icon: "⚙️",
              gradient: "from-emerald-500 to-teal-500",
              items: [
                "/s1, /s2 - Set Gems 1/2",
                "/ws1, /ws2 - Set Win 1/2",
                "/aw - Auto Drop Winner + Tax",
                "/pc - Auto Put Chand",
                "/tp - Collect & Show Bets",
                "/ca - Auto Scan/Drop/Put Chand"
              ]
            },
            {
              title: "Drop Commands",
              icon: "💎",
              gradient: "from-violet-500 to-purple-500",
              items: [
                "/dw, /wl - Drop WL",
                "/dd, /dl - Drop DL",
                "/db, /bgl - Drop BGL", 
                "/dbb, /black - Drop Black GL",
                "/daw - Drop ALL LOCK",
                "/split - Split Lock in 2"
              ]
            },
            {
              title: "Shortcuts Commands", 
              icon: "⚡",
              gradient: "from-red-500 to-pink-500",
              items: [
                "/ap - Auto Pull Wrench",
                "/ak - Auto Kick Wrench",
                "/ab - Auto Ban Wrench",
                "/dp - Deposit BGL",
                "/wd - Withdraw BGL",
                "/relog - Relog",
                "/w \"world\" - Warp shortcut",
                "/p \"name\" - Pull shortcut",
                "/k \"name\" - Kick shortcut",
                "/wt \"name\" - Mod warpto",
                "/res - Respawn"
              ]
            }
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false }}
              className="group"
            >
              <div className={`relative h-full p-8 rounded-xl bg-gray-900/90 backdrop-blur-sm border border-gray-800
                hover:border-gray-700 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl 
                hover:shadow-${section.gradient.split(' ')[1]}/20 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${section.gradient} bg-opacity-10 mb-6`}>
                    <span className="text-2xl">{section.icon}</span>
                    <h3 className="text-lg font-bold text-white">
                      {section.title}
                    </h3>
                  </div>
                </div>

                <ul className="relative space-y-3 text-gray-300 text-sm">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center group/item">
                      <span className={`w-6 h-6 mr-3 flex items-center justify-center rounded-full bg-gradient-to-r ${section.gradient} bg-opacity-20 
                        group-hover/item:scale-110 transition-all duration-300`}>
                        <span className="text-white text-xs">›</span>
                      </span>
                      <span className="group-hover/item:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}


export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-b from-black via-blue-950/90 to-black">
      <ContainerScroll titleComponent={<Title />}>
        <VideoSection />
      </ContainerScroll>
      <WhyUsSection />
      <CommandProxySection />
    </div>
  );
}
