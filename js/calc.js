/* global TrelloPowerUp */
(function () {
  var t = null;
  try {
    t = window.TrelloPowerUp.iframe();
  } catch (err) {
    t = null;
  }

  var form = document.getElementById("form");
  var saveBtn = document.getElementById("salvar");
  var clearBtn = document.getElementById("limpar");

  function val(id) {
    return document.getElementById(id).value;
  }

  function setVal(id, n) {
    document.getElementById(id).value = n;
    document.getElementById(id + "-n").textContent = n;
  }

  ["vontade", "tempo", "esforco"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", function (ev) {
      document.getElementById(id + "-n").textContent = ev.target.value;
    });
  });

  function salvar(ev) {
    if (ev) ev.preventDefault();
    var r = window.Energia531.calcular(val("vontade"), val("tempo"), val("esforco"));
    if (!t) return;
    return t
      .set("card", "shared", "energia531", {
        vontade: r.vontade,
        tempo: r.tempo,
        esforco: r.esforco,
        custo: r.custo,
        nivel: r.nivel,
        manual: false,
        em: new Date().toISOString()
      })
      .then(function () {
        return t.closePopup();
      });
  }

  function salvarManual(nivel) {
    if (!t) return;
    return t
      .set("card", "shared", "energia531", {
        nivel: nivel,
        manual: true,
        em: new Date().toISOString()
      })
      .then(function () {
        return t.closePopup();
      });
  }

  document.querySelectorAll("[data-nivel]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      salvarManual(btn.getAttribute("data-nivel"));
    });
  });

  form.addEventListener("submit", salvar);

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      if (!t) {
        setVal("vontade", 3);
        setVal("tempo", 3);
        setVal("esforco", 3);
        return;
      }
      return t.remove("card", "shared", "energia531").then(function () {
        return t.closePopup();
      });
    });
  }

  function hidratar(data) {
    setVal("vontade", (data && data.vontade) || 3);
    setVal("tempo", (data && data.tempo) || 3);
    setVal("esforco", (data && data.esforco) || 3);
  }

  var colinha = document.getElementById("colinha");
  if (colinha && t && t.sizeTo) {
    colinha.addEventListener("toggle", function () {
      t.sizeTo("#app");
    });
  }

  if (t && t.render) {
    t.render(function () {
      return t
        .get("card", "shared", "energia531")
        .then(hidratar)
        .then(function () {
          return t.sizeTo("#app");
        })
        .catch(function () {
          hidratar(null);
          return t.sizeTo("#app");
        });
    });
  } else {
    hidratar(null);
    if (saveBtn) saveBtn.textContent = "Consulta local";
  }
})();
