function vote(id, change) {
  let span = document.getElementById(id);
  let current = parseInt(span.innerText);
  span.innerText = current + change;
}
