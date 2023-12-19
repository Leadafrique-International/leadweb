import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar2 from "@/components/Navbar2";
import Menu from "@/components/Menu";
import Educators from "@/components/educators";

function educators() {
  return (
    <div>
      <Navbar2 />
      <Menu />
      <Educators />
    </div>
  );
}

export default educators;
