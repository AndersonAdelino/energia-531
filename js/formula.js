(function (root) {
  function clamp(n) {
    n = parseInt(n, 10);
    if (isNaN(n)) return 3;
    return Math.min(5, Math.max(1, n));
  }
  function calcular(vontade, tempo, esforco) {
    var v = clamp(vontade);
    var t = clamp(tempo);
    var e = clamp(esforco);
    var resistencia = 6 - v;
    var custo = 2 * e + t + 2 * resistencia;
    var nivel = "media";
    var motivo = "";
    if (v === 1 && e >= 4) { nivel = "alta"; motivo = "Vontade 1 com esforço alto. Imposto de ativação."; }
    else if (v === 5 && e <= 2) { nivel = "baixa"; motivo = "Alta vontade e pouco esforço."; }
    else if (custo <= 11) nivel = "baixa";
    else if (custo <= 17) nivel = "media";
    else nivel = "alta";
    if (t === 5 && nivel === "baixa") {
      nivel = "media";
      motivo = "Tempo 5 não fica em Baixa. Quebre a tarefa ou trate como Média.";
    }
    return { vontade: v, tempo: t, esforco: e, resistencia: resistencia, custo: custo, nivel: nivel, motivo: motivo };
  }
  var META = {
    baixa: { label: "Baixa", badge: "Baixa", color: "green", cupo: "até 5 no dia" },
    media: { label: "Média", badge: "Média", color: "yellow", cupo: "até 3 no dia" },
    alta: { label: "Alta", badge: "Alta", color: "red", cupo: "1 no dia" }
  };
  function resolver(data) {
    if (!data) return null;
    if (data.manual && data.nivel && META[data.nivel]) {
      return { vontade: data.vontade, tempo: data.tempo, esforco: data.esforco, custo: data.custo, nivel: data.nivel, motivo: "Definido na mão", manual: true };
    }
    if (data.vontade || data.tempo || data.esforco) return calcular(data.vontade, data.tempo, data.esforco);
    if (data.nivel && META[data.nivel]) {
      return { nivel: data.nivel, custo: data.custo, motivo: "Definido na mão", manual: true };
    }
    return null;
  }
  root.Energia531 = { calcular: calcular, resolver: resolver, META: META, clamp: clamp };
})(typeof window !== "undefined" ? window : this);
