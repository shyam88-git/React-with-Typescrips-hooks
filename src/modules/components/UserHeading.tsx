import React from 'react';
import styled from 'styled-components';

const HeadingContainer = styled.div`
  
  margin-bottom: 20px;
   width: 100%;
`;

const MainHeading = styled.h1`
  font-size: 34px;
  color: #72f110;
`;

const SubHeading = styled.p`
  font-size: 16px;
  color: #666;
`;

 interface IProps{
    heading:string;
    subHeading:string;
 }

const UserHeading: React.FC<IProps> = (props) => {
  return (
    <HeadingContainer>
      <MainHeading>{props.heading}</MainHeading>
      <SubHeading>{props.subHeading}</SubHeading>
    </HeadingContainer>
  );
};

export default UserHeading;
