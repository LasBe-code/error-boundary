import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { GlobalErrorFallback } from './GlobalErrorFallback';
import { Loading } from '@components/Loading';

export const GlobalBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
