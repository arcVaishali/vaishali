import React from "react";
import Header from "../components/Profile/Header";
import Profiles from "../components/Profile/Profiles";

const Profile = () => {
  return (
    <div className="grid grid-cols-12 col-span-12 mb-8 justify-center items-center">
      <Header/>
      <Profiles/>
    </div>
  );
};

export default Profile;
