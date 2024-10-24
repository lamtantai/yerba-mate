import React from "react";

export default function Button({ href, children, bgWhite }) {
  return (
    <div className="font-studioProBold">
      <a
        href={href}
        className={`inline-flex h-16 items-center rounded-full px-7 ${bgWhite ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <span className="text-xl leading-none">{children}</span>
      </a>
    </div>
  );
}
