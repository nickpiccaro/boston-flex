"use client";

import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5/index.js";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className={`nav-header ${menuOpen ? 'nav-header-open' : ''}`}>
        <div className="nav-logo">Your Logo</div>
        <div className="nav-menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="nav-menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;