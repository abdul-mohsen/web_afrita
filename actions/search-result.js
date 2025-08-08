"use server";

import instance from "../axios";

export const searchItemsAction = async (searchText, token) => {
  const url = `/api/v1/cars/search?query=${searchText}`;
  console.log("user", token);

  console.log("searchText", searchText);
  console.log("token", token);

  const response = await instance.get(url, {});
  console.log("response", response);
};
