import styled from 'styled-components';

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: -8px;
  background-color: aliceblue;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 10px;
  background-color: white;
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  background-color: #2a9d8f;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.15s cubic-bezier(0, 0.2, 0.5, 3) 0s;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(1);
  }
`;

export const FallbackContinaer = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
