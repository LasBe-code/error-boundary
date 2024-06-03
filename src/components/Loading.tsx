import { Container } from './atoms';
import { Loader } from '@lasbe/loader';

export const Loading = () => {
  return (
    <Container.Column>
      <Loader isLoading color="#2a9d8f" size="xxl" />
    </Container.Column>
  );
};
