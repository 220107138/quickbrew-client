import axios from 'axios';
import { MenuProductResponse } from '../types';

const BASE_URL = 'http://localhost:8000/';

export const getProducts = async (): Promise<MenuProductResponse> => {
  const response = await axios.get<MenuProductResponse>(`${BASE_URL}`);
  return response.data;
};
