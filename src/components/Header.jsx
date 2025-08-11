import React from "react";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex items-center justify-between">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="w-20 h-20"
      />
      <div className="flex">
        <img alt="user icon" className="w-10 h-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
        <button className="text-white font-bold">(Sign Out)</button>
      </div>
    </div>
  );
};

export default Header;
