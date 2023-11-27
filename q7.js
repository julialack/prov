async function postData(
  url = "https://jsonplaceholder.typicode.com/posts",
  data = [
    data.forEach((post) => {
      if (post.userId === 1) {
        const postDiv = document.createElement("div");
        postDiv.className = "post";

        const title = document.createElement("h3");
        title.textContent = post.title;
        postDiv.appendChild(title);

        const body = document.createElement("p");
        body.textContent = post.body;
        postDiv.appendChild(body);

        posts.appendChild(postDiv);
        console.log(data);
      }
    }),
  ]
) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.json();
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      if (postData) {
        const postDiv = document.createElement("div");
        postDiv.className = "post";

        const title = document.createElement("h3");
        title.textContent = post.title;
        postDiv.appendChild(title);

        const body = document.createElement("p");
        body.textContent = post.body;
        postDiv.appendChild(body);

        posts.appendChild(postDiv);
      }
    });
  });

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((comment) => {
      if (comment.postId) {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";

        const name = document.createElement("h3");
        name.textContent = comment.name;
        commentDiv.appendChild(name);

        const body = document.createElement("p");
        body.textContent = comment.body;
        commentDiv.appendChild(body);

        posts.appendChild(commentDiv);
      }
    });
  });
console.log(posts);
console.log(comments);
console.log(postsWithComments);
