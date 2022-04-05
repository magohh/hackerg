let is_stock = true;

const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        if (is_stock) {
            setTimeout(() => {
                resolve(task)
            }, time);
        } else {
            reject("Error")
        }
    })
}

export default customFetch;