import React from 'react';
import styled from 'styled-components';

const TourCardContainer = styled.div`
  margin: 20px;
`;

const TourCards = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TourCardBody = styled.div`
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
 
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
`;

interface IProps {
  name: string;
  imgUrl: string;
}

const TourCard: React.FC<IProps> = (props) => {
  return (
    <TourCardContainer>
      <TourCards>
        <Image src={props.imgUrl} alt={props.name} />
        <TourCardBody>
          <Title>{props.name}</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laudantium optio natus nobis quam facilis
            laborum unde doloribus dicta quasi consequuntur, ipsam officiis suscipit? Voluptatibus voluptatem in harum
            iusto? Error.
          </Description>
        </TourCardBody>
      </TourCards>
    </TourCardContainer>
  );
};

export default TourCard;
