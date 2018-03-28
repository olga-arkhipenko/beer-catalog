import Catalog from 'Components/pages/CatalogPage';
import Favorites from 'Components/pages/FavoritesPage';

export default [
    {
        path: '/',
        name: 'Home',
        component: Catalog
    },
    {
        path: '/favorites', 
        name: 'Favorites',
        component: Favorites,
    }
]