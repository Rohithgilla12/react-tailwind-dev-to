import React from "react";
import SideKicks from "./SideKicks";
import MyTags from "./MyTags";

const SideBar = () => {
  return (
    <div className="col-span-3 pl-24 mt-4 pt-2">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14GiZ8uDLrYJ6qZ51x_LUT2j5LFmhYL-LP6Yn-1WTdao=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="profile_image"
            className="h-12 w-12 rounded-full"
          />
          <div className="flex flex-col mx-3">
            <span className="text-lg text-white font-semibold">
              Rohith Gilla
            </span>
            <span className="text-sm text-gray-600">@gillarohith</span>
          </div>
        </div>
        <SideKicks />
        <MyTags />
      </div>
    </div>
  );
};

export default SideBar;
