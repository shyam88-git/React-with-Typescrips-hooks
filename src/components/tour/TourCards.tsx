import React, { useState } from 'react';
import { ITour } from './models/ITour';
import { TourServices } from '../../services/TourServices';
import styled from 'styled-components';
import TourCard from './TourCard';

const TourCardsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 0;
  padding: 0;
`;

const TourCardBody = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const TourCards: React.FC = () => {
  const [TourList, setTourList] = useState<ITour[]>(TourServices.getAllTours());

  return (
    <TourCardsContainer>
      <TourCardBody>
        {TourList.map((tour, index) => (
          <TourCard key={index} imgUrl={tour.imgUrl} name={tour.name} />
        ))}
      </TourCardBody>
    </TourCardsContainer>
  );
};

export default TourCards;
