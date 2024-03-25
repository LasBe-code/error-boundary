# ErrorBoundary

react-query v5를 이용해 Suspense + ErrorBoundary 컴포넌트로 로딩 및 에러 상태를 분리하는 예제입니다.

```tsc
export const FetchBoundary = ({ children }: { children: React.ReactElement }) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
```
