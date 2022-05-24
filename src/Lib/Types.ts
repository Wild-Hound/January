export interface globalState {
  isAuth: boolean;
  housesAvailableForRental: recommendedHousehouse[];
  cart: cartType;
}

export interface recommendedHousehouse {
  id: number;
  img: string;
  cost: number;
  name: string;
  location: string;
  rating: number;
  reviewsNumber: number;
  meta: {
    people: number;
    bed: number;
    bathroom: number;
    size: number;
  };
  description: string;
}

export interface review {
  img: string;
  text: string;
  name: string;
}

export interface cartType {
  houseData: recommendedHousehouse;
  // date: DayRange;
  selectedAdults: number;
  selectedChildern: number;
}
