// const initialPosts = [
//     { content: "Hello, world!", author: "John Doe", timestamp: "2 hours ago" },
//     { content: "This is a sample post.", author: "Jane Smith", timestamp: "1 hour ago" }
// ];

// // Function to display posts
// function displayPosts(posts) {
//     const postsContainer = document.getElementById('postsContainer');
//     postsContainer.innerHTML = '';

//     posts.forEach(post => {
//         const postElement = document.createElement('div');
//         postElement.classList.add('post');

//         const contentElement = document.createElement('div');
//         contentElement.classList.add('content');
//         contentElement.textContent = post.content;

//         const authorElement = document.createElement('div');
//         authorElement.classList.add('author');
//         authorElement.textContent = `Posted by ${post.author}`;

//         const timestampElement = document.createElement('div');
//         timestampElement.classList.add('timestamp');
//         timestampElement.textContent = post.timestamp;

//         postElement.appendChild(contentElement);
//         postElement.appendChild(authorElement);
//         postElement.appendChild(timestampElement);

//         postsContainer.appendChild(postElement);
//     });
// }

// // Function to handle form submission and add new post
// document.getElementById('postForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const postContent = document.getElementById('postContent').value;
//     const newPost = {
//         content: postContent,
//         author: "Anonymous", // Replace with actual user's name or username
//         timestamp: new Date().toLocaleString()
//     };

//     // Add new post to the beginning of the array (simulating new post prepended)
//     initialPosts.unshift(newPost);

//     // Clear input field
//     document.getElementById('postContent').value = '';

//     // Display posts including the new one
//     displayPosts(initialPosts);
// });

// // Initial display of posts
// displayPosts(initialPosts);