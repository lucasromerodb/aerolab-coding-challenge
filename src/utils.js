function sortBy(arr, first = "low", prop = "cost") {
  return [...arr].sort((a, b) => {
    if (first === "high") [a, b] = [b, a];
    if (a[prop] > b[prop]) return 1;
    if (a[prop] < b[prop]) return -1;
    return 0;
  });
}

export { sortBy };
