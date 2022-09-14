import React from "react";

import ContentWrapper from "./components/ContentWrapper";
import SideBar from "./components/SideBar";

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <ContentWrapper />
      </div>
    </React.Fragment>
  );
}

export default App;
