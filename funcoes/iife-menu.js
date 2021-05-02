// function init() {
//   let isValid = false;
//   console.log("init menu", isValid);
// }
// init();

// Função Anônima e auto-invocável

(function (win, doc) {
  let isValid = false;
  console.log("menu", isValid);
  win.alert("Olá mundo!");
  function init() {
    console.log("init do menu");
  }
  init();
})(window, document);
