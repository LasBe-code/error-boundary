import { FallbackProps } from 'react-error-boundary';
import { Button, FallbackContinaer } from './layout';
import { getErrorDataByCode } from '@constants/errorCode';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const errorData = getErrorDataByCode(error);

  if (error.code === '401') throw error;
  return (
    <FallbackContinaer>
      <h1>{errorData?.CODE}</h1>
      <h2>{errorData?.MESSAGE}</h2>
      <span>오류가 발생했습니다.</span>
      <span>재시도 해주세요.</span>
      <Button onClick={resetErrorBoundary}>재시도</Button>
    </FallbackContinaer>
  );
};
