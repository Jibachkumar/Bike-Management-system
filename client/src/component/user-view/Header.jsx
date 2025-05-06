import React from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Avatar from "./Avatar";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const authStatus = useSelector((state) => state.auth.status);
  // console.log(authStatus);

  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "View",
      slug: "/view",
    },
  ];

  return (
    <header className="w-full h-full">
      <nav className="w-full py-[11px] bg-[#393E46] shadow-lg flex justify-between items-center fixed top-0 left-0 z-50 ">
        <div
          className="pl-[2.5rem] lg:pl-[11rem] font-extrabold"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <svg
            width="120"
            height="40"
            viewBox="0 0 50 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Bike Management System Logo"
            role="img"
          >
            {/* <!-- Wheels --> */}
            <circle
              cx="16"
              cy="48"
              r="16"
              stroke="#D84040"
              stroke-width="4"
              fill="none"
            />
            <circle
              cx="48"
              cy="48"
              r="16"
              stroke="#D84040"
              stroke-width="4"
              fill="none"
            />

            {/* <!-- Frame --> */}
            <path
              d="M16 48 L28 24 L36 36 L48 48"
              stroke="#D84040"
              stroke-width="4"
              fill="none"
              stroke-linejoin="round"
            />

            {/* <!-- Handlebars --> */}
            <line
              x1="40"
              y1="40"
              x2="40"
              y2="20"
              stroke="#D84040"
              stroke-width="4"
              stroke-linecap="round"
            />

            {/* <!-- Seat --> */}
            <line
              x1="28"
              y1="24"
              x2="24"
              y2="16"
              stroke="#D84040"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div>
          <ul className="flex items-center gap-8 md:mr-[16rem] relative">
            {navItems.map((items, index) => (
              <li
                key={index}
                onClick={() => navigate(items.slug)}
                className={`text-[17px] text-slate-300 font-serif cursor-pointer pr-2  px-[10px] py-[3px] duration-300 ease-in-out hover:opacity-50 
                  ${
                    items.slug === location.pathname
                      ? " text-black/50"
                      : "opacity-100"
                  } 
                `}
              >
                {items.name}
              </li>
            ))}
            {authStatus ? (
              <li className=" cursor-pointer">
                <Link to={"/profile"}>
                  <Avatar />
                </Link>
              </li>
            ) : (
              <li>
                <Link to={"/login"}>
                  <button className="bg-transparent text-slate-200 font-serif font-medium px-2  rounded-md shadow-md border-2 border-slate-500 opacity-[0.9] hover:scale-105 transform transition duration-300 ease-in-out">
                    Login
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
