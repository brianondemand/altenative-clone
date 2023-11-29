"use client";

import React, { useEffect } from "react";
import Footer from "airbnb/components/footer/Footer";
import AuthModal from "airbnb/components/auth/AuthModal";
import { useAppStore } from "airbnb/store/store";
import { getAllListingsAPI, getUserWishlists } from "airbnb/lib/lisitng";
import ListView from "airbnb/components/views/ListView";
import MapView from "airbnb/components/views/MapView";
import ViewSwitchBadge from "airbnb/components/views/ViewSwitchBadge";
import { listingTypes } from "airbnb/data/listingTypes";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("airbnb/components/navbar/Navbar"), {
  ssr: false,
});

const page = () => {
  const { isAuthModalOpen, setListings, isMapView, userInfo, setWishLists } =
    useAppStore();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllListingsAPI();
      setListings(data);
      // const wishlists = await getUserWishlists(userInfo?.id);
      // const wishListId = wishlists?.map(({ listing }) => listing.id);
      // setWishLists(wishListId);
    };
    getData();
  }, [setListings, setWishLists]);

  return (
    <div className="max-h-[100vh] h-[100vh]">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="w-[90vw] overflow-auto no-scrollbar mt-3 px-5">
          <ul className="flex gap-5 h-full">
            {listingTypes.map((data) => (
              <li
                key={data.name}
                className="w-max flex flex-col items-center justify-between h-16 cursor-pointer"
              >
                <span className="h-10 w-10 flex items-center justify-center">
                  {data.svgPath}
                </span>
                <div
                  className="text-xs font-semibold break-keep"
                  style={{ width: "inherit" }}
                >
                  {data.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ViewSwitchBadge />
      {isMapView ? <MapView /> : <ListView />}
      <Footer />
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
};

export default page;
