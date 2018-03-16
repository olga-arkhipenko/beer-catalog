export default {
    fetchFavoriteBeerIds() {
        const localData = window.localStorage.getItem('favoriteBeerIds');
        if(!localData) {
            window.localStorage.setItem('favoriteBeerIds', '[]')
        } 
        return JSON.parse(localData);
    },
    updateFavoriteBeerIds(updatedFavoriteBeerIds) {
        console.log(JSON.stringify(updatedFavoriteBeerIds))
        window.localStorage.setItem('favoriteBeerIds', JSON.stringify(updatedFavoriteBeerIds));
    }
}