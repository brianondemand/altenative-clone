"use client";

import React, { useEffect } from "react";
import Footer from "airbnb/components/footer/Footer";
import { useAppStore } from "airbnb/store/store";
import ListingCard from "airbnb/components/listingCard";
import { getUserWishlists } from "airbnb/lib/lisitng";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("airbnb/components/navbar/Navbar"), {
  ssr: false,
});

export default function Page() {
  const { isAuthModalOpen, userInfo, wishListsPage, setWishListPage } =
    useAppStore();

  useEffect(() => {
    const getData = async () => {
      const wishlists = await getUserWishlists(userInfo?.id);
      setWishListPage(wishlists);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="h-[82.5vh] flex justify-start items-start">
        {wishListsPage?.length > 0 ? (
          <div className="grid grid-cols-4 px-10 gap-3 py-10 h-[75vh] overflow-auto no-scrollbar w-full items-start">
            {wishListsPage?.map(({ listing, id }, index) => (
              <ListingCard
                data={listing}
                key={index}
                isWishList={true}
                wishListId={id}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <h1>No Wishlists available.</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
