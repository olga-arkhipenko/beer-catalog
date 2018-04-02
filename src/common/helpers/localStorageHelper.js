export default {
    get(itemName) {
        const localData = window.localStorage.getItem(itemName);
        if (!localData) {
            window.localStorage.setItem(itemName, '[]');
            return [];
        }
        return JSON.parse(localData);
    },
    update(itemName, newItemData) {
        window.localStorage.setItem(itemName, JSON.stringify(newItemData));
    }
};

