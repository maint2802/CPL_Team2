// // // axios, fetch

const { default: axios } = require("axios");

// const { default: axios } = require("axios");

// // // https: GET, POST, DELELE, PUT, PATCH
// // const tbody = document.querySelector("tbody");
// // const btn = document.querySelector("button");

// // function renderComments(data) {
// //   let html = "";
// //   data.forEach((comment, index) => {
// //     html += `  <tr>
// //                   <td>${index + 1}</td>
// //                   <td>${comment.id}</td>
// //                   <td>${comment.text}</td>
// //                   <td>${comment.postId}</td>
// //                 </tr>`;
// //   });
// //   tbody.innerHTML = html;
// // }

// // // get list comments
// // function getComments() {
// //   axios.get("http://localhost:3000/comments").then((res) => {
// //     console.log(res.data);
// //     renderComments(res.data);
// //   });
// // }

// // getComments();

// // // add new comment
// // btn.addEventListener("click", function () {
// //   const comment = {
// //     text: "comment example",
// //     postId: "3",
// //   };
// //   axios.post("http://localhost:3000/comments", comment).then((res) => {
// //     console.log(res);
// //     getComments();
// //   });
// // });

// // callback, promise, async await

// // const promise = new Promise((resolve, reject) => {
// //   // resolve(10);
// //   reject("err x");
// // });

// // const asyncFunc = async () => {
// //   try {
// //     const res = await promise;
// //     console.log(res);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };

// // asyncFunc();

// const USERS_API = "https://jsonplaceholder.typicode.com/users";

// // fetch vs axios
// fetch(USERS_API)
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   });

// async function getUsers() {
//   try {
//     const res = await fetch(USERS_API);
//     const users = await res.json();
//     console.log(users);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getUsers();

// axios.get(USERS_API).then((res) => {
//   console.log(res.data);
// });

// async function getUsersAxios() {
//   try {
//     const res = await axios.get(USERS_API);
//     console.log(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getUsersAxios();

// json server

const base_api = "http://localhost:3000/comments";

axios.get(base_api).then((res) => {
  console.log(res.data);
});

// axios.get(base_api + "/" + 2).then((res) => {
//   console.log(res.data);
// });

// // comments postId = 2
// axios.get(base_api + `?postId=2`).then((res) => {
//   console.log(res.data);
// });

const newComment = {
  text: "a comment about post 7",
  postId: "5",
};

const addBtn = document.querySelector(".add_btn");
console.log(addBtn);

addBtn.addEventListener("click", function () {
  axios.post(base_api, newComment).then((res) => {
    console.log(res);
  });
});

const comment = {
  id: "2",
  text: "another comment about post 1",
  postId: "2",
};

axios.patch(base_api, { postId: "3" }).then((res) => {});

axios.delete(base_api + "/" + 3);
