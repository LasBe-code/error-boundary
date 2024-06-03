import { GlobalBoundary } from '@components/boundary/GlobalBoundary';
import { Button, Row, TopContainer, TopWrapper } from '@components/layout';
import { Error400 } from '@pages/Error400';
import { Error401 } from '@pages/Error401';
import { Error403 } from '@pages/Error403';
import { Error404 } from '@pages/Error404';
import { Error500 } from '@pages/Error500';
import { Login } from '@pages/Login';
import { Main } from '@pages/Main';
import { Mutation } from '@pages/Mutation';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigation = useNavigate();

  return (
    <TopContainer>
      <GlobalBoundary>
        <TopWrapper>
          <Row style={{ flex: 0, paddingBottom: '1rem', gap: '1rem' }}>
            <Button onClick={() => navigation('400')}>400</Button>
            <Button onClick={() => navigation('401')}>401</Button>
            <Button onClick={() => navigation('403')}>403</Button>
            <Button onClick={() => navigation('404')}>404</Button>
            <Button onClick={() => navigation('500')}>500</Button>
            <Button onClick={() => navigation('mutation')}>Mutation</Button>
          </Row>
          <Routes>
            <Route path="/400" element={<Error400 />} />
            <Route path="/401" element={<Error401 />} />
            <Route path="/403" element={<Error403 />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/500" element={<Error500 />} />
            <Route path="/mutation" element={<Mutation />} />
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </TopWrapper>
      </GlobalBoundary>
    </TopContainer>
  );
}

export default App;
