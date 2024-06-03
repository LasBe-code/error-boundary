import { FallbackProps } from 'react-error-boundary';
import { Button, FallbackContinaer } from '../layout';
import { getErrorDataByCode } from '@components/boundary/getErrorDataByCode';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { reset } = useQueryErrorResetBoundary();
  const errorData = getErrorDataByCode(error);

  // 인증이 필요한 에러일 경우 상위 Boundary로 Error를 전파
  if (errorData.requireLogin) throw error;

  const handleClickReset = () => {
    resetErrorBoundary();
    reset();
  };

  return (
    <FallbackContinaer>
      <h1>{errorData?.code}</h1>
      <h2>{errorData?.message}</h2>
      <Button onClick={handleClickReset}>재시도</Button>
    </FallbackContinaer>
  );
};
