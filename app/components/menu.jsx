"use client";

import React from "react";

import MenuMobile from "./menu/menu-mobile";
import MenuDesktop from "./menu/menu-desktop";

export default function Menu() {
  return (
    <>
      <div className="hidden lg:block">
        <MenuDesktop />
      </div>

      <div className="block lg:hidden">
        <MenuMobile />
      </div>
    </>
  );
}
