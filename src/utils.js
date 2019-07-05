const PROJECT_NAME = "aerolab-coding-challenge";

function sortArrBy(arr, direction = "asc", prop = "cost") {
  return [...arr].sort((a, b) => {
    if (direction === "desc") [a, b] = [b, a];
    if (a[prop] > b[prop]) return 1;
    if (a[prop] < b[prop]) return -1;
    return 0;
  });
}

function sliceArr(arr, currentPage, qtyPerPage = 3) {
  const last = currentPage * qtyPerPage;
  const first = last - qtyPerPage;
  const currentProducts = arr.slice(first, last);
  return currentProducts;
}

function pageNumbers(arr, qtyPerPage) {
  const pages = Math.ceil(arr.length / qtyPerPage);
  return Array.from(Array(pages).keys());
}

export { PROJECT_NAME, sortArrBy, sliceArr, pageNumbers };
