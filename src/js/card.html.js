class Card extends HTMLElement {

  constructor() {
    super();

    this.shadow = this.createShadowRoot();
    this._complete = 0;
  }

  get complete() {
    return this._complete;
  }

  set complete(val) {
    this.setAttribute('complete', val);
  }

  static get observedAttributes() {
    return [ 'complete' ];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    var innerBar = this.shadow.querySelector('.progress-bar-inner');

    switch(name) {
      case 'complete':
        this._complete = parseInt(newVal, 10) || 0;

        innerBar.style.width = this.complete + '%';
        innerBar.innerHTML = this.complete + '%';
    }
  }

  connectedCallback() {
    var template = `
      <style>
        
      </style>
      <div class="card">
        <div class="card__header">
          <h2>Global Business Intelligence Analyst</h2>
          <p>Billerica, Massachusetts</p>
          <p>Posted Jun 20, 2017</p>
          <p>#5871</p>
        </div>
        <div class="card__stats medals">
          <div class="medal gold">36</div>
          <div class="medal silver">122</div>
          <div class="medal bronze">421</div>
        </div>
        <div class="card__stats outreach in-progress">
          <h4>47</h4>
          <p>in Outreach</p>
        </div>
        <div class="card__stats applicants">
          <h4>45</h4>
          <p>applicants</p>
        </div>
      </div>
    `;

    this.shadow.innerHTML = template;
  }

}

window.customElements.define('progress-bar', ProgressBar);