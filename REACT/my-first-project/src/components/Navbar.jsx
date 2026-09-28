import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="items">
        <h2>My Logo</h2>
      </div>
      <div className="items">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="items">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
    </div>
  );
};

export default Navbar;
