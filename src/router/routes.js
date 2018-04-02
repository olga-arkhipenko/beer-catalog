import CatalogPage from 'catalogModule/components/CatalogPage';
import FavoritesPage from 'favoritesModule/components/FavoritesPage';

export default [
    {
        path: '/',
        name: 'Home',
        component: CatalogPage
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: FavoritesPage
    }
];

