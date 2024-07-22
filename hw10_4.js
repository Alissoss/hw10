//Додайте перевірку, щоб прибрати дублікати результатів із кешу.
const memoize = (fn, cacheSize) => {
    const cache = new Map();
    const keys = [];

    return (...args) => {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);

        for (let cachedValue of cache.values()) {
            if (cachedValue === result) {
                return cachedValue;
            }
        }

        cache.set(key, result);
        keys.push(key);

        if (cache.size > cacheSize) {
            const oldestKey = keys.shift();
            cache.delete(oldestKey);
        }

        return result;
    };
};

const slowFunction = (num) => {
    console.log('Долгое вычисление...');
    return num * 2;
};

const cacheSize = 2;
const memoizedFunction = memoize(slowFunction, cacheSize);

console.log(memoizedFunction(20)); 
console.log(memoizedFunction(5)); 
console.log(memoizedFunction(10)); 
console.log(memoizedFunction(5));
