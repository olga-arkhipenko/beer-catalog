export default {
    fetchFavoriteBeerIds() {
        const localData = window.localStorage.getItem('favoriteBeerIds');
        if(!localData) {
            window.localStorage.setItem('favoriteBeerIds', '[]');
            return [];
        } 
        return JSON.parse(localData);
    },
    updateFavoriteBeerIds(updatedFavoriteBeerIds) {
        window.localStorage.setItem('favoriteBeerIds', JSON.stringify(updatedFavoriteBeerIds));
    }
}