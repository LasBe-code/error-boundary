import { useCallApi } from '@hooks/useCallApi';
import { Container } from './atoms';

export const Content = ({ param }: { param: string }) => {
  const data = useCallApi(param);
  return (
    <Container.Card>
      <h1>{data?.payload?.title}</h1>
      <p>{data?.payload?.contents}</p>
    </Container.Card>
  );
};
