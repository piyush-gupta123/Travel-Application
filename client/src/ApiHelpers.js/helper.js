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
    name: data.name? data.name:"",
    email: data.email,
    password: data.password
  }
  const response = await axios.post(`http://localhost:5000/user/${signUp ? "register" : "login"}/`,value)
  .catch((err) => console.log(err));
  // const response = await fetch(
  //   `http://localhost:5000/users/${signUp ? "register" : "login"}`,
  //   {
  //     method: "POST",
  //     body: JSON.stringify({
  //       Name: data.Name,
  //       Email: data.Email,
  //       Password: data.Password,
  //     }),
  //   }
  // )
  // .then((data) => console.log(data))

  // if (response.status !== 200 || response.status !== 201) {
  //   return console.log("Unable to Authenticate");
  // }

  const resData = await response.data;
  return resData;
};
