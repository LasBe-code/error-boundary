import { useCallApi } from '@hooks/useCallApi';
import { Card } from './layout';

export const Content = ({ param }: { param: string }) => {
  const data = useCallApi(param);
  return (
    <Card>
      <h1>{data?.payload?.title}</h1>
      <p>{data?.payload?.contents}</p>
    </Card>
  );
};
