import axios from 'axios';
import queryString from 'query-string';
import { ArtilleryCalculationInterface, ArtilleryCalculationGetQueryInterface } from 'interfaces/artillery-calculation';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getArtilleryCalculations = async (
  query?: ArtilleryCalculationGetQueryInterface,
): Promise<PaginatedInterface<ArtilleryCalculationInterface>> => {
  const response = await axios.get('/api/artillery-calculations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createArtilleryCalculation = async (artilleryCalculation: ArtilleryCalculationInterface) => {
  const response = await axios.post('/api/artillery-calculations', artilleryCalculation);
  return response.data;
};

export const updateArtilleryCalculationById = async (
  id: string,
  artilleryCalculation: ArtilleryCalculationInterface,
) => {
  const response = await axios.put(`/api/artillery-calculations/${id}`, artilleryCalculation);
  return response.data;
};

export const getArtilleryCalculationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/artillery-calculations/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteArtilleryCalculationById = async (id: string) => {
  const response = await axios.delete(`/api/artillery-calculations/${id}`);
  return response.data;
};
