import { instance } from "./api";

export const createUser = async (userData) => {
  try {
    const res = await instance.post("/users", userData);
  } catch (error) {
    console.log(error.response.data.errors);
    return error.response.data.errors;
  }
  return res;
};

export const loginUser = async (userData) => {
  const res = await instance.post("/users/login", userData);
  return res.data;
};

export const getCurrentUser = async (token) => {
  const res = await instance.get("/user", {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};
