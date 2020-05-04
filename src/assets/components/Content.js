import React from "react";
import Card from "./Card";

const Content = () => {
  return (
    <div className="col-span-6 text-center mt-4">
      <div className="grid grid-cols-12 h-6 divide-x divide-white">
        <div class="text-right text-white col-span-3 pr-2 uppercase font-mono font-semibold">
          <span
            style={{
              backgroundColor: "#cfd7ff",
              color: "#0a0a0a",
              border: "1px solid #4e57ef",
              boxShadow: "3px 4px 0px #4e57ef",
            }}
            className="h-4"
          >
            FEED
          </span>
        </div>
        <div class="text-center flex flex-row justify-around col-span-6 uppercase font-mono font-semibold">
          <span className="text-white">WEEK</span>
          <span className="text-white">MONTH</span>
          <span className="text-white">year</span>
          <span className="text-white">infinity</span>
        </div>
        <div class="text-left text-white col-span-3 pl-2 uppercase font-mono font-semibold">
          Latest
        </div>
      </div>
      <Card
        image={true}
        title={"I replicated youtube design using tailwind CSS"}
      />
      <Card title={"Calling out developers for help fighting COVID-19"} />
    </div>
  );
};

export default Content;
