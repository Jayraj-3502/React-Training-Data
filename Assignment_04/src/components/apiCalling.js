// import { useState } from "react";

// export async function gettingProductsData() {
//   const responce = await fetch("http://localhost:3000/products");
//   const gettedData = await responce.json();
//   console.log(gettedData);

//   return gettedData;
// }

// let auth = false;

// export function setAuthentication() {
//   auth = true;
//   localStorage.setItem(
//     "userAuthData",
//     JSON.stringify([
//       {
//         name: "jairaj",
//         password: "asdfghjkl",
//       },
//     ])
//   );
// }

// export function checkAuthentication() {
//   const gettingData = localStorage.getItem("userAuthData");
//   auth = JSON.parse(gettingData);
//   return auth;
// }

// export function loggingOut() {
//   auth = false;
//   const gettingData = localStorage.getItem("userAuthData");
//   auth = JSON.parse(gettingData);
// }
