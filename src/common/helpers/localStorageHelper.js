export default {
    get(itemName) {
        return new Promise((resolve) => {
            const localData = window.localStorage.getItem(itemName);
            if (!localData) {
                window.localStorage.setItem(itemName, '[]');
                resolve([]);
            }
            resolve(localData);
        });
    },
    update(itemName, newItemData) {
        window.localStorage.setItem(itemName, newItemData);
    }
};

