document.getElementById("toggleInfoBtn").addEventListener("click", function() {
  const details = document.getElementById("moreDetails");
  details.classList.toggle("hidden");
  this.textContent = details.classList.contains("hidden") ? "More About Me" : "Hide";
});
