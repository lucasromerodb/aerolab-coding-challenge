const BASE_URL = "https://coding-challenge-api.aerolab.co";

// DEV TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDFhYTYzYTAxYmIyMzAwNzQyMjhlY2IiLCJpYXQiOjE1NjIwMjc1Nzh9.U1iRTO2UvcW61_7rCHjTxWlniYt3YwTxQXsBBqtA6Wc
// PROD TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDI1MjJlZTgzYWY0ODAwNmQwNTdiMmYiLCJpYXQiOjE1NjI3MTQ4NjN9.03K1xhLDyvbGgsFwmM5n9adJ_Nynav5Z9FBczeLzqQ4

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
async function requestAPI(url, method = "GET", extra = {}) {
  const options = { method, headers: HEADERS, ...extra };
  return await fetch(`${BASE_URL}${url}`, options)
    .then(res => res.json())
    .then(data => data);
}

/* === GET === */
const getProducts = () => requestAPI("/products");
const getUserMe = () => requestAPI("/user/me");
const getUserHistory = () => requestAPI("/user/history");

/* === POST === */
const postPoints = (amount = 1000) => requestAPI("/user/points", "POST", buildBody({ amount }));
const postRedeem = productId => requestAPI("/redeem", "POST", buildBody({ productId }));

export { getProducts, getUserMe, getUserHistory, postPoints, postRedeem };
