// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FiFacebook } from "react-icons/fi";
// import { AiOutlineInstagram, AiFillPhone, AiOutlineMail } from "react-icons/ai";
// import { AiOutlineLinkedin } from "react-icons/ai";
// import { AiOutlineTwitter } from "react-icons/ai";

// function Footer() {
//   return (
//     <div className="bg-[rgba(124,62,146)] ">
//       <div className="max-w-7xl lg:flex  items-center justify-center mx-auto md:px-10 pb-[120px]  md:pb-[100px] md:pt-[50px] gap-10 xl:px-56 lg:px-36 2xl:px-10">
//         <div className="flex justify-center lg:block ">
//           <Image
//             width={100}
//             height={100}
//             className="py-5 w-[50px] h-[100px] lg:w-[] lg:h-[] "
//             src="/logo.webp"
//             alt=""
//           />
//         </div>
//         <div className="lg:flex items-center justify-between w-[100%]">
//           <div>
//             <div className="flex justify-center items-center md:p-1 pl-5 md:pt-5 -ml-[35px]">
//               <AiFillPhone className="text-3xl text-white" />
//               <h1 className="font-font md:text-[15px] text-[10px] text-white">
//                 +233 24 423 5549{" "}
//               </h1>
//             </div>
//             <div className="flex justify-center items-center md:p-1 pl-5  gap-2">
//               <AiOutlineMail className="text-3xl text-white" />
//               <h1 className="font-font  md:text-[15px] text-[10px] text-white">
//                 letitia@leadafrique.org
//               </h1>
//             </div>
//           </div>
//           <div className="flex  lg:block justify-center">
//             <div>
//               <h1 className=" font-font font-normal   pl-5   md:text-[15px] text-[10px] text-white pt-5">
//                 Connect with us
//               </h1>
//               <div className="flex md:p-1 lg:pl-5 lg:justify-center pt-2">
//                 <Link
//                   href="https://facebook.com/leadafriqueinternational"
//                   target="_blank"
//                 >
//                   <FiFacebook className="text-3xl text-white hover:text-black" />
//                 </Link>

//                 <Link href="https://www.instagram.com/leadafrique/">
//                   <AiOutlineInstagram
//                     className="text-3xl text-white hover:text-black"
//                     target="_blank"
//                   />
//                 </Link>

//                 <Link
//                   href="https://www.linkedin.com/company/leadafrique-internatonal/"
//                   target="_blank"
//                 >
//                   <AiOutlineLinkedin className="text-3xl text-white hover:text-black" />{" "}
//                 </Link>

//                 <Link href="https://twitter.com/LeadAfrique" target="_blank">
//                   <AiOutlineTwitter className="text-3xl text-white hover:text-black" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="pb-7 pl-1 pt-5">
//             <h1 className=" font-font  lg:text-[15px] text-[10px] text-white text-center">
//               Want a One on One?
//             </h1>
//             <Link href="/contact">
//               <p className=" font-font hover:underline  md:text-[15px] text-[10px] text-white text-center">
//                 Click here
//               </p>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black h-[800px] relative">
      <div className="max-w-[1320px] mx-auto px-10 pt-20 font-font">
        <div className="flex items-center gap-4 text-white">
          <div>
            <Image
              src="/logo.webp"
              width={70}
              height={70}
              alt=""
              className="lg:w-[60px] lg:h-[70px] w-[40px] h-[50px]"
            />
          </div>
          <div>
            <h1 className="lg:text-8xl md:text-6xl text-4xl">Let Us Work</h1>
          </div>
        </div>
        <h1 className="lg:text-8xl md:text-6xl text-4xl text-white">
          {" "}
          together
        </h1>
        <div className="py-20">
          <hr />
        </div>
        <div className="md:flex items-center gap-5 pb-10">
          <div className="border-white cursor-pointer flex md:text-xl text-sm justify-center items-center text-white  border rounded-[100px] md:p-8 p-5">
            letitia@leadafrique.org
          </div>
          <div className="border-white mt-5 md:mt-0 cursor-pointer flex md:text-xl text-sm justify-center items-center text-white  border rounded-[100px] md:p-8 p-5">
            +233 24 423 5549
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col font-font justify-between px-10 pt-10">
        <div>
          <h1 className="text-white text-[16px]">Leadafrique@2023</h1>{" "}
        </div>
        <div className="flex space-x-3 items-center pt-10 md:pt-0 text-white font-font flex-wrap">
          <h1 className="text-purple-500">Follow Us |</h1>
          <Link href="https://www.instagram.com/leadafrique/" target="_blank">
            <h1 className="hover:text-purple-500 duration-200">Instagram</h1>
          </Link>
          <Link
            href="https://web.facebook.com/leadafriqueinternational?_rdc=1&_rdr"
            target="_blank"
          >
            <h1 className="hover:text-purple-500 duration-200">Facebook</h1>
          </Link>
          <Link href="https://x.com/LeadAfrique?s=20" target="_blank">
            <h1 className="hover:text-purple-500 duration-200 text-2xl"> 𝕏</h1>
          </Link>
          <Link
            href="https://www.linkedin.com/company/leadafrique-internatonal/"
            target="_blanks"
          >
            <h1 className="hover:text-purple-500 duration-200">LinkedIn</h1>
          </Link>
          <Link href="">
            <h1 className="hover:text-purple-500 duration-200">Tiktok</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
