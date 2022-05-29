function photoview(img) {
  const main = document.querySelector("main");
  const template = `<div class="outter">
      <div class="photo">
        <img src="/telefonok/${img}" alt="" />
        <button onclick="close()">X</button>
      </div>
    </div>`;
  main.innerHTML = main.innerHTML + template;
}
