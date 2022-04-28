import { cartType, recommendedHousehouse } from "../Types";

export const updateIsAuth = (data: boolean) => {
  return {
    type: "updateIsAuth",
    payload: data,
  };
};

export const updateHousesAvailableForRental = (
  data: recommendedHousehouse[]
) => {
  return {
    type: "updateHousesAvailableForRental",
    payload: data,
  };
};

export const updateCart = (data: cartType) => {
  return {
    type: "updateCart",
    payload: data,
  };
};
