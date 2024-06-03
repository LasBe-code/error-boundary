import { Button, Container } from '@components/atoms';
import { useMutation, useMutationState } from '@tanstack/react-query';

export const Mutation = () => {
  const mutation = useMutation({ mutationKey: ['error'] });
  const data = useMutationState({ filters: { mutationKey: ['error'] } });
  console.log(data);
  const data2 = useMutationState({ filters: { status: 'error', mutationKey: ['error'] }, select: (mutation) => mutation });
  console.log(data2);
  return (
    <Container.Card>
      <Button onClick={() => mutation.mutate()}>Mutation</Button>
    </Container.Card>
  );
};
