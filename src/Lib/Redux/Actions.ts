import { recommendedHousehouse } from "../Types";

export const updateHousesAvailableForRental = (
  data: recommendedHousehouse[]
) => {
  return {
    type: "updateHousesAvailableForRental",
    payload: data,
  };
};
