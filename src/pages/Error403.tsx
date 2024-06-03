import { FetchBoundary } from '@components/boundary/FetchBoundary';
import { Content } from '@components/Content';
import { Container } from '@components/atoms';

export const Error403 = () => {
  return (
    <Container.Card>
      <FetchBoundary>
        <Content param="403" />
      </FetchBoundary>
    </Container.Card>
  );
};
