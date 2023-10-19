import { Content } from '@components/Content';
import { FetchBoundary } from '@components/FetchBoundary';
import { Card } from '@components/layout';

export const Error400 = () => {
  return (
    <Card>
      <FetchBoundary>
        <Content param="400" />
      </FetchBoundary>
    </Card>
  );
};
