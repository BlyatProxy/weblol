"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue, AnimatePresence } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.8, 0.95] : [1.1, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative py-20 px-4 md:px-20"
      ref={containerRef}
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false }}
          className="py-12 md:py-24 w-full relative"
          style={{
            perspective: "1500px",
          }}
        >
          <Header translate={translate} titleComponent={titleComponent} />
          <Card rotate={rotate} scale={scale}>
            <div className="relative h-full">
              <div className="h-full w-full overflow-hidden rounded-2xl bg-black backdrop-blur-sm transition-colors duration-500">
                {children}
              </div>

              <motion.img 
                src="/ss.png"
                alt="Draggable 1"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.2}
                whileDrag={{ scale: 1.1 }}
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 0 }}
                transition={{ type: "spring", duration: 1.5 }}
                style={{ 
                  width: "350px",
                  height: "auto",
                  position: "absolute",
                  left: "-150px", 
                  top: "65%",
                  transform: "translateY(-50%)",
                  objectFit: "cover",
                  cursor: "grab",
                  borderRadius: "12px",
                  border: "3px solid rgba(0, 0, 0, 0.9)",
                  boxShadow: "0 0 25px rgba(0, 0, 0, 0.8)"
                }}
              />

              <motion.img
                src="/image4.png"
                alt="Draggable 2"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.2}
                whileDrag={{ scale: 1.1 }}
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 0 }}
                transition={{ type: "spring", duration: 1.5 }}
                style={{
                  width: "350px",
                  height: "auto",
                  position: "absolute",
                  right: "-150px",
                  top: "45%",
                  transform: "translateY(-50%) perspective(500px) rotateY(-15deg)",
                  objectFit: "cover", 
                  cursor: "grab",
                  borderRadius: "12px",
                  border: "3px solid rgba(0, 0, 0, 0.9)",
                  boxShadow: "0 0 25px rgba(0, 0, 0, 0.8)"
                }}
              />
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
      viewport={{ once: false }}
      style={{
        translateY: translate,
      }}
      className="max-w-6xl mx-auto text-center mb-12"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 0 2px rgba(0, 0, 0, 0.3), 0 10px 25px -5px rgba(0,0,0,0.8), 0 30px 50px -10px rgba(0,0,0,0.7)",
      }}
      className="max-w-6xl -mt-8 mx-auto h-[35rem] md:h-[45rem] w-full border border-black p-3 md:p-8 bg-gradient-to-b from-black to-black rounded-3xl backdrop-blur-sm"
    >
      {children}
    </motion.div>
  );
};
