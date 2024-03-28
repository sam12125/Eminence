import React from "react";

function Header() {
  return (
    <div className="w-full flex justify-between py-6">
      <div>
        <img src="https://via.placeholder.com/90x30" />
      </div>

      <div className="flex gap-4 mt-0 justify-center">
        <img
          src="https://i.ibb.co/jGPCfCY/search-icon.png"
          className="h-8 w-8"
          alt="Search Icon"
        />

        <img
          src="https://i.ibb.co/RTMh1qQ/bell-icon.png"
          className="h-8 w-8"
          alt="Bell Icon"
        />

        <img
          src="https://via.placeholder.com/40x40"
          className="rounded-full"
          alt="Profile Image"
        />
      </div>
    </div>
  );
}

export default Header;
