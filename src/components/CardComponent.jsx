import React from "react";

export default function CardComponent({ href, imgAlt, imgSrc, children }) {
  return (
    <>
      <div className="border rounded-xl w-80 h-auto shadow-md flex flex-col gap-3">
        <img className="rounded-t-xl" src={`${imgSrc}`} alt={`${imgAlt}`} />
        <h1 className="text-2xl font-bold px-4">{href}</h1>
        <p className="px-4 pb-2">{children}</p>
      </div>
    </>
  );
}
