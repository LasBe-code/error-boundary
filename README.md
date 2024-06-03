# ErrorBoundary

react-query v5를 이용해 Suspense + ErrorBoundary 컴포넌트로 로딩 및 에러 상태를 분리하는 예제입니다.  
concurrently를 이용해 express 서버를 실행시킨 후 에러를 발생시키는 api를 구현했습니다.

### 실행방법

```
$ npm i
$ npm start
```

### 서버 파일

프로젝트 root 경로의 `server.js`로 정말 간단하게 에러 호출하는 API를 구현하여 사용했습니다.
