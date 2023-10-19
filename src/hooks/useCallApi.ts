import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type DataType = {
  code: string;
  message: string;
  payload?: { title: string; contents: string };
};

const getData = async (param: string) => {
  try {
    const data = await axios.get<DataType>(`/error/${param}`, { headers: {} });
    return data.data;
  } catch (error: any) {
    throw error.response;
  }
};
export const useCallApi = (param: string) => {
  const { data } = useQuery(['api', param], () => getData(param), {
    refetchOnWindowFocus: false,
    retry: false,
    suspense: true,
    useErrorBoundary: true,
    enabled: !!param,
  });
  return data;
};
