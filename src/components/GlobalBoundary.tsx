import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Loading } from './Loading';
import { GlobalErrorFallback } from './GlobalErrorFallback';

export const GlobalBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
