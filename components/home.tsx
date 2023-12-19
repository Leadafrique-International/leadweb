import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Headers";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <Navbar /> */}

      <Hero />
      <Menu />
    </div>
  );
};

export default Home;
