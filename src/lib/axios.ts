import axios from "axios";

export const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// Error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);
