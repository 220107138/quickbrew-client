import { MakeOrderRequest , MakeOrderResponse} from './../types';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/';

export const createUser = async (body: MakeOrderRequest): Promise<MakeOrderResponse> => {
  const response = await axios.post<MakeOrderResponse>(`${BASE_URL}/done`, body);
  return response.data;
};
