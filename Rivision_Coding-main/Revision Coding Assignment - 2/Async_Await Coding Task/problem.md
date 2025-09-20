**Create two functions:**

fetchUser() → returns a Promise that resolves with { id: 1, name: "Jane Doe" } after 1.5 seconds.

fetchPosts(userId) → returns a Promise that resolves with an array of posts like:

[
  { postId: 101, title: "Post One" },
  { postId: 102, title: "Post Two" }
]
after 2 seconds.

Create an async function getUserAndPosts:

It should use await to first get the user.

Then, using the user’s id, fetch the posts.

Combine and return a single object with both user and posts:

{
  user: { id: 1, name: "Jane Doe" },
  posts: [ {postId:101,...}, {postId:102,...} ]
}
Handle errors using try...catch.

Log "All data fetched successfully" after everything is done.