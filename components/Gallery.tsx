import React, { useState } from "react";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoFilterOutline } from "react-icons/io5";
import { IoMdDoneAll } from "react-icons/io";

import { motion } from "framer-motion";
// import img7 from "../public/gyla.jpg";
// import img8 from "../public/gyla22.jpg";
import img9 from "../public/gyla (1).webp";
import img10 from "../public/gyla (4).webp";
import img11 from "../public/gyla (5).webp";
import img12 from "../public/gyla (6).webp";
import img13 from "../public/gyla (7).webp";
import img14 from "../public/gyla (8).webp";
import img15 from "../public/gyla (9).webp";
import img16 from "../public/gyla (10).webp";
import img17 from "../public/gyla (11).webp";
import img18 from "../public/gyla (12).webp";
import img19 from "../public/gyla (13).webp";
import img20 from "../public/gyla (14).webp";
import img21 from "../public/gyla (15).webp";
import img22 from "../public/gyla (16).webp";
import img23 from "../public/gyla (17).webp";
import img24 from "../public/gyla (18).webp";
import img25 from "../public/gyla (19).webp";
import img26 from "../public/gyla (20).webp";
import img27 from "../public/gyla (21).webp";
import img28 from "../public/gyla (22).webp";
import img29 from "../public/gyla (23).webp";
import img30 from "../public/gyla (24).webp";
import img31 from "../public/gyla (25).webp";
import img32 from "../public/gyla (26).webp";
import img33 from "../public/gyla (27).webp";
import img34 from "../public/gyla (28).webp";
import img35 from "../public/gyla (29).webp";
import img36 from "../public/gyla (30).webp";
import img37 from "../public/gyla (31).webp";
import img38 from "../public/gyla (32).webp";
import img39 from "../public/gyla (33).webp";
import img40 from "../public/gyla (34).webp";
import img41 from "../public/gyla (35).webp";
// import img42 from "../public/gyla (78).webp";
import img43 from "../public/gyla (37).webp";
import img44 from "../public/gyla (38).webp";
import img45 from "../public/gyla (39).webp";
// import img46 from "../public/gyla (40).jpg";
// import img101 from "../public/gyla (53).jpg";
// import img102 from "../public/gyla (54).jpg";
// import img103 from "../public/gyla (55).jpg";
// import img104 from "../public/gyla (56).jpg";
// import img105 from "../public/gyla (57).jpg";
import img106 from "../public/gyla (58).webp";
import img107 from "../public/gyla (59).webp";
import img108 from "../public/gyla (60).webp";
// import img47 from "../public/camp (1).jpg";
import img48 from "../public/camp (4).webp";
import img49 from "../public/camp (5).webp";
import img50 from "../public/camp (6).webp";
import img51 from "../public/camp (7).webp";
import img52 from "../public/camp (8).webp";
import img53 from "../public/camp (9).webp";
import img55 from "../public/camp (11).webp";
import img56 from "../public/camp (12).webp";
import img57 from "../public/camp (13).webp";
import img58 from "../public/camp (14).webp";
import img59 from "../public/camp (15).webp";
import img60 from "../public/camp (16).webp";
import img61 from "../public/camp (17).webp";
import img62 from "../public/camp (18).webp";
import img63 from "../public/camp (19).webp";
import img64 from "../public/camp (20).webp";
import img65 from "../public/camp (21).webp";
import img66 from "../public/camp (22).webp";
import img67 from "../public/camp (23).webp";
import img68 from "../public/camp (24).webp";
import img69 from "../public/camp (25).webp";
import img70 from "../public/camp (26).webp";
import img71 from "../public/camp (27).webp";
import img72 from "../public/camp (28).webp";
import img73 from "../public/camp (29).webp";
import img74 from "../public/camp (30).webp";
import img75 from "../public/camp (31).webp";
import img76 from "../public/camp (32).webp";
import img77 from "../public/camp (33).webp";
import img78 from "../public/camp (34).webp";
import img79 from "../public/camp (35).webp";
import img80 from "../public/camp (36).webp";
import img81 from "../public/camp (37).webp";
import img82 from "../public/camp (38).webp";
import img83 from "../public/camp (39).webp";
import img84 from "../public/gyla (40).webp";
import img85 from "../public/camp (25).webp";
import img86 from "../public/camp (26).webp";
import img87 from "../public/camp (27).webp";
import img88 from "../public/camp (28).webp";
import img89 from "../public/camp (29).webp";
import img91 from "../public/camp (31).webp";
import img92 from "../public/camp (32).webp";
import img93 from "../public/camp (33).webp";
import img94 from "../public/camp (34).webp";
import img95 from "../public/camp (35).webp";
import img96 from "../public/camp (36).webp";
import img97 from "../public/camp (37).webp";
import img98 from "../public/camp (38).webp";
import img99 from "../public/camp (39).webp";
// import img100 from "../public/gyla (81).webp";
import img109 from "../public/gyla (71).webp";
import img110 from "../public/gyla (72).webp";
import img111 from "../public/gyla (73).webp";
import img112 from "../public/gyla (74).webp";
import img113 from "../public/gyla (75).webp";
import img114 from "../public/gyla (76).webp";
// import img115 from "../public/gyla (79).webp";
function Gallery() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [filter, setFilter] = useState("All");
  const [showMenu, setShowMenu] = useState(false);
  const data = [
    // { id: 7, category: "Second", imgSrc: img7 },
    // { id: 8, category: "Second", imgSrc: img8 },
    { id: 9, category: "Second", imgSrc: img9 },
    { id: 10, category: "Second", imgSrc: img10 },
    { id: 11, category: "Second", imgSrc: img11 },
    { id: 12, category: "Second", imgSrc: img12 },
    { id: 55, category: "First", imgSrc: img55 },
    { id: 56, category: "First", imgSrc: img56 },
    { id: 57, category: "First", imgSrc: img57 },
    { id: 58, category: "First", imgSrc: img58 },
    { id: 13, category: "Second", imgSrc: img13 },
    { id: 14, category: "Second", imgSrc: img14 },
    { id: 15, category: "Second", imgSrc: img15 },
    { id: 16, category: "Second", imgSrc: img16 },
    { id: 17, category: "Second", imgSrc: img17 },
    { id: 18, category: "Second", imgSrc: img18 },
    { id: 19, category: "Second", imgSrc: img19 },
    { id: 20, category: "Second", imgSrc: img20 },
    { id: 21, category: "Second", imgSrc: img21 },
    { id: 22, category: "Second", imgSrc: img22 },
    { id: 23, category: "Second", imgSrc: img23 },

    { id: 30, category: "Second", imgSrc: img30 },
    { id: 31, category: "first", imgSrc: img31 },
    { id: 32, category: "Second", imgSrc: img32 },
    { id: 33, category: "Second", imgSrc: img33 },
    { id: 34, category: "Second", imgSrc: img34 },
    { id: 35, category: "Second", imgSrc: img35 },
    { id: 63, category: "First", imgSrc: img63 },
    { id: 64, category: "First", imgSrc: img64 },
    { id: 65, category: "First", imgSrc: img65 },
    { id: 66, category: "First", imgSrc: img66 },
    { id: 67, category: "First", imgSrc: img67 },
    { id: 68, category: "First", imgSrc: img68 },
    { id: 69, category: "First", imgSrc: img69 },
    { id: 70, category: "First", imgSrc: img70 },
    { id: 71, category: "First", imgSrc: img71 },
    { id: 36, category: "Second", imgSrc: img36 },
    { id: 37, category: "Second", imgSrc: img37 },
    { id: 38, category: "Second", imgSrc: img38 },
    { id: 39, category: "Second", imgSrc: img39 },
    { id: 40, category: "Second", imgSrc: img40 },
    { id: 41, category: "Second", imgSrc: img41 },
    // { id: 42, category: "Second", imgSrc: img42 },
    { id: 43, category: "Second", imgSrc: img43 },
    { id: 44, category: "Second", imgSrc: img44 },
    { id: 45, category: "Second", imgSrc: img45 },
    // { id: 46, category: "Second", imgSrc: img46 },
    // { id: 47, category: "First", imgSrc: img47 },
    { id: 48, category: "First", imgSrc: img48 },
    { id: 49, category: "First", imgSrc: img49 },
    { id: 50, category: "First", imgSrc: img50 },
    { id: 51, category: "First", imgSrc: img51 },
    { id: 52, category: "First", imgSrc: img52 },
    { id: 53, category: "First", imgSrc: img53 },
    // { id: 54, category: "First", imgSrc: img54 },
    { id: 59, category: "First", imgSrc: img59 },
    { id: 60, category: "First", imgSrc: img60 },
    { id: 61, category: "First", imgSrc: img61 },
    { id: 62, category: "First", imgSrc: img62 },
    { id: 72, category: "First", imgSrc: img72 },
    { id: 73, category: "First", imgSrc: img73 },
    { id: 74, category: "First", imgSrc: img74 },
    { id: 75, category: "first", imgSrc: img75 },
    { id: 76, category: "First", imgSrc: img76 },
    { id: 77, category: "first", imgSrc: img77 },
    { id: 78, category: "first", imgSrc: img78 },
    { id: 79, category: "first", imgSrc: img79 },
    { id: 24, category: "Second", imgSrc: img24 },
    { id: 25, category: "Second", imgSrc: img25 },
    { id: 26, category: "Second", imgSrc: img26 },
    { id: 27, category: "Second", imgSrc: img27 },
    { id: 28, category: "Second", imgSrc: img28 },
    { id: 29, category: "Second", imgSrc: img29 },
    { id: 80, category: "First", imgSrc: img80 },
    { id: 81, category: "First", imgSrc: img81 },
    { id: 82, category: "First", imgSrc: img82 },
    { id: 83, category: "First", imgSrc: img83 },
    { id: 84, category: "Second", imgSrc: img84 },
    { id: 85, category: "First", imgSrc: img85 },
    { id: 86, category: "First", imgSrc: img86 },
    { id: 87, category: "First", imgSrc: img87 },
    { id: 88, category: "First", imgSrc: img88 },
    { id: 89, category: "First", imgSrc: img89 },

    { id: 91, category: "First", imgSrc: img91 },
    { id: 92, category: "First", imgSrc: img92 },
    { id: 93, category: "First", imgSrc: img93 },
    { id: 94, category: "First", imgSrc: img94 },
    { id: 95, category: "First", imgSrc: img95 },
    { id: 96, category: "First", imgSrc: img96 },
    { id: 97, category: "First", imgSrc: img97 },
    { id: 98, category: "First", imgSrc: img98 },
    { id: 99, category: "First", imgSrc: img99 },
    // { id: 100, category: "Second", imgSrc: img100 },
    // { id: 101, category: "Second", imgSrc: img101 },
    // { id: 102, category: "Second", imgSrc: img102 },
    // { id: 103, category: "Second", imgSrc: img103 },
    // { id: 104, category: "Second", imgSrc: img104 },
    // { id: 105, category: "Second", imgSrc: img105 },
    { id: 106, category: "Second", imgSrc: img106 },
    { id: 107, category: "Second", imgSrc: img107 },
    { id: 108, category: "Second", imgSrc: img108 },
    { id: 109, category: "Second", imgSrc: img109 },
    { id: 110, category: "Second", imgSrc: img110 },
    { id: 111, category: "Second", imgSrc: img111 },
    { id: 112, category: "Second", imgSrc: img112 },
    { id: 113, category: "Second", imgSrc: img113 },
    { id: 114, category: "Second", imgSrc: img114 },
    // { id: 115, category: "Second", imgSrc: img115 },
  ];

  const getImg = (imgSrc: string) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const filterImages = (category: string) => {
    setFilter(category);
    setShowMenu(false);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <Image
          priority
          width={1000}
          height={1000}
          src={tempImgSrc}
          alt="image"
          className="Image "
        />
        <AiFillCloseCircle onClick={() => setModel(false)} />
      </div>
      <div className="flex flex-col justify-center space-y-2 lg:mb-4 mt-8 font-font ">
        <div className="relative inline-block text-left p-5">
          <div>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-purple-500 hover:text-white"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span>Filter Images</span>
              <IoFilterOutline className="-mr-1 ml-2 h-5 w-5" />
            </button>
            <div
              className={showMenu ? "block" : "hidden"}
              aria-labelledby="menu-button"
            >
              <motion.div
                initial={{
                  y: -5,
                  opacity: 0,
                }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="py-3 xl:flex xl:space-x-2"
              >
                <button
                  className={`${
                    filter === "All" ? "bg-purple-500 text-white " : ""
                  } block px-4 py-2 text-sm  border  border-purple-5  border-purple-500  hover:bg-purple-500 hover:text-white 00 w-[250px] mb-2`}
                  onClick={() => filterImages("All")}
                >
                  All
                  {filter === "All" && (
                    <IoMdDoneAll className="h-5 w-5 inline-block ml-2" />
                  )}
                </button>
                <button
                  className={`${
                    filter === "First" ? "bg-purple-500 text-white " : ""
                  } block px-4 py-2 text-sm border bottom-1 border-purple-500  hover:bg-purple-500 hover:text-white w-[250px] mb-2`}
                  onClick={() => filterImages("First")}
                >
                  Summercamp
                  {filter === "First" && (
                    <IoMdDoneAll className="h-5 w-5 inline-block ml-2" />
                  )}
                </button>
                <button
                  className={`${
                    filter === "Second" ? "bg-purple-500 text-white " : ""
                  } block px-4 py-2 text-sm  border bottom-1 border-purple-500  hover:bg-purple-500 hover:text-white w-[250px] mb-2 `}
                  onClick={() => filterImages("Second")}
                >
                  GYLA
                  {filter === "Second" && (
                    <IoMdDoneAll className="h-5 w-5 inline-block ml-2" />
                  )}
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ gridAutoRows: "1fr", gridAutoFlow: "dense" }}
        >
          {data.map((item) => {
            if (filter === "All" || item.category === filter) {
              return (
                <div
                  className="pics"
                  key={item.id}
                  onClick={() => getImg(item.imgSrc.src)}
                  style={{
                    gridColumnEnd: "span 1",
                    gridRowEnd: `span ${Math.ceil(
                      item.imgSrc.height / item.imgSrc.width
                    )}`,
                  }}
                >
                  <Image
                    loading="lazy"
                    width={1000}
                    height={700}
                    src={item.imgSrc}
                    alt="Ghana-Youth-Leadership-Academy"
                    className="py-2 w-full h-full object-cover blur-image"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}
export default Gallery;
