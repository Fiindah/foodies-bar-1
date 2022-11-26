class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        * {
           padding: 0;
           margin: 0;
           box-sizing: border-box;
        }
        
        h5 {
          font-style: italic;
          padding-top: 8px;
        }
        h4 {
          padding-bottom: 8px;
        }
        
        :host {
           display: block;
           font-family: Raleway;
           width: 100%;
           background-color: rgb(247, 167, 108);
           color: white;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           text-align: center;
        }
        </style>
        <h5>Recipe</h5>
        <h1>Foodies Bar</h1>
        <h4>Have A Good Meal!</h4>`;
  }
}

customElements.define("nav-bar", NavBar);