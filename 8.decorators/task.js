function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let index = cache.findIndex((item) => item.hash == hash);
    if (index !== -1) {
      return `Из кэша: ${cache.result}`;
    }

    const result = func.call(this, ...args);
    if (index.length > 5) {
      index = index.shift();
    }
    cache.push({hash, result});
    return `Вычисляем: ${result}`;
  }
  return wrapper;
}

function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
