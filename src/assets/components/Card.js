import React from "react";

const Card = (props) => {
  return (
    <div className="bg-dev-gray mt-4 rounded-md">
      {props.image && (
        <img
          src="https://i0.wp.com/geeksnewslab.com/wp-content/uploads/2019/07/hello-world.png?fit=640%2C377&ssl=1"
          alt="logo"
          className="h-64 w-full object-cover"
        />
      )}
      <span className="text-3xl text-white font-bold mx-4 flex justify-start text-left my-4">
        {props.title}
      </span>
      <div className="flex flex-row mx-4">
        <img
          src="https://lh3.googleusercontent.com/a-/AOh14GiZ8uDLrYJ6qZ51x_LUT2j5LFmhYL-LP6Yn-1WTdao=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="profile_image"
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col mx-3">
          <span className="text-white font-medium text-sm font-sans">
            <pre>#react #javascript #showdev #webdev</pre>
          </span>
          <span className="text-md text-gray-600 text-left font-bold">
            Rohith Gilla <span className="mx-4 text-base">•</span>
            <span>Apr 29 '20</span>
          </span>
        </div>
      </div>
      <div className="mx-4 flex flex-row">
        <div className="flex flex-row my-4 pb-3">
          <img
            src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/reactions-stack-ee166e138ca182a567f74c986b6f810f670f4d199aca9c550cc7e6f49f34bd33.png"
            alt="heart"
            loading="lazy"
            className="h-5"
          ></img>
          <span className="text-sm text-gray-600 mx-2">515</span>
        </div>
        <div className="flex flex-row my-4 pb-3 mx-2 w-3/5 px-4">
          <img
            src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/comments-bubble-9958d41b969a1620c614347d5ad3f270ab49582c1d9f82b617a6b4156d05dda0.png"
            alt="chat"
            loading="lazy"
            className="h-5"
          ></img>
          <span className="text-sm text-gray-600 mx-2">220</span>
        </div>
        <div className="float-right my-4 pb-3 mx-2 text-gray-600 text-sm">
          <span className="mx-2">3 min read</span>
          <span
            className="mr-1 uppercase font-bold"
            style={{ color: "#274BFF" }}
          >
            Saved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
