import AddToCart from "src/plugin/add-to-cart/add-to-cart.plugin";
import DomAccess from "src/helper/dom-access.helper";

export default class LoadingButtonPlugin extends AddToCart {
  init() {
    super.init();
    this.cartButton = DomAccess.querySelector(this.el, ".btn-buy");
    this.buttonNormalState = this.cartButton.innerHTML;
    this.loadingStateCaption = this.options.loadingButtonConfig || "Wird in den Warenkorb gelegt";
  }

  /**
     * @override
     * 
     * @param {string} requestUrl
     * @param {{}|FormData} formData
     * @private
     */

  _openOffCanvasCarts(requestUrl, formData) {

    this.cartButton.classList.add("btn-loading");
    this.cartButton.innerHTML = `<div class="loader"></div><span></span>`;
    
    // Using the textContent here to prevent malicious HTML from the config being rendered 
    DomAccess.querySelector(this.cartButton, "span").textContent = this.loadingStateCaption;


    setTimeout(() => {
      this.cartButton.classList.remove("btn-loading");
      this.cartButton.innerHTML = this.buttonNormalState;
      super._openOffCanvasCarts(requestUrl, formData);
    }, 1000);
  }

}
