const cargaInicial = function() {
  console.log("Archivo JS conectado con el html");
  let quien = ["the dog", "my granma", "his turtle", "my bird"];
  let accion = ["ate", "peed", "crushed", "broke"];
  let que = ["eat", "pissed", "crushed", "broked"];
  let cuando = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let arrExcusas = [quien, que, cuando];
  console.log("arreglos sin mapear:" + JSON.stringify(arrExcusas));
  arrExcusas = arrExcusas.map(arreglo => {
    let num = Math.floor(Math.random() * (arreglo.length - 1));
    console.log(num);
    return arreglo[num];
  });
  console.log("Elementos aleatorios por arreglo:" + JSON.stringify(arrExcusas));
  let excuse = arrExcusas.join(" ");
  let excuseDOM = document.getElementById("excusa");
  excuseDOM.innerText = excuse;
};

window.addEventListener("DOMContentLoaded", cargaInicial);
