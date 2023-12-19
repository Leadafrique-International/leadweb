import styles from "./styles.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../components/common/Magnetic/RoundedButtons";
export default function Index() {
  const phrase =
    "Using the patient and methodical process of farming, LeadAfrique empowers, emboldens and inspires people and businesses to live their fullest, highest selves. Drawing from our Africa Leadership Toolkit (ALT), LeadAfrique will cultivate a cadre of leaders for Africa who will be values-oriented, confident, solutions-oriented, disciplined, orderly and respond to the needs of the people, homes, communities and nations.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={`${styles.description} py-20 `}>
      <div className={`${styles.body} px-10 max-w-[1860px] mx-auto`}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>About me</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
