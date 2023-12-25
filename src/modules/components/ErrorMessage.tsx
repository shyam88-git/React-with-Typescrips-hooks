import React from 'react';
import styled from 'styled-components';

const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ErrorMessageRow = styled.div`
  background-color: #ffcccc;
  border: 1px solid #ff6666;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ErrorMessageColumn = styled.div`
  color: #ff3333;
  font-size: 18px;
  font-weight: bold;
`;

interface IProps {
  message: string;
}

const ErrorMessage: React.FC<IProps> = (props) => {
  return (
    <ErrorMessageContainer>
      <ErrorMessageRow>
        <ErrorMessageColumn>{props.message}</ErrorMessageColumn>
      </ErrorMessageRow>
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
