// function jo image load karega
function loadImage(url, successCallback, errorCallback) {
  let img = document.createElement("img");
  img.src = url;

  img.onload = () => successCallback("Image successfully loaded!");
  img.onerror = () => errorCallback("Failed to load image!");

  document.body.appendChild(img);
}

// buttons par callback use karna
document.getElementById("loadBtn").addEventListener("click", () => {
  loadImage(
    "https://picsum.photos/300",
  // random image API
    (msg) => {
      document.getElementById("output").innerHTML = `<p style="color:green">${msg}</p>`;
    },
    (err) => {
      document.getElementById("output").innerHTML = `<p style="color:red">${err}</p>`;
    }
  );
});



