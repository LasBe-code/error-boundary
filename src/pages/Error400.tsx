import { FetchBoundary } from '@components/boundary/FetchBoundary';
import { Content } from '@components/Content';
import { Card } from '@components/layout';

export const Error400 = () => {
  return (
    <>
      <Card>
        <FetchBoundary>
          <Content param="400" />
        </FetchBoundary>
      </Card>
      <Card>
        <FetchBoundary>
          <Content param="4001" />
        </FetchBoundary>
      </Card>
    </>
  );
};
