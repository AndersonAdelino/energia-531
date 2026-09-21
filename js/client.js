/* global TrelloPowerUp */
(function () {
  function asset(path) {
    return new URL(path, window.location.href).href;
  }

  var ICON = asset("./icons/bolt.svg");

  function nivelDe(data) {
    if (!data) return null;
    return window.Energia531.calcular(data.vontade, data.tempo, data.esforco);
  }

  function badgeDe(resultado) {
    if (!resultado) return null;
    var meta = window.Energia531.META[resultado.nivel];
    return {
      text: meta.badge,
      color: meta.color,
      icon: ICON,
    };
  }

  TrelloPowerUp.initialize({
    "card-buttons": function (t) {
      return [
        {
          icon: ICON,
          text: "Energia 5-3-1",
          callback: function (t2) {
            return t2.popup({
              title: "Energia 5-3-1",
              url: "./calc.html",
              height: 520,
            });
          },
        },
      ];
    },
    "card-badges": function (t) {
      return t.get("card", "shared", "energia531").then(function (data) {
        var badge = badgeDe(nivelDe(data));
        return badge ? [badge] : [];
      });
    },
    "card-detail-badges": function (t) {
      return t.get("card", "shared", "energia531").then(function (data) {
        var r = nivelDe(data);
        if (!r) return [];
        var meta = window.Energia531.META[r.nivel];
        return [
          {
            title: "Energia",
            text: meta.label + " · " + r.custo,
            color: meta.color,
            callback: function (t2) {
              return t2.popup({
                title: "Energia 5-3-1",
                url: "./calc.html",
                height: 520,
              });
            },
          },
        ];
      });
    },
    "card-back-section": function (t) {
      return {
        title: "Energia 5-3-1",
        icon: ICON,
        content: {
          type: "iframe",
          url: t.signUrl("./section.html"),
          height: 86,
        },
        action: {
          text: "Calcular",
          callback: function (t2) {
            return t2.popup({
              title: "Energia 5-3-1",
              url: "./calc.html",
              height: 520,
            });
          },
        },
      };
    },
  });
})();
