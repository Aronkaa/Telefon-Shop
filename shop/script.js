function load() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "cuccok.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let items = JSON.parse(this.responseText);
      let output = "";
      for (let i in items) {
        output += `<div class="pc" onclick="photoview('${items[i].image}')"> 
            <img src="${items[i].image}" alt="" />
            <p>${items[i].name}</p>
            <p class="description">${items[i].description}</p> 
            </div>`;
      }
      document.getElementById("items-container").innerHTML = output;
    }
  };
  xhr.send();
}

load();

function photoview(img) {
  const main = document.querySelector("main");
  const template = `<div class="outter">
      <div class="photo">
        <img src="${img}" alt="" />
        <button onclick="close()">X</button>
      </div>
    </div>`;
  main.innerHTML = main.innerHTML + template;
}
