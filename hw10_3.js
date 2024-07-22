/*Встановіть обмеження на розмір кеша у вигляді числа N.
 Якщо це значення перевищено, то вам необхідно перезаписати перше значення, потім друге і так далі.
*/
const memoize = (fn, cacheSize) => {
    const cache = new Map();
    const keys = [];
  
    return (...args) => {
      const key = JSON.stringify(args);
  
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      const result = fn(...args);
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

  console.log(memoizedFunction(5)); 
  console.log(memoizedFunction(5));
  console.log(memoizedFunction(6)); 
  console.log(memoizedFunction(7));
  console.log(memoizedFunction(5));