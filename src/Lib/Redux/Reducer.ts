import { recommendedHousehouse } from "../Types";

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
