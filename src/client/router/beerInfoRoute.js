import BeerInfoPage from 'beerInfoModule/components/BeerInfoPage';

export default [
    {
        path: '/beers/:id',
        name: 'Beer',
        component: BeerInfoPage,
        props: true
    }
];

