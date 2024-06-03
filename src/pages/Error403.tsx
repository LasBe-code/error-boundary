import { FetchBoundary } from '@components/boundary/FetchBoundary';
import { Content } from '@components/Content';
import { Card } from '@components/layout';

export const Error403 = () => {
  return (
    <Card>
      <FetchBoundary>
        <Content param="403" />
      </FetchBoundary>
    </Card>
  );
};
