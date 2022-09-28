import React, { useEffect, useState } from "react";
import SidebarHeaders from "./SidebarHeaders";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import SidebarContent from "./SidebarContent";
import DropdownItem from "./DropdownItem";

function Sidebar() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [components1Active, setComponents1Active] = useState(false);
  const [components1Height, setComponents1Height] = useState(0);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (
        event.target.closest("#sidebar-container") &&
        !event.target.closest("#dropdown-components1")
      ) {
        setComponents1Active(false);
      }
      if (
        !event.target.closest("#sidebar-container") &&
        !event.target.closest("#sidebar-toggle")
      ) {
        setSidebarToggle(false);
      }
    });

    const itemsComponents1 = document.querySelector(
      "#dropdown-components1 .dropdown-items"
    );
    setComponents1Height(itemsComponents1.offsetHeight);
  }, []);

  return (
    <>
      <SidebarHeaders />
      <div className="mx-auto flex max-w-screen-xl items-stretch pt-14">
        <div
          id="sidebar-container"
          className={`duration-500 ${
            sidebarToggle ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 z-[51] h-full w-64 shrink-0 overflow-y-auto border bg-slate-50 duration-300 md:top-14 md:z-0 md:translate-x-0`}
        >
          <nav>
            <h1 className="p-4 text-center font-semibold italic text-slate-800 md:hidden">
              FR Components
            </h1>
            <div className="mx-2 mt-8 mb-20">
              <ul className="space-y-2">
                <Menu onClick={() => setSidebarToggle(false)} href="/docs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  <span className="ml-2 flex-1 whitespace-nowrap">
                    Documentation
                  </span>
                </Menu>
                <li id="dropdown-components1">
                  <button
                    onClick={() => {
                      setComponents1Active(!components1Active);
                    }}
                    className={`flex w-full items-center rounded-lg p-2 hover:bg-slate-200 hover:text-slate-900 ${
                      components1Active
                        ? "bg-slate-200 text-slate-900"
                        : "text-slate-500"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                      />
                    </svg>
                    <span className="ml-2 flex-1 whitespace-nowrap text-left">
                      Components
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className={`ml-3 h-4 w-4 transition duration-300 ease-in-out ${
                        components1Active && "scale-y-[-1]"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  <div
                    style={{
                      maxHeight: `${
                        components1Active ? `${components1Height + 32}px` : "0"
                      }`,
                    }}
                    className={`overflow-hidden transition-height duration-500 ease-in-out`}
                  >
                    <ul className="dropdown-items my-4 ml-5  space-y-4 border-l text-sm">
                      <DropdownItem
                        onClick={() => setSidebarToggle(false)}
                        setActive={setComponents1Active}
                        href="/components/inputs"
                        title="Inputs"
                      />
                      <DropdownItem
                        onClick={() => setSidebarToggle(false)}
                        setActive={setComponents1Active}
                        href="/components/cards"
                        title="Cards"
                      />
                      <DropdownItem
                        onClick={() => setSidebarToggle(false)}
                        setActive={setComponents1Active}
                        href="/components/footers"
                        title="Footers"
                      />
                    </ul>
                  </div>
                </li>
                <Menu onClick={() => setSidebarToggle(false)} href="/supportMe">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>
                  <span className="ml-2 flex-1 whitespace-nowrap">
                    Support Me
                  </span>
                </Menu>
              </ul>
            </div>
          </nav>
        </div>
        <SidebarContent>
          <Outlet />
        </SidebarContent>
      </div>
      {/* Sidebar Toggle */}
      <button
        id="sidebar-toggle"
        onClick={() => setSidebarToggle(!sidebarToggle)}
        className="fixed top-0 right-0 z-[9999] my-4 mr-6 block h-14 text-slate-900 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`absolute top-0 right-0 h-6 w-6 duration-200 ease-in-out ${
            !sidebarToggle && "scale-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`absolute top-0 right-0 h-6 w-6 duration-200 ease-in-out ${
            sidebarToggle && "scale-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </>
  );
}

export default Sidebar;
