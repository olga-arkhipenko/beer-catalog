import BeerInfoPage from 'beerInfoModule/components/BeerInfoPage';

export default [
    {
        path: '/beer/:id',
        name: 'Beer',
        component: BeerInfoPage,
        props: true
    }
];

