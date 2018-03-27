import Catalog from '../components/pages/CatalogPage';
import Favorites from '../components/pages/FavoritesPage';

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