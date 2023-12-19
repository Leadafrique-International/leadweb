// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { motion, Variants } from "framer-motion";
// import { useEffect } from "react";

// function Navbar() {
//   useEffect(() => {
//     let handler = () => {
//       setOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//   });
//   useEffect(() => {
//     let handler1 = () => {
//       setOpen1(false);
//     };
//     document.addEventListener("mousedown", handler1);
//   });

//   const router = useRouter();
//   const [open, setOpen] = useState(false);
//   const [open1, setOpen1] = useState(false);
//   return (
//     <div>
//       <div className="absolute  top-[0] left-[0] w-full lg:px-16 lg:py-1 px-8 py-2 bg-white hidden md:block border-b-purple-500 border z-10">
//         <div className="flex items-center justify-between  ">
//           <Link href="/">
//             <div className="">
//               <Image
//                 width={50}
//                 height={50}
//                 className="xl:w-20 xl:h-24 w-14 h-16"
//                 src="/logo.webp"
//                 alt=""
//               />
//             </div>
//           </Link>
//           <div className="text-black font-font text-sm 2xl:text-xl xl:space-x-10 space-x-5 hidden  md:flex">
//             <Link href="/about-us">
//               <h1
//                 className={
//                   router.pathname === "/about"
//                     ? "text-purple-500"
//                     : "hover:text-purple-500 transition transform duration-200 ease-in-out"
//                 }
//               >
//                 About Us
//               </h1>
//             </Link>
//             {/* <Link href="">
//               <h1
//                 className={
//                   router.pathname === "/programs"
//                     ? "text-purple-500"
//                     : "hover:text-purple-500 transition transform duration-200 ease-in-out"
//                 }
//               >
//                 Programs
//               </h1>
//             </Link> */}
//             <div className="menu-container">
//               <div
//                 className="menu-trigger "
//                 onClick={() => {
//                   setOpen(!open);
//                 }}
//               >
//                 <h1
//                   className={`font-font cursor-pointer ${
//                     open
//                       ? "text-purple-500"
//                       : "hover:text-purple-500 transition transform duration-200 ease-in-out"
//                   }`}
//                 >
//                   Programs
//                 </h1>
//               </div>
//               <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
//                 <ul>
//                   <li>
//                     <Link
//                       href="/future"
//                       className="flex p-2 -ml-10  gap-5 items-center justify-center hover:-ml-0 transform duration-200 ease-in-out"
//                     >
//                       {/* <img
//                         className="w-10 h-10"
//                         src="/icons8-teenager-male-50.png"
//                         alt=""
//                       /> */}

//                       <p className="text-[15px]">Be future Ready</p>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/gyla"
//                       className="flex p-2  gap-5 items-center justify-center hover:ml-8 transform duration-200 ease-in-out"
//                     >
//                       {/* <img
//                         className="w-10 h-10"
//                         src="/icons8-teenager-male-50.png"
//                         alt=""
//                       /> */}

//                       <p className="text-[15px]">
//                         Ghana Youth <br /> Leadership Academy
//                       </p>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/youngpeople"
//                       className="flex p-2  gap-5 items-center justify-center hover:ml-8 transform duration-200 ease-in-out"
//                     >
//                       <Image
//                         width={50}
//                         height={50}
//                         className="w-10 h-10"
//                         src="/icons8-teenager-male-50.png"
//                         alt=""
//                       />

//                       <p className="text-[15px]">Young People</p>
//                     </Link>
//                   </li>
//                   <li className="">
//                     <Link
//                       href="/parents"
//                       className="flex p-2 -ml-8   gap-5 items-center justify-center hover:-ml-0 transform duration-200 ease-in-out"
//                     >
//                       <Image
//                         width={50}
//                         height={50}
//                         className="w-10 h-10"
//                         src="/icons8-family-50.png"
//                         alt=""
//                       />

//                       <p className="text-[15px]">Parenting</p>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/educators"
//                       className="flex p-2 -ml-8   gap-5 items-center justify-center hover:-ml-0 transform duration-200 ease-in-out"
//                     >
//                       <Image
//                         width={50}
//                         height={50}
//                         className="w-10 h-10"
//                         src="/icons8-student-center-50.png"
//                         alt=""
//                       />

//                       <p className="text-[15px]">Educators</p>
//                     </Link>
//                   </li>

