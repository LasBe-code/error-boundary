import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getData = async () => {
  const data = await axios
    .get('/error/400', { headers: {} })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err.response.data);
      return err.response.data;
    });
  return data;
};

function App() {
  const { data, error } = useQuery<any, any>(['error'], getData, { retry: 0 });
  if (data) console.log('query data', data);
  if (error) console.log('query error', error);
  return <div></div>;
}

export default App;
