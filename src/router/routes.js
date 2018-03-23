import Catalog from '../components/catalog/Catalog';
import Favorites from '../components/favorites/Favorites';

export default [
    {
        path: '/', 
        component: Catalog
    },
    {
        path: '/favorites', 
        component: Favorites,
    }
]