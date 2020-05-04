import React from "react";
import NavBar from "./assets/components/NavBar";
import SideBar from "./assets/components/SideBar";
import Content from "./assets/components/Content";
import Listings from "./assets/components/Listings";

function App() {
  return (
    <div className="App">
      <div className="h-screen bg-dev-body">
        <NavBar />
        <div class="grid grid-cols-12 gap-2 px-24">
          <SideBar />
          <Content />
          <Listings />
        </div>
      </div>
    </div>
  );
}

export default App;
