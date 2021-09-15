export function init() {
  class Header extends HTMLElement {
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
          .header{
              background-color: #FF8282;
              height: 100px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              font-size: 25px;
          }
          
          @media (min-width: 600px) {
            .header {
              background-color: #FF8282;
            }
          }`;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(style);

      var div = document.createElement("div");
      div.classList.add("header");
      div.textContent = "Header";
      shadow.appendChild(div);
    }
  }
  customElements.define("header-el", Header);
}