//                   <li>
//                     <Link
//                       href="/corporate"
//                       className="flex p-2 ml-2   gap-5 items-center justify-center hover:ml-8 transform duration-200 ease-in-out"
//                     >
//                       <Image
//                         width={50}
//                         height={50}
//                         className="w-10 h-10"
//                         src="/icons8-manager-50.png"
//                         alt=""
//                       />

//                       <p className="text-[15px]">Corp. Executive</p>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <Link href="/gallery">
//               <h1
//                 className={
//                   router.pathname === "/gallery"
//                     ? "text-purple-500"
//                     : "hover:text-purple-500 transition transform duration-200 ease-in-out"
//                 }
//               >
//                 Gallery
//               </h1>
//             </Link>
//             <div className="menu-container1">
//               <div
//                 className="menu-trigger1 "
//                 onClick={() => {
//                   setOpen1(!open1);
//                 }}
//               >
//                 <h1
//                   className={`font-font cursor-pointer ${
//                     open1
//                       ? "text-purple-500"
//                       : "hover:text-purple-500 transition transform duration-200 ease-in-out"
//                   }`}
//                 >
//                   Resources
//                 </h1>
//               </div>
//               <div
//                 className={`dropdown-menu1 ${open1 ? "active1" : "inactive1"}`}
//               >
//                 <ul>
//                   <li>
//                     <Link
//                       href="/future"
//                       className="flex p-2 -ml-10  gap-5 items-center justify-center hover:-ml-0 transform duration-200 ease-in-out"
//                     >
//                       {/* <img
//                         className="w-10 h-10"
//                         src="/icons8-teenager-male-50.png"
//                         alt=""
//                       /> */}

//                       <p className="text-[15px]"></p>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/gyla"
//                       className="flex p-2  gap-5 items-center justify-center hover:ml-8 transform duration-200 ease-in-out"
//                     ></Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/youngresources"
//                       className="flex p-2  gap-5 items-center justify-center hover:ml-8 transform duration-200 ease-in-out"
//                     >
//                       <Image
//                         width={50}
//                         height={50}
//                         className="w-10 h-10"
//                         src="/icons8-teenager-male-50.png"
//                         alt=""
//                       />

//                       <p className="text-[15px]">Young People</p>
//                     </Link>
//                   </li>
//                   <li className="">
//                     <Link
//                       href="/parents"
//                       className="flex p-2 -ml-8   gap-5 items-center justify-center hover:-ml-0 transform duration-200 ease-in-out"
//                     >
//                       <Image
//                         width={50}
//                         height={50}
//                         className="w-10 h-10"
//                         src="/icons8-family-50.png"
//                         alt=""
//                       />

//                       <p className="text-[15px]">Parenting</p>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/educators"
//                       className="flex p-2 -ml-8   gap-5 items-center justify-center hover:-ml-0 transform duration-200 ease-in-out"
//                     >
//                       <Image
//                         width={50}
//                         height={50}
//                         className="w-10 h-10"
//                         src="/icons8-student-center-50.png"
//                         alt=""
//                       />

//                       <p className="text-[15px]">Impact Report</p>
//                     </Link>
//                   </li>

//                   <li>
//                     <Link
//                       href="/corporate"
//                       className="flex p-2 ml-2   gap-5 items-center justify-center hover:ml-8 transform duration-200 ease-in-out"
//                     >
//                       <Image
//                         width={50}
//                         height={50}
//                         className="w-10 h-10"
//                         src="/icons8-manager-50.png"
//                         alt=""
//                       />

//                       <p className="text-[15px]">Corp. Executive</p>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <Link href="https://leadafriqueblog.vercel.app/" target={"_blank"}>
//               <h1 className="hover:text-purple-500 transition transform duration-200 ease-in-out">
//                 Blog & News
//               </h1>
//             </Link>
//           </div>
//           <div className="text-black font-font text-sm xl:text-xl border border-black font-semibold px-5 py-2 hover:bg-purple-500 transition transform duration-200 ease-in-out hidden md:flex">
//             <Link href="/contact">
//               <h1>Contact</h1>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-0 md:hidden px-8 py-2 flex justify-between w-full items-center z-10">
//         <Link href="/">
//           <Image
//             width={100}
//             height={100}
//             className="xl:w-20 xl:h-24 w-14 h-16"
//             src="/logo.webp"
//             alt=""
//           />
//         </Link>
//         <Link href="/contact">
//           <h1 className="text-white border px-4 py-2 hover:bg-purple-500 transition transform duration-200 ease-in-out">
//             Contact
//           </h1>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React from "react";

function Navbar() {
  return <div>Navbar</div>;
}

export default Navbar;
