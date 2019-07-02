const BASE_URL = "https://coding-challenge-api.aerolab.co";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDFhYTYzYTAxYmIyMzAwNzQyMjhlY2IiLCJpYXQiOjE1NjIwMjc1Nzh9.U1iRTO2UvcW61_7rCHjTxWlniYt3YwTxQXsBBqtA6Wc";

const HEADERS = {
  crossDomain: true,
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${TOKEN}`
};

async function fetchAPI(url, setState, method = "GET", extra = {}) {
  const options = { method, headers: HEADERS, ...extra };
  console.warn(options);
  return await fetch(`${BASE_URL}${url}`, options)
    .then(res => res.json())
    .then(data => setState(data))
    .catch(err => err);
}

/* GET */
const getProducts = setState => fetchAPI("/products", setState);
const getUserMe = setState => fetchAPI("/user/me", setState);
const getUserHistory = setState => fetchAPI("/user/history", setState);

/* POST */
const postPoints = (setState, amount) =>
  fetchAPI("/user/points", setState, "POST", { body: JSON.stringify({ amount }) });

const postRedeem = (setState, productId) =>
  fetchAPI("/redeem", setState, "POST", { body: JSON.stringify({ productId }) });

export { getProducts, getUserMe, getUserHistory, postPoints, postRedeem };
