// function init() {
//   let isValid = true;
//   console.log("init modal", isValid);
// }
// init();

// Função anônima e auto-invocável
;(function () {
  let isValid = true
  console.log('modal', isValid)

  function init() {
    console.log('init do modal')
  }
  init()
})()
