import { NoDataImage } from "@/public";
import Image from "next/image";
import React from "react";

const Skeleton = () => {
  return (
    <div className="w-full p-4 space-y-4 divide-gray-200 animate-pulse">
      <div className="flex items-center justify-between pt-4 w-full">
        <Image
          src={NoDataImage}
          alt="A description of the image"
          className="wfull opacity-25 m-auto"
        />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
