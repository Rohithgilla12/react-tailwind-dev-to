import React from "react";
import ReadingListIcon from "../icons/ReadingListIcon";
import ListingIcon from "../icons/ListingIcon";
import PodCastIcons from "../icons/PodCastIcons";
import VideoIcon from "../icons/VideoIcon";
import TagIcon from "../icons/TagIcon";

const SideKicks = () => {
  return (
    <div className="text-dev-text mt-4 flex flex-col">
      <SideKickItem title="Reading list">
        <ReadingListIcon />
      </SideKickItem>
      <SideKickItem title="Listings">
        <ListingIcon />
      </SideKickItem>
      <SideKickItem title="Podcasts">
        <PodCastIcons />
      </SideKickItem>
      <SideKickItem title="Videos">
        <VideoIcon />
      </SideKickItem>
      <SideKickItem title="Tags">
        <TagIcon />
      </SideKickItem>
    </div>
  );
};

export default SideKicks;

const SideKickItem = (props) => {
  return (
    <div className="hover:text-dev-hoverTags my-2 flex flex-row">
      {props.children}
      <div className="mx-2">{props.title}</div>
    </div>
  );
};
