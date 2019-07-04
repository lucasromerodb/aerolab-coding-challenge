const BASE_URL = "https://coding-challenge-api.aerolab.co";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDFhYTYzYTAxYmIyMzAwNzQyMjhlY2IiLCJpYXQiOjE1NjIwMjc1Nzh9.U1iRTO2UvcW61_7rCHjTxWlniYt3YwTxQXsBBqtA6Wc";

const HEADERS = {
  crossDomain: true,
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${TOKEN}`
};

function buildBody(params) {
  return { body: JSON.stringify(params) };
}

/* === REQUEST === */
async function fetchAPI(url, method = "GET", extra = {}) {
  const options = { method, headers: HEADERS, ...extra };
  return await fetch(`${BASE_URL}${url}`, options)
    .then(res => res.json())
    // .then(data => set(data))
    .then(data => data)
    .catch(err => err);
}

/* === GET === */
const getProducts = () => fetchAPI("/products");
const getUserMe = () => fetchAPI("/user/me");
const getUserHistory = () => fetchAPI("/user/history");

/* === POST === */
const postPoints = amount => fetchAPI("/user/points", "POST", buildBody({ amount }));
const postRedeem = productId => fetchAPI("/redeem", "POST", buildBody({ productId }));

export { getProducts, getUserMe, getUserHistory, postPoints, postRedeem };
