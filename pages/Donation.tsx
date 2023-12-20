import React from "react";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";

function Donation() {
  return (
    <div>
     
      <div className="flex items-center justify-center">
        <Image
          src="/Broucher (3).png"
          width={1300}
          height={1000}
          alt="donation"
        />
      </div>
    </div>
  );
}

export default Donation;
