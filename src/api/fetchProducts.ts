import axios from 'axios';

const GET_PRODUCTS_URL = 'https://dummyjson.com/products';
const GET_ITEM_DETAILS_URL = 'https://dummyjson.com/products/';
const LIMIT = 10;

export const fetchProducts = async (skipFirst: number) => {
  const res = await axios.get(GET_PRODUCTS_URL, {
    params: { limit: LIMIT, skip: skipFirst },
  });
  return res.data;
};

export const fetchProduct = async (id: number) => {
  const res = await axios.get(`${GET_ITEM_DETAILS_URL}/${id}`);
  return res.data;
};
