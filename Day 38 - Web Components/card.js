const template = document.createElement('template')

template.innerHTML = `
  <style>
    .container {
      margin: 1rem 2rem;
      background: #fff;
      padding: 1rem;
      border-radius: .5rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);

      max-width: 20rem;
      width: 100%;
      height: 30rem;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .container > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .hidden {
       display: none;
    }

    #toggle-info {
      cursor: pointer;
      outline: 0;
      padding: .5rem 1rem;
      
      color: #fff;
      background: red;
      border-radius: .5rem;
      border: 1px solid red;

      transition: 200ms ease;
    }

    #toggle-info:hover {
      background: white;
      color: red;
      border-color: red;
    }
  
  </style>
  <div class="container">
    <img />
    <div>
      <h3></h3>
      <div class="data">
        <span><slot name="tags" /><span>
        <p><slot name="text" /><p>
      </div>
      <button id="toggle-info">Hide Info</button> 
    </div>
  </div>
`

class MyCard extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('title')
    this.shadowRoot.querySelector('img').src = this.getAttribute('image')

    this.showInfo = true
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('#toggle-info')
      .addEventListener('click', this.handleToggleInfo.bind(this))
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').removeEventListener()
  }

  handleToggleInfo() {
    this.showInfo = !this.showInfo

    const data = this.shadowRoot.querySelector('.data')
    const toggleBtn = this.shadowRoot.querySelector('#toggle-info')

    if (this.showInfo) {
      data.classList.remove('hidden');
      toggleBtn.innerText = "Hide Info";
    }
    else  {
      data.classList.add('hidden')
      toggleBtn.innerText = "Show Info";
    } 
  }
}

window.customElements.define('my-card', MyCard)
