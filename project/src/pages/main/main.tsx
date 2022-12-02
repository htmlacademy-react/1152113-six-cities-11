import { Offers } from '../../types/offers-type';

import OffersList from '../../components/offers-list/offers-list';
import CitiesList from '../../components/cities-list/cities-list';
import Load from '../../components/load/load';

import SortList from '../../components/sort-list/sort-list';
import { store } from '../../store';
import { loadCurrentOffers } from '../../store/action';

import { useAppSelector } from '../../hooks/index';

// import Map from '../../components/map/map';

function Main(): JSX.Element {

  const offers = useAppSelector((stateGlobal) => stateGlobal.offers);

  const currentCity = useAppSelector((state) => state.city);
  const loadStatus = useAppSelector((state) => state.loadStatus);

  const currentOffers: Offers = [];

  offers.forEach((offer) => {
    if(offer.city.name === currentCity) {
      currentOffers.push(offer);
    }
  });

  store.dispatch(loadCurrentOffers(currentOffers));

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            <CitiesList offers={offers} />

          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>

              <SortList />

              {loadStatus ? <Load/> : <OffersList />}

            </section>
            <div className="cities__right-section">
              <section style={{height: '500'}} className="cities__map map">
                {/* <Map city={offers[0]} offers={offers} activeOffer={offers[0]} /> */}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
