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
  const response = await axios
    .post(`/user/${signUp ? "register" : "login"}/`, {
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
    .post(`/posts/create`, {
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

export const getItem = async (id) => {
  const res = await axios
    .get(`/posts/${id}`)
    // .then((data) => console.log(data))
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unable to fetch post");
  }

  const resData = await res.data;

  return resData;
};

export const updatePost = async (id, inputs) => {
  const response = await axios
    .put(`/posts/update/${id}`, {
      title: inputs.title,
      description: inputs.description,
      image: inputs.image,
      location: inputs.location,
    })
    // .then((data) => console.log(data))
    .catch((err) => console.log(err));

  if (response.status !== 200) {
    return console.log("Unable to update");
  }

  const resData = await response.data;

  return resData;
};

export const deletePost = async (id) => {
  const response = await axios
    .delete(`/posts/delete/${id}`)
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));

  if (response.status !== 200) {
    return console.log("Unable to delete");
  }

  const resData = response.data;

  return resData;
};

export const getUser = async () => {
  const response = await axios
    .get(`/user/${localStorage.getItem("userId")}`)
    // .then((data) => console.log(data))
    .catch((err) => console.log(err));

  // if (response.status !== 200) {
  //   return console.log("No User Found");
  // }

  const resData = await response.data;

  return resData;
};
