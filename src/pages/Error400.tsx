import { FetchBoundary } from '@components/boundary/FetchBoundary';
import { Content } from '@components/Content';
import { Container } from '@components/atoms';

export const Error400 = () => {
  return (
    <>
      <Container.Card>
        <FetchBoundary>
          <Content param="400" />
        </FetchBoundary>
      </Container.Card>
      <Container.Card>
        <FetchBoundary>
          <Content param="4001" />
        </FetchBoundary>
      </Container.Card>
    </>
  );
};
