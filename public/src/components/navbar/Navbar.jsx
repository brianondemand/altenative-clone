"use client";

import React, { useState } from "react";
import AirBnbLogo from "../../svg/airbnb-logo";
import { FiGlobe } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import ContextMenu from "../common/ContextMenu";
import { useAppStore } from "airbnb/store/store";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const { setAuthModal, userInfo, setUserInfo } = useAppStore();

  const [isContextMenuVisible, setisContextMenuVisible] = useState(false);

  const contextMenuOptions = [
    {
      name: "Login",
      callBack: () => {
        setAuthModal();
        setisContextMenuVisible(false);
      },
    },
    {
      name: "Signup",
      callBack: () => {
        setAuthModal();
        setisContextMenuVisible(false);
      },
    },
    {
      name: "Rent Your Home",
      callBack: () => {
        setisContextMenuVisible(false);
      },
    },
    {
      name: "Help",
      callBack: () => {
        setisContextMenuVisible(false);
      },
    },
  ];

  const authenticatedContextMenuOptions = [
    {
      name: "Message",
      callBack: () => {
        setisContextMenuVisible(false);
      },
    },
    {
      name: "Notifications",
      callBack: () => {
        setisContextMenuVisible(false);
      },
    },
    {
      name: "Trips",
      callBack: () => {
        setisContextMenuVisible(false);
        router.push("/trips");
      },
    },
    {
      name: "Wishlists",
      callBack: () => {
        setisContextMenuVisible(false);
        router.push("/wishlist");
      },
    },
    {
      name: "Manage Listings",
      callBack: () => {
        setisContextMenuVisible(false);
        router.push("/my-listings");
      },
    },
    {
      name: "Help",
      callBack: () => {
        setisContextMenuVisible(false);
      },
    },
    {
      name: "Logout",
      callBack: () => {
        setUserInfo(null);
        setisContextMenuVisible(false);
        localStorage.clear();
      },
    },
  ];

  return (
    <header className="w-full flex flex-col justify-center transition-all duration-300">
      <div className="flex items-center justify-between px-20 h-20 border-b border-gray-200">
        <div className="flex-grow basis-0">
          <div className="w-max cursor-pointer">
            <AirBnbLogo />
          </div>
        </div>
        <div className="flex-grow basis-0">
          <ul className="flex items-center justify-end gap-6 font-medium">
            {userInfo && (
              <li
                className="cursor-pointer"
                onClick={() => router.push("/new-listing")}
              >
                <span>Rent Your Home</span>
              </li>
            )}

            <li className="cursor-pointer">
              <FiGlobe />
            </li>
            <li
              className="flex cursor-pointer items-center gap-2 border border-gray-300 py-2 px-3 rounded-full shadow-xl transition-all duration-500"
              onClick={() => setisContextMenuVisible(true)}
            >
              <RxHamburgerMenu />
              {userInfo ? (
                <span className="flex justify-center items-center bg-black text-white h-7 w-7 text-sm rounded-full">
                  {userInfo?.firstName?.split("").shift().toUpperCase()}
                </span>
              ) : (
                <span>
                  <Image
                    src="/empty-profile.png"
                    alt="profile"
                    height={30}
                    width={30}
                  />
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
      {isContextMenuVisible && (
        <ContextMenu
          contextMenu={isContextMenuVisible}
          setContextMenu={setisContextMenuVisible}
          cordinates={{
            x: window.innerWidth - 250,
            y: 70,
          }}
          options={
            userInfo ? authenticatedContextMenuOptions : contextMenuOptions
          }
        />
      )}
    </header>
  );
};

export default Navbar;
