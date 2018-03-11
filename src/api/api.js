const url = 'https://api.punkapi.com/v2/beers';


export default {
    get(page, perPage) {
        return new Promise(function(resolve, reject){
            const xhr = new XMLHttpRequest();
            page = page || '';
            perPage = perPage || 9;
            xhr.open('GET', `${url}/?page=${page}&per_page=${perPage}`, true);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                  resolve(xhr.response);
                } else {
                  reject({
                    status: this.status,
                    statusText: xhr.statusText
                  });
                }
              };
              xhr.onerror = function () {
                reject({
                  status: this.status,
                  statusText: xhr.statusText
                });
              };
              xhr.send();
        });
    }
}