import { szamokOsszegeTeszt } from "./teszt.js";

export function szamokOsszege(n) {
  let z = 0;
  while (n > 0) {
    let c = n % 10;
    z = z + c;
    n = Math.floor(n / 10);
  }
  return z;
}

szamokOsszegeTeszt();
