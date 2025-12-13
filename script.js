const search = document.getElementById("search");

search.addEventListener("keyup", () => {
  const v = search.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      card.innerText.toLowerCase().includes(v) ? "block" : "none";
  });
});