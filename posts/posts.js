/* Posts Page JavaScript */

"use strict";

function getPosts() {
  const apiBaseURL = "http://microbloglite.us-east-2.elasticbeanstalk.com";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${JSON.parse(window.localStorage.getItem("login-data")).token}`,
    },
  };

  fetch(apiBaseURL + "/api/posts", options)
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        // Create elements for each post
        let postDiv = document.createElement('div');
        postDiv.classList.add('post');

        // Post top section (profile image, name, time)
        let postTop = document.createElement('div');
        postTop.classList.add('post-top');

        let dpDiv = document.createElement('div');
        dpDiv.classList.add('dp');
        let profileImg = document.createElement('img');
        profileImg.src = "https://picsum.photos/200/300"; 
        profileImg.alt = "Profile Image";
        dpDiv.appendChild(profileImg);
        postTop.appendChild(dpDiv);

        let postInfoDiv = document.createElement('div');
        postInfoDiv.classList.add('post-info');
        let nameP = document.createElement('p');
        nameP.classList.add('name');
        nameP.textContent = post.username; 
        let timeSpan = document.createElement('span');
        timeSpan.classList.add('time');
        timeSpan.textContent = "12 hrs ago"; 
        postInfoDiv.appendChild(nameP);
        postInfoDiv.appendChild(timeSpan);
        postTop.appendChild(postInfoDiv);

        let ellipsisIcon = document.createElement('ion-icon');
        ellipsisIcon.setAttribute('name', 'ellipsis-vertical');
        postTop.appendChild(ellipsisIcon);

        postDiv.appendChild(postTop);

        // Post content section
        let postContentDiv = document.createElement('div');
        postContentDiv.classList.add('post-content');
        postContentDiv.textContent = post.text; 
        postDiv.appendChild(postContentDiv);

        // Post bottom section (like, comment, share)
        let postBottomDiv = document.createElement('div');
        postBottomDiv.classList.add('post-bottom');

        let actions = ['thumbs-up', 'chatbox-ellipses', 'share-social'];
        actions.forEach(action => {
          let actionDiv = document.createElement('div');
          actionDiv.classList.add('action');
          let icon = document.createElement('ion-icon');
          icon.setAttribute('name', action);
          actionDiv.appendChild(icon);
          let span = document.createElement('span');
          span.textContent = action === 'thumbs-up' ? 'Like' : action === 'chatbox-ellipses' ? 'Comment' : 'Share'; 
          actionDiv.appendChild(span);
          postBottomDiv.appendChild(actionDiv);
        });

        postDiv.appendChild(postBottomDiv);

        // Append the constructed post div 
        document.getElementById('hostDiv').appendChild(postDiv);
      });
    })
    .catch(error => console.error('Error fetching posts:', error));
}
getPosts();



//  fetch posts from api to create posts




