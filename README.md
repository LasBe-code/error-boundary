# ErrorBoundary

react-query v5를 이용해 Suspense + ErrorBoundary 컴포넌트로 로딩 및 에러 상태를 분리하는 예제입니다.
concurrently를 이용해 express 서버를 실행시킨 후 에러를 발생시키는 api를 구현했습니다.

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
