export interface recommendedHousehouse {
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
}
