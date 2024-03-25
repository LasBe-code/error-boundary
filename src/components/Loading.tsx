import { ClipLoader } from 'react-spinners';
import { FallbackContinaer } from './layout';

export const Loading = () => {
  return (
    <FallbackContinaer>
      <ClipLoader color={'rgba(0,0,0)'} />
    </FallbackContinaer>
  );
};
