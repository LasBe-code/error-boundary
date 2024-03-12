import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type DataType = {
  code: string;
  message: string;
  payload?: { title: string; contents: string };
};

const getData = async (param: string) => {
  const data = await axios.get<DataType>(`/error/${param}`, { headers: {} });
  return data.data;
};
export const useCallApi = (param: string) => {
  const { data } = useQuery({ queryKey: ['api', param], queryFn: () => getData(param), refetchOnWindowFocus: false });
  return data;
};
