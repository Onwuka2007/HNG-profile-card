"use strict";
var timeEl = document.getElementById("timeMs");
function updateTime() {
  timeEl.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

var avatarImg = document.getElementById("avatarImg");
var avatarUrl = document.getElementById("avatarUrl");
var useUrlBtn = document.getElementById("useUrlBtn");

useUrlBtn.addEventListener("click", function () {
  var url = avatarUrl.value.trim();
  if (!url) {
    return;
  }
  avatarImg.src = url;
  avatarImg.alt = "User avatar (from URL)";
});

var avatarFile = document.getElementById("avatarFile");
avatarFile.addEventListener("change", function (event) {
  var file = event.target.files && event.target.files[0];
  if (!file) return;

  var reader = new FileReader();
  reader.onload = function (e) {
    avatarImg.src = e.target.result;
    avatarImg.alt = "User avatar (uploaded)";
  };
  reader.readAsDataURL(file);
});