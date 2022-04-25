export interface globalState {
  housesAvailableForRental: recommendedHousehouse[];
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
