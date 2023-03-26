import React from "react";
import {
  TbLayoutDashboard,
  TbBrandHipchat,
  TbFriends,
  TbLogout,
} from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineLiveHelp } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div class="flex md:w-64 md:ml-5 flex-col ">
      <h1 className="mt-6 px-5 text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight">
        Ezzy<span className="text-primary">Split</span>
      </h1>
      <div class="mt-12  py-4 px-3 rounded">
        <ul class="space-y-2">
          <li>
            <NavLink
              to={"/dashboard/"}
              className="flex items-center p-2 mt-3 text-base text-gray-500 hover:bg-primary hover:text-white active:bg-primary active:text-white font-normal rounded-lg"
            >
              <button className="text-2xl opacity-0.9 hover:drop-shadow-xl rounded-full">
                <TbLayoutDashboard />
              </button>
              <span className="ml-3" >Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/LastGroup"}
              className="flex items-center p-2 mt-3 text-base text-gray-500 hover:bg-primary hover:text-white active:bg-primary active:text-white font-normal rounded-lg"
            >
              <button className="text-2xl opacity-0.9 hover:drop-shadow-xl rounded-full">
                <HiOutlineUserGroup />
              </button>
              <span className="flex-1 ml-3 whitespace-nowrap">Last Groups</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/activity"
              className="flex items-center p-2 mt-3  text-base text-gray-500 hover:bg-primary hover:text-white active:bg-primary active:text-white font-normal rounded-lg"
            >
              <button className="text-2xl opacity-0.9 hover:drop-shadow-xl rounded-full">
                <TbBrandHipchat />
              </button>
              <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
              <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                3
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/friends"}
              className="flex items-center p-2 mt-3 text-base text-gray-500 hover:bg-primary hover:text-white active:bg-primary active:text-white font-normal rounded-lg"
            >
              <button className="text-2xl opacity-0.9 hover:drop-shadow-xl rounded-full">
                <TbFriends />
              </button>
              <span className="flex-1 ml-3 whitespace-nowrap">Friends</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className="flex items-center p-2 mt-3 text-base text-gray-500 hover:bg-primary hover:text-white active:bg-primary active:text-white font-normal rounded-lg"
            >
              <button className="text-2xl opacity-0.9 hover:drop-shadow-xl rounded-full">
                <TbLogout />
              </button>
              <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/"}
              className="flex items-center p-2 mt-3 text-base text-gray-500 hover:bg-primary hover:text-white active:bg-primary active:text-white font-normal rounded-lg"
            >
              <button className="text-2xl opacity-0.9 hover:drop-shadow-xl rounded-full">
                <MdOutlineLiveHelp />
              </button>
              <span className="flex-1 ml-3 whitespace-nowrap">Help</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
