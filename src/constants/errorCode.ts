import { AxiosError } from 'axios';

type ErrorCodeType = {
  [key: string]: { CODE: string; MESSAGE: string };
};

export const ERROR_CODE: ErrorCodeType = {
  400: { CODE: '400', MESSAGE: '잘못된 요청.' },
  4001: { CODE: '4001', MESSAGE: '요청에 대한 Validation 에러입니다.' },
  401: { CODE: '401', MESSAGE: '인증 에러.' },
  4011: { CODE: '4011', MESSAGE: '인증이 만료되었습니다.' },
  403: { CODE: '403', MESSAGE: '권한이 없습니다.' },
};

export const getErrorDataByCode = (error: AxiosError<{ code: number; message: string }>) => {
  const serverErrorCode = error?.response?.data?.code ?? '';
  const httpErrorCode = error?.response?.status ?? '';
  const axiosErrorCode = error?.code ?? '';
  if (serverErrorCode in ERROR_CODE) {
    return ERROR_CODE[serverErrorCode as keyof typeof ERROR_CODE];
  }
  if (httpErrorCode in ERROR_CODE) {
    return ERROR_CODE[httpErrorCode as keyof typeof ERROR_CODE];
  }
  if (axiosErrorCode in ERROR_CODE) {
    return ERROR_CODE[axiosErrorCode as keyof typeof ERROR_CODE];
  }
};
