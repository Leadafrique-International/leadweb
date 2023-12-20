import React from "react";
import Link from "next/link";

function Projects() {
  return (
    <div className="h-screen flex w-full justify-center items-center font-font">
      <div className="font-medium w-full text-[30px] text-center ">
        <h1 className="text-left text-[1vw] pb-5 px-5"> Our Progrs</h1>

        <hr />
        <Link href="">
          <div>
            <h1 className="p-5">Be Future Ready</h1>
          </div>
        </Link>
        <hr className="w-full " />
        <Link href="">
          <div>
            <h1 className="p-5">Ghana Youth Leadership Academy</h1>
          </div>
        </Link>
        <Link href="">
          <div>
            <h1 className="p-5">Empowering Women In Politics</h1>
          </div>
        </Link>
        <hr />
        <Link href="">
          <div>
            <h1 className="p-5">Young People</h1>
          </div>
        </Link>
        <hr />
        <Link href="">
          <div>
            <h1 className="p-5">Parenting</h1>
          </div>
        </Link>
        <hr />
        <Link href="">
          <div>
            <h1 className="p-5">Educators</h1>
          </div>
        </Link>
        <hr />
        <Link href="">
          <div>
            <h1 className="p-5">Corp. Executives</h1>
          </div>
        </Link>
        <hr />
      </div>
    </div>
  );
}

export default Projects;
