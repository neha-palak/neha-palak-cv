function vote(id, type) {
  const votedKey = id + "_voted";
  const likeKey = id + "_likes";
  const dislikeKey = id + "_dislikes";

  // Prevent multiple votes
  if (localStorage.getItem(votedKey)) {
    alert("You have already voted on this submission.");
    return;
  }

  // Get current counts
  let likes = parseInt(localStorage.getItem(likeKey)) || 0;
  let dislikes = parseInt(localStorage.getItem(dislikeKey)) || 0;

  // Update based on vote type
  if (type === "like") {
    likes++;
    localStorage.setItem(likeKey, likes);
  } else if (type === "dislike") {
    dislikes++;
    localStorage.setItem(dislikeKey, dislikes);
  }

  // Mark as voted
  localStorage.setItem(votedKey, "true");

  // Update UI
  document.getElementById(id + "_like").innerText = likes;
  document.getElementById(id + "_dislike").innerText = dislikes;
}


window.onload = function () {
  const ids = ["p1", "p2", "p3"]; // add more later

  ids.forEach(id => {
    const likes = localStorage.getItem(id + "_likes") || 0;
    const dislikes = localStorage.getItem(id + "_dislikes") || 0;

    document.getElementById(id + "_like").innerText = likes;
    document.getElementById(id + "_dislike").innerText = dislikes;
  });
};
