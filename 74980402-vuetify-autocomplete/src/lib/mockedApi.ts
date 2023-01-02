const fakeData = ['apple', 'banana', 'cherry', 'dole banana'];

export const fetchData = (keyword: string = '') => {
  return new Promise<string[]>((resolve, reject) => {
    // fake 500 ms delay
    setTimeout(() => {
      const filteredItems = fakeData.filter((d) =>
        d.toLowerCase().includes(keyword.toLowerCase())
      );
      resolve(filteredItems);
    }, 500);
  });
};
