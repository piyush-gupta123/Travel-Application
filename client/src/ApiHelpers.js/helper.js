import axios from "axios";

export const getAllUsers = async () => {
  const res = await axios.get("/posts");

  if (res.status !== 200) {
    return console.log("Some Error Occurred");
  }

  const data = res.data;
  return data;
};

export const sendAuthRequest = async (signUp, data) => {
  const res = await axios.post(`/users/${signUp ? 'register' : 'login'}`,{ 
    name: data.name ? data.name : "",
    email: data.email,
    password: data.password,
  })
    .then((data)=>console.log(data))
    .catch((err) => console.log(err));

  if (res.status !== 200 || res.status !== 201) {
    return console.log("Unable to Authenticate");
  }

  const resData = await res.data;
  return resData;
};
