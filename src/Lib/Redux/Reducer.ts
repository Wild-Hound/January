import { cartType, recommendedHousehouse } from "../Types";

export const isAuth = (
  state = false,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case "updateIsAuth":
      return action.payload;
    default:
      return state;
  }
};

export const housesAvailableForRental = (
  state = null,
  action: { type: string; payload: recommendedHousehouse[] }
) => {
  switch (action.type) {
    case "updateHousesAvailableForRental":
      return action.payload;
    default:
      return state;
  }
};

export const cart = (
  state = null,
  action: { type: string; payload: cartType }
) => {
  switch (action.type) {
    case "updateCart":
      return action.payload;
    default:
      return state;
  }
};
