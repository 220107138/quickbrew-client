import axios from 'axios';
import { AdditionsResourcesRequest, AdditionsResourcesResponse } from '../types';

const BASE_URL = 'http://localhost:8000/';

export const getAdditions = async (id: AdditionsResourcesRequest): Promise<AdditionsResourcesResponse> => {
  const response = await axios.get<AdditionsResourcesResponse>(`${BASE_URL}/${id}`);
  return response.data;
};