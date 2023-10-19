import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './ErrorFallback';
import { Loading } from './Loading';

export const FetchBoundary = ({ children }: { children: React.ReactNode }) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
