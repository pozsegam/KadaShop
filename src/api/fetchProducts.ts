import axios from 'axios';

const BASE_URL = "https://dummyjson.com/products";

export const fetchProducts = () => {
  return axios.get(BASE_URL).then((res) => console.log(res));
};
