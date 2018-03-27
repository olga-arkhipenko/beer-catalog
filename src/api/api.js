export default {
    get(url) {
        return new Promise(function(resolve, reject){
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                  resolve(xhr.response);
                } else {
                  reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                  });
                }
              };
            xhr.send();
        });
    }
}