/* global TrelloPowerUp */
(function () {
  var t = window.TrelloPowerUp.iframe();

  t.render(function () {
    return t.get("card", "shared", "energia531").then(function (data) {
      var box = document.getElementById("box");
      if (!data) {
        box.className = "box vazia";
        box.innerHTML = "Ainda sem nota. Abra Calcular no card.";
      } else {
        var r = window.Energia531.calcular(data.vontade, data.tempo, data.esforco);
        var meta = window.Energia531.META[r.nivel];
        box.className = "box " + r.nivel;
        box.innerHTML =
          "<strong>" +
          meta.label +
          "</strong>" +
          "<span>V " +
          r.vontade +
          " · T " +
          r.tempo +
          " · E " +
          r.esforco +
          " · custo " +
          r.custo +
          "</span>";
      }
      return t.sizeTo("#app");
    });
  });
})();
