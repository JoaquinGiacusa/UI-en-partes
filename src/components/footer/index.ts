export function init() {
  class Footer extends HTMLElement {
    constructor() {
      // Siempre llamar primero a super en el constructor
      super();
      //this.render()
      this.render();
      // La funcionalidad del elemento se escribe aquí
    }

    render() {
      var style = document.createElement("style");
      style.textContent = `
            .footer{
              background-color: #ffa0ea;
              height: 150px;
              text-align: center;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              font-size: 30px;
            }
            @media (min-width: 600px) {
              .footer {
                background-color: blueviolet;
              }`;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(style);

      var div = document.createElement("div");
      div.classList.add("footer");
      div.textContent = "Footer";

      shadow.appendChild(div);
    }
  }
  customElements.define("footer-el", Footer);
}
