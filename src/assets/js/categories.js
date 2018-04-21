import React from 'react';
import Dashboard from 'assets/svg/dashboard.svg';
import Smartphone from 'assets/svg/smartphone.svg';
import DirectionsCar from 'assets/svg/directions_car.svg';
import Motorcycle from 'assets/svg/motorcycle.svg';
import BeachAccess from 'assets/svg/beach_access.svg';
import LocalMall from 'assets/svg/local_mall.svg';
import ChildCare from 'assets/svg/child_care.svg';
import LibraryBooks from 'assets/svg/library_books.svg';
import Home from 'assets/svg/home.svg';
import Build from 'assets/svg/build.svg';
import CardGiftcard from 'assets/svg/card_giftcard.svg';

const width = 40;
const height = 40;

export default [
  {
    id: '0',
    label: 'All',
    mdIcon: 'dashboard',
    localMdIcon: <Dashboard
      width={width}
      height={height}
      className="dashboard-logo"
    />,
    type: '',
  },
  {
    id: '1',
    label: 'Electronics',
    mdIcon: 'smartphone',
    localMdIcon: <Smartphone
      width={width}
      height={height}
      className="smartphon-logo"
    />,
    type: 'electronics',
  },
  {
    id: '2',
    label: 'Cars',
    mdIcon: 'directions_car',
    localMdIcon: <DirectionsCar
      width={width}
      height={height}
      className="car-logo"
    />,
    type: 'car',
  },
  {
    id: '3',
    label: 'Other Vehicles',
    mdIcon: 'motorcycle',
    localMdIcon: <Motorcycle
      width={width}
      height={height}
      className="github-logo"
    />,
    type: 'vehicle',
  },
  {
    id: '4',
    label: 'Leisures and Sports',
    mdIcon: 'beach_access',
    localMdIcon: <BeachAccess
      width={width}
      height={height}
      className="beach-access-logo"
    />,
    type: 'leisures',
  },
  {
    id: '5',
    label: 'Fashion and Accesories',
    mdIcon: 'local_mall',
    localMdIcon: <LocalMall
      width={width}
      height={height}
      className="local-mall-logo"
    />,
    type: 'fashion',
  },
  {
    id: '6',
    label: 'Baby and Child',
    mdIcon: 'child_care',
    localMdIcon: <ChildCare
      width={width}
      height={height}
      className="github-logo"
    />,
    type: 'baby',
  },
  {
    id: '7',
    label: 'Books',
    mdIcon: 'library_books',
    localMdIcon: <LibraryBooks
      width={width}
      height={height}
      className="github-logo"
    />,
    type: 'book',
  },
  {
    id: '8',
    label: 'Home and Garden',
    mdIcon: 'home',
    localMdIcon: <Home
      width={width}
      height={height}
      className="github-logo"
    />,
    type: 'home',
  },
  {
    id: '9',
    label: 'Utilities',
    mdIcon: 'build',
    localMdIcon: <Build
      width={width}
      height={height}
      className="github-logo"
    />,
    type: 'utilities',
  },
  {
    id: '10',
    label: 'Freebies',
    mdIcon: 'card_giftcard',
    localMdIcon: <CardGiftcard
      width={width}
      height={height}
      className="github-logo"
    />,
    type: 'free',
  },
];
