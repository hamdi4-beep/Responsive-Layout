"use strict";

var profileContainer = document.querySelector(".img-container");
var imgWrapper = document.querySelector(".img-wrapper");
var imgs = ["https://avatars.githubusercontent.com/u/75071205?v=4", "profile.jpg", "picture1.jpg", "picture2.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPmzmAVG0xsN3m2Hys9Rb3CQJP-N12jkuvuw&usqp=CAU"];
imgs.forEach(function (img) {
  var elem = document.createElement("img");
  elem.src = img;
  imgWrapper.appendChild(elem);
});
fetch("https://api.github.com/users/hamdi4-beep").then(function (res) {
  var data = res.json();
  if (res.status !== 200) throw new Error("Couldn't fetch data from the server!");
  return data.then(function (user) {
    var username = document.createElement("h1");
    var img = document.createElement("img");
    document.querySelector(".container").appendChild(username);
    username.textContent = user.login;
    username.contentEditable = true;
    img.src = user.avatar_url;
    profileContainer.appendChild(img);
  });
})["catch"](function (err) {
  return console.log("Error message:", err.message);
});
document.querySelector(".fa-camera").addEventListener("click", function (e) {
  imgWrapper.style.display != "flex" ? imgWrapper.style.display = "flex" : imgWrapper.style.display = "none";
});
imgWrapper.addEventListener("click", function (e) {
  profileContainer.querySelector("img").src = e.target.src;
});