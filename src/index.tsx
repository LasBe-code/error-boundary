import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { getErrorDataByCode } from '@components/boundary/getErrorDataByCode';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 0,
      throwOnError: true,
    },
    mutations: {
      onError: (error: any) => {
        const errorData = getErrorDataByCode(error);
        toast.error(`[${errorData.code}] ${errorData.message}`);
      },
    },
  },
});
const postFn = async () => {
  const response = await axios.post('/error');
  return response;
};
queryClient.setMutationDefaults(['error'], { mutationFn: postFn });

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
    <ToastContainer />
  </React.StrictMode>,
);
