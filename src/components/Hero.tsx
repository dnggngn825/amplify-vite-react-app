import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__image"
        src={heroImage}
        alt="Minimalist contemporary living room"
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <motion.h2
          className="hero__heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Simplify Your Space.
        </motion.h2>
        <motion.button
          className="hero__cta"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Shop Collection
        </motion.button>
      </div>
    </section>
  );
}
