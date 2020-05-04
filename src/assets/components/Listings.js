import React from "react";

const Listings = () => {
  return (
    <div class="divide-y-2 divide-dev-gray col-span-3 flex mt-12 flex-col">
      <div className="mb-2">
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--LkPmQmnT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/tjtyn18k94s5nksx9gkd.png"
          className="h-32"
          alt="twillo"
        ></img>
        <ul class="px-4 ml-4">
          <span className="text-base font-semibold text-white font-mono">
            Stories(200)
          </span>
          <StoriesItem text="Adding SMS alerts for deployments to Octwilio" />
          <StoriesItem text="Twilio Texts (Twilio Hackathon submission)" />
          <StoriesItem text="Adding SMS alerts for deployments to Octwilio" />
          <StoriesItem text="Twilio Texts (Twilio Hackathon submission)" />
        </ul>
        <div className="w-100 bg-dev-tealPri h-10 rounded my-2 px-4 ml-4 flex justify-center items-center hover:bg-dev-teal">
          <span className="text-black">Share your project</span>
        </div>
        <div className="w-100 bg-black h-10 rounded my-2px-4 ml-4 flex justify-center items-center border-white border">
          <span className="text-white">See all posts</span>
        </div>
      </div>
      <div className="px-4 ml-4 mt-4 py-4">
        <span className="text-base font-semibold text-white font-mono">
          Listings
        </span>
        <ul>
          <li className="text-white font-light flex flex-col">
            CovidAfrica-API is looking for contributors to help COVIDAfrica
            project reach maturity.
            <span className="text-gray-600 text-sm my-2">collabs</span>
          </li>
          <li className="text-white font-light flex flex-col my-2">
            Advanced Vim Screencasts
            <span className="text-gray-600 text-sm">education</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const StoriesItem = (props) => {
  return (
    <li class="text-white text-base hover:text-dev-hoverTags flex flex-row my-4">
      <span className="bg-dev-tealPri block h-2 w-3 rounded-full mt-2"></span>
      <span className="mx-4">{props.text}</span>
    </li>
  );
};

export default Listings;
