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
        var r = window.Energia531.resolver(data);
        var meta = window.Energia531.META[r.nivel];
        box.className = "box " + r.nivel;
        var detalhe = r.manual
          ? "na mão"
          : "V " + r.vontade + " · T " + r.tempo + " · E " + r.esforco + " · custo " + r.custo;
        box.innerHTML = "<strong>" + meta.label + "</strong><span>" + detalhe + "</span>";
      }
      return t.sizeTo("#app");
    });
  });
})();
