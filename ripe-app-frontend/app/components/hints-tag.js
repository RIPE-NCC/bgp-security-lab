"use strict";

if (!customElements.get("hints-tag")) {
  let htTemplate = document.createElement("template");
  import("./hints-tag.html")
  .then((content) => {
    htTemplate.innerHTML = `${content.default}`
    customElements.define(
      "hints-tag",
      class extends HTMLElement {
        constructor() {
          super();
          const htClone = htTemplate.content.cloneNode(true);
          this.attachShadow({ mode: "open" }).appendChild(htClone);
        }
      }
    );
  });
}
