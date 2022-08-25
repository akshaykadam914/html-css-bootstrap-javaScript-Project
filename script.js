var btn = document.getElementById("popupwindows");

btn.addEventListener("click", function () {
  window.open(
    "http://127.0.0.1:5501/index2.html",
    "popupwindow",
    "width=500, height=300,top=100,left=300, menubar=yes,"
  );
});
