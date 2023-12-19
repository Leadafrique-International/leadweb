import { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/header2";

import "../styles/globals.css";
import "@fontsource/poppins/900.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/100.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="fixed top-0 z-20">
          {" "}
          <Header />
        </div>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
