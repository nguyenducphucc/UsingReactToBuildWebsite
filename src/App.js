import React, { Component } from "react";
import "../src/style/app.css";

import PageSwitching from "./Component/PageSwitching";

class App extends React.Component {
  render() {
    return (
      <div>
        <PageSwitching />
      </div>
    );
  }
}

export default App;
