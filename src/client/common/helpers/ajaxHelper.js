export default {
    // Switched to fetch
    // If want use XMLHttpRequest instead - uncomment code below
    get(url) {
        return fetch(url).then(response => response.json()).catch(alert);
    }
    // get(url) {
    //     return new Promise(((resolve, reject) => {
    //         const xhr = new XMLHttpRequest();
    //         xhr.open('GET', url, true);
    //         xhr.onload = () => {
    //             if (xhr.status >= 200 && xhr.status < 300) {
    //                 resolve(JSON.parse(xhr.response));
    //             } else {
    //                 reject(new Error(xhr.status, xhr.statusText));
    //             }
    //         };
    //         xhr.send();
    //     }));
    // }
};
