import Link from "next/link";
import React from "react";

export default function Footer() {
  const links = ["privacy", "terms", "about us", "contact"];

  return (
    <div className="px-20 border-t border-t-gray-200 py-4 flex justify-between w-full text-sm z-50 bg-white items-center">
      <ul className="flex gap-3 font-normal">
        <li>&copy; {new Date().getFullYear()} Airbnb Finds Ke</li>
        {links.map((link) => (
          <li key={link}>
            <Link href="#" className="capitalize">
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-4 font-medium">
        <li className="cursor-pointer">$ USD</li>
      </ul>
    </div>
  );
}
