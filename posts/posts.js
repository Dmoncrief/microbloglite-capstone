/* Posts Page JavaScript */

"use strict";

// API endpoint URL
const apiUrl = '';

// Function to fetch posts from API
async function fetchPosts() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Function to render posts on the page
function renderPosts(posts) {
  const postContainer = document.querySelector('.middle-panel');
  postContainer.innerHTML = '';

  posts.forEach((post) => {
    const postHTML = `
      <div class="post">
        <div class="post-top">
          <div class="dp">
            <img src="${post.author.profilePicture}" alt="">
          </div>
          <div class="post-info">
            <p class="name">${post.author.name}</p>
            <span class="time">${post.createdAt}</span>
          </div>
          <i class="fas fa-ellipsis-h"></i>
        </div>

        <div class="post-content">
          ${post.content}
          ${post.image ? `<img src="${post.image}" alt="">` : ''}
        </div>

        <div class="post-bottom">
          <div class="action">
            <i class="far fa-thumbs-up"></i>
            <span>Like</span>
          </div>
          <div class="action">
            <i class="far fa-comment"></i>
            <span>Comment</span>
          </div>
          <div class="action">
            <i class="fa fa-share"></i>
            <span>Share</span>
          </div>
        </div>
      </div>
    `;

    postContainer.innerHTML += postHTML;
  });
}

// Fetch posts on page load
fetchPosts().then((posts) => {
  renderPosts(posts);
});

// Add event listener to create post button
const createPostButton = document.querySelector('.post.create input[type="text"]');
createPostButton.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const postContent = createPostButton.value.trim();
    if (postContent) {
      // Create a new post object
      const newPost = {
        content: postContent,
        author: {
          name: 'Your Name',
          profilePicture: '',
        },
      };

      // Send a POST request to the API to create a new post
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      })
      .then((response) => response.json())
      .then((data) => {
        // Add the new post to the page
        renderPosts([data]);
        createPostButton.value = '';
      })
      .catch((error) => console.error(error));
    }
  }
});
