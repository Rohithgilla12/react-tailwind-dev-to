import React from "react";
import Button from "./Button";
import ConnectIcon from "../icons/ConnectIcon";
import NotificationIcon from "../icons/NotificationIcon";

const NavBar = () => {
  return (
    <div className="bg-dev-gray text-dev-text h-dev px-24 py-2">
      <span className="text-2xl text-dev-text">
        <div class="grid grid-cols-12 gap-2">
          <div className="col-span-9 flex">
            <span className="bg-black w-12 h-10 flex justify-center content-center">
              <img
                src="https://lh3.googleusercontent.com/mmiuKzIq5YPFyjrfFsiNqeGuJY-Rp6wVvE8kus6vuunOnqInN16GTCCUX1937vEbKw"
                alt="logo"
              />
            </span>
            <input
              className="placeholder-gray-500 w-2/5 bg-dev-searchBox text-yt-textBox text-base rounded px-2 mx-4"
              type="text"
              name=""
              placeholder="Search..."
              id=""
            />
          </div>
          <div className="col-span-3 flex justify-end flex-row">
            <Button />
            <span className="flex items-center mx-2">
              <ConnectIcon />
              <NotificationIcon />
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14GiZ8uDLrYJ6qZ51x_LUT2j5LFmhYL-LP6Yn-1WTdao=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="profile_image"
                className="h-8 w-8 rounded-full mx-2"
              />
            </span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default NavBar;
