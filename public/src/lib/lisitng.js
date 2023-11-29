import axios from "axios";
import { createUrl, post } from "./http";
import qs from "qs";

export const createListingAPI = async (listingData) => {
  const result = await post(createUrl("/api/listings"), {
    ...listingData,
  }).catch(() => null);
  console.log({ result });

  if (!result.data) {
    return alert("Unable to create listing");
  }
  return result;
};

export const getAllListingsAPI = async () => {
  const result = await axios.get(createUrl(`/api/listings`));

  if (!result) {
    alert("No listings found!");
    return [];
  }
  return result.data;
};

export const getUserListings = async (userId) => {
  const query = qs.stringify({
    where: { listingCreatedBy: { id: userId } },
  });
  const result = await axios.get(createUrl(`/api/listings?${query}`));
  if (!result) {
    alert("No listings found!");
    return [];
  }
  return result.data;
};

export const deleteListingAPI = async (id) => {
  const result = await axios.delete(createUrl(`/api/listings/${id}`));
  if (!result) {
    alert("Unable to delete listing");
  }
  return result;
};

// export const getUserWishlists = async (userId) => {
//   const query = qs.stringify({
//     where: {
//       user: { id: userId },
//     },
//     select: {
//       listing: true,
//     },
//   });
//   const result = await axios
//     .get(createUrl(`/api/wishlists?${query}`))
//     .catch(() => null);

//   return result.data;
// };

// export const addToWishList = async (id, userId) => {
//   const query = {
//     listing: { id },
//     user: { id: userId },
//   };
//   const result = await post(createUrl("/api/wishlists"), { ...query });

//   if (!result.data) {
//     return alert("Unable to create wishlist");
//   }
//   return result.data;
// };

// export const removeFromWishListAPI = async (id) => {
//   const result = await axios.delete(createUrl(`/api/wishlists/${id}`));
//   if (!result) {
//     alert("Unable to delete");
//   }
//   return result;
// };

export const getListing = async (listingId) => {
  const result = await axios.get(createUrl(`/api/listings/${listingId}`));
  if (!result) {
    alert(" No listings available");
  }
  return result.data;
};
