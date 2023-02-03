import React from "react";
import Log from "./pages/Log";
import Profile from "./pages/Profile";
import Registration from "./pages/register";
import Nav from "./components/Nav";
import Error from "./pages/Error/Error.js";
import Camera from "./pages/Camera";

function App() {
  return (
    <div className="App">

      {/* <Registration />
      <Log /> */}
      <>
        <Profile />
        <Error />
        <Camera />
      </>
    </div>
  );
}

export default App;
