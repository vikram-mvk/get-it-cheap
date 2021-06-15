import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchItems = () => {
  return API.get("/items");
};

export const fetchItem = (id) => {
  return API.get(`/item/${id}`);
};

export const createItem = (newItem) => {
  return API.post("/new-item", newItem);
};

export const signIn = (formData) => {
  return API.post("/signin", formData);
};

export const signUp = (formData) => {
  return API.post("/signup", formData);
};

export const fetchUserItems = (userId) => {
  return API.get(`/items/${userId}`);
};
