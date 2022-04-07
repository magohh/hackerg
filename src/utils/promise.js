let is_stock = true;

const promise = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_stock) {
                resolve(task);
            } else {
                reject("Err");
            }
        }, time);
    })
}

export default promise