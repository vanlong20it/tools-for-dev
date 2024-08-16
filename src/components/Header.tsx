import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header id="header" className="fixed top-0 left-0 w-full bg-primary text-white">
      <div className="container">
        <div className="flex h-20 items-center">
          <Link href="/">Home</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
