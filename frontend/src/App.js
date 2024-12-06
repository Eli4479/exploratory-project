import React from "react";
import Log from "./pages/Log";
import Profile from "./pages/Profile";
import Registration from "./pages/register";
import Nav from "./components/Nav";
import Error from "./pages/Error/Error.js";
import Student_attendance from "./pages/student_attendance";
import Class_attendance from "./pages/class_attendance";
import Mark_attendance from "./pages/mark_attendance";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Particular from "./pages/Particular";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Log />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/" element={<Registration />} />
          <Route
            exact
            path="/class_attendance"
            element={
              <>
                <Nav />
                <Class_attendance />
              </>
            }
          />
          <Route
            exact
            path="/Particular"
            element={
              <>
                <Nav />
                <Particular />
              </>
            }
          />
          <Route
            exact
            path="/mark_attendance"
            element={
              <>
                <Nav />
                <Mark_attendance />
              </>
            }
          />
          <Route
            exact
            path="/user"
            element={
              <>
                <Nav />
                <User />
              </>
            }
          />
          <Route exact path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
