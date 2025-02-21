import { szamokOsszege } from "./main.js";
export function szamokOsszegeTeszt(n) {
  let tesztLista = [
    {
      n: 4,
      vart: 4,
      txt: "egyjegyű szám",
    },
    {
      n: 20,
      vart: 2,
      txt: "kétjegyű, az egyik 0",
    },
    {
      n: 300,
      vart: 3,
      txt: "háromjegyű, két 0",
    },
    {
      n: 4000,
      vart: 4,
      txt: "négyjegyű, három 0",
    },
    {
      n: 10000000000,
      vart: 1,
      txt: "sokjegyű, egyik 1",
    },
    {
      n: 11111111111,
      vart: 11,
      txt: "11 jegyű",
    },
    {
      n: -1534,
      vart: 13,
      txt: "negatív szám",
    },
    {
      n: 0,
      vart: 0,
      txt: "nulla",
    },
  ];

  for (let i = 0; i < tesztLista.length; i++) {
    console.log(`${tesztLista[i].txt}`);
    let kapott = szamokOsszege(tesztLista[i].n);
    
    console.assert(
        tesztLista[i].vart === kapott,
        ` n: ${tesztLista[i].n}, várt: ${tesztLista[i].vart}, kapott: ${kapott}, jó? ${tesztLista[i].vart === kapott}`
    );
  }
}
