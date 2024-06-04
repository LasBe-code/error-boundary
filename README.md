# ErrorBoundary & Suspense, 거의 완벽한 사용방법 가이드 예제

[BLOG: ErrorBoundary & Suspense, 거의 완벽한 사용방법 가이드](https://lasbe.tistory.com/204)  
react-query v5를 이용해 Suspense + ErrorBoundary 컴포넌트로 로딩 및 에러 상태를 분리하는 예제입니다.  
concurrently를 이용해 express 서버를 실행시킨 후 에러를 발생시키는 api를 구현했습니다.

### 실행방법

```
$ npm i
$ npm start
```

### 서버 파일

프로젝트 root 경로의 `server.js`로 정말 간단하게 에러 호출하는 API를 구현하여 사용했습니다.

### 주요 라이브러리

- `Axios`

http 요청을 쉽게 만들어주는 대표적인 클라이언트 라이브러리입니다.

이 글에서는 axios를 이용해 서버 데이터를 요청하겠습니다.

- `tanstack-query (react-query)`

요즘에는 거의 대세라고 할 수 있죠.

서버 상태를 깔끔하게 관리하는 역할 뿐 아니라 Loading 상태를 throw해 Suspense가 catch할 수 있도록 기능을 제공합니다.

또한 에러 발생 시 해당 쿼리를 refetch 하는 기능도 제공하니 필수적으로 설치해줍니다.

이 글에서는 v5 버전을 사용합니다.

- `react-error-boundary`

ErrorBoundary를 사용하기 위해서는 클래스 컴포넌트의 강력한 생명주기 기능을 필수적으로 이용해야 합니다.

클래스형으로 직접 ErrorBoundary를 구현하기 귀찮으니 잘 만들어진 패키지를 설치합니다.

- `react-toastify`

대체 UI를 표시하지 않고 사용자에게 에러가 발생했음을 알리는 토스트 메세지 라이브러리입니다.

다른 방식으로 에러 알림을 표현해도 괜찮습니다.

- `concurrently`

2개 이상의 서버를 함께 실행시켜주는 패키지입니다.

리액트 개발서버와 노드 서버를 동시에 실행시키기 위해 필요합니다.

- `nodemon`

node 서버의 변경이 감지되었을 때 재시작 없이 자동으로 반영해줍니다.
