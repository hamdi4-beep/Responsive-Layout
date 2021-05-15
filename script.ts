function promisify(fn) {
    return function() {
        let args = Array.prototype.slice.call(arguments);
        return new Promise(resolve => {
            function callback(url) {
                return fetch(url).then(res => {
                    if (res.status !== 200) throw new Error("Couldn't fetch data from the server");
                    const body = res.json();
                    body.then(data => resolve(data));
                }).catch(err => console.log("Error message:", err.message));
            }
            args.push(callback);
            return fn.apply(this,args);
        });
    };
}

const get = promisify((url, callback) => callback(url));

get("https://api.github.com/users/hamdi4-beep").then(console.log);