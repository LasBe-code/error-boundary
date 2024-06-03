import styled from 'styled-components';

const Top = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: -8px;
  background-color: aliceblue;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
  padding: 1rem;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Card = styled.div`
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 10px;
  background-color: white;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Container = {
  Top,
  Main,
  Column,
  Card,
  Row,
};

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
