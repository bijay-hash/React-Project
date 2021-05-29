import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex h-screen">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ scale: 1.5, opacity: 1, transition: { duration: 2 } }}
        className="m-auto text-3xl"
      >
        Welcome Home
      </motion.h1>
    </div>
  );
}
