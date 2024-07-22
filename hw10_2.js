/*Вам необхідно реалізувати функцію memoize(fn), яка приймає вхід функцію і додає їй можливість кешування результатів виконання,
 щоб уникнути повторних обчислень. Це означає, що в разі, коли функція викликається з однаковими параметрами,
 то результат необхідно брати з кешу. (Тільки примітиви у параметрах та використовуйте Map)
*/
const memoize = (fn) => {
    const cache = new Map();
  
    return (...args) => {
      const key = JSON.stringify(args);
  
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  };
  const slowFunction = (num) => {
    console.log('Тривалий розрахунок...');
    return num * 2;
  };
  const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5));
console.log(memoizedFunction(5));
