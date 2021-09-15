export function init() {
  class Form extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var style = document.createElement("style");
      style.textContent = `.div{
      background-color: #E5E5E5;
      height: 200px;
      padding: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

  }
  .label{
    font-size: 20px;
  }

  .input{
  height: 40px;
  border: 3px solid;
  border-radius: 7px
  }

  .button{
    height: 40px;
    width: 180px;
    font-size: 20px;
    margin: 0 auto;

  }
    `;
      shadow.appendChild(style);

      const label = document.createElement("label");
      label.classList.add("label");
      label.setAttribute("Name", "for");
      label.innerHTML = "Nombre";

      const button = document.createElement("button");
      button.textContent = "Button";
      button.classList.add("button");

      const input = document.createElement("input");
      input.setAttribute("Name", "name");
      input.classList.add("input");
      const div = document.createElement("div");
      div.classList.add("div");
      div.appendChild(label);
      div.appendChild(input);
      shadow.appendChild(div);
      div.appendChild(button);
    }
  }

  customElements.define("form-el", Form);
}
