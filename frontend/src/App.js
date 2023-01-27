import React from "react";
import Log from "./pages/Log";
import Profile from "./pages/Profile";
import Registration from "./pages/register";

import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">

      {/* <Registration />
      <Log /> */}
      <>
        <Profile />
      </>
    </div>
  );
}

export default App;
