import { FallbackContinaer } from './layout';
import { Loader } from '@lasbe/loader';

export const Loading = () => {
  return (
    <FallbackContinaer>
      <Loader isLoading color="#2a9d8f" size="xxl" />
    </FallbackContinaer>
  );
};
