import { FetchBoundary } from '@components/boundary/FetchBoundary';
import { Content } from '@components/Content';

export const Error401 = () => {
  return (
    <>
      <FetchBoundary>
        <Content param="0" />
      </FetchBoundary>
      <FetchBoundary>
        <Content param="401" />
      </FetchBoundary>
    </>
  );
};
