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
  const response = await axios
    .post(`http://localhost:5000/user/${signUp ? "register" : "login"}/`, {
      name: data.name ? data.name : "",
      email: data.email,
      password: data.password,
    })
    .catch((err) => {
      console.log(err);
    });

  if (response.status !== 200 && response.status !== 201) {
    return console.log("Unable To Authenticate");
  }

  const resData = await response.data;
  return resData;
};

export const sendPostRequest = async (inputs) => {
  const res = await axios
    .post(`http://localhost:5000/posts/create`, {
      title: inputs.title,
      description: inputs.description,
      image: inputs.imageURL,
      location: inputs.location,
      date: inputs.date,
      user: localStorage.getItem("userId"),
    })
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Something Went Wrong!!");
  }

  const response = await res.data;

  return response;
};
