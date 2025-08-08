import React from "react";
import Button from "./Button";

const SectionNav = ({ heading, btnLabel, btnLink, quantity }) => {
  return (
    <div className="section-head flex flex-col gap-6 mb-4">
      <div className="flex justify-between items-center  text-3xl">
        <div className="flex flex-row justify-center items-center">
          <h2 className="text-primary  ">{heading}</h2>
          {quantity ? (
            <span className="py-1 px-2 bg-app-gray/20 text-app-gray text-lg rounded-md mr-4">
              {quantity}
            </span>
          ) : (
            ""
          )}
        </div>
        <Button label={btnLabel} link={btnLink} />
      </div>
    </div>
  );
};
export default SectionNav;
