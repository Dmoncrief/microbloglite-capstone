"use strict";

window.onload = function () {
  const submitBtn = document.getElementById("sumbitBtn");
  //   console.log("working");

  // getLoginUserData();
  //   submitBtn.onclick = onClickedsubmitBtn;

  if (submitBtn) {
    console.log("working");
    submitBtn.onclick = onClickedsubmitBtn;
  } else {
    console.error("Submit btn not found");
  }
  //   submitBtn.onclick = onClickedsubmitBtn;
};

function getLoginData() {
  return JSON.parse(localStorage.getItem("loginToken"));
}

function onClickedsubmitBtn() {
  createPostForUser();
  clearPostTextBox();
}

function createPostForUser() {
  const loginToken = getLoginData();
  let bodyData = {
    text: document.getElementById("createPost").value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${loginToken.token}`,
    },
  };

  fetch(
    "https://microbloglite.us-east-2.elasticbeanstalk.com/api/post",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      if (data) {
        addPostToProfilePage(data);
        addPostToHomePage(data);
      }
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

function clearPostTextBox() {
  document.getElementById("createPost").value = "";
}

function addPostToProfilePage(post) {
  postDiv.classList.add("post");

  let postTop = document.createElement("div");
  postTop.classList.add("post-top");

  let dpDiv = document.createElement("div");
  dpDiv.classList.add("dp");
  let profileImg = document.createElement("img");
  profileImg.src = "https://picsum.photos/200/300";
  profileImg.alt = "Profile Image";
  dpDiv.appendChild(profileImg);
  postTop.appendChild(dpDiv);

  let postInfoDiv = document.createElement("div");
  postInfoDiv.classList.add("post-info");
  let nameP = document.createElement("p");
  nameP.classList.add("name");
  nameP.textContent = post.username;
  let timeSpan = document.createElement("span");
  timeSpan.classList.add("time");
  timeSpan.textContent = "Just now";
  postInfoDiv.appendChild(nameP);
  postInfoDiv.appendChild(timeSpan);
  postTop.appendChild(postInfoDiv);

  let ellipsisIcon = document.createElement("ion-icon");
  ellipsisIcon.setAttribute("name", "ellipsis-vertical");
  postTop.appendChild(ellipsisIcon);

  postDiv.appendChild(postTop);

  let postContentDiv = document.createElement("div");
  postContentDiv.classList.add("post-content");
  postContentDiv.textContent = post.text;
  postDiv.appendChild(postContentDiv);

  let postBottomDiv = document.createElement("div");
  postBottomDiv.classList.add("post-bottom");

  let actions = ["thumbs-up", "chatbox-ellipses", "share-social"];
  actions.forEach((action) => {
    let actionDiv = document.createElement("div");
    actionDiv.classList.add("action");
    let icon = document.createElement("ion-icon");
    icon.setAttribute("name", action);
    actionDiv.appendChild(icon);
    let span = document.createElement("span");
    span.textContent =
      action === "thumbs-up"
        ? "Like"
        : action === "chatbox-ellipses"
        ? "Comment"
        : "Share";
    actionDiv.appendChild(span);
    postBottomDiv.appendChild(actionDiv);
  });

  postDiv.appendChild(postBottomDiv);

  document.querySelector(".main .container .row .col").appendChild(postDiv);
}

function addPostToHomePage() {
  let postDiv = document.createElement("div");
  postDiv.classList.add("post");

  let postTop = document.createElement("div");
  postTop.classList.add("post-top");

  let dpDiv = document.createElement("div");
  dpDiv.classList.add("dp");
  let profileImg = document.createElement("img");
  profileImg.src = "https://picsum.photos/200/300";
  profileImg.alt = "Profile Image";
  dpDiv.appendChild(profileImg);
  postTop.appendChild(dpDiv);

  let postInfoDiv = document.createElement("div");
  postInfoDiv.classList.add("post-info");
  let nameP = document.createElement("p");
  nameP.classList.add("name");
  nameP.textContent = post.username;
  let timeSpan = document.createElement("span");
  timeSpan.classList.add("time");
  timeSpan.textContent = "Just now";
  postInfoDiv.appendChild(nameP);
  postInfoDiv.appendChild(timeSpan);
  postTop.appendChild(postInfoDiv);

  let ellipsisIcon = document.createElement("ion-icon");
  ellipsisIcon.setAttribute("name", "ellipsis-vertical");
  postTop.appendChild(ellipsisIcon);

  postDiv.appendChild(postTop);

  let postContentDiv = document.createElement("div");
  postContentDiv.classList.add("post-content");
  postContentDiv.textContent = post.text;
  postDiv.appendChild(postContentDiv);

  let postBottomDiv = document.createElement("div");
  postBottomDiv.classList.add("post-bottom");

  let actions = ["thumbs-up", "chatbox-ellipses", "share-social"];
  actions.forEach((action) => {
    let actionDiv = document.createElement("div");
    actionDiv.classList.add("action");
    let icon = document.createElement("ion-icon");
    icon.setAttribute("name", action);
    actionDiv.appendChild(icon);
    let span = document.createElement("span");
    span.textContent =
      action === "thumbs-up"
        ? "Like"
        : action === "chatbox-ellipses"
        ? "Comment"
        : "Share";
    actionDiv.appendChild(span);
    postBottomDiv.appendChild(actionDiv);
  });

  postDiv.appendChild(postBottomDiv);

  document.getElementById("hostDiv").appendChild(postDiv);
}
