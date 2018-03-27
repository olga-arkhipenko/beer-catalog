export default {
    catalogFilter(data) {
        return data.map(item => ({
            id: item.id, 
            name: item.name, 
            image: item.image_url, 
            tagLine: item.tagline
        }));
    },
    favoritesFilter(data) {

    }
}