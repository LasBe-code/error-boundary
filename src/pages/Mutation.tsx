import { Button, Card } from '@components/layout';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const postFn = async () => {
  const response = await axios.post('/error');
  return response;
};

export const Mutation = () => {
  const mutation = useMutation({ mutationKey: ['mutation'], mutationFn: postFn });
  return (
    <Card>
      <Button onClick={() => mutation.mutate()}>Mutation</Button>
    </Card>
  );
};
