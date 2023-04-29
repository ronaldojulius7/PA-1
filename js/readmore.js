function toggleText() {
  var x = document.querySelector(".hide");
  var btn = document.querySelector("button");
  if (x.style.display === "none") {
    x.style.display = "block";
    btn.innerHTML = "Close";
  } else {
    x.style.display = "none";
    btn.innerHTML = "Read more";
  }
}
