const baseUrl = "https://coding-challenge-api.aerolab.co";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDFhYTYzYTAxYmIyMzAwNzQyMjhlY2IiLCJpYXQiOjE1NjIwMjc1Nzh9.U1iRTO2UvcW61_7rCHjTxWlniYt3YwTxQXsBBqtA6Wc";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${token}`
};

export { baseUrl, headers };
