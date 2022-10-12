export interface User {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    country: string;
  }
  phone: string;
  email: string;
  picture: {
    thumbnail: string;
  };
}
