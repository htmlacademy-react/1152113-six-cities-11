export type Owner = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Offer = {
  bedrooms: number;
  city: {
    location: Location;
    name: string;
  };
  description: string;
  goods: string[];
  host: Owner;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type Offers = Offer[];
