function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', minHeight: '90vh', gap: '10rem' }}>
      <div>
        {/* eslint-disable-next-line */}
        <a href="https://lasbe.tistory.com/" target="_blank" style={{ color: '#FF7E00', fontSize: '24px' }}>
          LasBe 기술 블로그
        </a>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '8px 32px',
          border: '1px solid #000',
          borderRadius: '16px',
        }}
      >
        <h2>적용 목록</h2>
        <ul style={{ display: 'flex',flexDirection:'column', paddingInlineStart: '20px', gap: '10px', fontSize: '18px' }}>
          <li>TypeScript</li>
          <li>.prettierrc</li>
          <li>Craco</li>
          <li>Axios</li>
          <li>react-spinners</li>
          <li>styled-components</li>
          <li>@types/styled-components (dev)</li>
          <li>react-spinners</li>
          <li>
            react-router-dom - <b>{`<BrowserRouter />`}</b> in index.tsx
          </li>
          <li>
            recoil - <b>{`<RecoilRoot />`}</b> in index.tsx
          </li>
          <li>
            @tanstack/react-query - <b>{`<QueryClientProvider />`}</b> in index.tsx
          </li>
          <li>
            @tanstack/react-query-devtools (dev) - <b>{`<ReactQueryDevtools />`}</b> in index.tsx
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
