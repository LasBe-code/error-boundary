import { FallbackProps } from 'react-error-boundary';
import { FallbackContinaer } from './layout';
import { getErrorDataByCode } from '@constants/errorCode';

export const ErrorFallback = ({ error }: FallbackProps) => {
  const errorData = getErrorDataByCode(error);

  // 인증이 필요한 에러일 경우 상위 Boundary로 Error를 전파
  if (errorData.requireLogin) throw error;

  return (
    <FallbackContinaer>
      <h1>{errorData?.code}</h1>
      <h2>{errorData?.message}</h2>
    </FallbackContinaer>
  );
};
