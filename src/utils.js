const PROJECT_NAME = "aerolab-coding-challenge";

function sortArrBy(arr, direction = "asc", prop = "cost") {
  return [...arr].sort((a, b) => {
    if (direction === "desc") [a, b] = [b, a];
    if (a[prop] > b[prop]) return 1;
    if (a[prop] < b[prop]) return -1;
    return 0;
  });
}

export { PROJECT_NAME, sortArrBy };
