export function addPost(text, lat, lng) {
  const timeline = document.getElementById("timeline");
  const post = document.createElement("div");
  post.classList.add("timeline-post");
  post.innerHTML = `
    <p>${text}</p>
    <small>[${lat.toFixed(5)}, ${lng.toFixed(5)}]</small>
  `;
  timeline.prepend(post);
}
