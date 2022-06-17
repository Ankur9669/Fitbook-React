const debounce = (fn: any, delay: number) => {
  console.log("ee");
  let timer: any;
  return function (...args: []) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
export { debounce };
