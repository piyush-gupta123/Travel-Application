import axios from "axios";

export const getAllUsers = async () => {
  const res = await axios.get("http://localhost:5000/posts");

  if (res.status !== 200) {
    return console.log("Some Error Occurred");
  }

  const data = res.data;
  return data;
};

export const sendAuthRequest = async (signUp, data) => {
  const value = {
    name: data.name ? data.name : "",
    email: data.email,
    password: data.password,
  };
  const response = await axios
    .post(`http://localhost:5000/user/${signUp ? "register" : "login"}/`, value)
    .catch((err) => console.log(err));

  const resData = await response.data;
  return resData;
};
