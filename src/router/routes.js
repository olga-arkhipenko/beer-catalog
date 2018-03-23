import Catalog from '../components/catalog/Catalog';
import Favorites from '../components/favorites/Favorites';

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