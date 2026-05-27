import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";
Plot.plot({
  marks: [
    Plot.frame(),
    Plot.text(["Hello, world!"], {frameAnchor: "middle"})
  ]
})