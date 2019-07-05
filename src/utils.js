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
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(arr.length / qtyPerPage); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
}

export { PROJECT_NAME, sortArrBy, sliceArr, pageNumbers };
