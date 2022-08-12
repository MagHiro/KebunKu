import React, { useEffect } from "react";
import logonav from "../assets/logonav.svg";

export default function Navbar() {
  const ResponsiveNavbar = () => {
    const menu = document.querySelector(".mobile-menu");

    menu.classList.toggle("hidden");
    console.log("tes");
  };

  const itemnav = [
    {
      id: "1",
      item: "Investasi",
      link: "/investasi",
    },
    {
      id: "2",
      item: "Komunitas",
      link: "/komunitas",
    },
    {
      id: "3",
      item: "Blog",
      link: "/blog",
    },
    {
      id: "4",
      item: "Marketplace",
      link: "/marketplace",
    },
    {
      id: "5",
      item: "Tentang Kebunku",
      link: "/tentang",
    },
  ];

  useEffect(() => {});

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-between items-center py-3">
          {/* logonav sebelah kiri */}
          <a href="/" className="max-w-fit w-full items-center">
            <span className="flex gap-x-3 pl-3">
              <img alt="logonav" src={logonav} width={34} height={36} />
              <span className="font-display relative">
                <span className="text-[13px] text-primary whitespace-nowrap absolute top-1 font-bold">
                  KEBUNKU <br />
                </span>
                <span className="text-header text-[10px] font-medium whitespace-nowrap absolute top-5">
                  SAHABAT PETANI INDONESIA
                </span>
              </span>
            </span>
          </a>

          <button onClick={ResponsiveNavbar} className="hamburger lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 pr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <ul className="hidden bg-white font-display font-medium text-header text-xs flex shadow-lg p-4 rounded-md gap-y-4 flex-col right-1 top-20 z-50 absolute items-center lg:flex lg:gap-0 lg:p-0 lg:shadow-none lg:rounded-none lg:top-0 lg:right-0 md:relative lg:space-x-16 lg:flex-row">
            {itemnav.map((items) => (
              <li key={items.id}>
                <a
                  className="transition duration-200 hover:text-black active:text-primary"
                  href={items.link}
                >
                  {items.item}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mobile-menu hidden bg-white flex shadow-lg p-4 rounded-md gap-y-4 flex-col right-1 top-20 z-50 absolute items-center">
            {itemnav.map((items) => (
              <li key={items.id}>
                <a
                  className="opacity-75 transition duration-200 hover:opacity-100 active:text-primary"
                  href={items.link}
                >
                  {items.item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
