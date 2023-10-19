import { FallbackProps } from 'react-error-boundary';
import { Button, FallbackContinaer } from './layout';
import { useNavigate } from 'react-router-dom';

export const GlobalErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigation = useNavigate();
  const code = error?.data?.code;
  const message = error?.data?.message;
  if (code === '401') {
    return (
      <FallbackContinaer>
        <h1>{code}</h1>
        <h2>{message}</h2>
        <span>로그인이 필요합니다.</span>
        <span>로그인 페이지로 이동합니다.</span>
        <Button onClick={() => (window.location.href = '/400')}>로그인</Button>
      </FallbackContinaer>
    );
  }
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
