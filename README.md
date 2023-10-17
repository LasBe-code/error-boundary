# ⚡ cra-template-lasbe
<div>
  <a href="https://lasbe.tistory.com/" target="_blank">
    <img alt="lasbe" width="200px" style="border-radius:16px" src="https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2F4668944%2Fattach%2F2ab870b408a040f3bdbf458ba7979526">
  </a>
</div>
React - TypeScript와 recoil, styled-components, craco를 이용한 절대경로 설정 등이 적용 되어 있는 템플릿입니다.
오류를 발견하신 분은 devlasbe@gmail.com으로 연락 바랍니다.

<div style="margin:20px 0">

## 📌 [git repository](https://github.com/LasBe-code/cra-template-lasbe)    

<div style="margin:20px 0">

## 📌 [npm](https://www.npmjs.com/package/cra-template-lasbe)     

<div style="margin:20px 0">

## 📌 프로젝트 생성

```bash
$ npx create-react-app my-app --template lasbe
```

<div style="margin:20px 0">

## 📌 템플릿 적용 목록

- React (^18.2.0)
- TypeScript (^4.9.5)
- .prettierrc
- Craco
- Axios
- styled-components
- @types/styled-components (dev)
- react-spinners
- react-router-dom
- recoil
- @tanstack/react-query
- @tanstack/react-query-devtools (dev)

<div style="margin:20px 0">

### 🔎 index.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: 5 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
```

- react-router-dom - ```<BrowserRouter />``` in index.tsx
- recoil - ```<RecoilRoot />``` in index.tsx
- @tanstack/react-query - ```<QueryClientProvider />``` in index.tsx
- @tanstack/react-query-devtools (dev) - ```<ReactQueryDevtools />``` in index.tsx

<div style="margin:20px 0">

### 🔎 절대 경로

절대 경로와 관련 된 설정은 `/craco.config.js`, `/tsconfig.paths.json` 파일에 위치합니다.

- craco.config.js
  
```js
const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@states': path.resolve(__dirname, 'src/states'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};
```

- tsconfig.paths.json
  
```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@apis": ["./apis/index.ts"],
      "@apis/*": ["./apis/*"],

      "@components": ["./components/index.ts"],
      "@components/*": ["./components/*"],

      "@constants": ["./constants/index.ts"],
      "@constants/*": ["./constants/*"],

      "@hooks": ["./hooks/index.ts"],
      "@hooks/*": ["./hooks/*"],

      "@pages": ["./pages/index.ts"],
      "@pages/*": ["./pages/*"],

      "@states": ["./states/index.ts"],
      "@states/*": ["./states/*"],

      "@styles": ["./styles/index.ts"],
      "@styles/*": ["./styles/*"],

      "@utils": ["./utils/index.ts"],
      "@utils/*": ["./utils/*"]
    }
  }
}
```

제가 주로 사용하는 구조에 맞게 `@xxx` 형태로 절대 경로를 설정해 주었으며, tsconfig에는 폴더 인덱스까지 적용되어 있습니다.

만약 다른 구조를 사용한다면 두 파일에서 수정하시면 됩니다.

<div style="margin:20px 0">

### 🔎 .prettierrc

```json
{
  "Semicolons": true,
  "singleQuote": true,
  "trailingComma": "all",
  "Tabs": true,
  "tabWidth": 2,
  "printWidth": 140
}
```

입맛에 맞게 수정하시면 됩니다.