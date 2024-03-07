import React from "react";
import Profile from "./Profile";
import Contact from "./Contact";
import Health from "./Health";
import Feedback from "./Feedback";

function Settings() {
  return (
    <div className="flex flex-col space-y-8 text-slate-50">
      <Profile />
      <Contact />
      <Health />
      <Feedback />
    </div>
  );
}

export default Settings;
