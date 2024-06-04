import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FetchErrorFallback } from './FetchErrorFallback';
import { Loading } from '@components/Loading';

export const FetchBoundary = ({ children }: { children: React.ReactElement }) => {
  return (
    <ErrorBoundary FallbackComponent={FetchErrorFallback}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
