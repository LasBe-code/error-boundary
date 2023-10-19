import { Content } from '@components/Content';
import { FetchBoundary } from '@components/FetchBoundary';

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
