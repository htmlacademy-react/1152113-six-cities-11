import { useState } from 'react';
import PlaceCard from '../../components/place-card/place-card';

import { OffersProps } from '../../types/props-type';

function OffersList({offers}: OffersProps): JSX.Element {
  const state = useState <number>();
  const setActiveCardID = state[1];

  const mouseHandler = (id: number): void => {
    setActiveCardID(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map(
          (offer) =>
            <PlaceCard offer = {offer} key={offer.id} mouseHandler={mouseHandler}/>
        )
      }
    </div>
  );
}

export default OffersList;