// components/AnimatedText.tsx
import React from "react";
import { motion } from "framer-motion";

const AnimatedText: React.FC = () => {
  return (
    <div className="">
      {" "}
      <motion.div className="lg:text-2xl text-sm">
        <p className="md:text-left text-center">
          Using the patient and methodical process of farming, LeadAfrique
          empowers, emboldens and inspires people and businesses to live their
          fullest, highest selves. Drawing from our Africa Leadership Toolkit
          (ALT), LeadAfrique will cultivate a cadre of leaders for Africa who
          will be values-oriented, confident, solutions-oriented, disciplined,
          orderly and respond to the needs of the people, homes, communities,
          and nations.
        </p>
      </motion.div>
    </div>
  );
};

export default AnimatedText;
