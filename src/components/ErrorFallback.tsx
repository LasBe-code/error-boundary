import { FallbackProps } from 'react-error-boundary';
import { Button, FallbackContinaer } from './layout';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const code = error?.data?.code;
  const message = error?.data?.message;
  if (code === '401') throw error;
  return (
    <FallbackContinaer>
      <h1>{code}</h1>
      <h2>{message}</h2>
      <span>오류가 발생했습니다.</span>
      <span>재시도 해주세요.</span>
      <Button onClick={resetErrorBoundary}>재시도</Button>
    </FallbackContinaer>
  );
};
