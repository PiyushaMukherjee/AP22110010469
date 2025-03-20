// src/api/apiService.js
const BASE_URL = 'http://20.244.56.144/test';

export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  const data = await res.json();
  return data.users;
}

export async function getUserPosts(userId) {
  const res = await fetch(`${BASE_URL}/users/${userId}/posts`);
  const data = await res.json();
  return data.posts;
}

export async function getPosts() {
  const users = await getUsers();
  let allPosts = [];

  for (const userId in users) {
    const posts = await getUserPosts(userId);
    allPosts = [...allPosts, ...posts];
  }

  return allPosts.sort((a, b) => b.id - a.id); // Newest first
}

export async function getPostComments(postId) {
  const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);
  const data = await res.json();
  return data.comments;
}
