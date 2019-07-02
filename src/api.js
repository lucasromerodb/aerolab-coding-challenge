const BASE_URL = "https://coding-challenge-api.aerolab.co";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDFhYTYzYTAxYmIyMzAwNzQyMjhlY2IiLCJpYXQiOjE1NjIwMjc1Nzh9.U1iRTO2UvcW61_7rCHjTxWlniYt3YwTxQXsBBqtA6Wc";

const HEADERS = {
  crossDomain: true,
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${TOKEN}`
};

async function fetchAPI(url, set, method = "GET", extra = {}) {
  const options = { method, headers: HEADERS, ...extra };
  return await fetch(`${BASE_URL}${url}`, options)
    .then(res => res.json())
    .then(data => set(data))
    .catch(err => err);
}

function buildBody(param) {
  return { body: JSON.stringify(param) };
}

/* GET */
const getProducts = set => fetchAPI("/products", set);
const getUserMe = set => fetchAPI("/user/me", set);
const getUserHistory = set => fetchAPI("/user/history", set);

/* POST */
const postPoints = (set, amount) => fetchAPI("/user/points", set, "POST", buildBody({ amount }));
const postRedeem = (set, productId) => fetchAPI("/redeem", set, "POST", buildBody({ productId }));

export { getProducts, getUserMe, getUserHistory, postPoints, postRedeem };
